class NewsArticlesController < ApplicationController
	def index
		@articles = NewsArticle.all
	end
end
