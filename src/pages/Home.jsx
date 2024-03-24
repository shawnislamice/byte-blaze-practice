import Hero from "../components/Hero";
import wave from '../assets/wave.svg'

const Home = () => {
    return (
      <div className="relative">
        <Hero></Hero>
        
          <img className="absolute w-full bottom-0 opacity-40"  src={wave} alt="" />
        
      </div>
    );
};

export default Home;