let Animacje = 
{
    aktualizacja: function(dane)
    {
        Animacje.zadania.Niebo(dane);
        Animacje.zadania.Wiedzmin(dane);
    },
    zadania:
    {
        Niebo: function(dane)
        {
            dane.obiekty.niebo.x-=0.5;
            if(dane.obiekty.niebo.x < -1792)
            {
                dane.obiekty.niebo.x = 0;
            }
        },
        Wiedzmin: function(dane)
        {
            dane.obiekty.wiedzmin.obecnyStan.animacja(dane);
        }
    }
}