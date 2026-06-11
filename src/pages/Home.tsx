import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Warp } from '@paper-design/shaders-react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout noPadding>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* Background Shader */}
        <div className="absolute inset-0 z-0">
          <Warp
            style={{ height: '100%', width: '100%' }}
            proportion={0.45}
            softness={1}
            distortion={0.25}
            swirl={0.8}
            swirlIterations={10}
            shape="checks"
            shapeScale={0.1}
            scale={1}
            rotation={0}
            speed={1}
            colors={[
              'hsl(200, 100%, 20%)',
              'hsl(160, 100%, 75%)',
              'hsl(180, 90%, 30%)',
              'hsl(170, 100%, 80%)'
            ]}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl px-8 text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-white text-6xl md:text-8xl font-display font-black tracking-tighter leading-tight drop-shadow-2xl">
              Domine <br className="md:hidden" /> UX Design
            </h1>
            <p className="text-white/90 text-xl md:text-3xl font-medium max-w-2xl mx-auto drop-shadow-md">
              Aprenda a construir experiências digitais incríveis. De heurísticas a jornadas de usuário, de forma prática e estruturada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/introducao"
              className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-5 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Iniciar Curso</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Decorative Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>
    </Layout>
  );
}
