import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact' | 'featured';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'default' }) => {
  if (variant === 'compact') {
    return (
      <div className="group">
        <Link to={`/blog/${article.slug}`} className="flex items-start space-x-4">
          <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md">
            <img 
              src={article.featuredImage} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
              {article.title}
            </h3>
            <p className="mt-1 text-xs text-gray-500 flex items-center">
              <Calendar size={12} className="mr-1" />
              {new Date(article.publishedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </Link>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="group relative h-[500px] overflow-hidden rounded-xl">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        
        {/* Background image */}
        <img 
          src={article.featuredImage} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
            {article.category.name}
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <Link to={`/blog/${article.slug}`} className="hover:underline">
              {article.title}
            </Link>
          </h2>
          
          <p className="text-gray-200 line-clamp-2 mb-4">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <div className="text-white font-medium">
                  {article.author.name}
                </div>
                <div className="text-gray-300 text-sm">
                  {article.author.title}
                </div>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300 text-sm">
              <div className="flex items-center mr-3">
                <Calendar size={14} className="mr-1" />
                {new Date(article.publishedDate).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {article.readingTime} min read
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/blog/${article.slug}`} className="block">
        <div className="h-48 overflow-hidden">
          <img 
            src={article.featuredImage} 
            alt={article.title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
            {article.category.name}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock size={14} className="mr-1" />
            {article.readingTime} min read
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <img 
              src={article.author.avatar} 
              alt={article.author.name} 
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <span className="text-sm font-medium text-gray-700">
              {article.author.name}
            </span>
          </div>
          
          <span className="text-sm text-gray-500">
            {new Date(article.publishedDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;