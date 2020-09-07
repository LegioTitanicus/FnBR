class Api::V1::SubmissionsController < ApplicationController
    def create
        @submission = Submission.new(submission_params)
        @submission.user_id = current_user.id

        if @submission.save!
            render json: {notice: "Code translation submitted successfully!"} #  
        else
            render json: {notice: "Error: unable to process submission"} # 
        end
    end
    
    def index
        rand_record = Submission.all.sample
        # binding.pry
        render json: rand_record
        # user_subs = current_user.submissions
        # render json: user_subs
    end 

    def show
        rand_record = Submission.all.sample
        binding.pry
        render json: rand_record
    end

    def update
        submission = Submission.find(params[:id])
        submission.language = params["language"]
        submission.translation = params["translation"]
        submission.codeBlock = params["codeBlock"]
        submission.save

        render json: submission
    end

    def destroy
        submission = Submission.find(params[:id])
        submission.delete

        render json: current_user.submissions
    end


    def submission_params
        params.require(:submission).permit(:language, :codeBlock, :translation)
    end
end