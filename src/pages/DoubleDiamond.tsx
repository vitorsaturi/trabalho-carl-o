import { useState, useEffect } from 'react';
import { Diamond, Check, ArrowRight, Compass, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function DoubleDiamond() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem('ux_academy_mod4') === 'true');
  }, []);

  const toggleComplete = () => {
    const nextState = !completed;
    localStorage.setItem('ux_academy_mod4', String(nextState));
    setCompleted(nextState);
    window.dispatchEvent(new Event('progressUpdate'));
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-16">
        <div className="inline-flex items-center gap-3 bg-[#7cb6d3]/10 text-[#7cb6d3] border border-[#7cb6d3]/20 px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-8">
          <Diamond size={18} />
          <span>Módulo 4: Double Diamond Framework</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-16 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Double Diamond
        </h1>

        <div className="space-y-16">
          {/* Section 1: O Framework */}
          <section id="double-diamond" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              9 – O Framework Double Diamond
            </h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed font-medium">
              <p className="text-lg">
                O <strong className="text-white">Double Diamond (Duplo Diamante)</strong> é um modelo de Design Thinking que orienta o desenvolvimento de produtos e serviços por meio de um processo estruturado de descoberta, definição, desenvolvimento e entrega. Sua principal contribuição é evitar que soluções sejam criadas antes da compreensão adequada do problema.
              </p>

              {/* Academic Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Processo & Heurísticas</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Ao longo de suas quatro etapas – <strong>Discover, Define, Develop e Deliver</strong> – são utilizadas diversas ferramentas de UX, como mapas de empatia, jornadas do usuário, personas, wireframes e protótipos.
                  </p>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">
                    Esse processo também favorece a aplicação das <strong>heurísticas de Nielsen</strong>, pois promove avaliações constantes da usabilidade, da clareza das interfaces e da adequação das soluções às necessidades dos usuários.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Objetivos do Módulo</h4>
                  <ul className="list-disc pl-5 text-sm text-white/60 space-y-1.5 leading-relaxed">
                    <li>Compreender o processo de Design Centrado no Usuário.</li>
                    <li>Estruturar a resolução de problemas de forma visual.</li>
                    <li>Desenvolver soluções mais assertivas e validadas.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-sm text-white/80 mb-8 leading-relaxed">
                <h5 className="font-bold text-white mb-1.5 uppercase tracking-wide text-base">Como funciona: Divergência e Convergência</h5>
                <p>O framework divide o projeto em quatro fases organizadas em dois "diamantes" representados pela expansão (abrir o leque / explorar possibilidades) e contração (fechar o leque / focar na melhor alternativa).</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Diamond 1 */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                  <h4 className="font-bold text-[#7cb6d3] text-lg flex items-center gap-2">
                    <Compass size={18} />
                    Primeiro Diamante: O Problema
                  </h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="bg-[#0a0909] p-4 rounded-xl border border-white/5">
                      <strong className="text-white block mb-1">1. Descobrir (Discover):</strong>
                      Pesquisar e imergir no cenário e no problema real (Desk Research, CSD, entrevistas, observação) — abre o leque de informações.
                    </div>
                    <div className="bg-[#0a0909] p-4 rounded-xl border border-white/5">
                      <strong className="text-white block mb-1">2. Definir (Define):</strong>
                      Filtrar os dados obtidos, agrupar padrões e focar em um problema/persona específico a ser solucionado — fecha o leque.
                    </div>
                  </div>
                </div>

                {/* Diamond 2 */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                  <h4 className="font-bold text-[#7cb6d3] text-lg flex items-center gap-2">
                    <Zap size={18} />
                    Segundo Diamante: A Solução
                  </h4>
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="bg-[#0a0909] p-4 rounded-xl border border-white/5">
                      <strong className="text-white block mb-1">3. Desenvolver (Develop):</strong>
                      Co-criar soluções, projetar fluxos e wireframes de baixa fidelidade, estruturando ideias — abre o leque novamente.
                    </div>
                    <div className="bg-[#0a0909] p-4 rounded-xl border border-white/5">
                      <strong className="text-white block mb-1">4. Entregar (Deliver):</strong>
                      Prototipar em alta fidelidade, testar com usuários reais e refinar o design — fecha o leque final.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#7cb6d3] p-6 rounded-2xl text-black font-extrabold mt-8 shadow-[0_15px_30px_rgba(124,182,211,0.25)] text-sm">
                Processo Iterativo: Os resultados obtidos nas fases de testes retroalimentam as fases anteriores em loops de melhoria contínua.
              </div>
            </div>
          </section>
        </div>

        {/* Link to Practical Example */}
        <div className="mt-16 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-[#7cb6d3]/30 hover:bg-[#7cb6d3]/5 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-display font-black text-white group-hover:text-[#7cb6d3] transition-colors flex items-center gap-2">
              <Sparkles className="size-5 text-[#7cb6d3]" />
              Laboratório Prático: Double Diamond Case Study
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-medium">
              Acompanhe as quatro etapas (descobrir, definir, desenvolver e entregar) aplicadas de ponta a ponta em um projeto de redesign de checkout.
            </p>
          </div>
          <Link 
            to="/double-diamond/exemplo" 
            className="px-6 py-3 bg-white text-black hover:bg-white/95 rounded-full text-xs font-bold transition-all shadow-lg hover:scale-105 flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <span>Acessar Laboratório</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Completion Action */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center">
          <button 
            onClick={toggleComplete}
            className={`group relative px-8 py-4 rounded-full font-display font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-lg hover:scale-105 active:scale-95 ${
              completed 
                ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
                : 'bg-white text-black hover:bg-white/95 shadow-white/5'
            }`}
          >
            {completed ? (
              <>
                <Check size={18} strokeWidth={3} />
                <span>Módulo Concluído!</span>
              </>
            ) : (
              <>
                <span>Marcar Módulo como Concluído</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </Layout>
  );
}
