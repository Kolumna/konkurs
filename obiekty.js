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

        let tlo =
        {
            obraz: new Obiekty.zadania.Obraz(dane.tlo, 0, 0, 2880, 370),
            x:0,
            y:0,
            w:6000,
            h:768
        };
        //pozycja na mapie/ wielkosc
        let wiedzmin = new Obiekty.zadania.Wiedzmin(dane.postacie,150,0,96,128)

        let sciany = [[0,704,1536,128],[1856,576,128,64],[2304,704,768,256],[-96,608,96,300]];

        dane.obiekty = {};
        dane.obiekty.niebo = niebo;
        dane.obiekty.tlo = tlo;
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
            let wnetrze = this;
            //dane z obrazu
            this.obraz = new Obiekty.zadania.Obraz(img, 192, 0, 32, 32);
            this.animacja = 
            {
                ruchPrawo:
                {
                    klatka: [new Obiekty.zadania.Obraz(img,32,0,32,32),
                    new Obiekty.zadania.Obraz(img,0,0,32,32),
                    new Obiekty.zadania.Obraz(img,32,0,32,32),
                    new Obiekty.zadania.Obraz(img,64,0,32,32)],
                    ObecnaKlatka: 0
                },
                ruchLewo:
                {
                    klatka: [new Obiekty.zadania.Obraz(img,32,32,32,32),
                    new Obiekty.zadania.Obraz(img,0,32,32,32),
                    new Obiekty.zadania.Obraz(img,32,32,32,32),
                    new Obiekty.zadania.Obraz(img,64,32,32,32)],
                    ObecnaKlatka: 0
                },
                staniePrawo: new Obiekty.zadania.Obraz(img,192,-1,32,32),
                stanieLewo: new Obiekty.zadania.Obraz(img,192,32,32,32),
                skokPrawo: new Obiekty.zadania.Obraz(img,128,-1,32,32),
                skokLewo: new Obiekty.zadania.Obraz(img,128,32,32,32)
            };
            this.stan = 
            {
                stanie:
                {
                    ruch: function(dane)
                    {
                        return;
                    },
                    animacja: function(dane)
                    {
                        if(wnetrze.kierunek === "prawo")
                        {
                            wnetrze.obraz = wnetrze.animacja.staniePrawo;
                        }
                        else
                        {
                            wnetrze.obraz = wnetrze.animacja.stanieLewo;
                        }
                    }
                },
                skakanie:
                {
                    ruch: function(dane)
                    {
                        if(wnetrze.predkoscY == 0)
                        {
                            wnetrze.predkoscY -= 7.5;
                        }                           
                    },
                    animacja: function(dane)
                    {
                        if(wnetrze.kierunek === "prawo")
                        {
                            wnetrze.obraz = wnetrze.animacja.skokPrawo;
                            
                        }
                        else
                        {
                            wnetrze.obraz = wnetrze.animacja.skokLewo;
                        }
                    }
                },
                poruszanie:
                {       ruch: function(dane)
                    {
                        //gracz i mapa
                        if(wnetrze.kierunek === "prawo")
                        {
                            if(wnetrze.x < dane.canvas.postacieCanvas.width/2 || dane.obiekty.mapa.x <= dane.canvas.postacieCanvas.width-dane.obiekty.mapa.w)
                            {
                                wnetrze.x += wnetrze.predkoscX;
                            }
                            else
                            {
                                dane.obiekty.mapa.x -= wnetrze.predkoscX;
                                for(let i=0; i<dane.obiekty.tabelaScian.length; i++)
                                {
                                    dane.obiekty.tabelaScian[i].x -= wnetrze.predkoscX;
                                }
                            }
                        }
                        else
                        {
                            if(wnetrze.x > dane.canvas.postacieCanvas.width/2 || dane.obiekty.mapa.x >= 0)
                            {
                                wnetrze.x -= wnetrze.predkoscX;
                            }
                            else
                            {
                                dane.obiekty.mapa.x += wnetrze.predkoscX;
                                for(let i=0; i<dane.obiekty.tabelaScian.length; i++)
                                {
                                    dane.obiekty.tabelaScian[i].x += wnetrze.predkoscX;
                                }
                            }
                        }
                        //tlo
                        if(wnetrze.kierunek === "prawo")
                        {
                            if(wnetrze.x < dane.canvas.tloCanvas.width/2 || dane.obiekty.tlo.x <= dane.canvas.tloCanvas.width-dane.obiekty.tlo.w)
                            {
                                wnetrze.x += wnetrze.predkoscTlo;
                            }
                            else
                            {
                                dane.obiekty.tlo.x -= wnetrze.predkoscTlo;
                            }
                        }
                        else
                        {
                            if(wnetrze.x > dane.canvas.tloCanvas.width/2 || dane.obiekty.tlo.x >= 0)
                            {
                                wnetrze.x -= wnetrze.predkoscTlo;
                            }
                            else
                            {
                                dane.obiekty.tlo.x += wnetrze.predkoscTlo;
                            }
                        }
                    },
                    animacja: function(dane)
                    {
                        if(wnetrze.kierunek === "prawo")
                        {
                            if(dane.nrKlatki % 5 ==0)
                            {
                                wnetrze.obraz = wnetrze.animacja.ruchPrawo.klatka[wnetrze.animacja.ruchPrawo.ObecnaKlatka];
                                wnetrze.animacja.ruchPrawo.ObecnaKlatka++;
                            }
                            if(wnetrze.animacja.ruchPrawo.ObecnaKlatka > 3)
                            {
                                wnetrze.animacja.ruchPrawo.ObecnaKlatka = 0;
                            }
                        }
                        else
                        {
                            if(dane.nrKlatki % 5 ==0)
                            {
                                wnetrze.obraz = wnetrze.animacja.ruchLewo.klatka[wnetrze.animacja.ruchLewo.ObecnaKlatka];
                                wnetrze.animacja.ruchLewo.ObecnaKlatka++;
                            }
                            if(wnetrze.animacja.ruchLewo.ObecnaKlatka > 3)
                            {
                                wnetrze.animacja.ruchLewo.ObecnaKlatka = 0;
                            }
                        }
                    }

                }
            };
            this.obecnyStan = wnetrze.stan.stanie;
            this.kierunek = "prawo";
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.predkoscY = 1;
            this.predkoscX = 4;
            this.predkoscTlo = 1;
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