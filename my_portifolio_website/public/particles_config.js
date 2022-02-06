const config =  {
    
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },

      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 160,
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },

      shape: {
        type: "circle",
      },
      size: {
        value: 12.017978896429048,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },

    },
    detectRetina: true,
  }
  export default config;