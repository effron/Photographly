class PhotosController < ApplicationController

  def index
    @photos = current_user.photos

    respond_to do |format|
      format.json { render json: @photos }
      format.html { render :index }
    end
  end

  def show
    @photo = Photo.find(params[:id])

    respond_to do |format|
      format.json { render json: @photo }
    end
  end

  def create
    current_user.photos.build(file_path: params[:file_path])

    respond_to do |format|
      format.json { render json: @photo }
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy

    respond_to do |format|
      format.json {render json: @photo }
    end
  end

end
