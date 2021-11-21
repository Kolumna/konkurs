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
                wiedzmin.obecnyStan = wiedzmin.stan.poruszanie
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