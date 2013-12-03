class StaticPagesController < ApplicationController
	def contact
	end

	def advantage
	end

	def apply
		@app = App.new
	end

	def create_app
		app = App.new(application_params)
		if app.save
			flash[:notice] = 'Thank you for submitting your app!'
		else
			flash[:alert] = "We're sorry, something went wrong."
		end
		redirect_to '/'
	end

	private

	def application_params
		params.permit(:app)
	end
end
