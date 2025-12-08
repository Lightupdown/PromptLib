
import React, { useState, useEffect } from 'react';
import { PromptBuilderState } from '../types';
import { 
  AI_MODELS, SITE_TYPES, STYLES, MOODS, MATERIALS, LIGHTINGS, CAMERA_ANGLES, COLOR_PALETTES, 
  ASPECT_RATIOS, UI_FRAMEWORKS, DEVICE_FRAMES
} from '../constants';
import { Button, Card, Input, Select, Slider, Switch, cn } from '../components/ui';
import { Copy, Terminal, ChevronDown, ChevronUp, Layers, Palette, Settings2, Dices, Sparkles, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Builder: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Universal State
  const [state, setState] = useState<PromptBuilderState>({
    model: AI_MODELS[0].value,
    type: SITE_TYPES[0].value,
    subject: '',
    style: '',
    framework: '',
    device: '',
    mood: '',
    material: '',
    lighting: '',
    camera: '',
    color: '',
    negative: '',
    quality: '',
    // Advanced Params
    ar: '16:9',
    stylize: 100,
    chaos: 0,
    niji: false
  });

  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>('core');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Universal Prompt Generation Formula
  useEffect(() => {
    let promptString = '';
    const parts = [
      state.subject,
      state.type,
      state.style ? `${state.style} style` : null,
      state.framework,
      state.device,
      state.mood,
      state.material,
      state.lighting,
      state.camera,
      state.color
    ].filter(Boolean);

    if (state.model === 'midjourney') {
      // Midjourney: Comma separated, parameters at end
      promptString = parts.join(', ');
      
      if (state.ar) promptString += ` --ar ${state.ar}`;
      if (state.stylize !== 100) promptString += ` --s ${state.stylize}`;
      if (state.chaos > 0) promptString += ` --c ${state.chaos}`;
      if (state.niji) promptString += ` --niji 6`;
      if (state.negative) promptString += ` --no ${state.negative}`; // MJ uses --no for negatives

    } else if (state.model === 'stable-diffusion' || state.model === 'flux') {
      // Stable Diffusion: Comma separated, negative prompt separate
      promptString = `(Masterpiece, best quality, 8k), ${parts.join(', ')}`;
      if (state.negative) {
        promptString += `\n\nNegative prompt: (low quality, worst quality:1.4), ${state.negative}`;
      }

    } else if (state.model === 'dalle') {
      // DALL-E 3: Natural Language
      promptString = `Create a ${state.style || 'professional'} ${state.type} depicting ${state.subject || 'a concept'}. `;
      
      const frameworkStr = state.framework ? `Use a ${state.framework} aesthetic. ` : '';
      const deviceStr = state.device ? `Display it on a ${state.device}. ` : '';
      const moodStr = state.mood ? `The atmosphere should be ${state.mood}. ` : '';
      const lightingStr = state.lighting ? `Use ${state.lighting}. ` : '';
      const materialStr = state.material ? `Render it with ${state.material} textures. ` : '';
      const cameraStr = state.camera ? `The view is ${state.camera}. ` : '';
      const colorStr = state.color ? `Use a ${state.color} color palette. ` : '';

      promptString += `${frameworkStr}${deviceStr}${moodStr}${lightingStr}${materialStr}${cameraStr}${colorStr}`;
    }

    setGeneratedPrompt(promptString);
  }, [state]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleClear = () => {
    setState(prev => ({
        ...prev,
        subject: '',
        style: '',
        framework: '',
        device: '',
        mood: '',
        material: '',
        lighting: '',
        camera: '',
        color: '',
        negative: '',
        ar: '16:9',
        stylize: 100,
        chaos: 0,
        niji: false
    }));
  };

  const handleRandomize = () => {
    const randomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)].value;
    
    setState(prev => ({
      ...prev,
      style: randomItem(STYLES),
      framework: Math.random() > 0.5 ? randomItem(UI_FRAMEWORKS) : '',
      device: Math.random() > 0.7 ? randomItem(DEVICE_FRAMES) : '',
      mood: randomItem(MOODS),
      material: randomItem(MATERIALS),
      lighting: randomItem(LIGHTINGS),
      camera: randomItem(CAMERA_ANGLES),
      color: randomItem(COLOR_PALETTES),
      subject: prev.subject.trim() ? prev.subject : (language === 'zh' ? '抽象概念' : 'Abstract Concept')
    }));
  };

  const getLabel = (item: any) => language === 'zh' ? item.labelCn : item.label;

  // Accordion Header Component
  const AccordionHeader = ({ id, title, icon: Icon, active }: any) => (
    <button 
      onClick={() => toggleSection(id)}
      className={cn(
        "w-full flex items-center justify-between p-4 transition-colors",
        active 
          ? "bg-slate-50 dark:bg-slate-800/50 text-primary-600 dark:text-primary-400" 
          : "hover:bg-slate-50 dark:hover:bg-slate-800/30 text-slate-700 dark:text-slate-300"
      )}
    >
      <div className="flex items-center gap-3 font-medium">
        <Icon size={18} />
        <span>{title}</span>
      </div>
      {active ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>
  );

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* LEFT COLUMN: Controls */}
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2 pb-20 scrollbar-hide">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{t('builder.title')}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{t('builder.subtitle')}</p>
        </div>

        {/* MODEL SELECTOR */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
           <label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wider">{t('builder.model')}</label>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {AI_MODELS.map(model => (
                <button
                  key={model.value}
                  onClick={() => setState({...state, model: model.value})}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all",
                    state.model === model.value 
                      ? "bg-primary-600 text-white shadow-md shadow-primary-500/20" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  )}
                >
                  {getLabel(model)}
                </button>
              ))}
           </div>
        </div>

        {/* SECTION 1: CORE */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
          <AccordionHeader 
            id="core" 
            title={t('builder.sectionCore')} 
            icon={Layers} 
            active={openSection === 'core'} 
          />
          {openSection === 'core' && (
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-in slide-in-from-top-2">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.projectType')}</label>
                <Select 
                  value={state.type} 
                  onChange={(e) => setState({...state, type: e.target.value})}
                >
                  {SITE_TYPES.map(t => <option key={t.value} value={t.value}>{getLabel(t)}</option>)}
                </Select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.subject')}</label>
                <Input 
                  placeholder={t('builder.subjectPlaceholder')}
                  value={state.subject}
                  onChange={(e) => setState({...state, subject: e.target.value})}
                />
              </div>
            </div>
          )}
        </div>

        {/* SECTION 2: COMPOSITION & STRUCTURE */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
          <AccordionHeader 
            id="comp" 
            title={t('builder.sectionComposition')} 
            icon={Sparkles} 
            active={openSection === 'comp'} 
          />
          {openSection === 'comp' && (
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-in slide-in-from-top-2">
               <div>
                 <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.style')}</label>
                 <Select 
                    value={state.style} 
                    onChange={(e) => setState({...state, style: e.target.value})}
                  >
                    <option value="">-</option>
                    {STYLES.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                  </Select>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.framework')}</label>
                   <Select 
                      value={state.framework} 
                      onChange={(e) => setState({...state, framework: e.target.value})}
                    >
                      <option value="">-</option>
                      {UI_FRAMEWORKS.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                    </Select>
                 </div>
                 <div>
                   <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.device')}</label>
                   <Select 
                      value={state.device} 
                      onChange={(e) => setState({...state, device: e.target.value})}
                    >
                      <option value="">-</option>
                      {DEVICE_FRAMES.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                    </Select>
                 </div>
               </div>
               <div>
                 <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.mood')}</label>
                 <Select 
                    value={state.mood} 
                    onChange={(e) => setState({...state, mood: e.target.value})}
                  >
                    <option value="">-</option>
                    {MOODS.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                  </Select>
               </div>
               <div>
                 <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.camera')}</label>
                 <Select 
                    value={state.camera} 
                    onChange={(e) => setState({...state, camera: e.target.value})}
                  >
                    <option value="">-</option>
                    {CAMERA_ANGLES.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                  </Select>
               </div>
            </div>
          )}
        </div>

        {/* SECTION 3: DETAILS */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
          <AccordionHeader 
            id="details" 
            title={t('builder.sectionDetails')} 
            icon={Palette} 
            active={openSection === 'details'} 
          />
          {openSection === 'details' && (
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-4 animate-in slide-in-from-top-2">
               <div>
                 <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.material')}</label>
                 <Select 
                    value={state.material} 
                    onChange={(e) => setState({...state, material: e.target.value})}
                  >
                    <option value="">-</option>
                    {MATERIALS.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                  </Select>
               </div>
               <div>
                 <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.lighting')}</label>
                 <Select 
                    value={state.lighting} 
                    onChange={(e) => setState({...state, lighting: e.target.value})}
                  >
                    <option value="">-</option>
                    {LIGHTINGS.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                  </Select>
               </div>
               <div>
                 <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.color')}</label>
                 <Select 
                    value={state.color} 
                    onChange={(e) => setState({...state, color: e.target.value})}
                  >
                    <option value="">-</option>
                    {COLOR_PALETTES.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                  </Select>
               </div>
            </div>
          )}
        </div>

        {/* SECTION 4: PARAMETERS */}
        <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
          <AccordionHeader 
            id="params" 
            title={t('builder.sectionParams')} 
            icon={Settings2} 
            active={openSection === 'params'} 
          />
          {openSection === 'params' && (
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 space-y-6 animate-in slide-in-from-top-2">
               
               {/* Negative Prompt (Universal except DALL-E sometimes) */}
               {state.model !== 'dalle' && (
                 <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.negative')}</label>
                    <Input 
                      placeholder={t('builder.negativePlaceholder')}
                      value={state.negative}
                      onChange={(e) => setState({...state, negative: e.target.value})}
                    />
                 </div>
               )}

               {/* Midjourney Specifics */}
               {state.model === 'midjourney' && (
                 <>
                   <div>
                     <label className="block text-xs font-medium text-slate-500 mb-1.5">{t('builder.ar')}</label>
                     <Select 
                        value={state.ar} 
                        onChange={(e) => setState({...state, ar: e.target.value})}
                      >
                        {ASPECT_RATIOS.map(s => <option key={s.value} value={s.value}>{getLabel(s)}</option>)}
                      </Select>
                   </div>

                   <div>
                     <div className="flex justify-between mb-1.5">
                       <label className="text-xs font-medium text-slate-500">{t('builder.stylize')}</label>
                       <span className="text-xs font-mono text-primary-600">{state.stylize}</span>
                     </div>
                     <Slider 
                       min={0} max={1000} step={10} 
                       value={state.stylize} 
                       onChange={(e) => setState({...state, stylize: parseInt(e.target.value)})} 
                     />
                   </div>

                   <div>
                     <div className="flex justify-between mb-1.5">
                       <label className="text-xs font-medium text-slate-500">{t('builder.chaos')}</label>
                       <span className="text-xs font-mono text-primary-600">{state.chaos}</span>
                     </div>
                     <Slider 
                       min={0} max={100} step={1} 
                       value={state.chaos} 
                       onChange={(e) => setState({...state, chaos: parseInt(e.target.value)})} 
                     />
                   </div>

                   <div className="flex items-center justify-between">
                     <label className="text-sm font-medium text-slate-700 dark:text-slate-300">{t('builder.niji')}</label>
                     <Switch checked={state.niji} onCheckedChange={(c) => setState({...state, niji: c})} />
                   </div>
                 </>
               )}
            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: Preview & Action */}
      <div className="flex-1 lg:max-w-md">
        <div className="lg:sticky lg:top-6 space-y-4">
          
          <Card className="bg-slate-900 border-slate-800 text-slate-100 overflow-hidden shadow-xl ring-1 ring-slate-800">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-400">
                <Terminal size={14} />
                <span className="text-xs font-mono">{t('builder.preview')}</span>
                <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 border border-slate-700 uppercase tracking-wide">
                  {AI_MODELS.find(m => m.value === state.model)?.label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost" onClick={handleRandomize} className="h-6 text-xs text-primary-400 hover:text-primary-300 hover:bg-primary-950/30">
                  <Dices size={14} className="mr-1.5" />
                  {t('builder.randomize')}
                </Button>
                <div className="w-px h-3 bg-slate-800"></div>
                <Button size="sm" variant="ghost" onClick={handleClear} className="h-6 text-xs text-slate-500 hover:text-slate-300">
                  {t('builder.clear')}
                </Button>
              </div>
            </div>
            
            <div className="p-6 relative min-h-[120px]">
              <code className="block font-mono text-sm leading-relaxed text-slate-300 break-words whitespace-pre-wrap">
                {generatedPrompt}
              </code>
            </div>

            <div className="p-4 bg-slate-950/50 border-t border-slate-800">
              <Button 
                onClick={handleCopy} 
                className={cn(
                  "w-full transition-all duration-300 h-11 text-sm font-semibold tracking-wide shadow-lg shadow-primary-900/20",
                  isCopied ? "bg-green-600 hover:bg-green-700" : "bg-primary-600 hover:bg-primary-700"
                )}
              >
                {isCopied ? t('builder.copied') : t('builder.copy')}
                {!isCopied && <Copy size={16} className="ml-2" />}
              </Button>
            </div>
          </Card>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-900/10 rounded-xl p-4 border border-indigo-100 dark:border-indigo-900/50">
             <div className="flex items-start gap-3">
               <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400">
                 <Zap size={20} />
               </div>
               <div>
                 <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{t('builder.proTipTitle')}</h4>
                 <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                   {t('builder.proTipDesc')}
                 </p>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};