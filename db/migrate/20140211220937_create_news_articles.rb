class CreateNewsArticles < ActiveRecord::Migration
  def change
    create_table :news_articles do |t|
    	t.string :link
    	t.string :title
    	t.string :author
    	t.string :picture
      	t.timestamps
    end
  end
end
