import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import HeuristicsAndArchitecture from './pages/HeuristicsAndArchitecture';
import UserJourneyAndFlow from './pages/UserJourneyAndFlow';
import DoubleDiamond from './pages/DoubleDiamond';
import ProtoPersona from './pages/ProtoPersona';

// Páginas de Exemplo
import IntroductionExample from './pages/examples/IntroductionExample';
import HeuristicsExample from './pages/examples/HeuristicsExample';
import JourneyExample from './pages/examples/JourneyExample';
import DoubleDiamondExample from './pages/examples/DoubleDiamondExample';
import ProtoPersonaExample from './pages/examples/ProtoPersonaExample';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introducao" element={<Introduction />} />
        <Route path="/introducao/exemplo" element={<IntroductionExample />} />
        <Route path="/heuristicas-arquitetura" element={<HeuristicsAndArchitecture />} />
        <Route path="/heuristicas-arquitetura/exemplo" element={<HeuristicsExample />} />
        <Route path="/jornada-fluxo" element={<UserJourneyAndFlow />} />
        <Route path="/jornada-fluxo/exemplo" element={<JourneyExample />} />
        <Route path="/double-diamond" element={<DoubleDiamond />} />
        <Route path="/double-diamond/exemplo" element={<DoubleDiamondExample />} />
        <Route path="/proto-persona" element={<ProtoPersona />} />
        <Route path="/proto-persona/exemplo" element={<ProtoPersonaExample />} />
      </Routes>
    </BrowserRouter>
  );
}
