let Obiekty =
{
    ini: function(dane)
    {
        let niebo = 
        {
            obraz: new Obiekty.zadania.Obraz(dane.niebo, 0, 0, 1920, 416),
            x:0,
            y:0,
            w:3840,
            h:832
        };

        let mapa =
        {
            obraz: new Obiekty.zadania.Obraz(dane.mapa, 0, 0, 2880, 416),
            x:0,
            y:0,
            w:5760,
            h:832
        };

        let wiedzmin = new Obiekty.zadania.Wiedzmin(dane.postacie,150,567,96,128)

        let sciany = [[0,704,2000,128]] ;

        dane.obiekty = {};
        dane.obiekty.niebo = niebo;
        dane.obiekty.mapa = mapa;
        dane.obiekty.wiedzmin = wiedzmin;
        dane.obiekty.tabelaScian = [];

        sciany.forEach(function(z)
        {
            dane.obiekty.tabelaScian.push(new Obiekty.zadania.Sciana(z[0],z[1],z[2],z[3]));
        });
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
        Wiedzmin: function(img, x, y, w, h)
        {
            this.obraz = new Obiekty.zadania.Obraz(img, 0, 0, 32, 32);
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.predkoscY = 1;
        },
        Sciana: function(x, y, w, h)
        {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.typ = "sciana";
        }
    }
}