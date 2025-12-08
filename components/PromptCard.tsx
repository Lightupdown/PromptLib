import React, { useState } from 'react';
import { Prompt } from '../types';
import { Button, Card, Badge, Dropdown, DropdownItem } from './ui';
import { Copy, Check, Heart, ExternalLink, ChevronDown, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PromptCardProps {
  prompt: Prompt;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);
  const { t, language } = useLanguage();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isZh = language === 'zh';
  
  // Display text logic
  const title = isZh ? (prompt.titleCn || prompt.title) : prompt.title;
  const description = isZh ? (prompt.descriptionCn || prompt.description) : prompt.description;

  return (
    <Card className="overflow-hidden group flex flex-col h-full hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary-900/20 hover:-translate-y-1">
      {/* Image Preview Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        {prompt.imageUrl ? (
          <img 
            src={prompt.imageUrl} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <span className="text-sm">{t('common.noPreview')}</span>
          </div>
        )}
        
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
           <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full bg-black/50 backdrop-blur-sm text-white border-transparent hover:bg-black/70">
             <ExternalLink size={14} />
           </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold leading-tight text-slate-900 dark:text-slate-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {prompt.tags.slice(0, 3).map(tag => (
            <Badge key={tag} className="bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-transparent group-hover:bg-primary-50 dark:group-hover:bg-primary-900/10 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/50 mt-2">
          <button className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-red-500 transition-colors">
            <Heart size={14} />
            <span>{prompt.likes}</span>
          </button>

          {isZh ? (
             <Dropdown 
               trigger={
                <Button 
                  variant={copied ? "primary" : "outline"} 
                  size="sm"
                  className={`w-full max-w-[120px] transition-all duration-300 gap-1 ${copied ? 'bg-green-600 hover:bg-green-700 border-green-600' : ''}`}
                >
                   {copied ? <Check size={14} /> : <Copy size={14} />}
                   <span>{copied ? t('common.copied') : t('common.copy')}</span>
                   <ChevronDown size={12} className="opacity-70" />
                </Button>
               }
             >
                <DropdownItem onClick={() => handleCopy(prompt.promptText)}>
                  <span className="flex items-center gap-2">
                    <span className="font-bold text-xs bg-slate-100 dark:bg-slate-700 px-1 rounded">EN</span>
                    <span>复制英文提示词</span>
                  </span>
                </DropdownItem>
                <DropdownItem onClick={() => handleCopy(prompt.promptTextCn || prompt.promptText)}>
                   <span className="flex items-center gap-2">
                    <span className="font-bold text-xs bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 px-1 rounded">CN</span>
                    <span>复制中文提示词</span>
                  </span>
                </DropdownItem>
             </Dropdown>
          ) : (
            <Button 
              onClick={() => handleCopy(prompt.promptText)} 
              variant={copied ? "primary" : "outline"} 
              size="sm"
              className={`w-full max-w-[120px] transition-all duration-300 ${copied ? 'bg-green-600 hover:bg-green-700 border-green-600' : ''}`}
            >
              {copied ? (
                <>
                  <Check size={14} className="mr-1.5" />
                  <span>{t('common.copied')}</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="mr-1.5" />
                  <span>{t('common.copy')}</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>
      
      {/* Hidden Text for searching */}
      <div className="sr-only">
        {prompt.promptText} 
        {prompt.titleCn} 
        {prompt.descriptionCn}
      </div>
    </Card>
  );
};
