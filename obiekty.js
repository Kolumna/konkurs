let Obiekty =
{
    ini: function(dane)
    {
        let niebo = 
        {
            obraz: new Obiekty.zadania.Obraz(dane.grafika, 0, 208, 960, 208),
            x:0,
            y:0,
            w:2880,
            h:624 
        };

        let mapa =
        {
            obraz: new Obiekty.zadania.Obraz(dane.grafika, 0, 0, 1440, 208),
            x:0,
            y:0,
            w:4320,
            h:624
        };
        dane.obiekty = {};
        dane.obiekty.niebo = niebo;
        dane.obiekty.mapa = mapa;
    },
    zadania: 
    {
        Obraz: function(img, x, y, w, h)
        {
            this.img= img;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        },
    }
}