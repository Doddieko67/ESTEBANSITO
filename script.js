document.addEventListener("DOMContentLoaded", () => {
    const punto = document.querySelector("#punto");
    const tituloProyecto = document.querySelector("#tituloProyecto");
    const grupo = document.querySelector("#grupo");
    const fecha = document.querySelector("#fecha");
    const botonInicial = document.querySelector("#botonInicial");
    const pantallaDerecha = document.querySelector("#pantallaDerecha");
    const snow = document.querySelector(".tpl-snow");

    setTimeout(() => {
        punto.style.display = "none";
        tituloProyecto.style.display = "block";
        setTimeout(() => {
            tituloProyecto.style["border-right"] = "0 solid rgba(255, 0, 255,0)";
            grupo.style.display = "block";
                setTimeout(() => {
                        grupo.style["border-right"] = "0 solid rgba(255, 0, 255,0)";
                        fecha.style.display = "block";
                        setTimeout(() => {
                            fecha.style["border-right"] = "0 solid rgba(255, 0, 255,0)";
                            pantallaDerecha.style.display = "block";
                            botonInicial.style.display = "block";
                        }, 1600);
                    }, 1600);
        }, 1600);
    }, 3000);

    botonInicial.addEventListener("click", () => {
        header.style.display = "block";
        document.body.style.overflow = "visible";
        snow.style.display = "block";
    });

    const header = document.querySelector("header");

    // Función para manejar el evento de scroll
    function handleScroll() {
        header.classList.toggle("abajo",window.scrollY>0)
    }

    // Agregar el evento de scroll al objeto window
    window.addEventListener("scroll", handleScroll);

    // Ocultar el punto después de cierto tiempo
    grupo.style.display = "none";
    tituloProyecto.style.display = "none";
    fecha.style.display = "none";
    pantallaDerecha.style.display = "none";
    botonInicial.style.display = "none";
    snow.style.display = "none";
    
});
