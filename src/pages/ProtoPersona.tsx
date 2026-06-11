import { useState, useEffect } from 'react';
import { Users, Check, ArrowRight, Smile, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ProtoPersona() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem('ux_academy_mod5') === 'true');
  }, []);

  const toggleComplete = () => {
    const nextState = !completed;
    localStorage.setItem('ux_academy_mod5', String(nextState));
    setCompleted(nextState);
    window.dispatchEvent(new Event('progressUpdate'));
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-16">
        <div className="inline-flex items-center gap-3 bg-[#7cb6d3]/10 text-[#7cb6d3] border border-[#7cb6d3]/20 px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-8">
          <Users size={18} />
          <span>Módulo 5: Personas e Proto-Personas</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-16 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Proto-Persona
        </h1>

        <div className="space-y-16">
          {/* Section 1: O Módulo */}
          <section id="proto-persona" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              10 – Proto-Personas
            </h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed font-medium">
              <p className="text-lg">
                As <strong className="text-white">Proto Personas</strong> são representações iniciais dos usuários criadas a partir de hipóteses e conhecimentos preliminares da equipe. Embora não substituam pesquisas reais, ajudam a alinhar a visão do time e a manter o foco no público durante as etapas iniciais do projeto.
              </p>

              {/* Academic Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Processo & Heurísticas</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    No modelo <strong>Double Diamond</strong>, as Proto Personas costumam surgir na fase <strong>Discover</strong> (primeiro diamante), servindo como ponto de partida e base para futuras validações e roteiros de pesquisa.
                  </p>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">
                    Sua utilização contribui diretamente para a aplicação das heurísticas de Nielsen <strong className="text-[#7cb6d3]">"Reconhecimento em vez de memorização"</strong> e <strong className="text-[#7cb6d3]">"Flexibilidade e eficiência de uso"</strong>.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Objetivos de UX</h4>
                  <ul className="list-disc pl-5 text-sm text-white/60 space-y-1.5 leading-relaxed">
                    <li>Definir perfis iniciais de usuários hipotéticos.</li>
                    <li>Alinhar o entendimento e as suposições da equipe.</li>
                    <li>Direcionar decisões de design centradas nas dores do usuário.</li>
                    <li>Servir como base de comparação para pesquisas qualitativas futuras.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl border-l-4 border-dashed border-white/20">
                  <h5 className="font-display font-bold text-white mb-2 text-base">Proto-persona (Suposição):</h5>
                  <p className="text-sm text-white/60 leading-relaxed">Hipótese criada com base nas certezas e suposições da Matriz CSD. Ainda não foi validada por dados ou entrevistas de campo.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl border-l-4 border-solid border-[#7cb6d3]">
                  <h5 className="font-display font-bold text-[#7cb6d3] mb-2 text-base">Persona (Fato Validado):</h5>
                  <p className="text-sm text-white/60 leading-relaxed">Construída após a pesquisa de campo e entrevistas. Validada, robusta, reflete o que de fato foi ouvido dos usuários.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl border-l-4 border-l-[#7cb6d3] text-white/95 text-sm my-6 leading-relaxed">
                <strong className="text-[#7cb6d3] block mb-1 text-base">Diferença de Público-Alvo (Marketing vs UX)</strong>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Público-Alvo:</strong> "Mulheres, 25-35 anos, classe B, moram em São Paulo" (dados puramente demográficos).</li>
                  <li><strong>Persona:</strong> "Ana, 29 anos, advogada, tem pouco tempo, sente-se ansiosa com burocracia e valoriza soluções de um clique" (dados comportamentais).</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
                <h4 className="font-bold text-white text-lg flex items-center gap-2">
                  <Smile className="text-[#7cb6d3] size-5" />
                  Anatomia de uma Persona Eficaz:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <li className="bg-[#0a0909] p-4 rounded-xl border border-white/5"><strong>Nome & Foto:</strong> Humaniza os dados para gerar empatia na equipe.</li>
                  <li className="bg-[#0a0909] p-4 rounded-xl border border-white/5"><strong>Perfil / Bio:</strong> Breve parágrafo sobre a rotina da pessoa ligada ao problema.</li>
                  <li className="bg-[#0a0909] p-4 rounded-xl border border-white/5"><strong>Dores (Pain Points):</strong> O que tira o sono dela hoje? (ex: esquece senhas complexas).</li>
                  <li className="bg-[#0a0909] p-4 rounded-xl border border-white/5"><strong>Objetivos / Necessidades:</strong> O que ela de fato quer realizar no app?</li>
                  <li className="bg-[#0a0909] p-4 rounded-xl border border-white/5"><strong>Comportamentos:</strong> Como ela lida com tecnologia no dia a dia.</li>
                </ul>
                <p className="text-xs text-amber-400 mt-2">⚠️ <strong>Cuidado com Personas de Decoração:</strong> A persona deve ser um guia vivo. Toda vez que discutir layout, pergunte-se: "A Ana entenderia isso?"</p>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-xs leading-relaxed">
                <h5 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Dinâmica de Padrões</h5>
                <p>Mapeie semelhanças das anotações das entrevistas (ex: "Se 3 pessoas disseram que esquecem senhas, a Persona deve ter dificuldades de memorização"). Monte os cards de persona no Figma ou cartolinas proibindo dados irrelevantes (ex: nome de animais de estimação) que não influenciem no produto.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Link to Practical Example */}
        <div className="mt-16 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-[#7cb6d3]/30 hover:bg-[#7cb6d3]/5 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-display font-black text-white group-hover:text-[#7cb6d3] transition-colors flex items-center gap-2">
              <Sparkles className="size-5 text-[#7cb6d3]" />
              Laboratório Prático: Card de Persona Detalhado
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-medium">
              Acesse o visualizador de Persona e explore sliders interativos de traços comportamentais, bio e metas de Ana.
            </p>
          </div>
          <Link 
            to="/proto-persona/exemplo" 
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
