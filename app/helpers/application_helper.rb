module ApplicationHelper

  def message (resource)
    if resource.errors.full_messages.any?
      content_tag :ul, class: "message error" do
        resource.errors.full_messages.each do |error|
          concat(content_tag :li, error)
        end
      end
    end
  end

  def get_category (parent, name)
    categories = Category.where(parent: parent)
    if categories.present?
      cat = categories.map{ |category|
        content_tag :li do
          content_tag(:input, nil, type: "radio", name: name, value: category.id) +
          content_tag(:label, category.name) + get_category(category.id, name)
        end
        
      }.join

      html = <<-HTML
        <ul class="categories">#{cat}</ul>
      HTML

      html.html_safe
    end
  end

  def category (parent = 0)
    @categories = Category.where(parent: parent)
    if @categories.present?
      cat = @categories.map{ |cat|
        content_tag(:li, content_tag(:a, cat.name, href: "/category/#{cat.slug}") + category(cat.id))}.join
      html = <<-HTML
        <ul>#{cat}</ul>
      HTML
      html.html_safe
    end
  end

  def menu
    category.insert(12, content_tag(:li, content_tag(:a, "Trang chủ", href: "/")))
            .insert(11, ' class="side-nav-collapse" id="side-nav"')
            .insert(452, content_tag(:li, content_tag(:a, "Thư viện ảnh", href: "/galleries"), class: "hide-on-pc-and-up"))
  end

end
