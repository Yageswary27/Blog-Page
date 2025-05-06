import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ArticleCard from '../components/blog/ArticleCard';
import NewsletterSignup from '../components/common/NewsletterSignup';
import { Article } from '../types';

interface HomePageProps {
  articles: Article[];
}

const HomePage: React.FC<HomePageProps> = ({ articles }) => {
  // Get featured article
  const featuredArticle = articles.find(article => article.isFeatured);
  
  // Get recent articles (excluding the featured one)
  const recentArticles = articles
    .filter(article => !article.isFeatured)
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 3);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Latest Tech Insights & Industry Trends
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay updated with the newest technology breakthroughs, industry best practices, and innovation strategies from our expert team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/blog" 
                  className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Our Blog
                </Link>
                <Link 
                  to="/services" 
                  className="bg-white text-blue-600 border border-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 rounded-xl overflow-hidden h-[400px] md:h-[500px] shadow-lg relative group">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="IT Team Working" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">Tech That Drives Innovation</h2>
                <p className="mb-4">Transforming businesses through cutting-edge technology solutions</p>
                <Link 
                  to="/about" 
                  className="flex items-center text-white hover:text-blue-400 transition-colors"
                >
                  Learn more about us
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
              <Link 
                to="/blog" 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                View all articles
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <ArticleCard article={featuredArticle} variant="featured" />
          </div>
        </section>
      )}

      {/* Recent Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-white text-blue-600 border border-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View All Articles
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Software Development',
                description: 'Custom software solutions tailored to your business needs',
                icon: '💻'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud infrastructure and migration',
                icon: '☁️'
              },
              {
                title: 'Cybersecurity',
                description: 'Protecting your digital assets and strengthening security',
                icon: '🔒'
              },
              {
                title: 'Digital Transformation',
                description: 'Guiding your business through technological evolution',
                icon: '🚀'
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                >
                  Learn more
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
                <p className="text-blue-100 text-lg mb-8">
                  Get in touch with our team to discuss how our IT solutions can help your business grow and innovate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    to="/services" 
                    className="bg-blue-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;