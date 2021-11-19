let Fizyka =
{
    aktualizacja: function(dane)
    {
        Fizyka.zadania.Grawitacja(dane.obiekty.wiedzmin);
        Fizyka.zadania.Kolizje_wykrywanie(dane);
    },

    zadania:
    {
        Grawitacja: function(obiekt)
        {
            obiekt.predkoscY += 1;
            obiekt.y += obiekt.predkoscY;
        },

        Kolizje_wykrywanie: function(dane)
        {
            let wiedzmin = dane.obiekty.wiedzmin;
            let Kolizje_wykrywanie = function(obiekt)
            {
                if(wiedzmin.x<obiekt.x+obiekt.w && wiedzmin.x + wiedzmin.w > obiekt.x && wiedzmin.y<obiekt.y+obiekt.h && wiedzmin.y+wiedzmin.h>obiekt.y)
                {
                    Fizyka.zadania.Kolizja_wykrywanie(dane,obiekt);
                }
            }
            dane.obiekty.tabelaScian.forEach(function(sciana)
            {
                Kolizje_wykrywanie(sciana);
            });
        },
        Kolizja_wykrywanie: function(dane, obiekt)
        {
            let wiedzmin = dane.obiekty.wiedzmin;

            if(obiekt.typ === "sciana")
            {
                if(wiedzmin.y+wiedzmin.h>obiekt.y && wiedzmin.x+wiedzmin.w > obiekt.x+10 && wiedzmin.x < obiekt.x+obiekt.w-10 && wiedzmin.predkoscY >= 0)
                {
                    wiedzmin.y = obiekt.y - wiedzmin.h;
                    wiedzmin.predkoscY = 0;
                }
            }
        }
    }
}