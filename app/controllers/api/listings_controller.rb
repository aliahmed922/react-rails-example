module Api
  class ListingsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_listing, only: [:show]

    def index
      @listings = current_user.listings.search(params)
      json! :ok, data: @listings.as_json
    end

    def show
      json! :ok, data: @listing.as_json
    end

    private

    def set_listing
      @listing = current_user.listings.find(params[:id])
    end
  end
end