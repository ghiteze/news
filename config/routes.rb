Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  
  namespace :admin do

    get 'login', to: 'sessions#new', as: 'login'
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy', as: 'logout'

    resources :articles, except: :show
    get 'articles/page/:page', to: 'articles#index', as: 'article_page'

    resources :galleries
    resources :categories, except: :show
    resources :slides

    resources :logs, param: :username, only: [:index, :show]
    resources :passwords, param: :username, only: :update
    resources :users

    # settings
    get 'settings', to: 'users#edit'

    patch 'edit_user', to: 'users#update'

    root 'dashboard#index'
  end

  resources :galleries, only: :index

  get 'articles/:page', to: 'articles#index', as: 'articles'

  get 'category/:category', to: 'categories#show', as: 'category'
  get ':slug', to: 'articles#show', as: 'article'

  root 'welcome#index'

end
