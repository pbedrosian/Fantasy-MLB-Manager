Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'players#home'

  resources :players, only: [:index, :show]
  resources :lineups

  get '/games', to: 'games#index'
  get '/players/search/:position', to: 'players#search'


end
