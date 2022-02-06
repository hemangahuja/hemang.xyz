import Particles from "react-tsparticles";
import { ISourceOptions } from "tsparticles";
import config from "../public/particles_config";
const Particle = () => {

  return (
    <Particles options={config as ISourceOptions}/>
  );
};

export default Particle;
