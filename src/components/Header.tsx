import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Compass, 
  Map as MapIcon, 
  Diamond, 
  Users, 
  Check, 
  X, 
  RotateCcw, 
  ArrowRight,
  Search as SearchIcon,
  ChevronRight,
  Flame
} from 'lucide-react';

const modules = [
  { id: 1, title: '1. O que é UX / UI', href: '/introducao', icon: BookOpen, desc: 'Diferença entre UI e UX, definições e conceitos fundamentais.', storageKey: 'ux_academy_mod1' },
  { id: 2, title: '2. Heurísticas e Arquitetura', href: '/heuristicas-arquitetura', icon: Compass, desc: '10 Heurísticas de Nielsen, Arquitetura de Informação e Card Sorting.', storageKey: 'ux_academy_mod2' },
  { id: 3, title: '3. Jornada e Fluxo', href: '/jornada-fluxo', icon: MapIcon, desc: 'Mapeamento de Jornada do Usuário, User Flows e Mapa de Empatia.', storageKey: 'ux_academy_mod3' },
  { id: 4, title: '4. Double Diamond', href: '/double-diamond', icon: Diamond, desc: 'Framework metodológico de design (Descobrir, Definir, Desenvolver, Entregar).', storageKey: 'ux_academy_mod4' },
  { id: 5, title: '5. Proto-Persona', href: '/proto-persona', icon: Users, desc: 'Personas hipotéticas, matriz CSD e alinhamento de suposições.', storageKey: 'ux_academy_mod5' },
];

const searchIndex = [
  { title: "O que é UX (User Experience)", href: "/introducao#o-que-e-ux", snippet: "Como o usuário se sente ao usar um produto digital, focado no ser humano.", keywords: "ux user experience introducao" },
  { title: "Diferença entre UI e UX", href: "/introducao#diferenca-ui-ux", snippet: "Interface de usuário (o que se vê) contra a experiência de atravessá-la (o que se sente).", keywords: "ui ux diferenca definicao" },
  { title: "Heurísticas de Nielsen", href: "/heuristicas-arquitetura#heuristica-nielsen", snippet: "As 10 regras de ouro da usabilidade de interfaces.", keywords: "heuristica nielsen regras usabilidade" },
  { title: "Arquitetura de Informação", href: "/heuristicas-arquitetura#facilidade-estrutural", snippet: "Organização do esqueleto de dados, Sitemap e triângulo de Rosenfeld.", keywords: "arquitetura sitemap informacao rosenfeld" },
  { title: "Card Sorting", href: "/heuristicas-arquitetura#card-sorting", snippet: "Técnica de pesquisa: aberto, fechado e híbrido.", keywords: "card sorting aberto fechado hibrido" },
  { title: "Jornada do Usuário", href: "/jornada-fluxo#jornada-usuario", snippet: "Fases, ações, touchpoints, dores e magic moments da jornada.", keywords: "jornada touchpoint pain point magic moment" },
  { title: "Fluxo de Usuário (User Flow)", href: "/jornada-fluxo#fluxo-usuario", snippet: "Happy path, caminhos de erro, diagramas e símbolos.", keywords: "fluxo user flow happy path erro" },
  { title: "Mapa de Empatia", href: "/jornada-fluxo#mapa-empatia", snippet: "Contexto sensorial e emocional do usuário: o que vê, ouve, pensa e sente.", keywords: "empatia mapa dores ganhos" },
  { title: "Fases do Double Diamond", href: "/double-diamond#double-diamond", snippet: "Descobrir, Definir, Desenvolver e Entregar (divergência e convergência).", keywords: "double diamond descobrir definir desenvolver entregar" },
  { title: "Proto-Persona e Suposições", href: "/proto-persona#proto-persona", snippet: "Criação de personas baseadas nas suposições iniciais da equipe.", keywords: "proto persona hipotese csd" }
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [completedModules, setCompletedModules] = useState<boolean[]>([false, false, false, false, false]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Update progress state from localStorage
  const checkProgress = () => {
    const progress = modules.map(mod => localStorage.getItem(mod.storageKey) === 'true');
    setCompletedModules(progress);
  };

  useEffect(() => {
    checkProgress();
    
    // Custom event listener for page progress updates
    window.addEventListener('progressUpdate', checkProgress);
    window.addEventListener('storage', checkProgress);
    
    return () => {
      window.removeEventListener('progressUpdate', checkProgress);
      window.removeEventListener('storage', checkProgress);
    };
  }, []);

  // Close overlays when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
        setModulesOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close search on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  const completedCount = completedModules.filter(Boolean).length;
  const progressPercent = Math.round((completedCount / modules.length) * 100);

  const resetProgress = () => {
    if (window.confirm('Deseja realmente reiniciar todo o seu progresso?')) {
      modules.forEach(mod => localStorage.removeItem(mod.storageKey));
      checkProgress();
      setProfileOpen(false);
      // Notify other pages
      window.dispatchEvent(new Event('progressUpdate'));
    }
  };

  const filteredSearchResults = searchQuery.trim() === '' 
    ? [] 
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.keywords.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearchResultClick = (href: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    
    const [path, hash] = href.split('#');
    navigate(path);
    
    if (hash) {
      // Small timeout to allow page layout to mount/render
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  return (
    <>
      {/* Floating Header Wrapper */}
      <div ref={headerRef} className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl header-container">
        <header className="flex items-center justify-between bg-black/90 backdrop-blur-md px-6 py-2.5 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] select-none">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-lg font-display font-black tracking-tight text-white pl-1">
              UX Academy
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#7cb6d3] group-hover:scale-150 transition-transform duration-300"></span>
          </Link>

          {/* Navigation Button Dock */}
          <div className="button-container relative" style={{ width: 'auto', gap: '8px', padding: '0 4px', height: 'auto', backgroundColor: 'transparent' }}>
            {/* Button 1: Home */}
            <button 
              onClick={() => {
                navigate('/');
                setProfileOpen(false);
                setModulesOpen(false);
              }}
              className={`button relative ${location.pathname === '/' ? 'text-[#7cb6d3]' : 'text-white'}`}
              title="Início"
            >
              <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
              </svg>
            </button>

            {/* Button 2: Search */}
            <button 
              onClick={() => {
                setSearchOpen(true);
                setProfileOpen(false);
                setModulesOpen(false);
              }}
              className={`button ${searchOpen ? 'text-[#7cb6d3]' : 'text-white'}`}
              title="Pesquisar Tópicos"
            >
              <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Button 3: Profile/Progress */}
            <button 
              onClick={() => {
                setProfileOpen(!profileOpen);
                setModulesOpen(false);
              }}
              className={`button relative ${profileOpen ? 'text-[#7cb6d3]' : 'text-white'}`}
              title="Seu Progresso"
            >
              <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
              </svg>
              {completedCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-[#7cb6d3] border border-black animate-pulse-glow"></span>
              )}
            </button>

            {/* Button 4: Modules List */}
            <button 
              onClick={() => {
                setModulesOpen(!modulesOpen);
                setProfileOpen(false);
              }}
              className={`button ${modulesOpen ? 'text-[#7cb6d3]' : 'text-white'}`}
              title="Módulos do Curso"
            >
              <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <circle cx={9} cy={21} r={1} />
                <circle cx={20} cy={21} r={1} />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>
        </header>

        {/* --- Profile Progress Popover --- */}
        {profileOpen && (
          <div className="absolute top-16 right-0 bg-[#121111]/95 backdrop-blur-md border border-white/10 text-white rounded-2xl p-5 w-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7cb6d3] to-emerald-400 flex items-center justify-center font-black text-black">
                {completedCount === modules.length ? <Flame className="size-5 text-black animate-pulse" /> : <span className="text-sm">UX</span>}
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Seu Progresso</h4>
                <p className="text-[11px] text-white/50">{completedCount} de {modules.length} módulos concluídos</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5 mb-6">
              <div className="flex justify-between text-xs font-semibold text-white/80">
                <span>Progresso Geral</span>
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#7cb6d3] h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Modules Checkbox List */}
            <div className="space-y-3 mb-6">
              {modules.map((mod, idx) => (
                <div 
                  key={mod.id} 
                  onClick={() => {
                    navigate(mod.href);
                    setProfileOpen(false);
                  }}
                  className="flex items-center justify-between text-xs hover:text-white text-white/70 cursor-pointer p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium truncate pr-2">{mod.title.substring(3)}</span>
                  {completedModules[idx] ? (
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent"></span>
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Reset progress */}
            <button 
              onClick={resetProgress}
              className="w-full py-2 bg-red-950/20 hover:bg-red-950/40 border border-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="size-3.5" />
              Recomeçar Curso
            </button>
          </div>
        )}

        {/* --- Modules Directory Dropdown --- */}
        {modulesOpen && (
          <div className="absolute top-16 right-0 bg-[#121111]/95 backdrop-blur-md border border-white/10 text-white rounded-2xl p-4 w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <h3 className="text-white/40 text-[10px] font-black uppercase tracking-widest px-2 mb-3">Módulos de Estudo</h3>
            <div className="flex flex-col gap-1.5">
              {modules.map((mod, idx) => {
                const Icon = mod.icon;
                const isCompleted = completedModules[idx];
                const isActive = location.pathname === mod.href;
                return (
                  <button
                    key={mod.id}
                    onClick={() => {
                      navigate(mod.href);
                      setModulesOpen(false);
                    }}
                    className={`flex items-start gap-3.5 p-2.5 rounded-xl text-left border transition-all duration-200 group ${
                      isActive 
                        ? 'bg-[#7cb6d3]/10 border-[#7cb6d3]/30 text-white' 
                        : 'bg-transparent border-transparent text-white/80 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-200 ${
                      isActive ? 'bg-[#7cb6d3] text-black' : 'bg-white/5 text-white/60 group-hover:bg-[#7cb6d3] group-hover:text-black'
                    }`}>
                      <Icon className="size-4.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold leading-none">{mod.title}</span>
                        {isCompleted && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        )}
                      </div>
                      <p className="text-[10px] text-white/40 group-hover:text-white/60 mt-1 line-clamp-1 leading-normal font-medium">{mod.desc}</p>
                    </div>
                    <ChevronRight className="size-4 self-center text-white/20 group-hover:text-white/50 transition-transform group-hover:translate-x-0.5" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* --- Search Modal Overlay --- */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-[#121111]/95 backdrop-blur-lg flex items-start justify-center p-6 pt-24 md:pt-32 transition-all duration-300 animate-in fade-in duration-300">
          <div className="bg-[#1c1a1a] border border-white/10 w-full max-w-2xl rounded-3xl p-6 shadow-2xl relative flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-200">
            {/* Close button */}
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute top-5 right-5 text-white/40 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors"
            >
              <X className="size-5" />
            </button>

            {/* Title */}
            <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/5">
              <SearchIcon className="size-6 text-[#7cb6d3]" />
              <div>
                <h3 className="text-lg font-display font-black text-white leading-none">Buscar na Academy</h3>
                <p className="text-[11px] text-white/40 mt-1">Busque instantaneamente por heurísticas, jornadas, flows e metodologias</p>
              </div>
            </div>

            {/* Input field */}
            <div className="relative mb-6">
              <input 
                ref={searchInputRef}
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="O que você deseja aprender hoje?" 
                className="w-full bg-[#121111] border border-white/10 text-white rounded-2xl py-4 pl-5 pr-12 text-sm focus:outline-none focus:border-[#7cb6d3]/50 focus:ring-1 focus:ring-[#7cb6d3]/50 font-medium placeholder-white/25"
              />
            </div>

            {/* Results display */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-3.5 custom-scrollbar min-h-[200px]">
              {searchQuery.trim() === '' ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 text-white/30">
                  <Flame className="size-8 text-[#7cb6d3]/40 mb-3 animate-pulse" />
                  <p className="text-xs font-bold">Digite um termo para começar a busca</p>
                  <p className="text-[10px] max-w-xs mt-1">Experimente buscar por: "nielsen", "persona", "flow", "happy path", "diamond"</p>
                </div>
              ) : filteredSearchResults.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12 text-white/30">
                  <X className="size-8 text-red-500/40 mb-3" />
                  <p className="text-xs font-bold">Nenhum resultado encontrado</p>
                  <p className="text-[10px] max-w-xs mt-1">Não encontramos tópicos correspondentes a "{searchQuery}". Tente outros termos.</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-widest pl-2 mb-2">{filteredSearchResults.length} resultados encontrados</p>
                  {filteredSearchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchResultClick(item.href)}
                      className="w-full text-left bg-[#121111]/40 border border-white/5 hover:border-[#7cb6d3]/30 hover:bg-[#7cb6d3]/5 p-4 rounded-2xl transition-all duration-200 group flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-[#7cb6d3] transition-colors">{item.title}</h4>
                        <p className="text-xs text-white/60 leading-relaxed font-medium">{item.snippet}</p>
                      </div>
                      <ArrowRight className="size-4.5 text-white/20 group-hover:text-[#7cb6d3] self-center -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
