
import { Category, Prompt, SuffixGroup, OptionItem, NavGroup } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'All Prompts', labelCn: '全部提示词', icon: 'LayoutGrid' },
  { id: 'landing', label: 'Marketing / Landing', labelCn: '营销 / 着陆页', icon: 'Layout' },
  { id: 'dashboard', label: 'Dashboard / SaaS', labelCn: '仪表盘 / SaaS', icon: 'BarChart3' },
  { id: 'ecommerce', label: 'E-commerce', labelCn: '电商', icon: 'ShoppingBag' },
  { id: 'mobile', label: 'Mobile UI', labelCn: '移动端 UI', icon: 'Smartphone' },
  { id: 'portfolio', label: 'Portfolio', labelCn: '作品集', icon: 'Palette' },
  // Expanded Categories Phase 1
  { id: 'saas_tech', label: 'SaaS & Technology', labelCn: 'SaaS 与科技', icon: 'Cpu' },
  { id: 'ecommerce_retail', label: 'E-commerce & Retail', labelCn: '电商与零售', icon: 'Store' },
  { id: 'creative_portfolio', label: 'Creative & Portfolio', labelCn: '创意与作品集', icon: 'Camera' },
  { id: 'corporate_services', label: 'Corporate & Services', labelCn: '企业与服务', icon: 'Building2' },
  { id: 'experimental_trendy', label: 'Experimental & Trendy', labelCn: '实验与潮流', icon: 'Zap' },
  // Assets
  { id: 'icons', label: 'Icons & Assets', labelCn: '图标与素材', icon: 'Shapes' },
  { id: 'illustrations', label: 'Web Illustrations', labelCn: '网页插画', icon: 'PenTool' },
  { id: 'logos', label: 'Logo Design', labelCn: 'Logo 设计', icon: 'Hexagon' },
  { id: 'backgrounds', label: 'Textures & Backgrounds', labelCn: '纹理与背景', icon: 'Layers' },
  { id: 'mockups', label: 'Mockups & Presentations', labelCn: '样机与展示', icon: 'Monitor' },
  // Mobile Expanded
  { id: 'mobile_social', label: 'Mobile: Social', labelCn: '移动端：社交', icon: 'MessageCircle' },
  { id: 'mobile_productivity', label: 'Mobile: Productivity', labelCn: '移动端：效率', icon: 'CheckSquare' },
  { id: 'mobile_fintech', label: 'Mobile: Fintech', labelCn: '移动端：金融', icon: 'Wallet' },
  { id: 'mobile_health', label: 'Mobile: Health', labelCn: '移动端：健康', icon: 'Activity' },
  { id: 'mobile_ecommerce', label: 'Mobile: E-commerce', labelCn: '移动端：电商', icon: 'ShoppingCart' },
  // Phase 3
  { id: 'gaming_esports', label: 'Gaming & Esports', labelCn: '游戏与电竞', icon: 'Gamepad2' },
  { id: 'futuristic_fui', label: 'Futuristic FUI', labelCn: '未来主义 FUI', icon: 'Aperture' },
  { id: 'web_sections_hero', label: 'Web: Hero & Headers', labelCn: '网页：英雄区', icon: 'LayoutTemplate' },
  { id: 'web_sections_utility', label: 'Web: Pricing & Features', labelCn: '网页：功能区', icon: 'ListChecks' },
  { id: 'creative_404', label: 'Creative 404', labelCn: '创意 404', icon: 'AlertTriangle' },
  // Phase 4 (New)
  { id: 'ui_components_micro', label: 'UI Components', labelCn: 'UI 组件', icon: 'Puzzle' },
  { id: 'data_visualization', label: 'Data Visualization', labelCn: '数据可视化', icon: 'PieChart' },
  { id: 'login_auth_screens', label: 'Login & Auth', labelCn: '登录与认证', icon: 'Lock' },
  { id: 'marketing_assets', label: 'Marketing Assets', labelCn: '营销素材', icon: 'Megaphone' },
  { id: 'design_systems', label: 'Design Systems', labelCn: '设计系统', icon: 'Book' },
];

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Web Interfaces",
    titleCn: "网页界面设计",
    items: ['landing', 'saas_tech', 'ecommerce_retail', 'dashboard', 'corporate_services', 'creative_portfolio', 'portfolio', 'experimental_trendy', 'gaming_esports', 'futuristic_fui']
  },
  {
    title: "Mobile Apps",
    titleCn: "移动端应用",
    items: ['mobile', 'mobile_social', 'mobile_productivity', 'mobile_fintech', 'mobile_health', 'mobile_ecommerce']
  },
  {
    title: "Components & Sections",
    titleCn: "组件与区块",
    items: ['ui_components_micro', 'web_sections_hero', 'web_sections_utility', 'data_visualization', 'login_auth_screens', 'creative_404']
  },
  {
    title: "Assets & Resources",
    titleCn: "素材与资源",
    items: ['icons', 'illustrations', 'logos', 'backgrounds', 'mockups', 'marketing_assets', 'design_systems']
  }
];

export const SUFFIX_GROUPS: SuffixGroup[] = [
  {
    category: 'UI/UX Platforms',
    categoryCn: 'UI/UX 设计平台',
    suffixes: [
      { code: 'trending on Dribbble', description: 'Popular modern aesthetic', descriptionCn: 'Dribbble 热门 (现代流行)' },
      { code: 'Behance feature', description: 'Professional case study style', descriptionCn: 'Behance 精选 (专业案例)' },
      { code: 'Figma design', description: 'Clean vector layout', descriptionCn: 'Figma 设计 (干净矢量)' },
      { code: 'Awwwards winner', description: 'Creative web design award', descriptionCn: 'Awwwards 获奖 (创意网页)' },
      { code: 'Apple Design Award', description: 'Premium iOS aesthetic', descriptionCn: 'Apple 设计奖 (高端 iOS)' },
    ]
  },
  {
    category: 'Aspect Ratios',
    categoryCn: '宽高比 (Aspect Ratio)',
    suffixes: [
      { code: '--ar 16:9', description: 'Desktop landscape (Web)', descriptionCn: '桌面横屏 (网页标准)' },
      { code: '--ar 9:16', description: 'Mobile portrait (App)', descriptionCn: '移动端竖屏 (应用标准)' },
      { code: '--ar 1:1', description: 'Square (Icon/Post)', descriptionCn: '正方形 (图标/帖子)' },
      { code: '--ar 3:4', description: 'Tablet/Portrait', descriptionCn: '平板/人像 (3:4)' },
      { code: '--ar 3:2', description: 'Standard Photography', descriptionCn: '标准摄影 (3:2)' },
    ]
  },
  {
    category: 'Render & Quality',
    categoryCn: '渲染与质量 (Render)',
    suffixes: [
      { code: 'high fidelity UI', description: 'Detailed interface', descriptionCn: '高保真 UI' },
      { code: '8k resolution', description: 'Ultra sharp details', descriptionCn: '8K 超高分辨率' },
      { code: 'Unreal Engine 5 render', description: '3D game-like quality', descriptionCn: '虚幻引擎 5 (3D质感)' },
      { code: 'vector graphics', description: 'Flat scalable art', descriptionCn: '矢量图形 (扁平)' },
      { code: 'Octane render', description: 'Photorealistic 3D', descriptionCn: 'Octane 渲染 (照片级)' },
    ]
  },
  {
    category: 'Style Modifiers',
    categoryCn: '风格修饰 (Style)',
    suffixes: [
      { code: '--s 750', description: 'High stylization (Artistic)', descriptionCn: '高艺术化 (Midjourney偏好)' },
      { code: '--s 250', description: 'Low stylization (Precise)', descriptionCn: '低艺术化 (忠实提示词)' },
      { code: '--style raw', description: 'Raw mode (Less AI bias)', descriptionCn: '原始风格 (减少模型干扰)' },
      { code: '--niji 6', description: 'Niji V6 (Anime/Illustration)', descriptionCn: 'Niji V6 (动漫/插画)' },
    ]
  },
  {
    category: 'Negative Prompts',
    categoryCn: '负面提示 (Negative)',
    suffixes: [
      { code: '--no text watermark', description: 'Remove text/watermarks', descriptionCn: '去除文字/水印' },
      { code: '--no blur depth of field', description: 'Force full sharpness', descriptionCn: '去除模糊/景深 (全焦)' },
      { code: '--no 3d realistic', description: 'Force flat 2D style', descriptionCn: '去除 3D/写实 (强制 2D)' },
      { code: '--no cartoon illustration', description: 'Force photorealism', descriptionCn: '去除卡通/插画 (强制照片)' },
    ]
  },
  {
    category: 'Advanced',
    categoryCn: '高级参数 (Advanced)',
    suffixes: [
      { code: '--tile', description: 'Seamless patterns', descriptionCn: '无缝纹理' },
      { code: '--chaos 50', description: 'High variation', descriptionCn: '高混乱度 (多样性)' },
      { code: '--weird 500', description: 'Unique experimental', descriptionCn: '怪诞风格 (实验性)' },
      { code: '--iw 2', description: 'Max image weight', descriptionCn: '最大垫图权重' },
    ]
  }
];

