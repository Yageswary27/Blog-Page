import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Clock, Calendar, ChevronLeft, Share2, Bookmark, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { Article } from '../../types';

interface ArticleDetailProps {
  articles: Article[];
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ articles }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = articles.find((article) => article.slug === slug);
  
  useEffect(() => {
    if (!article) {
      navigate('/blog', { replace: true });
    }
    // Scroll to top when article loads
    window.scrollTo(0, 0);
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  // Get related articles (same category, excluding current article)
  const relatedArticles = articles
    .filter((a) => a.category.id === article.category.id && a.id !== article.id)
    .slice(0, 2);

  return (
    <article className="bg-white">
      {/* Hero section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
        
        {/* Background image */}
        <img 
          src={article.featuredImage} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 py-10 z-20">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Link 
                to={`/blog/category/${article.category.slug}`} 
                className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
              >
                {article.category.name}
              </Link>
              {article.tags.map((tag) => (
                <Link 
                  key={tag} 
                  to={`/blog/tag/${tag.toLowerCase()}`}
                  className="bg-white bg-opacity-20 text-white text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {article.title}
            </h1>
            
            <div className="flex items-center text-white">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div className="mr-6">
                <div className="font-medium">
                  {article.author.name}
                </div>
                <div className="text-gray-300 text-sm">
                  {article.author.title}
                </div>
              </div>
              
              <div className="flex items-center text-gray-300 text-sm">
                <div className="flex items-center mr-4">
                  <Calendar size={14} className="mr-1" />
                  {new Date(article.publishedDate).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'long', 
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
      </div>
      
      {/* Article content */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Social sharing sidebar */}
          <div className="hidden lg:block lg:w-16 h-fit sticky top-24 self-start">
            <div className="flex flex-col space-y-4 items-center">
              <Link 
                to="/blog" 
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                title="Back to all articles"
              >
                <ChevronLeft size={20} />
              </Link>
              
              <div className="w-px h-8 bg-gray-200"></div>
              
              <button 
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                title="Share on Facebook"
              >
                <Facebook size={20} />
              </button>
              
              <button 
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                title="Share on Twitter"
              >
                <Twitter size={20} />
              </button>
              
              <button 
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin size={20} />
              </button>
              
              <button 
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                title="Copy link"
              >
                <Copy size={20} />
              </button>
              
              <div className="w-px h-8 bg-gray-200"></div>
              
              <button 
                className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                title="Save article"
              >
                <Bookmark size={20} />
              </button>
            </div>
          </div>
          
          {/* Main content */}
          <div className="lg:flex-1 max-w-3xl mx-auto">
            {/* Mobile back link */}
            <div className="lg:hidden mb-6">
              <Link 
                to="/blog" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ChevronLeft size={20} className="mr-1" />
                Back to all articles
              </Link>
            </div>
            
            {/* Article content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Mobile sharing options */}
            <div className="mt-8 pt-6 border-t border-gray-200 lg:hidden">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-700 flex items-center">
                  <Share2 size={18} className="mr-2" />
                  Share this article
                </span>
                <div className="flex space-x-2">
                  <button 
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Share on Facebook"
                  >
                    <Facebook size={18} />
                  </button>
                  
                  <button 
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Share on Twitter"
                  >
                    <Twitter size={18} />
                  </button>
                  
                  <button 
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Share on LinkedIn"
                  >
                    <Linkedin size={18} />
                  </button>
                  
                  <button 
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                    title="Copy link"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Author card */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center space-x-4">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">{article.author.name}</h3>
                  <p className="text-gray-600">{article.author.title}</p>
                </div>
              </div>
            </div>
            
            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedArticles.map((relatedArticle) => (
                    <div key={relatedArticle.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                      <Link to={`/blog/${relatedArticle.slug}`} className="block">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={relatedArticle.featuredImage} 
                            alt={relatedArticle.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold mb-1 group-hover:text-blue-600 transition-colors">
                            {relatedArticle.title}
                          </h4>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            {relatedArticle.excerpt}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleDetail;