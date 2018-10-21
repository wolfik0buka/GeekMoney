module Api::V1
  
  class UsersController < ApplicationController

    def index
      @users = User.all.pluck(:email)
      render json: @users
    end

  end

end