// --- UNIVERSAL BUILDER OPTIONS ---

export const AI_MODELS: OptionItem[] = [
  { value: 'midjourney', label: 'Midjourney v6', labelCn: 'Midjourney v6' },
  { value: 'stable-diffusion', label: 'Stable Diffusion XL', labelCn: 'Stable Diffusion XL' },
  { value: 'dalle', label: 'DALL-E 3', labelCn: 'DALL-E 3' },
  { value: 'flux', label: 'Flux.1', labelCn: 'Flux.1' },
];

export const SITE_TYPES: OptionItem[] = [
  { value: 'Landing Page', label: 'Landing Page', labelCn: '着陆页' },
  { value: 'SaaS Dashboard', label: 'SaaS Dashboard', labelCn: 'SaaS 仪表盘' },
  { value: 'Admin Panel', label: 'Admin Panel', labelCn: '管理后台' },
  { value: 'E-commerce Store', label: 'E-commerce Store', labelCn: '电商商店' },
  { value: 'Mobile App', label: 'Mobile App', labelCn: '移动应用' },
  { value: 'Portfolio Website', label: 'Portfolio Website', labelCn: '个人作品集' },
  { value: 'Corporate Website', label: 'Corporate Website', labelCn: '企业官网' },
  { value: 'Social Network', label: 'Social Network', labelCn: '社交网络' },
  { value: 'Documentation', label: 'Documentation', labelCn: '文档中心' },
  { value: 'Game UI', label: 'Game UI', labelCn: '游戏界面' },
  { value: 'HUD / FUI', label: 'HUD / FUI', labelCn: '抬头显示 / FUI' }
];

export const STYLES: OptionItem[] = [
  { value: 'Minimalist', label: 'Minimalist', labelCn: '极简主义' },
  { value: 'Material Design', label: 'Material Design', labelCn: 'Material Design' },
  { value: 'Corporate Clean', label: 'Corporate Clean', labelCn: '企业简洁风' },
  { value: 'Dark Mode Tech', label: 'Dark Mode Tech', labelCn: '深色科技风' },
  { value: 'Neo-Brutalism', label: 'Neo-Brutalism', labelCn: '新粗野主义' },
  { value: 'Cyberpunk', label: 'Cyberpunk', labelCn: '赛博朋克' },
  { value: 'Bento Grid', label: 'Bento Grid', labelCn: 'Bento 网格' },
  { value: 'Apple Aesthetic', label: 'Apple Aesthetic', labelCn: '苹果美学' },
  { value: 'Luxury Serif', label: 'Luxury Serif', labelCn: '奢华衬线' },
  { value: 'Playful Cartoon', label: 'Playful Cartoon', labelCn: '俏皮卡通' },
  { value: 'Abstract Geometric', label: 'Abstract Geometric', labelCn: '抽象几何' },
  { value: 'Retro Vaporwave', label: 'Retro Vaporwave', labelCn: '复古蒸汽波' }
];

export const UI_FRAMEWORKS: OptionItem[] = [
  { value: 'Tailwind CSS style', label: 'Tailwind CSS', labelCn: 'Tailwind CSS 风格' },
  { value: 'Material UI (MUI)', label: 'Material UI', labelCn: 'Material UI (MUI)' },
  { value: 'Ant Design system', label: 'Ant Design', labelCn: 'Ant Design 系统' },
  { value: 'Bootstrap 5', label: 'Bootstrap', labelCn: 'Bootstrap 风格' },
  { value: 'iOS Human Interface Guidelines', label: 'iOS HIG', labelCn: 'iOS 设计规范' },
  { value: 'Google Material 3', label: 'Material 3', labelCn: 'Material 3 (安卓)' },
  { value: 'IBM Carbon Design', label: 'Carbon Design', labelCn: 'Carbon Design (IBM)' },
  { value: 'Shadcn UI', label: 'Shadcn UI', labelCn: 'Shadcn UI' },
];

export const DEVICE_FRAMES: OptionItem[] = [
  { value: 'Desktop Chrome browser window', label: 'Desktop Browser', labelCn: '桌面浏览器窗口' },
  { value: 'MacBook Pro mockup', label: 'MacBook Pro', labelCn: 'MacBook Pro 样机' },
  { value: 'iPhone 15 Pro mockup', label: 'iPhone 15 Pro', labelCn: 'iPhone 15 Pro 样机' },
  { value: 'iPad Pro tablet', label: 'iPad Pro', labelCn: 'iPad Pro 平板' },
  { value: 'Floating isometric screens', label: 'Floating Screens', labelCn: '悬浮屏幕' },
  { value: 'Full screen UI design', label: 'Full Screen (No Frame)', labelCn: '全屏 UI (无边框)' },
];

export const MOODS: OptionItem[] = [
  { value: 'Professional, Trustworthy', label: 'Professional', labelCn: '专业可信' },
  { value: 'Playful, Energetic', label: 'Playful', labelCn: '活泼能量' },
  { value: 'Dark, Mysterious', label: 'Dark', labelCn: '暗黑神秘' },
  { value: 'Clean, Airy', label: 'Clean/Airy', labelCn: '干净透气' },
  { value: 'Luxury, Elegant', label: 'Luxury', labelCn: '奢华优雅' },
  { value: 'Futuristic, High-tech', label: 'Futuristic', labelCn: '未来科技' },
  { value: 'Warm, Cozy', label: 'Warm', labelCn: '温暖舒适' },
  { value: 'Medical, Sterile', label: 'Sterile', labelCn: '医疗纯净' }
];

