import { ArrowLeft, User, BookOpen, ThumbsUp, AlertCircle, Laptop, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

export default function ProtoPersonaExample() {
  // Stats values
  const techLevel = 85;
  const patienceLevel = 30;
  const orgLevel = 90;

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12">
        <Link to="/proto-persona" className="inline-flex items-center gap-2 text-[#7cb6d3] hover:underline mb-8 text-sm font-semibold">
          <ArrowLeft size={16} />
          Voltar para Módulo 5
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight mb-2 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
          Laboratório Prático: Perfil de Persona
        </h1>
        <p className="text-sm text-white/50 mb-12">Sintetização de perfis comportamentais e arquétipos de usuário</p>

        <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Sidebar: Photo & Demographics & Sliders */}
            <div className="lg:col-span-1 space-y-6 flex flex-col justify-between">
              
              {/* Avatar Box */}
              <div className="flex flex-col items-center text-center p-6 bg-white/5 border border-white/5 rounded-3xl">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#7cb6d3] to-purple-500 flex items-center justify-center text-white mb-4">
                  <User size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-black text-white">Ana Carvalho</h3>
                <p className="text-xs text-[#7cb6d3] font-bold mt-1">29 anos • Advogada Corporativa</p>
                <div className="w-full border-t border-white/5 my-4 pt-3 flex justify-around text-[10px] text-white/50 font-medium">
                  <div>
                    <span className="block text-white font-bold">Local:</span>
                    São Paulo, SP
                  </div>
                  <div>
                    <span className="block text-white font-bold">Renda:</span>
                    Classe B+
                  </div>
                </div>
              </div>

              {/* Behavior Sliders (Read-Only visualization representing traits) */}
              <div className="p-6 bg-white/5 border border-white/5 rounded-3xl space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Traços Comportamentais:</h4>
                
                {/* Slider 1: Tech level */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-white/80">
                    <span>Afinidade Tecnológica</span>
                    <span>{techLevel}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#7cb6d3] h-full rounded-full" style={{ width: `${techLevel}%` }} />
                  </div>
                </div>

                {/* Slider 2: Patience level */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-white/80">
                    <span>Paciência com Burocracia</span>
                    <span>{patienceLevel}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-red-400 h-full rounded-full" style={{ width: `${patienceLevel}%` }} />
                  </div>
                </div>

                {/* Slider 3: Organization level */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-white/80">
                    <span>Nível de Organização</span>
                    <span>{orgLevel}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${orgLevel}%` }} />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side: Bio, Pain points and Goals */}
            <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
              
              {/* Bio Block */}
              <div className="p-6 bg-white/5 border border-white/5 rounded-3xl space-y-3">
                <h4 className="text-xs font-bold text-[#7cb6d3] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen size={14} />
                  Perfil & Rotina Diária:
                </h4>
                <p className="text-xs text-white/70 leading-relaxed font-medium">
                  Ana é advogada sênior em um escritório movimentado. Seu dia a dia é recheado de reuniões, análises de contratos e viagens de última hora. Como passa a maior parte do tempo fora do escritório, resolve 90% das tarefas pessoais pelo celular enquanto se desloca. Ela não tem paciência para sistemas que exigem cadastros longos ou que geram erros inexplicáveis no checkout, pois considera tempo seu ativo mais valioso.
                </p>
              </div>

              {/* Goals vs Pains Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Goals */}
                <div className="p-6 bg-[#0a0909] border border-white/5 rounded-3xl space-y-3">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ThumbsUp size={14} />
                    Necessidades & Metas:
                  </h4>
                  <ul className="list-disc pl-5 text-[11px] text-white/60 space-y-2 leading-relaxed font-medium">
                    <li>Contratar serviços (como seguros ou táxis) em menos de 1 minuto pelo celular.</li>
                    <li>Sistemas com auto-preenchimento ou login com redes sociais (1 clique).</li>
                    <li>Vouchers e apólices salvos de forma clara no e-mail ou carteira digital (Apple Wallet).</li>
                  </ul>
                </div>

                {/* Pain Points */}
                <div className="p-6 bg-[#0a0909] border border-white/5 rounded-3xl space-y-3">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle size={14} />
                    Dores & Frustrações (Pains):
                  </h4>
                  <ul className="list-disc pl-5 text-[11px] text-white/60 space-y-2 leading-relaxed font-medium">
                    <li>Formulários com mais de 15 campos obrigatórios no mobile.</li>
                    <li>Ter que recuperar senhas longas a cada login na plataforma.</li>
                    <li>Falta de feedback de carregamento em processamento de cartão de crédito.</li>
                  </ul>
                </div>

              </div>

              {/* Devices used */}
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between text-xs text-white/70">
                <span className="font-semibold text-white">Dispositivos principais:</span>
                <div className="flex gap-4">
                  <span className="flex items-center gap-1.5"><Smartphone size={14} className="text-[#7cb6d3]" /> Mobile (85%)</span>
                  <span className="flex items-center gap-1.5"><Laptop size={14} className="text-white/40" /> Desktop (15%)</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}
