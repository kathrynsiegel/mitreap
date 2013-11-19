Mitreap::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root to: 'places#index'
  get '/contact', to: "static_pages#contact"
  get '/advantage', to: "static_pages#advantage"
  resources :places, only: [:index, :show]
  resources :news_articles, only: [:index]
end
