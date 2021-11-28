let Input = 
{
    ini: function(dane)
    {
        window.onkeydown = function(e)
        {
            Input.zadania.nacisniety[e.keyCode] = true;
        }
        window.onkeyup = function(e)
        {
            Input.zadania.nacisniety[e.keyCode] = false;
        }
    },
    aktualizacja: function(dane)
    {
        let wiedzmin = dane.obiekty.wiedzmin;

        if(Input.zadania.Nacisnieto(68))
        {
            wiedzmin.kierunek = "prawo";
            if(wiedzmin.predkoscY == 0)
            {
                wiedzmin.obecnyStan = wiedzmin.stan.poruszanie;
            }
            else
            {
                if(wiedzmin.x < dane.canvas.postacieCanvas.width/2 || dane.obiekty.mapa.x <= dane.canvas.postacieCanvas.width-dane.obiekty.mapa.w)
                {
                    wiedzmin.x += wiedzmin.predkoscX;
                }
                else
                {
                    dane.obiekty.mapa.x -= wiedzmin.predkoscX;
                    for(let i=0; i<dane.obiekty.tabelaScian.length; i++)
                    {
                        dane.obiekty.tabelaScian[i].x -= wiedzmin.predkoscX;
                    }
                    for(let i=0; i<dane.obiekty.tabelaPotworow.length; i++)
                    {
                        dane.obiekty.tabelaPotworow[i].x -= wiedzmin.predkoscX;
                    }
                    for(let i=0; i<dane.obiekty.tabelaTajna.length; i++)
                    {
                        dane.obiekty.tabelaTajna[i].x -= wiedzmin.predkoscX;
                    }
                }
                if(wiedzmin.x < dane.canvas.tloCanvas.width/2 || dane.obiekty.tlo.x <= dane.canvas.tloCanvas.width-dane.obiekty.tlo.w)
                {
                    wiedzmin.x += wiedzmin.predkoscTlo;
                }
                else
                {
                    dane.obiekty.tlo.x -= wiedzmin.predkoscTlo;
                }
            }
        }
        if(Input.zadania.Nacisnieto(65))
        {
            wiedzmin.kierunek = "lewo";
            if(wiedzmin.predkoscY == 0)
            {
                wiedzmin.obecnyStan = wiedzmin.stan.poruszanie;
            }
            else
            {
                if(wiedzmin.x > dane.canvas.postacieCanvas.width/2 || dane.obiekty.mapa.x >= 0)
                {
                    wiedzmin.x -= wiedzmin.predkoscX;
                }
                else
                {
                    dane.obiekty.mapa.x += wiedzmin.predkoscX;
                    for(let i=0; i<dane.obiekty.tabelaScian.length; i++)
                    {
                        dane.obiekty.tabelaScian[i].x += wiedzmin.predkoscX;
                    }
                    for(let i=0; i<dane.obiekty.tabelaPotworow.length; i++)
                    {
                        dane.obiekty.tabelaPotworow[i].x += wiedzmin.predkoscX;
                    }
                    for(let i=0; i<dane.obiekty.tabelaTajna.length; i++)
                    {
                        dane.obiekty.tabelaTajna[i].x += wiedzmin.predkoscX;
                    }
                }
                if(wiedzmin.x > dane.canvas.tloCanvas.width/2 || dane.obiekty.tlo.x >= 0)
                {
                    wiedzmin.x -= wiedzmin.predkoscTlo;
                }
                else
                {
                    dane.obiekty.tlo.x += wiedzmin.predkoscTlo;
                }
            }
        }
        if(Input.zadania.Nacisnieto(32))
        {
            wiedzmin.obecnyStan = wiedzmin.stan.skakanie;
        }
        if(Input.zadania.Nacisnieto(13))
        {
            console.log(wiedzmin.Matak);
            if(wiedzmin.Matak == true)
            {
                if(wiedzmin.kierunek == "prawo")
                {
                    dane.obiekty.pocisk.x = wiedzmin.x + 64;  
                    dane.obiekty.pocisk.y = wiedzmin.y - 64;  
                    wiedzmin.atak = true;    

                }
                else
                {
                    dane.obiekty.pocisk.x = wiedzmin.x - 1000;
                }
                if(wiedzmin.kierunek == "lewo")
                {
                    console.log("lewo");
                    dane.obiekty.pocisk2.x = wiedzmin.x - 112;  
                    dane.obiekty.pocisk2.y = wiedzmin.y - 64;
                    wiedzmin.atak = true;
                } 
                else
                {
                    dane.obiekty.pocisk2.x = wiedzmin.x - 1000;
                }
            }
        }
        else
        {
            dane.obiekty.pocisk2.x = wiedzmin.x - 1000;
            dane.obiekty.pocisk.x = wiedzmin.x - 1000;
            wiedzmin.atak = false; 

        }
        
    },
    zadania:
    {
        nacisniety: {},

        Nacisnieto: function(kod)
        {
            return Input.zadania.nacisniety[kod];
        },

    }
}