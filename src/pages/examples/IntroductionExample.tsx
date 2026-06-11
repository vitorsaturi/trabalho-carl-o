import { useState } from 'react';
import { ArrowLeft, Plus, Trash2, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';

interface StickyNote {
  id: number;
  text: string;
  type: 'certeza' | 'suposicao' | 'duvida';
}

const initialNotes: StickyNote[] = [
  { id: 1, text: "O público-alvo tem mais de 60 anos.", type: 'certeza' },
  { id: 2, text: "Bicicletas comuns são perigosas para quem tem problemas de equilíbrio.", type: 'certeza' },
  { id: 3, text: "Eles preferem pagar via boleto ou Pix.", type: 'suposicao' },
  { id: 4, text: "Idosos acham aplicativos de celular complicados de navegar.", type: 'suposicao' },
  { id: 5, text: "Qual o tamanho de e-bike ideal para segurança de articulações?", type: 'duvida' },
  { id: 6, text: "Eles têm força física para pedalar modelos sem motor assistido?", type: 'duvida' },
];

export default function IntroductionExample() {
  const [notes, setNotes] = useState<StickyNote[]>(initialNotes);
  const [newNoteText, setNewNoteText] = useState('');

  const addNote = (type: 'certeza' | 'suposicao' | 'duvida') => {
    if (newNoteText.trim() === '') return;
    const newNote: StickyNote = {
      id: Date.now(),
      text: newNoteText,
      type
    };
    setNotes([...notes, newNote]);
    setNewNoteText('');
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const resetNotes = () => {
    setNotes(initialNotes);
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12">
        <Link to="/introducao" className="inline-flex items-center gap-2 text-[#7cb6d3] hover:underline mb-8 text-sm font-semibold">
          <ArrowLeft size={16} />
          Voltar para Módulo 1
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">
              Laboratório Prático: Matriz CSD
            </h1>
            <p className="text-sm text-white/50 mt-1">Cenário simulado: "Aplicativo de aluguel de e-bikes para o público sênior"</p>
          </div>
          <button 
            onClick={resetNotes}
            className="self-start md:self-auto px-4 py-2 border border-white/10 hover:bg-white/5 rounded-xl text-xs font-bold text-white/70 hover:text-white transition-colors flex items-center gap-2 cursor-pointer"
          >
            <RefreshCw size={14} />
            Resetar Notas
          </button>
        </div>

        {/* Input box to add custom sticky notes */}
        <div className="bg-[#141212]/60 backdrop-blur-md border border-white/5 p-6 rounded-[2rem] mb-12">
          <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
            <Plus size={16} className="text-[#7cb6d3]" />
            Adicionar Novo Post-it ao Quadro
          </h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" 
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)}
              placeholder="Digite uma certeza, suposição ou dúvida..." 
              className="flex-1 bg-[#0a0909] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#7cb6d3]/50 focus:ring-1 focus:ring-[#7cb6d3]/50 text-white font-medium"
            />
            <div className="flex gap-2">
              <button 
                onClick={() => addNote('certeza')}
                className="flex-1 md:flex-none px-4 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer"
              >
                + Certeza
              </button>
              <button 
                onClick={() => addNote('suposicao')}
                className="flex-1 md:flex-none px-4 py-3 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/20 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer"
              >
                + Suposição
              </button>
              <button 
                onClick={() => addNote('duvida')}
                className="flex-1 md:flex-none px-4 py-3 bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 border border-sky-500/20 rounded-xl text-xs font-bold transition-all hover:scale-[1.02] cursor-pointer"
              >
                + Dúvida
              </button>
            </div>
          </div>
        </div>

        {/* Board Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column Certezas */}
          <div className="bg-[#141212]/30 border border-white/5 rounded-3xl p-5 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <h4 className="font-display font-black text-emerald-400 text-sm tracking-wide uppercase">🟢 Certezas</h4>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {notes.filter(n => n.type === 'certeza').length}
              </span>
            </div>
            <div className="space-y-3 flex-1">
              {notes.filter(n => n.type === 'certeza').map(note => (
                <div key={note.id} className="bg-emerald-950/20 border border-emerald-500/20 p-4 rounded-xl text-xs relative group hover:border-emerald-500/40 transition-colors animate-in zoom-in-95 duration-200">
                  <p className="text-white/80 pr-6 leading-relaxed font-medium">{note.text}</p>
                  <button 
                    onClick={() => deleteNote(note.id)}
                    className="absolute top-3 right-3 text-white/20 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Column Suposições */}
          <div className="bg-[#141212]/30 border border-white/5 rounded-3xl p-5 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <h4 className="font-display font-black text-amber-400 text-sm tracking-wide uppercase">🟡 Suposições</h4>
              <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {notes.filter(n => n.type === 'suposicao').length}
              </span>
            </div>
            <div className="space-y-3 flex-1">
              {notes.filter(n => n.type === 'suposicao').map(note => (
                <div key={note.id} className="bg-amber-950/20 border border-amber-500/20 p-4 rounded-xl text-xs relative group hover:border-amber-500/40 transition-colors animate-in zoom-in-95 duration-200">
                  <p className="text-white/80 pr-6 leading-relaxed font-medium">{note.text}</p>
                  <button 
                    onClick={() => deleteNote(note.id)}
                    className="absolute top-3 right-3 text-white/20 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Column Dúvidas */}
          <div className="bg-[#141212]/30 border border-white/5 rounded-3xl p-5 min-h-[400px] flex flex-col">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <h4 className="font-display font-black text-sky-400 text-sm tracking-wide uppercase">🔵 Dúvidas</h4>
              <span className="bg-sky-500/10 text-sky-400 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {notes.filter(n => n.type === 'duvida').length}
              </span>
            </div>
            <div className="space-y-3 flex-1">
              {notes.filter(n => n.type === 'duvida').map(note => (
                <div key={note.id} className="bg-sky-950/20 border border-sky-500/20 p-4 rounded-xl text-xs relative group hover:border-sky-500/40 transition-colors animate-in zoom-in-95 duration-200">
                  <p className="text-white/80 pr-6 leading-relaxed font-medium">{note.text}</p>
                  <button 
                    onClick={() => deleteNote(note.id)}
                    className="absolute top-3 right-3 text-white/20 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
