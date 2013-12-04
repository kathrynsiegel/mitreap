class PlacesController < ApplicationController
	def index
	end

	def show
		@place = Place.find(params[:id])
		num_people = @place.individuals.length
		@colors = ['red', 'light-blue', 'pink']
		flash[:alert] = 'Note: This page is in beta. Data collection in process.'
	end
end
