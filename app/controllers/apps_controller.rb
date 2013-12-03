class AppsController < ApplicationController
	def create
		app = App.new
		if app.save
			redirect_to '/'
		end
	end
end
