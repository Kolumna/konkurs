let Animacje = 
{
    aktualizacja: function(dane)
    {
        Animacje.zadania.Niebo(dane);
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
        }
    }
}