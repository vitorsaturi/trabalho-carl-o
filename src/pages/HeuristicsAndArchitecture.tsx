import { useState, useEffect } from 'react';
import { Compass, LayoutTemplate, Layers, Check, ArrowRight, ShieldCheck, FileSpreadsheet, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function HeuristicsAndArchitecture() {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem('ux_academy_mod2') === 'true');
  }, []);

  const toggleComplete = () => {
    const nextState = !completed;
    localStorage.setItem('ux_academy_mod2', String(nextState));
    setCompleted(nextState);
    window.dispatchEvent(new Event('progressUpdate'));
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-16">
        <div className="inline-flex items-center gap-3 bg-[#7cb6d3]/10 text-[#7cb6d3] border border-[#7cb6d3]/20 px-4 py-2 rounded-full font-bold text-sm tracking-wide mb-8">
          <Compass size={18} />
          <span>Módulo 2: Definição, Estruturação e Estratégia</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight mb-16 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Heurísticas, Arquitetura e Organização
        </h1>

        <div className="space-y-16">
          {/* Section 1: Heurísticas de Nielsen */}
          <section id="heuristica-nielsen" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <LayoutTemplate className="text-[#7cb6d3] size-7" />
              3 – As 10 Heurísticas de Nielsen
            </h2>
            <p className="text-lg text-white/70 leading-relaxed font-medium mb-8">
              Criadas por Jakob Nielsen, são as 10 regras de ouro fundamentais para projetar interfaces usáveis e intuitivas:
            </p>
            <ul className="space-y-6 text-sm text-white/70 font-medium">
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">1. Visibilidade do status do sistema</strong>
                O usuário sempre deve saber o que está acontecendo. Ex: Mostrar barras de progresso ao carregar dados ou checks de confirmação após envios.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">2. Correspondência entre o sistema e o mundo real</strong>
                Falar a língua do usuário usando termos familiares, evitando jargões técnicos. Ícones devem representar objetos reais (como uma lixeira para deleção).
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">3. Controle e liberdade do usuário</strong>
                Permitir desfazer (Undo) ou refazer (Redo) ações e oferecer saídas de emergência claras caso o usuário cometa um erro ou queira desistir de um fluxo.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">4. Consistência e padrões</strong>
                Manter a consistência de elementos em todo o sistema. Botões de ação, cores e terminologias não devem mudar de página para página.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">5. Prevenção de erros</strong>
                Evitar que o erro aconteça antes de precisar tratá-lo. Ex: Desativar botões de envio se o formulário estiver incompleto ou pedir confirmações para ações destrutivas.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">6. Reconhecimento em vez de recordação</strong>
                Minimizar a carga de memória do usuário mantendo as opções, instruções e ações sempre visíveis, sem exigir que ele lembre de informações de telas passadas.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">7. Flexibilidade e eficiência de uso</strong>
                Atender a novatos (com caminhos guiados) e especialistas (com atalhos de teclado, comandos rápidos e personalização) de forma invisível e intuitiva.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">8. Estética e design minimalista</strong>
                Design focado no que importa ("menos é mais"). Eliminar informações visuais extras e dados irrelevantes que competem com a informação principal.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">9. Ajuda a reconhecer, diagnosticar e recuperar erros</strong>
                Mensagens de erro legíveis por humanos (evitar códigos misteriosos como "Erro 0x800"), explicando claramente o problema e sugerindo caminhos de correção.
              </li>
              <li className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <strong className="text-white text-base block mb-1">10. Ajuda e documentação</strong>
                Mesmo que o sistema deva ser intuitivo, a ajuda deve ser facilmente pesquisável, focada na tarefa imediata e de leitura concisa.
              </li>
            </ul>
          </section>

          {/* Section 2: Estudo de Caso (Prefeitura de Franca) */}
          <section id="heuristica-caso" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <ShieldCheck className="text-[#7cb6d3] size-7" />
              Estudo de Caso: Portal da Prefeitura de Franca
            </h2>
            <div className="space-y-6 text-base text-white/70 leading-relaxed font-medium">
              <p>
                Uma análise rápida de usabilidade sobre o portal atual (governamental, atendendo de leigos a contadores experientes) aplicando as regras de Nielsen:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-red-500">
                  <h4 className="font-bold text-white mb-2 text-base">Visibilidade do Status (#1) & Prevenção de Erros (#5) - Pontos de Atenção</h4>
                  <p className="text-sm">
                    Ao abrir Nota Fiscal ou Protocolo, o carregamento abre novas abas sem um spinner ou aviso indicando processamento. Nos formulários de buscas de débitos, não há máscaras para CPF/CNPJ, gerando erros genéricos após o clique.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-emerald-500">
                  <h4 className="font-bold text-white mb-2 text-base">Mundo Real (#2) & Padrões (#4) & Reconhecimento (#6) - Pontos Positivos</h4>
                  <p className="text-sm">
                    O portal utiliza termos familiares como "IPTU", "Multas", "Vagas de Emprego". Ícones como ônibus (transporte) e lupas ajudam na busca rápida. Segue padrões de portais (menu de transparência, barra de acessibilidade e brasão no topo). A área "Acesso Rápido" lista "Limpeza de Terrenos", evitando que o cidadão decore a secretaria responsável.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border-l-4 border-amber-500">
                  <h4 className="font-bold text-white mb-2 text-base">Estética e Minimalismo (#8) - Impacto Cognitivo</h4>
                  <p className="text-sm">
                    O site sofre com excesso de informação visual. A página inicial tem múltiplos banners piscantes, notícias e botões concorrendo ao mesmo tempo. Isso gera uma sobrecarga cognitiva alta, dificultando a localização rápida de serviços no sol ou telas menores.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Arquitetura de Informação */}
          <section id="facilidade-estrutural" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <Layers className="text-[#7cb6d3] size-7" />
              4 – Arquitetura de Informação (AI)
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
              <p>
                A arquitetura de informação organiza os dados para tornar o produto digital compreensível. É o "esqueleto" estrutural do produto.
              </p>
              
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-sm mb-6">
                <h4 className="font-bold text-white mb-3 text-base">Os 3 Pilares da AI (Triângulo de Rosenfeld):</h4>
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed font-medium">
                  <li><strong className="text-[#7cb6d3]">Contexto:</strong> Objetivos de negócio e limitações financeiras ou tecnológicas.</li>
                  <li><strong className="text-[#7cb6d3]">Conteúdo:</strong> Os dados que temos (textos, tabelas, imagens, fluxos, preços).</li>
                  <li><strong className="text-[#7cb6d3]">Usuário:</strong> O perfil, as necessidades e as lógicas de busca das personas.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed font-medium">
                <div>
                  <h4 className="font-bold text-white mb-2 text-base">Taxonomia e Rotulagem</h4>
                  <p className="text-sm">
                    Envolve definir termos que evitam a sobrecarga mental. Organiza em ordem alfabética, por data ou categoria. Rotulagem (labeling) determina se o botão chama-se "Carrinho", "Sacola" ou "Minhas Compras" com foco no modelo mental do usuário.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 text-base">O Sitemap (Estrutura de Níveis)</h4>
                  <ul className="list-decimal pl-5 text-sm space-y-1">
                    <li><strong>Nível 1:</strong> Home / Landing Page.</li>
                    <li><strong>Nível 2:</strong> Categorias Principais (ex: Acervo, Perfil).</li>
                    <li><strong>Nível 3:</strong> Subcategorias e páginas de detalhes.</li>
                  </ul>
                  <p className="text-xs text-amber-400 mt-3"><strong>Regra de Ouro (Teste do Elevador):</strong> Mantenha informações críticas a no máximo 3 cliques de distância.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Card Sorting */}
          <section id="card-sorting" className="bg-[#141212]/60 backdrop-blur-md p-8 md:p-12 rounded-[2rem] border border-white/5 hover:border-white/10 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-28">
            <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent flex items-center gap-4">
              <FileSpreadsheet className="text-[#7cb6d3] size-7" />
              5 – Card Sorting
            </h2>
            <div className="space-y-6 text-lg text-white/70 font-medium leading-relaxed">
              <p>
                Técnica de pesquisa qualitativa/quantitativa usada para entender como os usuários organizam e rotulam dados em suas cabeças, alinhando o modelo de design ao modelo mental.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                  <h4 className="font-bold text-[#7cb6d3] mb-2 text-base">Aberto</h4>
                  <p className="text-xs text-white/60">O usuário agrupa cartões e cria os nomes das próprias categorias. Útil para descobrir novos termos de mercado.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                  <h4 className="font-bold text-[#7cb6d3] mb-2 text-base">Fechado</h4>
                  <p className="text-xs text-white/60">O usuário encaixa cartões em categorias predefinidas pelo time. Útil para validar hierarquias que já existem.</p>
                </div>
                <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
                  <h4 className="font-bold text-[#7cb6d3] mb-2 text-base">Híbrido</h4>
                  <p className="text-xs text-white/60">Utiliza categorias fixas estruturadas, mas dá liberdade ao usuário para criar categorias adicionais se faltar algo.</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl text-xs text-white/80">
                <h5 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Dinâmica: "O Supermercado Bagunçado"</h5>
                <p className="mb-2">Organize 20 itens aleatórios (shampoo, banana, iogurte, cerveja, fraldas, etc.) em grupos lógicos.</p>
                <p className="italic text-[#7cb6d3]">Pergunta chave: Onde você colocaria a "cerveja"? Em "bebidas" ou "lazer"? Divergências provam que as estruturas de navegação devem focar no modelo dos usuários e não da empresa.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Link to Practical Example */}
        <div className="mt-16 p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-[#7cb6d3]/30 hover:bg-[#7cb6d3]/5 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-display font-black text-white group-hover:text-[#7cb6d3] transition-colors flex items-center gap-2">
              <Sparkles className="size-5 text-[#7cb6d3]" />
              Laboratório Prático: Auditoria & Sitemap Explorer
            </h3>
            <p className="text-xs text-white/50 leading-relaxed font-medium">
              Explore o sitemap interativo da Biblioteca Municipal e veja relatórios completos de avaliações heurísticas reais.
            </p>
          </div>
          <Link 
            to="/heuristicas-arquitetura/exemplo" 
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
