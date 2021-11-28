let Ruch =
{
    aktualizacja: function(dane)
    {
        Ruch.zadania.Wiedzmin(dane);
        Ruch.zadania.Wrog(dane);
    },

    zadania: 
    {
        Wiedzmin: function(dane)
        {
            dane.obiekty.wiedzmin.obecnyStan.ruch(dane);
        },

        Wrog: function(dane)
        {
            dane.obiekty.tabelaPotworow.forEach(function(p)
            {
                p.obecnyStan.ruch(dane);
            });
        }
    }
}