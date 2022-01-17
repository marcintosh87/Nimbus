Rails.application.routes.draw do
  resources :journals
  resources :users

  get '/users/:id/journals', to: 'users#journals'

  get '/gratitude_space', to: 'journals#gratitude_space'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
