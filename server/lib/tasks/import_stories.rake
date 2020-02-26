require 'net/http'
require 'json'
require 'open-uri'
require 'nokogiri'

namespace :hn do
  desc 'import latest posts from hackernews'
  task :import_stories => :environment do
    # Fetch newest 500 stories
    fetch_newest_story_ids.each do |id|
      import_story(id)
    end

    exit(0) if is_finished

    oldest_id = Story.last.id
    
    while Story.count < 2000
      oldest_id -= 1
      unless Story.exists?(oldest_id)
        import_story(oldest_id)
      end
    end
  end
end

def import_story(id)
  if Story.exists?(id)
    puts "Already have story: #{id}"
    return
  end

  item = request("https://hacker-news.firebaseio.com/v0/item/#{id}.json?print=pretty")
  return unless item && item["type"] == "story"

  story = save_story(item)
  save_story_image(story)
  puts "Story #{id} added, total count: #{Story.count}"
end

def is_finished
  remaining = 1000 - Story.count
  finished = remaining <= 0
  
  if finished
    puts "Already have #{Story.count} stories persisted. Exiting."
  end
  
  puts "#{remaining} stories remaining, walking through from last id: #{Story.last.id}"

  finished
end

def fetch_newest_story_ids
  url = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
  request(url)
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
