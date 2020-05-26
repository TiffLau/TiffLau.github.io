/* ---- particles.js config ---- */

particlesJS("beige", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": ["#555CC9","ff3399","F0F44F","#5FB7E6","#76D862","#F1AB48","#41B0AA","C318BE","EDDEC6","3D403D","EC5535","D0FF69","C8C5B3","EEF24F"]
        },
        "size": {
            "value": 5,
            "random": false
        },
        "move": {
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": true,
            "color": "#f9f9e6"
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 10
            }
        }
    }
});