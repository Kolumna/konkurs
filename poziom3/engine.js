let Silnik =
{
    ini: function()
    {
        let nieboCanvas = document.getElementById("niebo-canvas");
        let postacieCanvas = document.getElementById("postacie-canvas");
        let mapaCanvas = document.getElementById("mapa-canvas");
        let tloCanvas = document.getElementById("tlo-canvas");
        let guiCanvas = document.getElementById("gui-canvas");

        let canvas =
        {
            nieboCanvas: nieboCanvas,
            tloCanvas: tloCanvas,
            postacieCanvas: postacieCanvas,
            mapaCanvas: mapaCanvas,
            guiCanvas: guiCanvas,
            nieboCtx: nieboCanvas.getContext("2d"),
            postacieCtx: postacieCanvas.getContext("2d"),
            mapaCtx: mapaCanvas.getContext("2d"),
            tloCtx: tloCanvas.getContext("2d"),
            guiCtx: guiCanvas.getContext("2d")
        };

        const niebo = new Image();
        niebo.src = "niebo.png";

        const mapa = new Image();
        mapa.src = "mapa.png";

        const postacie = new Image();
        postacie.src = "postacie.png";
        
        const tlo = new Image();
        tlo.src = "tlo.png";

        const gui = new Image();
        gui.src = "serca.png";

        niebo.addEventListener("load", function()
        {
            const niebo = this;
        });
        mapa.addEventListener("load", function()
        {
            const mapa = this;
        });
        postacie.addEventListener("load", function()
        {
            const postacie = this;
        });
        tlo.addEventListener("load", function()
        {
            const tlo = this;
        });
        gui.addEventListener("load", function()
        {
            const gui = this;
        });

        let dane = 
        {
            nrKlatki:0,
            canvas: canvas,
            niebo: niebo,
            mapa : mapa,
            postacie : postacie,
            tlo : tlo,
            gui: gui
        };

        dane.canvas.nieboCtx.imageSmoothingEnabled = false;
        dane.canvas.postacieCtx.imageSmoothingEnabled = false;
        dane.canvas.tloCtx.imageSmoothingEnabled = false;
        dane.canvas.guiCtx.imageSmoothingEnabled = false;
        dane.canvas.mapaCtx.imageSmoothingEnabled = false;

        
        Obiekty.ini(dane);
        Silnik.start(dane);
        Input.ini(dane);
        
    },
    start: function(dane)
    {
        let petla = function()
        {
            Silnik.input(dane);
            Silnik.aktualizacje(dane);
            Silnik.render(dane);

            dane.nrKlatki++;

            window.requestAnimationFrame(petla);
        };

        petla();
    },
    input: function(dane)
    {
        Input.aktualizacja(dane);
    },
    aktualizacje: function(dane)
    {
        Ruch.aktualizacja(dane);
        Animacje.aktualizacja(dane);
        Fizyka.aktualizacja(dane);
    },
    render: function(dane)
    {
        Render.aktualizacja(dane);
    }
    

};
window.onload = Silnik.ini();
   