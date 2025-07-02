Rails.application.routes.draw do
  resources :landlords, only: [:show, :edit, :update, :new, :create] do
    resources :messages, only: [:index, :new, :create]
  end

  resources :users, only: [:index, :create, :show, :edit, :update, :destroy] do
    resources :messages, only: [:index, :new, :create]
  end

  resources :properties do
    resources :rooms
    resources :messages, only: [:index, :new, :create]
  end

  # Session routes
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :properties do
    resources :rooms do
      # Add a custom route for paying deposit
      member do
        post 'pay_deposit'
      end
    end
  end

  # Login route for landlords
  post '/landlords/login', to: 'landlords#process_login'
  get '/landlords/logout', to: 'sessions#destroy_landlord'
end
