Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'players#home'
  get '/lineups/last', to: 'lineups#last'


  resources :players, only: [:index, :show]
  resources :lineups, only: [:index, :create]

  get '/games', to: 'games#index'
  get '/players/search/:position', to: 'players#search'

  get '/games/today', to: 'games#today'

end
