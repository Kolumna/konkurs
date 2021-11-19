let Silnik =
{
    ini: function()
    {
        let nieboCanvas = document.getElementById("niebo-canvas");
        let postacieCanvas = document.getElementById("postacie-canvas");
        let mapaCanvas = document.getElementById("mapa-canvas");

        let canvas =
        {
            nieboCanvas: nieboCanvas,
            postacieCanvas: postacieCanvas,
            mapaCanvas: mapaCanvas,
            nieboCtx: nieboCanvas.getContext("2d"),
            postacieCtx: postacieCanvas.getContext("2d"),
            mapaCtx: mapaCanvas.getContext("2d"),
        };

        const niebo = new Image();
        niebo.src = "niebo.png";

        const mapa = new Image();
        mapa.src = "mapa.png";

        const postacie = new Image();
        postacie.src = "postacie.png";

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

        let dane = 
        {
            nrKlatki:0,
            canvas: canvas,
            niebo: niebo,
            mapa : mapa,
            postacie : postacie
        };
        Obiekty.ini(dane);
        Silnik.start(dane);
        
    },
    start: function(dane)
    {
        let petla = function()
        {
            Silnik.wejscie(dane);
            Silnik.aktualizacje(dane);
            Silnik.render(dane);

            dane.nrKlatki++;

            window.requestAnimationFrame(petla);
        };

        petla();
    },
    wejscie: function(dane)
    {

    },
    aktualizacje: function(dane)
    {
        Animacje.aktualizacja(dane);
        Fizyka.aktualizacja(dane);
    },
    render: function(dane)
    {
        Render.aktualizacja(dane);
    }
    

};
window.onload = Silnik.ini();
   