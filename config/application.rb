require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module HouseHunt
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    
  # config/initializers/session_store.rb

Rails.application.config.session_store :cookie_store, key: '_househunt_session'




    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:4000' # Replace with the origin(s) of your frontend application
        resource '*', headers: :any, methods: [:get, :post, :put, :patch, :create, :delete, :options, :head]
      end
    end

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
