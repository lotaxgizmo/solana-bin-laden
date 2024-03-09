import Hero from "./components/Hero";
import Firstterrorist from "./components/Firstterrorist";
import Join from "./components/Join";
import Fourpart from './components/Fourpart'
import Tokenomics from './components/Tokenomics'
import noise from './assets/noise.svg'

function App() {
  return (
    <div className="flex flex-col relative overflow-clip">
      <img src={noise} alt="" className="fixed z-[1] " />
      <Hero />
      <Firstterrorist />
      <Join />
      <Fourpart />
      <Tokenomics />

    </div>
  );
}

export default App;
