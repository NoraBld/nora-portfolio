import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground({ backgroundColor }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1, // derrière le contenu
        },
        background: {
          color: backgroundColor, // couleur dynamique
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#b15b86" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: true, distance: 150, color: "#b15b86", opacity: 0.3, width: 1 },
          move: { enable: true, speed: 1.2, outModes: { default: "out" } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
          modes: { repulse: { distance: 120 }, push: { quantity: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}
