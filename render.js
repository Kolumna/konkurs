let Render = 
{
    aktualizacja: function(dane)
    {
        Render.zadania.Rysuj(dane.obiekty.niebo, dane.canvas.nieboCtx);
		dane.canvas.mapaCtx.clearRect(0,0,dane.canvas.mapaCanvas.width, dane.canvas.mapaCanvas.height);
		Render.zadania.Rysuj(dane.obiekty.mapa, dane.canvas.mapaCtx);
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