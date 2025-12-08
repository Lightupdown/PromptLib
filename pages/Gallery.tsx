import React, { useMemo, useState } from 'react';
import { CategoryId } from '../types';
import { PromptCard } from '../components/PromptCard';
import { MOCK_PROMPTS, CATEGORIES } from '../constants';
import { Button, Select } from '../components/ui';
import { SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface GalleryProps {
  categoryId: CategoryId;
  searchQuery: string;
}

export const Gallery: React.FC<GalleryProps> = ({ categoryId, searchQuery }) => {
  const [filterStyle, setFilterStyle] = useState<string>('all');
  const { t, language } = useLanguage();

  const filteredPrompts = useMemo(() => {
    return MOCK_PROMPTS.filter((prompt) => {
      // Category Filter
      if (categoryId !== 'all' && prompt.category !== categoryId) return false;
      
      // Search Filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        prompt.title.toLowerCase().includes(searchLower) ||
        prompt.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        prompt.description.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;

      // Dropdown Style Filter (Mock implementation)
      if (filterStyle !== 'all') {
         // This is a simple mock check. In real app, tags would be normalized.
         const hasTag = prompt.tags.some(tag => tag.toLowerCase() === filterStyle.toLowerCase());
         if (!hasTag) return false;
      }

      return true;
    });
  }, [categoryId, searchQuery, filterStyle]);

  const currentCategory = CATEGORIES.find(c => c.id === categoryId);
  const categoryLabel = currentCategory 
    ? (language === 'zh' ? currentCategory.labelCn : currentCategory.label)
    : categoryId;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {categoryId === 'all' ? t('gallery.discover') : 
             categoryLabel}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-48">
            <Select 
              value={filterStyle} 
              onChange={(e) => setFilterStyle(e.target.value)}
              className="pl-9"
            >
              <option value="all">{t('gallery.allStyles')}</option>
              <option value="minimal">{t('gallery.minimal')}</option>
              <option value="dark mode">{t('gallery.darkMode')}</option>
              <option value="cyberpunk">{t('gallery.cyberpunk')}</option>
              <option value="mobile">{t('gallery.mobile')}</option>
            </Select>
            <SlidersHorizontal size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"/>
          </div>
        </div>
      </div>

      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPrompts.map(prompt => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
          <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 mb-4">
            <SlidersHorizontal className="text-slate-400" size={32} />
          </div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">{t('gallery.noPrompts')}</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-2">
            {t('gallery.noPromptsDesc')}
          </p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => setFilterStyle('all')}
          >
            {t('gallery.clearFilters')}
          </Button>
        </div>
      )}
    </div>
  );
};
