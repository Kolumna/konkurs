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

        const grafika = new Image();
        grafika.src = "grafika.png";

        grafika.addEventListener("load", function()
        {
            const grafika = this;
        });

        let dane = 
        {
            nrKlatki:0,
            canvas: canvas,
            grafika: grafika
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
    },
    render: function(dane)
    {
        Render.aktualizacja(dane);
    }
    

};
window.onload = Silnik.ini();
   