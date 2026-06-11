import { useState } from 'react';
import { ArrowLeft, Heart, AlertCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

interface JourneyStep {
  phase: string;
  action: string;
  touchpoint: string;
  emotion: 'happy' | 'neutral' | 'frustrated';
  feelingText: string;
  opportunity: string;
}

const journeySteps: JourneyStep[] = [
  {
    phase: "1. Descoberta",
    action: "Percebe que o país exige seguro e a viagem é amanhã de manhã.",
    touchpoint: "Apólice da passagem aérea",
    emotion: 'frustrated',
    feelingText: "Ansiedade e pressa extrema. Medo de ser impedido na imigração.",
    opportunity: "Disponibilizar banners de seguro de emergência no check-in digital do voo."
  },
  {
    phase: "2. Comparação",
    action: "Pesquisa preços em sites agregadores usando o celular.",
    touchpoint: "Buscadores web (Google)",
    emotion: 'neutral',
    feelingText: "Confusão com tabelas de coberturas médicas burocráticas.",
    opportunity: "Simplificar a descrição de coberturas com tabelas visuais 'Garante isto' vs 'Não garante'."
  },
  {
    phase: "3. Compra",
    action: "Preenche dados e tenta pagar com cartão no celular.",
    touchpoint: "Formulário de Checkout do App",
    emotion: 'frustrated',
    feelingText: "Irritação. Formulário gigante sem preenchimento automático. Erro de carregamento.",
    opportunity: "Permitir checkout rápido com foto do passaporte (OCR) e pagamento em 1 clique (Pix/Apple Pay)."
  },
  {
    phase: "4. Uso",
    action: "Recebe o PDF do voucher por e-mail e salva no smartphone.",
    touchpoint: "E-mail de confirmação / Carteira digital",
    emotion: 'happy',
    feelingText: "Alívio. Voucher gerado instantaneamente com QR Code acessível offline.",
    opportunity: "Permitir salvar a apólice diretamente na Apple Wallet/Google Wallet."
  }
];

export default function JourneyExample() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeEmpathyQuad, setActiveEmpathyQuad] = useState<string>('pensa');

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12">
        <Link to="/jornada-fluxo" className="inline-flex items-center gap-2 text-[#7cb6d3] hover:underline mb-8 text-sm font-semibold">
          <ArrowLeft size={16} />
          Voltar para Módulo 3
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-2 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Laboratório Prático: Mapa de Empatia & Jornada do Usuário
        </h1>
        <p className="text-sm text-white/50 mb-12">Simulação visual de fluxos de empatia humana e curvas emocionais</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Interactive Empathy Map */}
          <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Heart className="text-[#7cb6d3] size-5 animate-pulse" />
                Mapa de Empatia Interativo (Persona: Ana)
              </h3>
              <p className="text-xs text-white/40 mb-6">Explore o contexto sensorial e emocional imediato de Ana tentando contratar o seguro</p>

              {/* Empathy Map Canvas Layout */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button 
                  onClick={() => setActiveEmpathyQuad('vê')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    activeEmpathyQuad === 'vê' ? 'bg-[#7cb6d3]/15 border-[#7cb6d3]/30 text-white' : 'bg-white/5 border-white/5 text-white/60'
                  }`}
                >
                  <strong className="text-xs block mb-1">O que vê?</strong>
                  <span className="text-[10px] opacity-80 leading-normal block">Amigos viajando, banners de aeroporto...</span>
                </button>
                
                <button 
                  onClick={() => setActiveEmpathyQuad('ouve')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    activeEmpathyQuad === 'ouve' ? 'bg-[#7cb6d3]/15 border-[#7cb6d3]/30 text-white' : 'bg-white/5 border-white/5 text-white/60'
                  }`}
                >
                  <strong className="text-xs block mb-1">O que ouve?</strong>
                  <span className="text-[10px] opacity-80 leading-normal block">Colegas recomendando cautela, alertas de atraso...</span>
                </button>

                <button 
                  onClick={() => setActiveEmpathyQuad('pensa')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    activeEmpathyQuad === 'pensa' ? 'bg-[#7cb6d3]/15 border-[#7cb6d3]/30 text-white' : 'bg-white/5 border-white/5 text-white/60'
                  }`}
                >
                  <strong className="text-xs block mb-1">O que pensa/sente?</strong>
                  <span className="text-[10px] opacity-80 leading-normal block">"Não posso esquecer nada", "E se a internet cair?"...</span>
                </button>

                <button 
                  onClick={() => setActiveEmpathyQuad('faz')}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    activeEmpathyQuad === 'faz' ? 'bg-[#7cb6d3]/15 border-[#7cb6d3]/30 text-white' : 'bg-white/5 border-white/5 text-white/60'
                  }`}
                >
                  <strong className="text-xs block mb-1">O que fala/faz?</strong>
                  <span className="text-[10px] opacity-80 leading-normal block">Organiza documentos correndo, reclama da pressa...</span>
                </button>
              </div>
            </div>

            {/* Quadrant Detail Panel */}
            <div className="bg-[#0a0909] border border-white/5 p-5 rounded-2xl animate-in fade-in duration-200">
              <h4 className="text-xs font-bold text-[#7cb6d3] mb-1.5 uppercase tracking-wider">
                {activeEmpathyQuad === 'vê' && "👁️ O que Ana vê no cenário"}
                {activeEmpathyQuad === 'ouve' && "👂 O que Ana ouve ao redor"}
                {activeEmpathyQuad === 'pensa' && "🧠 O que se passa na mente de Ana"}
                {activeEmpathyQuad === 'faz' && "💬 O que Ana fala e faz publicamente"}
              </h4>
              <p className="text-xs text-white/70 leading-relaxed font-medium">
                {activeEmpathyQuad === 'vê' && "Vê sites de viagem cheios de pop-ups, passagens impressas na mesa, a mala ainda por terminar e anúncios de seguros caros que parecem confusos."}
                {activeEmpathyQuad === 'ouve' && "Ouve alertas de aeroporto tocando na mente, a recomendação de sua mãe ('compre o seguro, sua tia já quebrou o braço na Europa e foi uma fortuna') e comentários de fóruns dizendo que o seguro básico falha."}
                {activeEmpathyQuad === 'pensa' && "Sente ansiedade profunda de esquecer o prazo de validade, frustração por ter que preencher 40 campos no celular e alívio caso consiga finalizar o Pix rápido."}
                {activeEmpathyQuad === 'faz' && "Pesquisa seguros em 3 abas ao mesmo tempo, fala que odeia burocracia governamental, digita dados correndo no celular enquanto segura um café e salva prints da tela de checkout com medo de erro."}
              </p>
            </div>
          </div>

          {/* Interactive User Journey Timeline */}
          <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 p-6 md:p-8 rounded-[2rem] flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <TrendingUp className="text-[#7cb6d3] size-5" />
                Linha do Tempo da Jornada Emocional
              </h3>
              <p className="text-xs text-white/40 mb-6">Mapeamento de oscilação emocional ao contratar seguro de viagem de emergência</p>

              {/* Progress Node Line */}
              <div className="flex justify-between items-center relative mb-8 px-4">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0"></div>
                {journeySteps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                      activeStep === idx 
                        ? 'bg-[#7cb6d3] text-black border-[#7cb6d3] scale-110 shadow-lg' 
                        : 'bg-[#141212] border-white/10 text-white/60 hover:bg-white/5'
                    }`}
                  >
                    <span className="text-[10px] font-bold">{idx + 1}</span>
                  </button>
                ))}
              </div>

              {/* Selected Step Details */}
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{journeySteps[activeStep].phase}</h4>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    journeySteps[activeStep].emotion === 'happy' ? 'bg-emerald-500/10 text-emerald-400' :
                    journeySteps[activeStep].emotion === 'neutral' ? 'bg-sky-500/10 text-sky-400' : 'bg-red-500/10 text-red-400'
                  }`}>
                    Estado: {journeySteps[activeStep].emotion}
                  </span>
                </div>
                
                <div className="bg-[#0a0909] border border-white/5 p-4 rounded-xl text-xs space-y-2.5">
                  <p className="font-medium text-white/80"><strong className="text-white">Ação:</strong> {journeySteps[activeStep].action}</p>
                  <p className="text-white/60"><strong className="text-white">Ponto de Contato (Touchpoint):</strong> {journeySteps[activeStep].touchpoint}</p>
                  <p className="text-white/60"><strong className="text-white">Humor/Pensamentos:</strong> {journeySteps[activeStep].feelingText}</p>
                </div>
              </div>
            </div>

            {/* Opportunity card */}
            <div className="mt-8 bg-emerald-950/10 border border-emerald-500/15 p-4 rounded-2xl flex gap-3.5 items-start">
              <AlertCircle className="text-[#6fe0c2] size-5.5 mt-0.5 flex-shrink-0" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#6fe0c2] uppercase tracking-wide">💡 Oportunidade para o UX Designer:</h4>
                <p className="text-xs text-white/70 leading-relaxed font-medium">{journeySteps[activeStep].opportunity}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
