Rails.application.routes.draw do
  resources :journals
  resources :users, only: %i[create index]

  # get '/users/:id/journals', to: 'users#journals'

  get '/me', to: 'users#show'

  get '/gratitude_space', to: 'journals#gratitude_space'

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
