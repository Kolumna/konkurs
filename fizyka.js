let Fizyka =
{
    aktualizacja: function(dane)
    {
        Fizyka.zadania.Grawitacja(dane.obiekty.wiedzmin);
        if(dane.obiekty.wiedzmin.deadMoment == false)
        {
            Fizyka.zadania.Kolizje_wykrywanie(dane);
        }
        Fizyka.zadania.Smierc(dane);

        dane.obiekty.tabelaPotworow.forEach(function(p) 
        {
			Fizyka.zadania.Grawitacja(p);
            Fizyka.zadania.Kolizje_wykrywanie2(dane, p);
		});
    },

    zadania:
    {
        Grawitacja: function(obiekt)
        {
            if(obiekt.deadMoment == false)
            {
                obiekt.obecnyStan = obiekt.stan.stanie;
            }
            obiekt.predkoscY += 0.1;
            obiekt.y += obiekt.predkoscY;
        },

        Kolizje_wykrywanie: function(dane)
        {
            let wiedzmin = dane.obiekty.wiedzmin;
            let Kolizje_wykrywanie = function(obiekt)
            {
                if(wiedzmin.x<obiekt.x+obiekt.w && wiedzmin.x + wiedzmin.w > obiekt.x && wiedzmin.y<obiekt.y+obiekt.h && wiedzmin.y+wiedzmin.h>obiekt.y)
                {
                    Fizyka.zadania.Kolizja(dane,obiekt);
                }
            };
            dane.obiekty.tabelaScian.forEach(function(sciana)
            {
                Kolizje_wykrywanie(sciana);
            });
            dane.obiekty.tabelaPotworow.forEach(function(potwor)
            {
                Kolizje_wykrywanie(potwor);
            });
        },
        Kolizje_wykrywanie2: function(dane, p)
        {
            let Kolizje_wykrywanie2 = function(obiekt)
            {
                if(p.x < obiekt.x + obiekt.w && p.x + p.w > obiekt.x && p.y < obiekt.y + obiekt.h && p.y + p.h > obiekt.y)
                {
                    Fizyka.zadania.Kolizja2(obiekt, p);
                }
            };
            dane.obiekty.tabelaScian.forEach(function(sciana)
            {
                Kolizje_wykrywanie2(sciana);
            });
            dane.obiekty.tabelaTajna.forEach(function(tajna)
            {
                Kolizje_wykrywanie2(tajna);
            });
        },
        Kolizja: function(dane, obiekt)
        {
            let wiedzmin = dane.obiekty.wiedzmin;

            if(obiekt.typ === "sciana")
            {
                //kolizja z góry
                if(wiedzmin.y+wiedzmin.h>obiekt.y && wiedzmin.x+wiedzmin.w > obiekt.x+10 && wiedzmin.x < obiekt.x+obiekt.w-10 && wiedzmin.predkoscY >= 0)
                {
                    wiedzmin.obecnyStan = wiedzmin.stan.stanie;
                    wiedzmin.y = obiekt.y - wiedzmin.h;
                    wiedzmin.predkoscY = 0;
                }
                if(wiedzmin.x + wiedzmin.w > obiekt.x + 32 && wiedzmin.x < obiekt.x + obiekt.w - 32 && wiedzmin.y+10 > obiekt.y)
                {
                    wiedzmin.y = obiekt.y + obiekt.h;
                    wiedzmin.predkoscY = 0.5;
                }
                if(wiedzmin.x < obiekt.x && wiedzmin.y-10 + wiedzmin.h > obiekt.y && wiedzmin.y+10 < obiekt.y + obiekt.h)
                {
                    wiedzmin.x = obiekt.x - wiedzmin.w;
                    if(wiedzmin.stan.poruszanie == 'stanie' || 'skakanie')
                    {
                        wiedzmin.predkoscTlo = 0;
                        console.log("tak")
                    }
                }
                else
                {
                     wiedzmin.predkoscTlo = 1; 
                }
                if(wiedzmin.x > obiekt.x && wiedzmin.y-10 + wiedzmin.h > obiekt.y && wiedzmin.y+10 < obiekt.y + obiekt.h)
                {
                    wiedzmin.x = obiekt.x + obiekt.w;
                    if(wiedzmin.stan.poruszanie == 'stanie' || 'skakanie')
                    {
                        wiedzmin.predkoscTlo = 0;
                    }
                }
            }           
            if(wiedzmin.atak == true)
            {
                if(wiedzmin.kierunek == 'prawo')
                {
                    if(obiekt.typ === "wrog")
                    {
                        let p = obiekt;
                        let bok = wiedzmin.x - 100;
                        if(bok < p.x)
                        {
                            let nrWroga = dane.obiekty.tabelaPotworow.indexOf(p);
                            dane.obiekty.tabelaPotworow.splice(nrWroga, 1);
                            wiedzmin.zabito += 1;
                            console.log(wiedzmin.zabito);
                        }
                    }
                }
                else
                {
                    if(obiekt.typ === "wrog")
                    {
                        let p = obiekt;
                        let bok = wiedzmin.x - 100;
                        if(bok < p.x)
                        {
                            let nrWroga = dane.obiekty.tabelaPotworow.indexOf(p);
                            dane.obiekty.tabelaPotworow.splice(nrWroga, 1);
                            wiedzmin.zabito += 1;
                            console.log(wiedzmin.zabito);
                        }
                    }
                }
            }
            else
            {
                if(obiekt.typ === "wrog")
                {
                    let p = obiekt;
                    if(wiedzmin.y+32 + wiedzmin.h+32 >= p.y && wiedzmin.x + wiedzmin.w > p.x+10 && wiedzmin.x < p.x + p.w-10 && wiedzmin.predkoscY >= 0)
                    {
                        wiedzmin.obecnyStan = wiedzmin.stan.smierc;
                        wiedzmin.predkoscX = 0;
                        wiedzmin.predkoscY = -4;
                        wiedzmin.predkoscTlo = 0;
                        wiedzmin.deadMoment = true;
                        setTimeout(function(){
                            Smierc.wywolanie(dane);
                        }, 750);
                    }
                    if(wiedzmin.x < p.x && wiedzmin.y >= p.y)
                    {
                        wiedzmin.obecnyStan = wiedzmin.stan.smierc;
                        wiedzmin.predkoscX = 0;
                        wiedzmin.predkoscY = -4;
                        wiedzmin.predkoscTlo = 0;
                        wiedzmin.deadMoment = true;
                        setTimeout(function(){
                            Smierc.wywolanie(dane);
                        }, 750);
                    }
                    if(wiedzmin.x > p.x && wiedzmin.y >= p.y)
                    {
                        wiedzmin.predkoscY = -4;
                        wiedzmin.obecnyStan = wiedzmin.stan.smierc;
                        wiedzmin.predkoscX = 0;
                        wiedzmin.predkoscTlo = 0;
                        wiedzmin.deadMoment = true;
                        setTimeout(function(){
                            Smierc.wywolanie(dane);
                        }, 750);
                     }
                }
            }

        },
        Kolizja2: function(obiekt, p)
        {
            if(obiekt.typ === 'sciana' || 'tajna')
            {
                if(p.y + p.h > obiekt.y && p.x + p.w > obiekt.x + 10 && p.x < obiekt.x + obiekt.w - 10 && p.predkoscY >= 0)
                {
                    p.obecnyStan = p.stan.poruszanie;
                    p.y = obiekt.y - p.h;
                    p.predkoscY = 0;
                }
                if(p.x < obiekt.x && p.y + p.h > obiekt.y && p.y < obiekt.y + obiekt.h) 
                {
                    console.log("lewybok");
                    p.x = obiekt.x - p.w;
                    p.kierunek = 'lewo';
                }
                if(p.x > obiekt.x && p.y + p.h > obiekt.y && p.y < obiekt.y + obiekt.h) 
                {
                    console.log("prawybok");
                    p.x = obiekt.x + obiekt.w;
                    p.kierunek = 'prawo';
                }
            }
        },
        Smierc: function(dane)
        {
            if(dane.obiekty.wiedzmin.y > 1248)
            {
                Smierc.wywolanie(dane);
            }
        }
    }
}