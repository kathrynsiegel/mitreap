class ContactMailer < ActionMailer::Base
  	default from: 'notifications@reap.mit.edu'
 
	def contact_email(first_name, last_name, email, body)
		@name = first_name + ' ' + last_name
		@email = email
		@body = body
	    mail(to: 'reap@mit.edu', subject: 'REAP')
	end
end