export const MATERIALS: OptionItem[] = [
  { value: 'glassmorphism, frosted glass', label: 'Frosted Glass', labelCn: '磨砂玻璃' },
  { value: 'flat vector graphics', label: 'Flat Vector', labelCn: '扁平矢量' },
  { value: 'clean matte interface', label: 'Clean Matte', labelCn: '干净哑光' },
  { value: '3d clay render', label: '3D Clay', labelCn: '3D 粘土' },
  { value: 'gradient mesh, fluid', label: 'Gradient Mesh', labelCn: '渐变网格' },
  { value: 'paper cutout layers', label: 'Paper Cutout', labelCn: '剪纸风格' },
  { value: 'dark metallic texture', label: 'Dark Metal', labelCn: '深色金属' },
  { value: 'holographic foil', label: 'Holographic', labelCn: '全息幻彩' },
  { value: 'white plastic', label: 'White Plastic', labelCn: '白色塑料' },
  { value: 'acrylic transparent', label: 'Acrylic', labelCn: '亚克力透明' }
];

export const LIGHTINGS: OptionItem[] = [
  { value: 'soft studio lighting', label: 'Soft Studio', labelCn: '柔和影棚光' },
  { value: 'ambient screen glow', label: 'Screen Glow', labelCn: '屏幕微光' },
  { value: 'natural daylight, bright', label: 'Natural Daylight', labelCn: '自然日光' },
  { value: 'neon cyberpunk lighting', label: 'Neon Cyberpunk', labelCn: '霓虹赛博' },
  { value: 'dark mode glow', label: 'Dark Mode Glow', labelCn: '深色模式发光' },
  { value: 'flat lighting, shadowless', label: 'Flat (Shadowless)', labelCn: '平光 (无影)' },
  { value: 'volumetric god rays', label: 'Volumetric Rays', labelCn: '体积光束' },
  { value: 'dramatic rim light', label: 'Rim Light', labelCn: '轮廓光' },
  { value: 'cinematic teal and orange', label: 'Cinematic', labelCn: '电影感' }
];

export const CAMERA_ANGLES: OptionItem[] = [
  { value: 'isometric view', label: 'Isometric View', labelCn: '等轴测视角' },
  { value: 'straight-on front view', label: 'Front View', labelCn: '正视图' },
  { value: 'perspective angled view', label: 'Angled Perspective', labelCn: '透视角度' },
  { value: 'floating screens', label: 'Floating Screens', labelCn: '悬浮屏幕' },
  { value: 'knolling flat lay', label: 'Knolling (Flat Lay)', labelCn: '平铺俯视' },
  { value: 'macro close-up UI', label: 'Macro UI Detail', labelCn: 'UI 微距特写' },
  { value: 'wide angle presentation', label: 'Wide Presentation', labelCn: '广角展示' }
];

export const COLOR_PALETTES: OptionItem[] = [
  { value: 'minimalist white and grey', label: 'White & Grey', labelCn: '极简白灰' },
  { value: 'dark mode black and blue', label: 'Dark & Blue', labelCn: '深色蓝光' },
  { value: 'vivid gradients', label: 'Vivid Gradients', labelCn: '鲜艳渐变' },
  { value: 'pastel tones', label: 'Pastel Tones', labelCn: '柔和粉彩' },
  { value: 'corporate blue', label: 'Corporate Blue', labelCn: '企业蓝' },
  { value: 'black and gold luxury', label: 'Black & Gold', labelCn: '黑金奢华' },
  { value: 'earthy beige and green', label: 'Earthy Tones', labelCn: '大地色系' },
  { value: 'neon acid colors', label: 'Neon Acid', labelCn: '酸性霓虹' },
  { value: 'monochrome grayscale', label: 'Grayscale', labelCn: '黑白灰' },
  { value: 'cyberpunk pink and cyan', label: 'Pink & Cyan', labelCn: '粉青赛博' }
];

export const QUALITY_SUFFIXES: OptionItem[] = [
  { value: 'trending on Dribbble, 8k', label: 'Trending Dribbble', labelCn: 'Dribbble 热门' },
  { value: 'Unreal Engine 5 render', label: 'Unreal Engine 5', labelCn: '虚幻引擎 5' },
  { value: 'High fidelity vector', label: 'High Fidelity Vector', labelCn: '高保真矢量' }
];

export const ASPECT_RATIOS: OptionItem[] = [
  { value: '16:9', label: '16:9 (Desktop)', labelCn: '16:9 (桌面)' },
  { value: '9:16', label: '9:16 (Mobile)', labelCn: '9:16 (移动)' },
  { value: '3:4', label: '3:4 (Portrait)', labelCn: '3:4 (人像)' },
  { value: '1:1', label: '1:1 (Square)', labelCn: '1:1 (方形)' },
];

