import { useState } from 'react';
import { ArrowLeft, Search, Terminal, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

interface DiamondPhase {
  id: number;
  name: string;
  type: 'Divergir' | 'Convergir';
  objective: string;
  activities: string[];
  deliverables: string[];
  heuristics: string;
}

const checkoutRedesignProject: DiamondPhase[] = [
  {
    id: 1,
    name: "1. Descobrir (Discover)",
    type: 'Divergir',
    objective: "Investigar as causas da alta taxa de abandono do carrinho (de 65%) sem suposições pré-estabelecidas.",
    activities: [
      "Realização de Desk Research em relatórios do Google Analytics e SAC.",
      "Análise de concorrência (Benchmarking) de checkout com 3 agregadores de e-commerce.",
      "Entrevistas semiestruturadas com 8 usuários que abandonaram carrinhos."
    ],
    deliverables: [
      "Matriz CSD inicial atualizada.",
      "Relatório de insights qualitativos das entrevistas.",
      "Screener de recrutamento."
    ],
    heuristics: "Visibilidade do status do sistema (#1), Prevenção de erros (#5)"
  },
  {
    id: 2,
    name: "2. Definir (Define)",
    type: 'Convergir',
    objective: "Filtrar os dados obtidos e mapear o problema real do usuário na fase de finalização da compra.",
    activities: [
      "Criação da Proto-Persona 'Ana, 29 anos, advogada ocupada'.",
      "Modelagem do Mapa de Empatia de Ana durante o checkout móvel.",
      "Mapeamento da Jornada do Usuário identificando o pain point de preenchimento excessivo no celular."
    ],
    deliverables: [
      "Perfil de Persona validado.",
      "Mapa de Empatia do usuário sênior.",
      "Gráfico de oscilação emocional de jornada."
    ],
    heuristics: "Correspondência com o mundo real (#2), Reconhecimento em vez de recordação (#6)"
  },
  {
    id: 3,
    name: "3. Desenvolver (Develop)",
    type: 'Divergir',
    objective: "Idear múltiplos fluxos de navegação e conceitos de interface minimalistas para acelerar a compra.",
    activities: [
      "Sessões de ideação rápida e rabiscoframes usando Crazy 8's.",
      "Criação de diagramas de User Flow detalhando o caminho de recuperação de compra.",
      "Prototipagem de média fidelidade em cinza no Figma."
    ],
    deliverables: [
      "User Flow (Happy Path e caminhos de erro).",
      "Esboços Crazy 8's selecionados.",
      "Protótipo navegável de média fidelidade."
    ],
    heuristics: "Controle e liberdade do usuário (#3), Consistência e padrões (#4)"
  },
  {
    id: 4,
    name: "4. Entregar (Deliver)",
    type: 'Convergir',
    objective: "Criar o visual refinado, validar a usabilidade com testes e fazer o handoff estruturado.",
    activities: [
      "Desenho de telas em alta fidelidade no Figma seguindo o Design System da marca.",
      "Testes de usabilidade presenciais com 5 participantes do público-alvo.",
      "Ajustes de contraste (WCAG) e documentação de handoff técnico para desenvolvedores."
    ],
    deliverables: [
      "Protótipo final interativo no Figma.",
      "Especificações de design tokens (Handoff).",
      "Relatório de melhorias pós-teste (SUS de 82 pontos)."
    ],
    heuristics: "Estética e minimalismo (#8), Ajuda e documentação (#10)"
  }
];

export default function DoubleDiamondExample() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12">
        <Link to="/double-diamond" className="inline-flex items-center gap-2 text-[#7cb6d3] hover:underline mb-8 text-sm font-semibold">
          <ArrowLeft size={16} />
          Voltar para Módulo 4
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-2 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Laboratório Prático: Case Study Double Diamond
        </h1>
        <p className="text-sm text-white/50 mb-12">Estruturação de projetos reais utilizando o framework de Design Centrado no Usuário</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Phase selector buttons */}
          <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 p-6 rounded-[2rem] space-y-3 lg:col-span-1 h-fit">
            <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Etapas do Case</h3>
            {checkoutRedesignProject.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  activePhase === idx 
                    ? 'bg-[#7cb6d3]/10 border-[#7cb6d3]/30 text-white scale-[1.01]' 
                    : 'bg-white/5 border-white/5 text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div>
                  <p className="text-xs font-bold">{phase.name.substring(3)}</p>
                  <p className="text-[10px] text-white/40 mt-0.5">{phase.type} possibilidades</p>
                </div>
                <span className={`w-2 h-2 rounded-full ${phase.type === 'Divergir' ? 'bg-amber-400' : 'bg-sky-400'}`}></span>
              </button>
            ))}
          </div>

          {/* Phase Information Board */}
          <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] lg:col-span-2 space-y-6">
            
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-lg font-bold text-white">{checkoutRedesignProject[activePhase].name}</h3>
              <span className={`text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                checkoutRedesignProject[activePhase].type === 'Divergir' ? 'bg-amber-500/10 text-amber-400' : 'bg-sky-500/10 text-sky-400'
              }`}>
                {checkoutRedesignProject[activePhase].type}
              </span>
            </div>

            {/* Objective text */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-[#7cb6d3] uppercase tracking-wider">Objetivo Geral da Etapa:</h4>
              <p className="text-xs text-white/70 leading-relaxed font-medium">{checkoutRedesignProject[activePhase].objective}</p>
            </div>

            {/* Activities grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Search size={14} className="text-[#7cb6d3]" />
                  Ações executadas:
                </h4>
                <ul className="list-disc pl-5 text-xs text-white/60 space-y-1.5 leading-relaxed font-medium">
                  {checkoutRedesignProject[activePhase].activities.map((act, idx) => (
                    <li key={idx}>{act}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Award size={14} className="text-[#7cb6d3]" />
                  Entregáveis técnicos:
                </h4>
                <ul className="list-disc pl-5 text-xs text-white/60 space-y-1.5 leading-relaxed font-medium">
                  {checkoutRedesignProject[activePhase].deliverables.map((del, idx) => (
                    <li key={idx}>{del}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Heuristics tested */}
            <div className="bg-[#0a0909] border border-white/5 p-4 rounded-xl text-xs flex gap-2.5 items-center">
              <Terminal size={16} className="text-[#7cb6d3] flex-shrink-0" />
              <p className="text-white/60">
                <strong className="text-white">Heurísticas avaliadas nesta fase:</strong> {checkoutRedesignProject[activePhase].heuristics}
              </p>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}
