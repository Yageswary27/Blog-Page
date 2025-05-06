import React from 'react';
import ArticleDetail from '../components/blog/ArticleDetail';
import { Article } from '../types';

interface ArticlePageProps {
  articles: Article[];
}

const ArticlePage: React.FC<ArticlePageProps> = ({ articles }) => {
  return <ArticleDetail articles={articles} />;
};

export default ArticlePage;