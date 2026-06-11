import { useState, useEffect } from 'react';
import { Map as MapIcon, GitMerge, Brain, Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function UserJourneyAndFlow() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem('ux_academy_mod3') === 'true');
  }, []);

  const toggleComplete = () => {
    const nextState = !completed;
    localStorage.setItem('ux_academy_mod3', String(nextState));
    setCompleted(nextState);
    window.dispatchEvent(new Event('progressUpdate'));
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-16">
        <div className="inline-flex items-center gap-3 bg-[#7cb6d3]/10 text-[#7cb6d3] border border-[#7cb6d3]/20 px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-8">
          <MapIcon size={18} />
          <span>Módulo 3: Jornada, Fluxos e Mapeamento</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-16 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Jornada, Fluxo e Empatia
        </h1>

        <div className="space-y-16">
          {/* Section 1: Jornada do Usuário */}
          <section id="jornada-usuario" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <MapIcon className="text-[#7cb6d3] size-7" />
              6 – Jornada do Usuário
            </h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed font-medium">
              <p className="text-lg">
                A <strong className="text-white">Jornada do Usuário</strong> é uma ferramenta que permite visualizar todo o caminho percorrido por uma pessoa para alcançar um objetivo dentro de um produto ou serviço. Durante esse mapeamento, são identificadas ações, emoções, dificuldades e expectativas em cada etapa da experiência.
              </p>

              {/* Academic Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Processo & Heurísticas</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Dentro do modelo <strong>Double Diamond</strong>, é utilizada principalmente nas fases <strong>Discover</strong> e <strong>Define</strong>, auxiliando na compreensão do problema antes da proposição de soluções.
                  </p>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">
                    Contribui diretamente para a heurística de Nielsen <strong className="text-[#7cb6d3]">"Correspondência entre o sistema e o mundo real"</strong>, garantindo que o produto acompanhe a lógica e as necessidades reais dos usuários.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Objetivos de UX</h4>
                  <ul className="list-disc pl-5 text-sm text-white/60 space-y-1.5 leading-relaxed">
                    <li>Compreender a experiência completa do usuário.</li>
                    <li>Identificar pontos de atrito (pain points) e oportunidades de melhoria.</li>
                    <li>Apoiar decisões estratégicas de design centradas no usuário.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl border-l-4 border-l-[#7cb6d3] text-white/95 text-sm mb-6 leading-relaxed">
                <strong className="text-[#7cb6d3] block mb-1 text-base">Analogia: O Roteiro do Filme</strong>
                Se a persona é o actor e o mapa de empatia é o seu estado emocional, a jornada do usuário representa o roteiro do filme, organizando a narrativa ao longo do tempo.
              </div>

              <div>
                <h4 className="font-bold text-white mb-3 text-lg">Camadas Horizontais da Jornada:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-1 text-base">Fases:</strong>
                    O macro do processo (descoberta, comparação, compra, uso, retenção).
                  </li>
                  <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-1 text-base">Ações:</strong>
                    O que o usuário faz fisicamente (ex: "abre o Google", "pesquisa seguro").
                  </li>
                  <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-1 text-base">Pontos de Contato (Touchpoints):</strong>
                    Onde ocorre a interação (site, app, suporte telefônico, loja física).
                  </li>
                  <li className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <strong className="text-white block mb-1 text-base">Pensamentos & Emoções:</strong>
                    A oscilação do gráfico emocional com seus <strong className="text-red-400">pain points</strong> (quase desiste) e <strong className="text-emerald-400">magic moments</strong> (percebe o valor real).
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-sm leading-relaxed">
                <h5 className="font-bold text-white mb-2 uppercase tracking-wide text-base">Dinâmica: Mapeando a Montanha-Russa</h5>
                <p className="mb-2"><strong>Cenário:</strong> Mapear as fases de um usuário contratando seguro de viagem às pressas para o dia seguinte, desenhando a curva de humor alta e baixa em cada post-it.</p>
                <p className="text-xs text-white/50"><strong>Exemplo:</strong> Se o usuário vai pedir um Uber, a jornada começa quando ele percebe que vai se atrasar, não quando abre o aplicativo. Entender o contexto externo diferencia UX de UI.</p>
              </div>
            </div>
          </section>

          {/* Section 2: User Flow */}
          <section id="fluxo-usuario" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <GitMerge className="text-[#7cb6d3] size-7" />
              7 – Fluxo do Usuário (User Flow)
            </h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed font-medium">
              <p className="text-lg">
                O <strong className="text-white">Fluxo do Usuário (User Flow)</strong> representa o caminho que uma pessoa percorre dentro de uma interface para realizar uma tarefa específica. Seu objetivo é organizar a navegação de forma simples, intuitiva e eficiente, reduzindo etapas desnecessárias e facilitando a conclusão de objetivos.
              </p>

              {/* Academic Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Processo & Heurísticas</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Desenvolvido nas fases <strong>Define</strong> e <strong>Develop</strong> do Double Diamond, quando os problemas identificados são transformados em fluxos lógicos de solução.
                  </p>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">
                    Fortalece as heurísticas de <strong className="text-[#7cb6d3]">"Controle e liberdade do usuário"</strong>, <strong className="text-[#7cb6d3]">"Consistência e padrões"</strong> e <strong className="text-[#7cb6d3]">"Reconhecimento em vez de memorização"</strong>.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Objetivos de UX</h4>
                  <ul className="list-disc pl-5 text-sm text-white/60 space-y-1.5 leading-relaxed">
                    <li>Estruturar caminhos de navegação previsíveis.</li>
                    <li>Reduzir a complexidade de cliques e evitar retrabalho de telas.</li>
                    <li>Melhorar diretamente a usabilidade final do produto.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl border-l-4 border-l-[#7cb6d3] text-white/95 text-sm mb-6 leading-relaxed">
                <strong className="text-[#7cb6d3] block mb-1 text-base">Diferença de Sitemap: Planta vs Vídeo</strong>
                O sitemap é a planta baixa de uma casa; o fluxo do usuário é o vídeo de uma pessoa caminhando por dentro dela, subindo escadas e abrindo portas.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-3 text-base">Símbolos Padrão de Mapeamento:</h4>
                  <ul className="space-y-2">
                    <li>🟢 <strong className="text-white">Oval:</strong> Início ou fim do fluxo.</li>
                    <li>⬜ <strong className="text-white">Retângulo:</strong> Telas, páginas ou etapas físicas.</li>
                    <li>🔶 <strong className="text-white">Losango:</strong> Ponto de decisão lógica (Ex: "Tem cadastro? Sim / Não").</li>
                    <li>➡️ <strong className="text-white">Seta:</strong> Direção do movimento e navegação.</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-3 text-base">Caminhos a Projetar:</h4>
                  <p className="mb-2 leading-relaxed"><strong>Happy Path:</strong> O cenário ideal onde tudo funciona de primeira e o usuário realiza a compra com sucesso.</p>
                  <p className="leading-relaxed"><strong>Caminhos de Erro:</strong> Cenários de erro críticos (cartão recusado, internet oscilando, senha incorreta). O bom designer projeta para o erro tanto quanto para o sucesso.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-xs leading-relaxed">
                <h5 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Dinâmica: Algoritmo do Café</h5>
                <p>Mapeie o fluxo de "pedir um café em uma máquina automática", incluindo decisões como "tem copo disponível?", "tem açúcar?" e "saldo suficiente?". Projetar o fluxo antes das telas evita criar layouts desnecessários.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Mapa de Empatia */}
          <section id="mapa-empatia" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <Brain className="text-[#7cb6d3] size-7" />
              8 – Mapa de Empatia
            </h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed font-medium">
              <p className="text-lg">
                O <strong className="text-white">Mapa de Empatia</strong> é uma ferramenta utilizada para compreender o usuário de forma mais humana, explorando seus pensamentos, sentimentos, comportamentos, dores e expectativas. Seu propósito é desenvolver soluções baseadas em necessidades reais e não apenas em suposições da equipe.
              </p>

              {/* Academic Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Processo & Heurísticas</h4>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Utilizado fortemente na fase de <strong>Discover</strong> (primeiro diamante), ajudando na coleta e organização sensorial de dados após a pesquisa de campo.
                  </p>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed">
                    Aplica a heurística <strong className="text-[#7cb6d3]">"Correspondência entre o sistema e o mundo real"</strong> ao alinhar a linguagem e o tom do sistema com a realidade sensorial e emocional do usuário.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl">
                  <h4 className="font-bold text-white mb-2 text-base">Objetivos de UX</h4>
                  <ul className="list-disc pl-5 text-sm text-white/60 space-y-1.5 leading-relaxed">
                    <li>Desenvolver empatia profunda pelo usuário real.</li>
                    <li>Compreender o contexto sensorial (o que ela ouve, vê).</li>
                    <li>Identificar dores estruturais e gerar oportunidades de inovação.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl border-l-4 border-l-[#7cb6d3] text-white/95 text-sm mb-6 leading-relaxed">
                <strong className="text-[#7cb6d3] block mb-1 text-base">Diferença de Persona: Identidade vs Contexto</strong>
                A persona é a identidade (quem a pessoa é); o mapa de empatia representa o contexto sensorial e emocional imediato (o que a pessoa vive).
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-sm space-y-4 leading-relaxed">
                <h4 className="font-bold text-white text-base">Os Quatro Quadrantes Sensoriais:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-medium">
                  <div>
                    <strong className="text-white block mb-1 text-sm">O que ela vê?</strong>
                    O cenário geral: quem são os amigos, o que o mercado oferece e quais problemas enfrenta no dia a dia.
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-sm">O que ela ouve?</strong>
                    As influências: o que os colegas de trabalho dizem, quem são seus influenciadores e o que ouve da família.
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-sm">O que ela pensa e sente?</strong>
                    O fundo da mente: preocupações reais, o que a deixa animada e o que ela não confessa para ninguém.
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-sm">O que ela fala e faz?</strong>
                    Comportamento público: como se comporta em público, hábitos e sua linguagem verbal.
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <strong className="text-red-400 block mb-1 text-sm">Dores (Pains):</strong>
                    Medos, frustrações e obstáculos. Onde residem os problemas que o projeto deve resolver.
                  </div>
                  <div>
                    <strong className="text-emerald-400 block mb-1 text-sm">Ganhos (Gains):</strong>
                    Desejos, necessidades e critérios de sucesso. Onde moram as oportunidades de encantar o usuário.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Link to Practical Example */}
        <div className="mt-16 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-[#7cb6d3]/30 hover:bg-[#7cb6d3]/5 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-display font-black text-white group-hover:text-[#7cb6d3] transition-colors flex items-center gap-2">
              <Sparkles className="size-5 text-[#7cb6d3]" />
              Laboratório Prático: Painel de Empatia & Timeline
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-medium">
              Explore o mapa de empatia e veja a curva de humor interativa da jornada ao contratar serviços de emergência.
            </p>
          </div>
          <Link 
            to="/jornada-fluxo/exemplo" 
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
