import React from 'react';
import { Article } from '../../types';
import ArticleCard from './ArticleCard';
import NewsletterSignup from '../common/NewsletterSignup';

interface RecentPostsSidebarProps {
  recentArticles: Article[];
}

const RecentPostsSidebar: React.FC<RecentPostsSidebarProps> = ({ recentArticles }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentArticles.map((article) => (
            <ArticleCard 
              key={article.id} 
              article={article} 
              variant="compact" 
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4 pb-2 border-b border-gray-200">
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {Array.from(
            new Set(
              recentArticles.flatMap((article) => article.tags)
            )
          ).map((tag) => (
            <span 
              key={tag} 
              className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded hover:bg-gray-200 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <NewsletterSignup />
    </div>
  );
};

export default RecentPostsSidebar;