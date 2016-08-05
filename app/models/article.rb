class Article < ActiveRecord::Base
  belongs_to :category
  has_many :articles_tags
  has_many :tags, through: :articles_tags
  has_many :images, :as => :viewable

  attr_accessor :_tags
  after_save :save_article_tags

  validates :title, :slug, :summary, :content, :category_id, :_tags, presence: true

  def save_article_tags
    @tags = _tags.downcase.split(",")

    if self.tags.present? # edit article
      self.tags.each do |tag|
        self.articles_tags.find_by_tag_id(tag.id).destroy unless @tags.include? tag.name
      end
      @tags.each do |tag|
        self.tags << Tag.find_or_create(tag) unless self.tags.where(name: tag).present?
      end
    else # new article
      #@tags.each do |tag|
        #self.tags << Tag.find_or_create(tag)
      #end
      self.tags = @tags.map { |tag| Tag.find_or_create(tag) }
    end
  end

  def all_tags
    @tags = []
    tags.each{ |tag| @tags << tag.name }
    @tags
  end

  def self.paging(page)
    articles = order(created_at: :desc).includes(:category)
    total_article = articles.count
    per_page = 10
    total_page = total_article / per_page
    total_page = (total_article % per_page > 0) ? (total_page + 1) : total_page
    current_page = (page) ? page.to_i : 1
    {
      'data' => articles.limit(per_page).offset(per_page * (current_page - 1)),
      'total_page' => total_page,
      'current_page' => current_page
    }
  end

  def cat
    category
  end

  def time
    created_at.strftime("%d/%m%Y")
  end

  def image_src(style = :medium)
    images.first.attachment.url(style)
  end

  # Logs
  def article_log(action, current_admin)
    current_admin.logs.create(content: "<p><i class=\"#{action}\">#{action}</i> article | <a href=\"/#{self.slug}\" target=\"_blank\">#{self.title}</a></p>")
  end

end
