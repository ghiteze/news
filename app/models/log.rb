class Log < ActiveRecord::Base
  belongs_to :admin
  belongs_to :article
end
