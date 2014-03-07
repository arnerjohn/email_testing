class VendorContact < ActiveRecord::Base
  attr_accessible :address_1, :address_2, :email, :message, :name, :phone, :vendor_code, :vendor_id
  
  belongs_to :vendor
end