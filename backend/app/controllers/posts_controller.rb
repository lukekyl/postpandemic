class PostsController < ApplicationController

    def index
        posts = Post.all
        render json: posts
    end

    def show

    end

    def create
        puts params
        vote = 0
        date = Time.now
        date.strftime("%B %d, %Y")
        # date = '2020, 5, 31'

        post = Post.create(title: params[:post][:title], message: params[:post][:message], image: params[:post][:image], date: date, vote: vote)
        if post.save
            render json: post
        else
            render json: {message: 'Error! Post Could Not Be Saved.'}
        end
    end

    def update

    end

end
