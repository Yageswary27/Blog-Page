import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticleGrid from '../components/blog/ArticleGrid';
import RecentPostsSidebar from '../components/blog/RecentPostsSidebar';
import CategoryTags from '../components/common/CategoryTags';
import Pagination from '../components/common/Pagination';
import { Article, Category } from '../types';

interface BlogPageProps {
  articles: Article[];
  categories: Category[];
}

const ITEMS_PER_PAGE = 6;

const BlogPage: React.FC<BlogPageProps> = ({ articles, categories }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    searchParams.get('category') ? Number(searchParams.get('category')) : null
  );

  // Get recent articles for the sidebar
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    .slice(0, 5);

  // Apply filters and update articles
  useEffect(() => {
    let result = [...articles];
    
    // Filter by category if selected
    if (selectedCategoryId) {
      result = result.filter(article => article.category.id === selectedCategoryId);
    }
    
    // Sort by date (newest first)
    result = result.sort((a, b) => 
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    );
    
    setFilteredArticles(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [articles, selectedCategoryId]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategoryId) {
      params.set('category', selectedCategoryId.toString());
    }
    setSearchParams(params);
  }, [selectedCategoryId, setSearchParams]);

  // Handle category selection
  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategoryId(categoryId === 0 ? null : categoryId);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  
  // Get current page articles
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-gray-50">
      {/* Header section */}
      <section className="bg-white pt-12 pb-6 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blog & News
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The latest technology insights, industry trends, and company updates
            </p>
            <div className="flex justify-center">
              <CategoryTags 
                categories={categories} 
                activeCategoryId={selectedCategoryId || undefined}
                onSelectCategory={handleCategorySelect}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Articles */}
            <div className="flex-1">
              {currentArticles.length > 0 ? (
                <>
                  <ArticleGrid articles={currentArticles} />
                  <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any articles matching your filters.
                  </p>
                  <button
                    onClick={() => setSelectedCategoryId(null)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-80 xl:w-96">
              <div className="sticky top-24">
                <RecentPostsSidebar recentArticles={recentArticles} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;