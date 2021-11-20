let Render = 
{
    aktualizacja: function(dane)
    {
        Render.zadania.Rysuj(dane.obiekty.niebo, dane.canvas.nieboCtx);

		dane.canvas.tloCtx.clearRect(0,0,dane.canvas.tloCanvas.width, dane.canvas.tloCanvas.height);
		Render.zadania.Rysuj(dane.obiekty.tlo, dane.canvas.tloCtx);

		dane.canvas.mapaCtx.clearRect(0,0,dane.canvas.mapaCanvas.width, dane.canvas.mapaCanvas.height);
		Render.zadania.Rysuj(dane.obiekty.mapa, dane.canvas.mapaCtx);

		dane.canvas.postacieCtx.clearRect(0,0,dane.canvas.postacieCanvas.width, dane.canvas.postacieCanvas.height);
		Render.zadania.Rysuj(dane.obiekty.wiedzmin, dane.canvas.postacieCtx);
    },
    zadania: {
		Rysuj: function(co, gdzie) 
        {
			gdzie.drawImage(co.obraz.img, 
										co.obraz.x, co.obraz.y,
										co.obraz.w, co.obraz.h,
										co.x, co.y, co.w, co.h);
		}
	}
}