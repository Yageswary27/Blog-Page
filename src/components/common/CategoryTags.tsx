import React from 'react';

import { Category } from '../../types';

interface CategoryTagsProps {
  categories: Category[];
  activeCategoryId?: number;
  onSelectCategory?: (categoryId: number) => void;
}

const CategoryTags: React.FC<CategoryTagsProps> = ({ 
  categories, 
  activeCategoryId,
  onSelectCategory 
}) => {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3">
      <button
        onClick={() => onSelectCategory && onSelectCategory(0)}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          !activeCategoryId 
            ? 'bg-blue-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory && onSelectCategory(category.id)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            activeCategoryId === category.id 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryTags;