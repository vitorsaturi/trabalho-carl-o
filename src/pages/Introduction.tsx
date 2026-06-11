import { useState, useEffect } from 'react';
import { BookOpen, Check, ArrowRight, ClipboardList, Search, MessageSquare, ShieldAlert, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Introduction() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem('ux_academy_mod1') === 'true');
  }, []);

  const toggleComplete = () => {
    const nextState = !completed;
    localStorage.setItem('ux_academy_mod1', String(nextState));
    setCompleted(nextState);
    window.dispatchEvent(new Event('progressUpdate'));
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-16">
        <div className="inline-flex items-center gap-3 bg-[#7cb6d3]/10 text-[#7cb6d3] border border-[#7cb6d3]/20 px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-8">
          <BookOpen size={18} />
          <span>Módulo 1: Descoberta e Exploração</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-16 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Introdução à Experiência do Usuário (UX)
        </h1>

        <div className="space-y-16">
          {/* Section 1: O que é UX */}
          <section id="o-que-e-ux" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              1 – O que é UX
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-medium mb-6">
              <strong className="text-white">UX (User Experience)</strong> é como o usuário se sente ao usar um produto. É lógico, emocional e prático. Na computação, a disciplina lembra que do outro lado do código existe um ser humano com expectativas, frustrações e limitações. Enquanto a Engenharia de Software foca em "como fazer o sistema funcionar", o UX foca em "para quem estamos fazendo e por que isso importa".
            </p>
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-white/95 text-sm">
              <p className="font-semibold text-[#7cb6d3] mb-2 text-base">Por que estudar UX na Computação?</p>
              <p className="leading-relaxed font-medium">
                Desenvolver sistemas eficientes por trás dos panos é inútil se as pessoas não conseguirem entender ou utilizar a interface. O UX serve como a ponte que traduz tecnologia em valor humano real.
              </p>
            </div>
          </section>

          {/* Section 2: UI vs UX */}
          <section id="diferenca-ui-ux" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              2 – Diferença de UI e UX
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
              <p>
                Muitos profissionais de tecnologia confundem os dois termos por serem complementares:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <h4 className="font-display font-bold text-[#7cb6d3] text-lg mb-2">UI (User Interface)</h4>
                  <p className="text-sm">É a ponte em si — o que o usuário vê fisicamente. Envolve botões, cores, fontes, layouts, espaçamentos e consistência visual.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                  <h4 className="font-display font-bold text-[#7cb6d3] text-lg mb-2">UX (User Experience)</h4>
                  <p className="text-sm">É a experiência de atravessar essa ponte. É lógica, emocional e prática, avaliando a facilidade, a velocidade e o sentimento ao usar o sistema.</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl border-l-4 border-l-[#7cb6d3] text-white/95">
                <strong className="text-[#7cb6d3]">Analogia Clássica:</strong> UI é a ponte em si; UX é a experiência emocional e prática de atravessá-la.
              </div>
            </div>
          </section>

          {/* Section 3: Matriz CSD */}
          <section id="matriz-csd" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <ClipboardList className="text-[#7cb6d3] size-7" />
              3 – Matriz CSD (Certezas, Suposições e Dúvidas)
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
              <p>
                A <strong className="text-white">Matriz CSD</strong> é uma ferramenta colaborativa fundamental no início de qualquer projeto de UX. Ela serve como um "termômetro" do conhecimento da equipe, ajudando a organizar o que já é fato (certezas) e o que ainda precisa ser investigado (suposições e dúvidas).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-emerald-950/20 border border-emerald-500/20 p-6 rounded-2xl">
                  <h4 className="font-display font-bold text-emerald-400 text-lg mb-2">Certezas</h4>
                  <p className="text-sm text-white/60">Tudo que é fato comprovado por dados concretos, pesquisas anteriores ou requisitos técnicos.</p>
                  <p className="text-xs text-[#7cb6d3] mt-4 italic font-bold">Ex: "60% dos nossos usuários acessam via Android."</p>
                </div>
                <div className="bg-amber-950/20 border border-amber-500/20 p-6 rounded-2xl">
                  <h4 className="font-display font-bold text-amber-400 text-lg mb-2">Suposições</h4>
                  <p className="text-sm text-white/60">Hipóteses e palpites que a equipe acredita serem verdadeiros, mas que não foram validados.</p>
                  <p className="text-xs text-[#7cb6d3] mt-4 italic font-bold">Ex: "Acreditamos que o público jovem não gosta de formulários longos."</p>
                </div>
                <div className="bg-sky-950/20 border border-sky-500/20 p-6 rounded-2xl">
                  <h4 className="font-display font-bold text-sky-400 text-lg mb-2">Dúvidas</h4>
                  <p className="text-sm text-white/60">Perguntas sem respostas. As lacunas de conhecimento que precisam ser investigadas.</p>
                  <p className="text-xs text-[#7cb6d3] mt-4 italic font-bold">Ex: "Qual é o principal motivo de abandono do carrinho?"</p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-sm text-white/80">
                <h5 className="font-bold text-white mb-2 uppercase tracking-wide text-base">Exercício Prático: Aplicativo para Idosos</h5>
                <p className="mb-2"><strong>Cenário:</strong> "Criaremos um aplicativo de aluguel de bicicletas para idosos."</p>
                <ol className="list-decimal pl-5 space-y-1 leading-relaxed font-medium text-xs">
                  <li>Listar suposições comuns (ex: "Idosos não sabem usar smartphones").</li>
                  <li>Categorizar como Dúvida (ex: "Eles têm força física para pedalar as e-bikes?").</li>
                  <li><strong>O Pulo do Gato:</strong> O objetivo do pesquisador de UX é mover os itens das colunas de Suposições e Dúvidas para a coluna de Certezas através de testes e entrevistas.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 4: Desk Research & Benchmarking */}
          <section id="desk-research" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <Search className="text-[#7cb6d3] size-7" />
              4 – Desk Research & Benchmarking
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
              <p>
                Antes de falar com usuários reais, o UX designer realiza a <strong className="text-white">Desk Research (Pesquisa de Mesa)</strong> para coletar dados já existentes de fontes secundárias (economia de tempo, contexto de mercado e embasamento).
              </p>
              
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-sm">
                <h4 className="font-bold text-white mb-3 text-base">Principais Fontes:</h4>
                <ul className="list-disc pl-5 space-y-2 text-xs">
                  <li><strong className="text-[#7cb6d3]">Fontes Internas:</strong> Relatórios de vendas da empresa, tickets de suporte (SAC) e Google Analytics.</li>
                  <li><strong className="text-[#7cb6d3]">Fontes Externas:</strong> Artigos científicos, tendências (Google Trends), dados demográficos (IBGE) e fóruns (Reclame Aqui).</li>
                  <li><strong className="text-[#7cb6d3]">Benchmarking:</strong> Análise detalhada de concorrentes diretos e indiretos para entender modelos mentais que eles já consolidaram na mente dos usuários.</li>
                </ul>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-[#7cb6d3] font-bold">Critério</th>
                      <th className="py-3 px-4 text-[#7cb6d3] font-bold">Pesquisa Quantitativa (Formulários)</th>
                      <th className="py-3 px-4 text-[#7cb6d3] font-bold">Pesquisa Qualitativa (Observação/Shadowing)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-bold">Objetivo</td>
                      <td className="py-3 px-4 text-white/60">Saber QUANTO e generalizar para grandes grupos.</td>
                      <td className="py-3 px-4 text-white/60">Entender o COMO e o PORQUÊ na profundidade.</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-3 px-4 font-bold">Dados Obtidos</td>
                      <td className="py-3 px-4 text-white/60">Números, porcentagens e métricas gerais.</td>
                      <td className="py-3 px-4 text-white/60">Comportamento implícito, falas e expressões.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold">Custo / Tempo</td>
                      <td className="py-3 px-4 text-white/60">Baixo e escalável.</td>
                      <td className="py-3 px-4 text-white/60">Alto (exige tempo individualizado).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-xs">
                <p className="font-bold text-white mb-2">Dinâmica: "Cliente Oculto Digital"</p>
                <p>Nesta prática, a equipe realiza tarefas simples nos sistemas dos concorrentes (como fazer um cadastro ou simular compra) e documenta o que foi fácil (boas práticas) e o que foi frustrante (oportunidades).</p>
              </div>
            </div>
          </section>

          {/* Section 5: Entrevistas com Usuários */}
          <section id="entrevistas" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <MessageSquare className="text-[#7cb6d3] size-7" />
              5 – Entrevistas com Usuários
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
              <p>
                A entrevista com usuários é a arte de extrair informações valiosas sem induzir o entrevistado. É focado em ouvir mais do que falar.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-bold text-white mb-1">1. Recrutamento e Triagem (Screener)</h4>
                  <p className="text-xs">Utiliza questionários com filtros específicos (idade, hábitos, frequência de uso) para selecionar os perfis corretos. Evita entrevistar amigos ou parentes, que mentem para agradar.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">2. Tipos de Entrevista</h4>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    <li><strong>Estruturada:</strong> Roteiro rígido. Ruim para UX porque impede descobertas espontâneas.</li>
                    <li><strong>Semiestruturada:</strong> Roteiro guia que dá liberdade para seguir caminhos interessantes da conversa (ideal para UX).</li>
                    <li><strong>Contextual:</strong> Realizada enquanto o usuário executa uma tarefa real.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">3. Regras de Ouro (O que evitar)</h4>
                  <ul className="list-disc pl-5 text-xs space-y-1.5">
                    <li className="flex items-start gap-2"><ShieldAlert size={14} className="text-red-400 mt-0.5" /> <span><strong>Evitar perguntas indutivas:</strong> Em vez de "Você acha difícil usar esse app?", prefira "O que você pensa sobre a interface deste app?".</span></li>
                    <li className="flex items-start gap-2"><ShieldAlert size={14} className="text-red-400 mt-0.5" /> <span><strong>Evitar perguntas de Sim ou Não:</strong> Use perguntas abertas. Ex: "Conte-me como foi sua experiência na última compra".</span></li>
                    <li className="flex items-start gap-2"><ShieldAlert size={14} className="text-red-400 mt-0.5" /> <span><strong>Não interrompa os silêncios:</strong> Às vezes os melhores insights surgem depois de momentos de reflexão do usuário.</span></li>
                  </ul>
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
              Laboratório Prático: Matriz CSD em Ação
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-medium">
              Explore o quadro interativo e crie novos post-its para testar na prática a dinâmica de certezas, suposições e dúvidas.
            </p>
          </div>
          <Link 
            to="/introducao/exemplo" 
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
