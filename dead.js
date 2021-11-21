let Smierc = 
{
    wywolanie: function(dane)
    {
        Smierc.zadania.strataZycia(dane);
    },

    zadania: 
    {
        strataZycia: function(dane)
        {
            let wiedzmin = dane.obiekty.wiedzmin;
            if(wiedzmin.zycia>0)
               {
                    wiedzmin.zycia--;
                    dane.obiekty.gui.x -= 64;
               }
            if(wiedzmin.zycia<1)
            {
                setTimeout(function(){

                },1000);
            }
            else
            {
                for(let i=0; i<dane.obiekty.tabelaScian.length; i++)
                {
                    dane.obiekty.tabelaScian[i].x -= dane.obiekty.mapa.x;
                }
                dane.obiekty.mapa.x = 0;
                wiedzmin.x = wiedzmin.y = 150;
                dane.obiekty.tlo.x = 0;
                wiedzmin.predkoscY = 1;
            }
        }
    }
}