class HomepagesController < ApplicationController
  # force_ssl if: :in_production?, only: :landing
  
  def landing
    @access_request = AccessRequest.new
    @reminder = Reminder.new
    @contact_form = ContactForm.new
    @engaged_contact = EngagedContact.new
  end

  def first_test_landing
    @access_request = AccessRequest.new
    @reminder = Reminder.new
    @contact_form = ContactForm.new
    # @engaged_contact = EngagedContact.new
  end

  def second_test_landing
    
  end

  def third_test_landing
    
  end

  
  def in_production?
    Rails.env.production?
  end
end
