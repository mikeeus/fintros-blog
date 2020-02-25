require 'net/http'
require 'json'
require 'open-uri'
require 'nokogiri'

namespace :hn do
  desc 'import latest posts from hackernews'
  task :import_items => :environment do
    # Fetch newest 500 stories
    fetch_newest_story_ids.each do |id|
      unless Story.exists?(id)
        fetch_item(id)
        puts "Stories: #{Story.count}"
      end
    end

    # Walk through items from last story
    latest_id = Story.last.id

    while Story.count < 1000
      latest_id -= 1
      unless Story.exists?(latest_id)
        fetch_item(latest_id)
        puts "Stories: #{Story.count}"
      end
    end
  end
end

def fetch_newest_story_ids
  url = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
  request(url)
end

def fetch_item(id)
  item = request("https://hacker-news.firebaseio.com/v0/item/#{id}.json?print=pretty")
  return unless item && item["type"] == "story"

  story = save_story(item)
  save_story_image(story)
end

def save_story(item)
  Story.create!(
    id: item["id"],
    title: item["title"],
    text: item["text"],
    type: item["type"],
    by: item["by"],
    time: item["time"],
    parent: item["parent"],
    poll: item["poll"],
    kids:  item["kids"],
    url: item["url"],
    score: item["score"],
    parts:  item["parts"],
    dead: item["dead"],
    deleted:  item["deleted"],
  )
end

def save_story_image(story)
  return if story.url.nil?

  begin
    page = Nokogiri::HTML(open(story.url))
    meta = page.css('meta[property="og:image"]').first
    image_url = meta && meta['content']
    
    return if image_url.nil?
    
    image = open(image_url)
    story.image.attach(
      io: image,
      filename: story.id.to_s,
      content_type: image.content_type
    )
  rescue
    puts "Error requesting image for story: #{story.id} #{story.title}"
  end
end

def request(url)
  uri = URI(url)
  response = Net::HTTP.get(uri)
  JSON.parse(response)
end
