import React from 'react';
import { SUFFIX_GROUPS } from '../constants';
import { Card, Button } from '../components/ui';
import { Copy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Suffixes: React.FC = () => {
  const { t, language } = useLanguage();
  
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{t('suffixes.title')}</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          {t('suffixes.subtitle')}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {SUFFIX_GROUPS.map((group) => (
          <Card key={group.category} className="overflow-hidden">
            <div className="px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              {language === 'zh' ? group.categoryCn : group.category}
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {group.suffixes.map((suffix, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <div className="flex flex-col gap-1">
                    <code className="text-sm font-mono font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-2 py-0.5 rounded w-fit">
                      {suffix.code}
                    </code>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {language === 'zh' ? suffix.descriptionCn : suffix.description}
                    </span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleCopy(suffix.code)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    title={t('suffixes.copySuffix')}
                  >
                    <Copy size={14} />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
