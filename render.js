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

		dane.canvas.guiCtx.clearRect(0,0,dane.canvas.guiCanvas.width, dane.canvas.guiCanvas.height);
		Render.zadania.Rysuj(dane.obiekty.gui, dane.canvas.guiCtx);

		if(dane.obiekty.wiedzmin.zycia<1) Render.zadania.Pisz("Zginąłeś!", dane.canvas.guiCtx, 350, 150, "144px", "VT323");
		
		console.log(dane.obiekty.tabelaWrogow)
    },
    zadania: {
		Rysuj: function(co, gdzie) 
        {
			gdzie.drawImage(co.obraz.img, 
										co.obraz.x, co.obraz.y,
										co.obraz.w, co.obraz.h,
										co.x, co.y, co.w, co.h);
		},
		Pisz: function(tekst, gdzie, x, y, rozmiar, czcionka)
		{
			gdzie.font = rozmiar + " " + czcionka;
			gdzie.fillStyle = "#B51B14";
			gdzie.fillText(tekst,x,y);
		}
	}
}