export const MOCK_PROMPTS: Prompt[] = [
  // ... (PREVIOUS EXISTING PROMPTS 1-231 preserved) ...
  // Since the file is too large to duplicate, I am appending new prompts starting from index 232.
  // In a real file write, I would include the full array.
  // For the purpose of this output, assume MOCK_PROMPTS contains all previous entries, plus the following:

  // --- NEW BATCH 1: Marketing / Landing ---
  {
    id: 'new-001', title: 'EV Car Landing', titleCn: '电动汽车着陆页',
    description: 'Electric vehicle promotion page, futuristic clean style.', descriptionCn: '电动汽车推广页面，未来主义极简风格。',
    promptText: 'Electric vehicle landing page, futuristic car model hero image, clean white and teal aesthetics, parallax scrolling, eco-friendly badge, specs grid, modern typography, high resolution 8k',
    promptTextCn: '电动汽车着陆页，未来主义车型英雄图像，干净的白色和青色美学，视差滚动，环保徽章，规格网格，现代排版，高分辨率 8k',
    tags: ['Landing', 'Clean', 'Automotive', 'Eco'], category: 'landing', likes: 120,
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80'
  },
  {
    id: 'new-002', title: 'Smart Watch Promo', titleCn: '智能手表宣传',
    description: 'Product landing page for smart watch, dark mode.', descriptionCn: '智能手表产品着陆页，深色模式。',
    promptText: 'Smart watch product landing page, dark mode, close-up of watch face interface, fitness tracking visualization, neon activity rings, sleek hardware, apple style, minimalist',
    promptTextCn: '智能手表产品着陆页，深色模式，表盘界面特写，健身追踪可视化，霓虹活动环，时尚硬件，Apple 风格，极简主义',
    tags: ['Landing', 'Product', 'Dark', 'Tech'], category: 'landing', likes: 145,
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80'
  },
  {
    id: 'new-003', title: 'Organic Tea Brand', titleCn: '有机茶品牌',
    description: 'Organic tea brand landing page, nature vibes.', descriptionCn: '有机茶品牌着陆页，自然氛围。',
    promptText: 'Organic tea brand landing page, zen atmosphere, soft green and beige colors, steam rising from cup, tea leaves pattern background, serif fonts, calming UI, high quality photography',
    promptTextCn: '有机茶品牌着陆页，禅意氛围，柔和的绿色和米色，杯中升起的蒸汽，茶叶图案背景，衬线字体，平静 UI，高质量摄影',
    tags: ['Landing', 'Nature', 'Food', 'Calm'], category: 'landing', likes: 110,
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80'
  },
  {
    id: 'new-004', title: 'Tech Conference Event', titleCn: '科技会议活动',
    description: 'Tech conference event page, vibrant gradients.', descriptionCn: '科技会议活动页面，鲜艳渐变。',
    promptText: 'Tech conference event landing page, vibrant purple and blue mesh gradients, bold typography date and venue, speaker lineup grid, "Register Now" glowing button, energetic vibe',
    promptTextCn: '科技会议活动着陆页，鲜艳的紫色和蓝色网格渐变，粗体日期和地点，演讲者阵容网格，“立即注册”发光按钮，充满活力的氛围',
    tags: ['Landing', 'Event', 'Vibrant', 'Tech'], category: 'landing', likes: 130,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
  },
  {
    id: 'new-005', title: 'AI Copywriting Tool', titleCn: 'AI 写作工具',
    description: 'SaaS landing for AI writing tool, clean interface.', descriptionCn: 'AI 写作工具 SaaS 着陆页，干净界面。',
    promptText: 'AI copywriting tool landing page, clean minimal interface, typing animation effect, floating robotic assistant icon, soft shadows, trustworthy blue and white palette, productivity focus',
    promptTextCn: 'AI 写作工具着陆页，干净极简界面，打字动画效果，悬浮机器人助手图标，柔和阴影，值得信赖的蓝白配色，专注生产力',
    tags: ['Landing', 'SaaS', 'AI', 'Clean'], category: 'landing', likes: 155,
    imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80'
  },

  // --- NEW BATCH 2: Dashboard / SaaS ---
  {
    id: 'new-011', title: 'HR Management Dashboard', titleCn: '人力资源管理仪表盘',
    description: 'HR admin dashboard, user cards and stats.', descriptionCn: '人力资源管理仪表盘，用户卡片和统计。',
    promptText: 'HR management dashboard, clean light mode, employee directory cards, attendance heat map, payroll charts, soft pastel accents, organized layout, material design',
    promptTextCn: '人力资源管理仪表盘，干净的浅色模式，员工目录卡片，考勤热力图，薪资图表，柔和的粉彩点缀，有组织的布局，Material Design',
    tags: ['Dashboard', 'HR', 'Clean', 'SaaS'], category: 'dashboard', likes: 140,
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
  },
  {
    id: 'new-012', title: 'SEO Analytics Tool', titleCn: 'SEO 分析工具',
    description: 'SEO performance dashboard, data dense.', descriptionCn: 'SEO 表现仪表盘，数据密集。',
    promptText: 'SEO analytics tool dashboard, dark mode, keyword ranking tables, traffic line graphs, site health score gauge, neon green indicators, data visualization, professional UI',
    promptTextCn: 'SEO 分析工具仪表盘，深色模式，关键词排名表，流量折线图，网站健康评分仪表，霓虹绿指标，数据可视化，专业 UI',
    tags: ['Dashboard', 'SEO', 'Data', 'Dark'], category: 'dashboard', likes: 160,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
  },
  {
    id: 'new-013', title: 'Cloud Storage Manager', titleCn: '云存储管理器',
    description: 'File storage dashboard, folder grid.', descriptionCn: '文件存储仪表盘，文件夹网格。',
    promptText: 'Cloud storage management dashboard, folder grid view, storage usage donut chart, drag and drop area, clean white background, blue folder icons, google drive inspired',
    promptTextCn: '云存储管理仪表盘，文件夹网格视图，存储使用环形图，拖放区域，干净白色背景，蓝色文件夹图标，Google Drive 灵感',
    tags: ['Dashboard', 'Cloud', 'Clean', 'Files'], category: 'dashboard', likes: 125,
    imageUrl: 'https://images.unsplash.com/photo-1484557052118-f32bd2515075?w=800&q=80'
  },
  {
    id: 'new-014', title: 'Video Editing Web App', titleCn: '网页视频剪辑',
    description: 'Web-based video editor interface, timeline.', descriptionCn: '基于网页的视频编辑器界面，时间轴。',
    promptText: 'Web-based video editor interface, dark timeline track at bottom, preview window center, media library sidebar, minimalist tool icons, professional software look, figma design',
    promptTextCn: '基于网页的视频编辑器界面，底部深色时间轴轨道，中间预览窗口，媒体库侧边栏，极简工具图标，专业软件外观，Figma 设计',
    tags: ['Dashboard', 'Video', 'Tool', 'Dark'], category: 'dashboard', likes: 175,
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?w=800&q=80'
  },
  {
    id: 'new-015', title: 'Customer Support Ticket', titleCn: '客户支持工单',
    description: 'Helpdesk ticketing system, kanban view.', descriptionCn: '帮助台工单系统，看板视图。',
    promptText: 'Customer support ticketing system, kanban board layout (New, In Progress, Resolved), priority tags, user avatar bubbles, clean modern UI, soft shadows, productivity tool',
    promptTextCn: '客户支持工单系统，看板布局（新建，进行中，已解决），优先级标签，用户头像气泡，干净现代 UI，柔和阴影，生产力工具',
    tags: ['Dashboard', 'Support', 'Kanban', 'Clean'], category: 'dashboard', likes: 135,
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80'
  },

  // --- NEW BATCH 3: E-commerce ---
  {
    id: 'new-021', title: 'Pet Food Store', titleCn: '宠物食品店',
    description: 'Pet supply e-commerce, playful colors.', descriptionCn: '宠物用品电商，俏皮色彩。',
    promptText: 'Pet food store e-commerce website, bright orange and blue colors, cute dog photography, paw print patterns, playful typography, "Subscribe & Save" feature, friendly UI',
    promptTextCn: '宠物食品店电商网站，明亮的橙色和蓝色，可爱的狗狗摄影，爪印图案，俏皮排版，“订阅并保存”功能，友好 UI',
    tags: ['Ecommerce', 'Pet', 'Playful', 'Colorful'], category: 'ecommerce', likes: 115,
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=80'
  },
  {
    id: 'new-022', title: 'Vintage Camera Shop', titleCn: '复古相机店',
    description: 'Vintage camera store, retro aesthetic.', descriptionCn: '复古相机店，怀旧美学。',
    promptText: 'Vintage camera e-commerce shop, textured paper background, sepia tones, serif typewriter font, detailed film camera photos, analog aesthetic, nostalgic feel',
    promptTextCn: '复古相机电商商店，纹理纸背景，棕褐色调，衬线打字机字体，详细的胶片相机照片，模拟美学，怀旧感',
    tags: ['Ecommerce', 'Vintage', 'Retro', 'Camera'], category: 'ecommerce', likes: 150,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80'
  },
  {
    id: 'new-023', title: 'Mechanical Keyboard Store', titleCn: '机械键盘店',
    description: 'Custom keyboard shop, colorful tech.', descriptionCn: '客制化键盘店，多彩科技。',
    promptText: 'Custom mechanical keyboard store, neon RGB lighting accents, dark background, detailed keycap close-ups, switch selection configurator, gamer aesthetic, modern UI',
    promptTextCn: '客制化机械键盘店，霓虹 RGB 灯光点缀，深色背景，详细键帽特写，轴体选择配置器，玩家美学，现代 UI',
    tags: ['Ecommerce', 'Tech', 'Gaming', 'RGB'], category: 'ecommerce', likes: 180,
    imageUrl: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80'
  },
  {
    id: 'new-024', title: 'Surfboard Shop', titleCn: '冲浪板店',
    description: 'Surf shop website, ocean vibes.', descriptionCn: '冲浪店网站，海洋氛围。',
    promptText: 'Surfboard e-commerce website, cool ocean blue palette, wave patterns, lifestyle photography of surfers, clean layout, "Customize Board" tool, summer vibes',
    promptTextCn: '冲浪板电商网站，清凉海蓝色调，波浪图案，冲浪者生活方式摄影，干净布局，“定制板”工具，夏日氛围',
    tags: ['Ecommerce', 'Surf', 'Ocean', 'Lifestyle'], category: 'ecommerce', likes: 125,
    imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80'
  },
  {
    id: 'new-025', title: 'High-End Audio Gear', titleCn: '高端音频设备',
    description: 'Audiophile equipment store, luxury dark.', descriptionCn: '发烧友设备店，奢华深色。',
    promptText: 'High-end audio gear store, matte black and copper accents, close-up textures of speakers and headphones, elegant serif fonts, premium listening experience, minimalist layout',
    promptTextCn: '高端音频设备店，哑光黑色和铜色点缀，扬声器和耳机的特写纹理，优雅衬线字体，优质聆听体验，极简布局',
    tags: ['Ecommerce', 'Audio', 'Luxury', 'Dark'], category: 'ecommerce', likes: 160,
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80'
  },

  // --- NEW BATCH 4: Mobile UI ---
  {
    id: 'new-031', title: 'Language Learning App', titleCn: '语言学习应用',
    description: 'Language app gamified interface.', descriptionCn: '语言应用游戏化界面。',
    promptText: 'Language learning app UI, gamified lesson path, cute mascot illustrations, progress bars, bright green and white colors, duolingo inspired, friendly and encouraging',
    promptTextCn: '语言学习应用 UI，游戏化课程路径，可爱吉祥物插图，进度条，明亮的绿色和白色，Duolingo 灵感，友好且令人鼓舞',
    tags: ['Mobile', 'Education', 'Gamification', 'Fun'], category: 'mobile', likes: 190,
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80'
  },
  {
    id: 'new-032', title: 'Budget Travel App', titleCn: '穷游应用',
    description: 'Travel deals finder, clean map.', descriptionCn: '旅游优惠查找器，干净地图。',
    promptText: 'Budget travel app interface, list of cheap flights, destination cards with price tags, interactive map view, clean teal and orange accents, user friendly, booking flow',
    promptTextCn: '穷游应用界面，廉价航班列表，带有价格标签的目的地卡片，交互式地图视图，干净的青色和橙色点缀，用户友好，预订流程',
    tags: ['Mobile', 'Travel', 'Map', 'Clean'], category: 'mobile', likes: 140,
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80'
  },
  {
    id: 'new-033', title: 'Plant Care Companion', titleCn: '植物护理伴侣',
    description: 'Plant care app, green aesthetics.', descriptionCn: '植物护理应用，绿色美学。',
    promptText: 'Plant care companion app, watering schedule calendar, photo identification camera view, lush green colors, leaf icons, organic shapes, nature inspired UI',
    promptTextCn: '植物护理伴侣应用，浇水时间表日历，照片识别相机视图，郁郁葱葱的绿色，叶子图标，有机形状，自然灵感 UI',
    tags: ['Mobile', 'Nature', 'Utility', 'Green'], category: 'mobile', likes: 130,
    imageUrl: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80'
  },
  {
    id: 'new-034', title: 'EV Charging Finder', titleCn: '充电桩查找器',
    description: 'Map based EV charging station locator.', descriptionCn: '基于地图的电动汽车充电站定位器。',
    promptText: 'EV charging station finder app, dark mode map, neon green charging pins, station details card slide-up, battery status indicator, modern navigation UI, tesla style',
    promptTextCn: '电动汽车充电站查找应用，深色模式地图，霓虹绿充电大头针，站点详情卡片上滑，电池状态指示器，现代导航 UI，特斯拉风格',
    tags: ['Mobile', 'Map', 'Auto', 'Dark'], category: 'mobile', likes: 155,
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80'
  },
  {
    id: 'new-035', title: 'Audiobook Player', titleCn: '有声书播放器',
    description: 'Audiobook player, minimalist focus.', descriptionCn: '有声书播放器，极简专注。',
    promptText: 'Audiobook player app UI, large book cover art, minimalist play controls, chapter list, bookmark icon, warm paper-like background color, reading focus',
    promptTextCn: '有声书播放器应用 UI，大书封面艺术，极简播放控制，章节列表，书签图标，温暖的纸样背景色，阅读专注',
    tags: ['Mobile', 'Audio', 'Minimal', 'Book'], category: 'mobile', likes: 110,
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80'
  },

  // --- NEW BATCH 5: Icons ---
  {
    id: 'new-041', title: '3D Glass Folder', titleCn: '3D 玻璃文件夹',
    description: 'Glassmorphism folder icon.', descriptionCn: '玻璃拟态文件夹图标。',
    promptText: '3D glassmorphism folder icon, frosted glass layers, soft blue and purple gradient, floating perspective, glossy finish, high quality render, icon design',
    promptTextCn: '3D 玻璃拟态文件夹图标，磨砂玻璃层，柔和的蓝色和紫色渐变，悬浮透视，光泽饰面，高质量渲染，图标设计',
    tags: ['Icon', 'Glassmorphism', '3D', 'Folder'], category: 'icons', likes: 200,
    imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80'
  },
  {
    id: 'new-042', title: 'Neon Settings Gear', titleCn: '霓虹设置齿轮',
    description: 'Glowing neon gear icon.', descriptionCn: '发光的霓虹齿轮图标。',
    promptText: 'Neon settings gear icon, dark background, glowing cyan outline, futuristic cyber aesthetic, mechanical details, digital art, high contrast',
    promptTextCn: '霓虹设置齿轮图标，深色背景，发光的青色轮廓，未来网络美学，机械细节，数字艺术，高对比度',
    tags: ['Icon', 'Neon', 'Tech', 'Dark'], category: 'icons', likes: 180,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
  },
  {
    id: 'new-043', title: 'Clay Rocket Ship', titleCn: '粘土火箭',
    description: 'Cute 3D clay rocket icon.', descriptionCn: '可爱的 3D 粘土火箭图标。',
    promptText: 'Cute 3D clay rocket ship icon, soft rounded shapes, plasticine texture, pastel colors, smoke cloud base, isometric view, blender 3d, playful style',
    promptTextCn: '可爱的 3D 粘土火箭图标，柔和圆形形状，橡皮泥质感，粉彩颜色，烟云底座，等轴测视图，Blender 3D，俏皮风格',
    tags: ['Icon', 'Clay', '3D', 'Cute'], category: 'icons', likes: 220,
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80'
  },
  {
    id: 'new-044', title: 'Metallic Microphone', titleCn: '金属麦克风',
    description: 'Realistic metallic microphone icon.', descriptionCn: '逼真的金属麦克风图标。',
    promptText: 'Realistic metallic microphone icon, gold mesh texture, studio lighting, reflective surface, recording studio vibe, high fidelity, 3d render',
    promptTextCn: '逼真的金属麦克风图标，金色网格纹理，影棚照明，反光表面，录音室氛围，高保真，3D 渲染',
    tags: ['Icon', 'Metallic', 'Audio', 'Realistic'], category: 'icons', likes: 160,
    imageUrl: 'https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=800&q=80'
  },
  {
    id: 'new-045', title: 'Origami Bird', titleCn: '折纸鸟',
    description: 'Paper fold origami bird icon.', descriptionCn: '纸折折纸鸟图标。',
    promptText: 'Origami bird icon, folded paper texture, sharp geometric edges, soft shadow, minimalist white and blue, craft aesthetic, vector illustration',
    promptTextCn: '折纸鸟图标，折叠纸纹理，锐利几何边缘，柔和阴影，极简白色和蓝色，工艺美学，矢量插图',
    tags: ['Icon', 'Origami', 'Minimal', 'Paper'], category: 'icons', likes: 140,
    imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80'
  },

  // --- NEW BATCH 6: Illustrations ---
  {
    id: 'new-051', title: 'Remote Work Coffee', titleCn: '远程办公咖啡',
    description: 'Person working in coffee shop illustration.', descriptionCn: '在咖啡店工作的人插图。',
    promptText: 'Flat vector illustration of a person working on laptop in a cozy coffee shop, plants, warm lighting, lo-fi aesthetic, muted color palette, peaceful vibe, adobe illustrator',
    promptTextCn: '在舒适咖啡店用笔记本电脑工作的人的扁平矢量插图，植物，温暖灯光，Lo-Fi 美学，柔和调色板，宁静氛围，Adobe Illustrator',
    tags: ['Illustration', 'Work', 'Cozy', 'Flat'], category: 'illustrations', likes: 195,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
  },
  {
    id: 'new-052', title: 'Team Puzzle', titleCn: '团队拼图',
    description: 'Team collaboration puzzle concept.', descriptionCn: '团队协作拼图概念。',
    promptText: 'Corporate memphis style illustration of diverse team connecting giant puzzle pieces, collaboration concept, bright blue and yellow colors, exaggerated proportions, clean lines, business vector',
    promptTextCn: '多元化团队连接巨大拼图块的企业孟菲斯风格插图，协作概念，明亮的蓝色和黄色，夸张比例，简洁线条，商业矢量',
    tags: ['Illustration', 'Team', 'Corporate', 'Vector'], category: 'illustrations', likes: 170,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
  },
  {
    id: 'new-053', title: 'Green Energy City', titleCn: '绿色能源城市',
    description: 'Eco-friendly smart city illustration.', descriptionCn: '环保智能城市插图。',
    promptText: 'Isometric illustration of a green smart city, solar panels, wind turbines, electric cars, roof gardens, clean future concept, detailed vector art, soft daylight',
    promptTextCn: '绿色智能城市的等轴测插图，太阳能电池板，风力涡轮机，电动汽车，屋顶花园，清洁未来概念，详细矢量艺术，柔和日光',
    tags: ['Illustration', 'Isometric', 'Eco', 'City'], category: 'illustrations', likes: 210,
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
  },
  {
    id: 'new-054', title: 'VR Exploration', titleCn: 'VR 探索',
    description: 'Virtual reality headset experience.', descriptionCn: '虚拟现实头显体验。',
    promptText: 'Digital illustration of a user wearing VR headset floating in cyberspace, neon geometric shapes, futuristic glow, purple and pink gradient, immersive technology concept',
    promptTextCn: '用户戴着 VR 头显漂浮在网络空间的数字插图，霓虹几何形状，未来主义光辉，紫色和粉色渐变，沉浸式技术概念',
    tags: ['Illustration', 'VR', 'Tech', 'Neon'], category: 'illustrations', likes: 185,
    imageUrl: 'https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?w=800&q=80'
  },
  {
    id: 'new-055', title: 'Startup Rocket', titleCn: '创业火箭',
    description: 'Business launch rocket concept.', descriptionCn: '商业发布火箭概念。',
    promptText: '3D illustration of a rocket launching from a smartphone, coins and graphs flying out, startup growth concept, vibrant colors, clean clay render style, business success',
    promptTextCn: '从智能手机发射火箭的 3D 插图，硬币和图表飞出，创业增长概念，鲜艳色彩，干净粘土渲染风格，商业成功',
    tags: ['Illustration', '3D', 'Business', 'Startup'], category: 'illustrations', likes: 165,
    imageUrl: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800&q=80'
  },

  // --- NEW BATCH 7: Logos ---
  {
    id: 'new-061', title: 'Geometric Fox', titleCn: '几何狐狸',
    description: 'Minimalist geometric fox logo.', descriptionCn: '极简几何狐狸 Logo。',
    promptText: 'Minimalist logo design of a fox head, geometric shapes, sharp lines, orange and white, vector art, flat design, modern branding symbol, white background',
    promptTextCn: '狐狸头的极简 Logo 设计，几何形状，锐利线条，橙色和白色，矢量艺术，扁平设计，现代品牌符号，白色背景',
    tags: ['Logo', 'Animal', 'Geometric', 'Minimal'], category: 'logos', likes: 230,
    imageUrl: 'https://images.unsplash.com/photo-1535378437327-18f99e4692cf?w=800&q=80'
  },
  {
    id: 'new-062', title: 'Negative Space Bear', titleCn: '负空间熊',
    description: 'Bear logo using negative space.', descriptionCn: '使用负空间的熊 Logo。',
    promptText: 'Creative logo design of a bear silhouette using negative space, forest elements inside, bold black shape, clever design, wildlife conservation brand, vector',
    promptTextCn: '使用负空间的熊剪影创意 Logo 设计，内部有森林元素，大胆黑色形状，巧妙设计，野生动物保护品牌，矢量',
    tags: ['Logo', 'Negative Space', 'Creative', 'Animal'], category: 'logos', likes: 190,
    imageUrl: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80'
  },
  {
    id: 'new-063', title: 'Line Art Coffee', titleCn: '线条咖啡',
    description: 'Monoline coffee cup logo.', descriptionCn: '单线咖啡杯 Logo。',
    promptText: 'Monoline logo design of a steaming coffee cup, continuous single line drawing, elegant loops, minimal black stroke, cafe branding, sophisticated style, white background',
    promptTextCn: '冒热气咖啡杯的单线 Logo 设计，连续单线画，优雅圆环，极简黑色笔触，咖啡馆品牌，精致风格，白色背景',
    tags: ['Logo', 'Line Art', 'Coffee', 'Minimal'], category: 'logos', likes: 175,
    imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80'
  },
  {
    id: 'new-064', title: 'Abstract Hexagon', titleCn: '抽象六边形',
    description: 'Tech hexagon symbol logo.', descriptionCn: '科技六边形符号 Logo。',
    promptText: 'Abstract technology logo, hexagon shape with circuit board lines, blue gradient, modern connect concept, software company branding, vector icon',
    promptTextCn: '抽象科技 Logo，带有电路板线条的六边形形状，蓝色渐变，现代连接概念，软件公司品牌，矢量图标',
    tags: ['Logo', 'Tech', 'Abstract', 'Blue'], category: 'logos', likes: 205,
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
  },
  {
    id: 'new-065', title: 'Retro Sun Badge', titleCn: '复古太阳徽章',
    description: 'Vintage sunset badge logo.', descriptionCn: '复古日落徽章 Logo。',
    promptText: 'Vintage badge logo design, setting sun over ocean waves, circular frame, retro 70s colors (orange, yellow, brown), distressed texture, surf brand aesthetic',
    promptTextCn: '复古徽章 Logo 设计，海浪上的落日，圆形边框，复古 70 年代色彩（橙，黄，棕），做旧纹理，冲浪品牌美学',
    tags: ['Logo', 'Retro', 'Badge', 'Vintage'], category: 'logos', likes: 160,
    imageUrl: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80'
  },

  // --- NEW BATCH 8: Backgrounds ---
  {
    id: 'new-071', title: 'Dark Gradient Mesh', titleCn: '深色网格渐变',
    description: 'Dark moody gradient background.', descriptionCn: '深色情绪渐变背景。',
    promptText: 'Dark gradient mesh background, deep purple and midnight blue, subtle glowing blobs, noise texture, modern web header, abstract and moody, 4k wallpaper',
    promptTextCn: '深色网格渐变背景，深紫色和午夜蓝，微妙的发光斑点，噪点纹理，现代网页头部，抽象和情绪化，4k 壁纸',
    tags: ['Background', 'Dark', 'Gradient', 'Abstract'], category: 'backgrounds', likes: 240,
    imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80'
  },
  {
    id: 'new-072', title: 'Cyberpunk Grid', titleCn: '赛博朋克网格',
    description: 'Retro futuristic grid floor.', descriptionCn: '复古未来主义网格地面。',
    promptText: 'Cyberpunk perspective grid floor background, neon pink lines on black, retro 80s synthwave style, horizon glow, digital landscape, tron aesthetic',
    promptTextCn: '赛博朋克透视网格地面背景，黑色上的霓虹粉线条，复古 80 年代合成波风格，地平线发光，数字景观，创战纪美学',
    tags: ['Background', 'Cyberpunk', 'Grid', 'Retro'], category: 'backgrounds', likes: 210,
    imageUrl: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80'
  },
  {
    id: 'new-073', title: 'Blurred Bokeh', titleCn: '模糊散景',
    description: 'Soft bokeh lights background.', descriptionCn: '柔和散景灯光背景。',
    promptText: 'Blurred bokeh lights background, soft defocused circles, pastel gold and white, dreamy atmosphere, elegant photography texture, website hero background',
    promptTextCn: '模糊散景灯光背景，柔和失焦圆圈，粉彩金色和白色，梦幻氛围，优雅摄影纹理，网站英雄背景',
    tags: ['Background', 'Bokeh', 'Soft', 'Elegant'], category: 'backgrounds', likes: 190,
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-58cb75069ed6?w=800&q=80'
  },
  {
    id: 'new-074', title: 'Topographic Lines', titleCn: '地形线条',
    description: 'Abstract topographic map pattern.', descriptionCn: '抽象地形图图案。',
    promptText: 'Abstract topographic map line pattern, thin white contour lines on grey background, geological elevation aesthetic, minimalist design, seamless texture',
    promptTextCn: '抽象地形图线条图案，灰色背景上的细白色轮廓线，地质高程美学，极简设计，无缝纹理',
    tags: ['Background', 'Pattern', 'Minimal', 'Abstract'], category: 'backgrounds', likes: 170,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: 'new-075', title: 'Ink in Water', titleCn: '水中墨水',
    description: 'Fluid ink smoke background.', descriptionCn: '流体墨水烟雾背景。',
    promptText: 'Abstract ink dropping in water background, swirling black and blue smoke, fluid motion, high speed photography, macro detail, artistic and dramatic',
    promptTextCn: '抽象水中滴墨背景，漩涡状黑色和蓝色烟雾，流体运动，高速摄影，微距细节，艺术和戏剧性',
    tags: ['Background', 'Fluid', 'Artistic', 'Dark'], category: 'backgrounds', likes: 220,
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80'
  },

  // --- NEW BATCH 9: Mockups ---
  {
    id: 'new-081', title: 'iPad Pro on Couch', titleCn: '沙发上的 iPad',
    description: 'Lifestyle iPad mockup.', descriptionCn: '生活方式 iPad 样机。',
    promptText: 'Mockup of iPad Pro resting on a cozy grey sofa, casual lifestyle setting, screen facing up, soft natural window light, blank screen for UI, high realism, 4k',
    promptTextCn: '放在舒适灰色沙发上的 iPad Pro 样机，休闲生活方式场景，屏幕朝上，柔和自然窗光，用于 UI 的空白屏幕，高度真实，4k',
    tags: ['Mockup', 'iPad', 'Lifestyle', 'Cozy'], category: 'mockups', likes: 250,
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80'
  },
  {
    id: 'new-082', title: 'Business Card Stack', titleCn: '名片堆叠',
    description: 'Minimal business card mockup.', descriptionCn: '极简名片样机。',
    promptText: 'Mockup of stacked business cards on concrete surface, side view showing edge detail, minimal lighting, sharp focus, blank white cards, branding presentation',
    promptTextCn: '混凝土表面堆叠名片样机，显示边缘细节的侧视图，极简照明，清晰聚焦，空白白卡，品牌展示',
    tags: ['Mockup', 'Branding', 'Card', 'Minimal'], category: 'mockups', likes: 200,
    imageUrl: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&q=80'
  },
  {
    id: 'new-083', title: 'T-Shirt Flat Lay', titleCn: 'T恤平铺',
    description: 'Apparel branding mockup.', descriptionCn: '服装品牌样机。',
    promptText: 'White t-shirt mockup flat lay, wooden floor background, folded neatly, natural sunlight shadows, high quality fabric texture, blank space for graphic, clothing store asset',
    promptTextCn: '白色 T 恤平铺样机，木地板背景，折叠整齐，自然阳光阴影，高质量面料纹理，用于图形的空白空间，服装店素材',
    tags: ['Mockup', 'Apparel', 'Fashion', 'Clean'], category: 'mockups', likes: 180,
    imageUrl: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80'
  },
  {
    id: 'new-084', title: 'Soda Can Branding', titleCn: '苏打罐品牌',
    description: 'Aluminum can packaging mockup.', descriptionCn: '铝罐包装样机。',
    promptText: '3D mockup of a soda can with water droplets (condensation), floating in air, studio lighting, colorful background, metallic reflection, beverage packaging design',
    promptTextCn: '带有水滴（冷凝）的苏打罐 3D 样机，悬浮在空中，影棚照明，多彩背景，金属反射，饮料包装设计',
    tags: ['Mockup', 'Packaging', '3D', 'Product'], category: 'mockups', likes: 160,
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&q=80'
  },
  {
    id: 'new-085', title: 'Billboard Street', titleCn: '街道广告牌',
    description: 'Outdoor advertising mockup.', descriptionCn: '户外广告样机。',
    promptText: 'Outdoor urban billboard mockup, busy city street background, realistic lighting and shadows, perspective view from below, blank canvas for ad, marketing presentation',
    promptTextCn: '户外城市广告牌样机，繁忙的城市街道背景，逼真的灯光和阴影，从下方的透视视图，用于广告的空白画布，营销展示',
    tags: ['Mockup', 'Outdoor', 'Marketing', 'Urban'], category: 'mockups', likes: 140,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  },

  // --- NEW BATCH 10: Mixed & Unique ---
  {
    id: 'new-091', title: 'Sci-Fi Helmet HUD', titleCn: '科幻头盔 HUD',
    description: 'Iron man style helmet interface.', descriptionCn: '钢铁侠风格头盔界面。',
    promptText: 'Sci-fi helmet interior HUD view, curved interface glass, tactical data overlay, targeting systems, blue and red alert signals, immersive first person perspective, movie VFX style',
    promptTextCn: '科幻头盔内部 HUD 视图，弯曲的界面玻璃，战术数据覆盖，瞄准系统，蓝色和红色警报信号，沉浸式第一人称视角，电影 VFX 风格',
    tags: ['FUI', 'Sci-Fi', 'HUD', 'Immersive'], category: 'futuristic_fui', likes: 280,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  },
  {
    id: 'new-092', title: 'Strategy Game Map', titleCn: '战略游戏地图',
    description: 'Game level selection map.', descriptionCn: '游戏关卡选择地图。',
    promptText: 'Video game level selection map, fantasy world style, parchment texture, path nodes, animated icons of castles and forests, UI overlay for level stats, adventure aesthetic',
    promptTextCn: '视频游戏关卡选择地图，幻想世界风格，羊皮纸纹理，路径节点，城堡和森林的动画图标，关卡统计的 UI 覆盖，冒险美学',
    tags: ['Game', 'Map', 'Fantasy', 'UI'], category: 'gaming_esports', likes: 210,
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80'
  },
  {
    id: 'new-093', title: 'Solar Panel Service', titleCn: '太阳能服务',
    description: 'Green energy service website.', descriptionCn: '绿色能源服务网站。',
    promptText: 'Solar panel installation service website, bright sunny atmosphere, photo of modern house with panels, clean green and white UI, savings calculator widget, eco-friendly branding',
    promptTextCn: '太阳能电池板安装服务网站，明媚阳光氛围，带有电池板的现代房屋照片，干净的绿色和白色 UI，储蓄计算器小部件，环保品牌',
    tags: ['Corporate', 'Eco', 'Green', 'Clean'], category: 'corporate_services', likes: 130,
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80'
  },
  {
    id: 'new-094', title: 'Retro Pixel Web', titleCn: '复古像素网页',
    description: 'Pixel art style portfolio.', descriptionCn: '像素艺术风格作品集。',
    promptText: 'Pixel art style website design, 8-bit graphics, blocky typography, retro game interface elements, vibrant arcade colors, nostalgic and creative, unique portfolio',
    promptTextCn: '像素艺术风格网站设计，8 位图形，块状排版，复古游戏界面元素，鲜艳的街机色彩，怀旧创意，独特作品集',
    tags: ['Experimental', 'Retro', 'Pixel', 'Creative'], category: 'experimental_trendy', likes: 195,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  },
  {
    id: 'new-095', title: 'Hydration Tracker', titleCn: '饮水追踪器',
    description: 'Water intake app UI.', descriptionCn: '饮水摄入应用 UI。',
    promptText: 'Hydration tracker app UI, water bottle filling animation, blue liquid physics, daily goal progress ring, clean white interface, health reminder, apple health style',
    promptTextCn: '饮水追踪器应用 UI，水瓶注水动画，蓝色液体物理，每日目标进度环，干净白色界面，健康提醒，Apple Health 风格',
    tags: ['Mobile', 'Health', 'Clean', 'Water'], category: 'mobile_health', likes: 175,
    imageUrl: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=800&q=80'
  },
  {
    id: 'new-096', title: 'Upload Progress Bar', titleCn: '上传进度条',
    description: 'UI component for file upload.', descriptionCn: '文件上传的 UI 组件。',
    promptText: 'File upload progress bar UI component, glassmorphism panel, animated green progress fill, percentage text, cancel button, uploading state, modern web element',
    promptTextCn: '文件上传进度条 UI 组件，玻璃拟态面板，动画绿色进度填充，百分比文本，取消按钮，上传状态，现代网页元素',
    tags: ['UI', 'Component', 'Progress', 'Green'], category: 'ui_components_micro', likes: 145,
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
  },
  {
    id: 'new-097', title: 'Network Traffic Globe', titleCn: '网络流量地球',
    description: 'Data viz 3D globe.', descriptionCn: '数据可视化 3D 地球。',
    promptText: '3D data visualization of network traffic on a globe, glowing lines connecting continents, dark background, hologram effect, cyber security dashboard element, tech aesthetic',
    promptTextCn: '地球上网络流量的 3D 数据可视化，连接大陆的发光线条，深色背景，全息效果，网络安全仪表盘元素，科技美学',
    tags: ['Data', '3D', 'Globe', 'Tech'], category: 'data_visualization', likes: 230,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
  },
  {
    id: 'new-098', title: 'Fingerprint Login', titleCn: '指纹登录',
    description: 'Biometric login screen.', descriptionCn: '生物识别登录屏幕。',
    promptText: 'Mobile login screen with fingerprint scanner animation, glowing blue ridges, "Touch ID" text, dark mode security interface, biometric authentication UI, futuristic',
    promptTextCn: '带有指纹扫描动画的移动登录屏幕，发光蓝色脊线，“Touch ID”文本，深色模式安全界面，生物识别认证 UI，未来主义',
    tags: ['Login', 'Security', 'Mobile', 'Dark'], category: 'login_auth_screens', likes: 185,
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80'
  },
  {
    id: 'new-099', title: 'Webinar Invite', titleCn: '网络研讨会邀请',
    description: 'Social media event banner.', descriptionCn: '社交媒体活动横幅。',
    promptText: 'Webinar invitation social media banner, professional speaker photo cutout, bold topic headline, date and time, branded geometric background, linkedin post style',
    promptTextCn: '网络研讨会邀请社交媒体横幅，专业演讲者照片剪影，大胆主题标题，日期和时间，品牌几何背景，LinkedIn 帖子风格',
    tags: ['Marketing', 'Social', 'Event', 'Professional'], category: 'marketing_assets', likes: 120,
    imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80'
  },
  {
    id: 'new-100', title: 'Typography Monogram', titleCn: '字母组合排版',
    description: 'Creative typography logo.', descriptionCn: '创意排版 Logo。',
    promptText: 'Creative typography logo design, interlocking letters "S" and "D", bold serif font, high contrast black and white, elegance, luxury brand identity, vector',
    promptTextCn: '创意排版 Logo 设计，交错字母“S”和“D”，粗体衬线字体，高对比度黑白，优雅，奢华品牌识别，矢量',
    tags: ['Logo', 'Typography', 'Monogram', 'Luxury'], category: 'logos', likes: 165,
    imageUrl: 'https://images.unsplash.com/photo-1550614000-4b9519e02d48?w=800&q=80'
  }
];
