module Api
  class Api::StoriesController < ApplicationController
    def index
      @stories = Story.all.order(id: :desc).limit(params[:page_length] || 30)

      if params[:last]
        @stories = @stories.where('id < ?', params[:last])
      end

      render json: @stories
    end
  end
end
