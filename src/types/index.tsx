export interface Author {
    id: number;
    name: string;
    avatar: string;
    title: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    slug: string;
  }
  
  export interface Article {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage: string;
    author: Author;
    category: Category;
    tags: string[];
    publishedDate: string;
    readingTime: number;
    isFeatured: boolean;
  }