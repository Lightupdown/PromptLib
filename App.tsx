
import React, { useState, useEffect } from 'react';
import { Gallery } from './pages/Gallery';
import { Builder } from './pages/Builder';
import { Suffixes } from './pages/Suffixes';
import { CATEGORIES, NAV_GROUPS, MOCK_PROMPTS } from './constants';
import { CategoryId, NavGroup } from './types';
import { Button, Input, cn, Modal } from './components/ui';
import { 
  Menu, Search, X, Moon, Sun, Layout, 
  Terminal, Wand2, Github, ChevronRight, ChevronDown, Languages, Info
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

interface SidebarLinkProps {
  icon: any;
  label: string;
  active: boolean;
  onClick: () => void;
  className?: string;
  count?: number;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ 
  icon: IconName, 
  label, 
  active, 
  onClick,
  className,
  count
}) => {
  const Icon = typeof IconName === 'string' 
    ? (LucideIcons as any)[IconName] || Layout 
    : IconName;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
        active 
          ? "bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-300" 
          : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
        className
      )}
    >
      <Icon size={18} className={active ? "text-primary-600 dark:text-primary-400" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"} />
      <span className="flex-1 text-left">{label}</span>
      {count !== undefined && (
        <span className={cn(
          "text-xs px-2 py-0.5 rounded-full",
          active 
            ? "bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300"
            : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400"
        )}>
          {count}
        </span>
      )}
      {active && count === undefined && <ChevronRight size={14} className="ml-auto opacity-50" />}
    </button>
  );
};

const SidebarGroup: React.FC<{ 
  group: NavGroup, 
  activeTab: CategoryId, 
  onSelect: (id: CategoryId) => void,
  language: string,
  getCategoryCount: (id: CategoryId) => number
}> = ({ group, activeTab, onSelect, language, getCategoryCount }) => {
  const hasActiveChild = group.items.includes(activeTab);
  const [isOpen, setIsOpen] = useState(hasActiveChild);

  useEffect(() => {
    if (hasActiveChild) setIsOpen(true);
  }, [hasActiveChild]);

  return (
    <div className="space-y-1">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 uppercase tracking-wider transition-colors"
      >
        <span>{language === 'zh' ? group.titleCn : group.title}</span>
        {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
      </button>
      
      {isOpen && (
        <div className="space-y-1 pl-2 border-l border-slate-100 dark:border-slate-800 ml-3">
          {group.items.map(itemId => {
            const cat = CATEGORIES.find(c => c.id === itemId);
            if (!cat) return null;
            return (
              <SidebarLink
                key={cat.id}
                icon={cat.icon}
                label={language === 'zh' ? cat.labelCn : cat.label}
                active={activeTab === cat.id}
                onClick={() => onSelect(cat.id)}
                className="text-sm py-1.5"
                count={getCategoryCount(cat.id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const AppContent = () => {
  const [activeTab, setActiveTab] = useState<CategoryId>('all');
  const [isBuilder, setIsBuilder] = useState(false);
  const [isSuffixes, setIsSuffixes] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleNavClick = (id: CategoryId) => {
    setIsBuilder(id === 'builder');
    setIsSuffixes(id === 'suffixes');
    if (id !== 'builder' && id !== 'suffixes') {
      setActiveTab(id);
    }
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const getCategoryCount = (id: CategoryId) => {
    if (id === 'all') return MOCK_PROMPTS.length;
    return MOCK_PROMPTS.filter(p => p.category === id).length;
  };

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-950 flex font-sans overflow-hidden">
      
      <Modal 
        isOpen={aboutModalOpen} 
        onClose={() => setAboutModalOpen(false)}
        title={language === 'zh' ? '关于作者' : 'About Author'}
      >
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs">
                 Red
               </div>
               <div>
                 <p className="text-xs text-slate-500 dark:text-slate-400">{language === 'zh' ? '小红书号' : 'Little Red Book ID'}</p>
                 <p className="font-mono font-semibold text-slate-900 dark:text-slate-100">4386850567</p>
               </div>
             </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
             <div className="flex items-center gap-3 mb-2">
               <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-xs">
                 Tik
               </div>
               <div>
                 <p className="text-xs text-slate-500 dark:text-slate-400">{language === 'zh' ? '抖音号' : 'Douyin ID'}</p>
                 <p className="font-mono font-semibold text-slate-900 dark:text-slate-100">icoding1024</p>
               </div>
             </div>
          </div>
          <div className="text-center pt-2">
             <Button variant="outline" className="w-full" onClick={() => setAboutModalOpen(false)}>
               {language === 'zh' ? '关闭' : 'Close'}
             </Button>
          </div>
        </div>
      </Modal>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* --- Sidebar --- */}
      <aside className={cn(
        "fixed lg:sticky top-0 left-0 z-50 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 lg:translate-x-0 flex flex-col",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0">
          <button 
            onClick={() => setAboutModalOpen(true)}
            className="flex items-center gap-2 group hover:opacity-80 transition-opacity text-left outline-none"
            title={language === 'zh' ? '点击查看作者信息' : 'Click to see author info'}
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <Terminal size={18} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white leading-none">{t('appTitle')}</span>
              <span className="text-[10px] text-slate-400 font-medium group-hover:text-primary-500 transition-colors mt-1 flex items-center gap-1">
                {language === 'zh' ? '关于作者' : 'About Author'} <Info size={10} />
              </span>
            </div>
          </button>
          <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden text-slate-500">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-6 scrollbar-hide hover:scrollbar-default">
          {/* Main Tools */}
          <div className="space-y-1">
            <h4 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{t('sidebar.tools')}</h4>
            <SidebarLink 
              icon={Wand2} 
              label={t('sidebar.builder')}
              active={isBuilder} 
              onClick={() => handleNavClick('builder')} 
            />
            <SidebarLink 
              icon="Zap" 
              label={t('sidebar.suffixes')}
              active={isSuffixes} 
              onClick={() => handleNavClick('suffixes')} 
            />
          </div>

          <div className="h-px bg-slate-100 dark:bg-slate-800 my-2 mx-2"></div>

          {/* All Prompts Link */}
          <SidebarLink
             icon="LayoutGrid"
             label={language === 'zh' ? '全部提示词' : 'All Prompts'}
             active={!isBuilder && !isSuffixes && activeTab === 'all'}
             onClick={() => handleNavClick('all')}
             count={getCategoryCount('all')}
          />

          {/* Grouped Categories */}
          <div className="space-y-4 mt-4">
            {NAV_GROUPS.map((group, idx) => (
              <SidebarGroup 
                key={idx}
                group={group}
                activeTab={activeTab}
                onSelect={handleNavClick}
                language={language}
                getCategoryCount={getCategoryCount}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* --- Main Content --- */}
      <main className="flex-1 flex flex-col min-w-0 h-full relative">
        
        {/* Header */}
        <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="p-2 -ml-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md">
              <Menu size={20} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden sm:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary-500 transition-colors" size={16} />
              <Input 
                className="pl-10 bg-slate-50 dark:bg-slate-950/50 border-transparent focus:bg-white dark:focus:bg-slate-950" 
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Languages size={14} />
              {language === 'zh' ? 'En' : '中'}
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
              <Github size={20} />
              <span className="hidden lg:inline">{t('common.starGithub')}</span>
            </a>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <div className="p-4 sm:p-8 max-w-7xl mx-auto w-full pb-20">
            {isBuilder ? (
              <Builder />
            ) : isSuffixes ? (
              <Suffixes />
            ) : (
              <Gallery categoryId={activeTab} searchQuery={searchQuery} />
            )}
          </div>
        </div>

      </main>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
