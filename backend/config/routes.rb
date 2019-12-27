Rails.application.routes.draw do
  resources :high_scores
  resources :levels
  resources :tiles
  resources :games
  resources :players
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/test', to: 'application#test'

end
