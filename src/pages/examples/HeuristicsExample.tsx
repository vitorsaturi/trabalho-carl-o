import { useState } from 'react';
import { ArrowLeft, CheckCircle2, AlertTriangle, XCircle, LayoutTemplate, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

interface HeuristicItem {
  id: number;
  title: string;
  heuristic: string;
  status: 'passed' | 'warning' | 'failed';
  problem?: string;
  solution?: string;
  severity: 'none' | 'cosmetic' | 'serious' | 'critical';
}

const evaluationData: HeuristicItem[] = [
  {
    id: 1,
    title: "Carregamento de Guias de Nota Fiscal",
    heuristic: "Visibilidade do status do sistema (#1)",
    status: 'failed',
    problem: "Ao clicar para gerar a guia, o sistema abre uma aba externa em branco e demora até 15 segundos sem spinners ou barras de progresso, deixando o cidadão sem saber se o clique funcionou.",
    solution: "Adicionar um overlay de carregamento com spinner e mensagens de feedback dinâmicas ('Processando...', 'Gerando PDF...').",
    severity: 'critical'
  },
  {
    id: 2,
    title: "Vocabulário de IPTU e Multas",
    heuristic: "Correspondência com o mundo real (#2)",
    status: 'passed',
    severity: 'none'
  },
  {
    id: 3,
    title: "Busca de Protocolos e Débitos",
    heuristic: "Prevenção de erros (#5)",
    status: 'warning',
    problem: "Os inputs não possuem máscaras de validação em tempo de execução para CPF ou CNPJ. Se o usuário digitar um ponto ou traço a mais, o sistema envia a busca e depois falha com erro SQL genérico.",
    solution: "Implementar máscara automática de caracteres nos inputs e validação do formato antes de liberar o clique no botão 'Buscar'.",
    severity: 'serious'
  },
  {
    id: 4,
    title: "Transparência e Acessibilidade",
    heuristic: "Consistência e padrões (#4)",
    status: 'passed',
    severity: 'none'
  },
  {
    id: 5,
    title: "Menu de Acesso Rápido",
    heuristic: "Reconhecimento em vez de recordação (#6)",
    status: 'passed',
    severity: 'none'
  },
  {
    id: 6,
    title: "Página Inicial (Home Portal)",
    heuristic: "Estética e design minimalista (#8)",
    status: 'failed',
    problem: "Carga cognitiva excessiva. A Home tem 12 banners rotativos, 4 menus flutuantes, feed de notícias completo e 24 links de serviços em grades coloridas no topo.",
    solution: "Consolidar os banners secundários em um menu e criar categorias agrupadas por perfil (Cidadão, Servidor, Empresa), simplificando a Home.",
    severity: 'serious'
  }
];

export default function HeuristicsExample() {
  const [selectedHeuristic, setSelectedHeuristic] = useState<HeuristicItem | null>(evaluationData[0]);

  // Sitemap state
  const [activeMenu, setActiveMenu] = useState<string>('home');

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12">
        <Link to="/heuristicas-arquitetura" className="inline-flex items-center gap-2 text-[#7cb6d3] hover:underline mb-8 text-sm font-semibold">
          <ArrowLeft size={16} />
          Voltar para Módulo 2
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-2 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Laboratório Prático: Avaliação Heurística & Sitemap
        </h1>
        <p className="text-sm text-white/50 mb-12">Análise visual de usabilidade e organização estrutural</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Heuristic Evaluation Report Checklist */}
          <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem]">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <LayoutTemplate className="text-[#7cb6d3] size-5" />
              Auditoria de Heurísticas (Prefeitura de Franca)
            </h3>
            
            <div className="space-y-3">
              {evaluationData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedHeuristic(item)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-colors cursor-pointer ${
                    selectedHeuristic?.id === item.id 
                      ? 'bg-[#7cb6d3]/10 border-[#7cb6d3]/30 text-white' 
                      : 'bg-transparent border-white/5 text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="space-y-1">
                    <p className="text-xs font-bold">{item.title}</p>
                    <p className="text-[10px] text-white/40">{item.heuristic}</p>
                  </div>
                  <div>
                    {item.status === 'passed' && <CheckCircle2 className="text-emerald-400 size-4.5" />}
                    {item.status === 'warning' && <AlertTriangle className="text-amber-400 size-4.5" />}
                    {item.status === 'failed' && <XCircle className="text-red-400 size-4.5" />}
                  </div>
                </button>
              ))}
            </div>

            {/* Selection detail */}
            {selectedHeuristic && (
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#7cb6d3]">{selectedHeuristic.title}</h4>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    selectedHeuristic.severity === 'critical' ? 'bg-red-500/10 text-red-400' :
                    selectedHeuristic.severity === 'serious' ? 'bg-amber-500/10 text-amber-400' :
                    selectedHeuristic.severity === 'cosmetic' ? 'bg-sky-500/10 text-sky-400' : 'bg-emerald-500/10 text-emerald-400'
                  }`}>
                    Severidade: {selectedHeuristic.severity}
                  </span>
                </div>
                {selectedHeuristic.status === 'passed' ? (
                  <p className="text-xs text-white/60 bg-emerald-500/5 border border-emerald-500/10 p-3.5 rounded-xl">
                    ✅ <strong>Passou na Auditoria:</strong> O sistema respeita integralmente as regras heurísticas propostas nessa funcionalidade.
                  </p>
                ) : (
                  <div className="space-y-3 text-xs">
                    <div className="bg-red-500/5 border border-red-500/10 p-3.5 rounded-xl space-y-1">
                      <p className="font-bold text-red-400">Problema Encontrado:</p>
                      <p className="text-white/60">{selectedHeuristic.problem}</p>
                    </div>
                    <div className="bg-emerald-500/5 border border-emerald-500/10 p-3.5 rounded-xl space-y-1">
                      <p className="font-bold text-emerald-400">Solução Proposta:</p>
                      <p className="text-white/60">{selectedHeuristic.solution}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Interactive Sitemap Explorer */}
          <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Layers className="text-[#7cb6d3] size-5" />
                Explorador de Sitemap
              </h3>
              <p className="text-xs text-white/40 mb-6">Estrutura organizacional para Biblioteca Municipal (Nível 1 a 3)</p>

              {/* Visual Hierarchy Nodes */}
              <div className="space-y-6">
                {/* Level 1: Root Node */}
                <div className="flex justify-center">
                  <button 
                    onClick={() => setActiveMenu('home')}
                    className={`px-6 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                      activeMenu === 'home' 
                        ? 'bg-[#7cb6d3] text-black border-[#7cb6d3] scale-105' 
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    Home (Nível 1)
                  </button>
                </div>

                {/* Vertical Connector Line */}
                <div className="w-0.5 h-6 bg-white/10 mx-auto"></div>

                {/* Level 2: Categories */}
                <div className="grid grid-cols-3 gap-2">
                  <button 
                    onClick={() => setActiveMenu('acervo')}
                    className={`py-2 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                      activeMenu === 'acervo' 
                        ? 'bg-[#7cb6d3] text-black border-[#7cb6d3] scale-105' 
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    Acervo
                  </button>
                  <button 
                    onClick={() => setActiveMenu('usuario')}
                    className={`py-2 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                      activeMenu === 'usuario' 
                        ? 'bg-[#7cb6d3] text-black border-[#7cb6d3] scale-105' 
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    Meu Perfil
                  </button>
                  <button 
                    onClick={() => setActiveMenu('institucional')}
                    className={`py-2 rounded-lg border text-[11px] font-bold transition-all cursor-pointer ${
                      activeMenu === 'institucional' 
                        ? 'bg-[#7cb6d3] text-black border-[#7cb6d3] scale-105' 
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    Institucional
                  </button>
                </div>
              </div>
            </div>

            {/* Level 3 Details based on active selection */}
            <div className="mt-8 p-5 bg-[#0a0909] border border-white/5 rounded-2xl animate-in fade-in duration-200">
              <h4 className="text-xs font-bold text-[#7cb6d3] mb-2 uppercase tracking-wider">
                {activeMenu === 'home' && "Submenus da Home"}
                {activeMenu === 'acervo' && "Submenus de Acervo"}
                {activeMenu === 'usuario' && "Submenus de Meu Perfil"}
                {activeMenu === 'institucional' && "Submenus de Institucional"}
              </h4>
              <ul className="text-xs text-white/70 space-y-2 list-disc pl-5">
                {activeMenu === 'home' && (
                  <>
                    <li>Busca Geral Integrada (Serviço principal da página inicial)</li>
                    <li>Links de Acesso Rápido para renovações imediatas</li>
                  </>
                )}
                {activeMenu === 'acervo' && (
                  <>
                    <li>Livros Digitais (PDFs e Audiolivros)</li>
                    <li>Livros Físicos (Pesquisa de estoque nas unidades)</li>
                    <li>Sugestões de Leitura recomendadas pela curadoria</li>
                  </>
                )}
                {activeMenu === 'usuario' && (
                  <>
                    <li>Renovar Empréstimos em andamento (Clique único)</li>
                    <li>Visualizar Multas e Taxas pendentes</li>
                    <li>Histórico de leituras recomendadas</li>
                  </>
                )}
                {activeMenu === 'institucional' && (
                  <>
                    <li>Horários de Funcionamento de todas as unidades</li>
                    <li>Como chegar (Mapas e Transporte público)</li>
                    <li>Serviço de Wi-fi da Biblioteca (Cadastro inicial)</li>
                  </>
                )}
              </ul>
              <p className="text-[10px] text-white/40 mt-4">Nível 3 (Páginas finais de conteúdo e formulários de ações).</p>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}
