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

window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.getElementById("navbar").style.height = "fit-content";
    document.getElementById("navbar").style.backgroundColor = "#484c5a";
    document.getElementById("navbar").style.opacity = 0.98;
    document.getElementById("navbar").style.boxShadow = "0 4px 8px 0 #00000033, 0 6px 20px 0 #00000030";  
    document.getElementById("navbar").style.paddingTop = "4vh";
    document.getElementById("navbar").style.paddingBottom = "3vh";
    document.getElementsByClassName("icon1")[0].style.color = "#f9f9e6";  
    document.getElementsByClassName("icon")[0].style.color = "#f9f9e6";  
    document.getElementsByClassName("icon")[1].style.color = "#f9f9e6"; 
    document.getElementsByClassName("icon")[0].style.WebKitPoint.color = "f9f9e6";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "unset";
    document.getElementById("navbar").style.paddingTop = "5vh";
    document.getElementById("navbar").style.paddingBottom = "5vh";
    document.getElementsByClassName("icon1")[0].style.color = "black";  
    document.getElementsByClassName("icon")[0].style.color = "black";  
    document.getElementsByClassName("icon")[1].style.color = "black";
  }
}

function menuFunction(x) {
    x.classList.toggle("change");
    if (document.getElementById("options").style.display == "inline-block"){
        document.getElementById("options").style.display = "none";
        document.getElementById("navbar-right").style.display = "none";
    } else {
        document.getElementById("options").style.display = "inline-block";
        document.getElementById("navbar-right").style.display = "inline-block";
    }
}