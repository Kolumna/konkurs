let Ruch =
{
    aktualizacja: function(dane)
    {
        Ruch.zadania.Wiedzmin(dane);
    },

    zadania: 
    {
        Wiedzmin: function(dane)
        {
            dane.obiekty.wiedzmin.obecnyStan.ruch(dane);
        }
    }
}