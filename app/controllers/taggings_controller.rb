class TaggingsController < ApplicationController
  def create
    @photo = Photo.find(params[:photo_id])
    @photo.taggings.build(params[:user_id])
    if @photo.save
      respond_to do |format|
        format.json { render json: @photo }
      end
    else
      flash[:errors] = "COULD NOT SAVE TAG"
      respond_to do |format|
        format.json { render json: @photo }
      end
    end
  end

  def index
    @photo = Photo.find(params[:photo_id])
    @tags = @photo.tags

    respond_to do |format|
      format.json { render json: @tags }
    end
  end

  def destroy
    @tag = Tagging.find(params[:id])
    @tag.destroy
    @photo = Photo.find(params[:photo_id])
    respond_to do |format|
      format.json { render json: @photo }
    end
  end
end