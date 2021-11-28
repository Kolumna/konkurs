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

		Render.zadania.Rysuj(dane.obiekty.pocisk, dane.canvas.postacieCtx);

		Render.zadania.Rysuj(dane.obiekty.pocisk2, dane.canvas.postacieCtx);

		if(dane.obiekty.wiedzmin.zycia<1)
		{
			Render.zadania.Pisz("Zginąłeś!", dane.canvas.guiCtx, 350, 150, "144px", "VT323");
			dane.obiekty.wiedzmin.obecnyStan = dane.obiekty.wiedzmin.obecnyStan.smierc;
			setTimeout(function(){
				location.href = "../poziom1/gra.html";
			}, 3000);
		}
		if(dane.obiekty.wiedzmin.zabito == 6)
		{
			Render.zadania.Pisz2("Udało się! Przechodzimy dalej!", dane.canvas.guiCtx, 60, 150, "96px", "VT323");
			dane.obiekty.wiedzmin.obecnyStan = dane.obiekty.wiedzmin.obecnyStan.stanie;
			setTimeout(function(){
				location.href = "../poziom3/gra.html";
			}, 3000);
		}
		if(dane.obiekty.wiedzmin.zabito != 6)
		{
			if(dane.obiekty.wiedzmin.Matak == false)
			{
				Render.zadania.Pisz3("Odpocznij!", dane.canvas.postacieCtx, 450, 100, "96px", "VT323");
			}	
		}
		dane.obiekty.tabelaPotworow.forEach(function(p) {
			Render.zadania.Rysuj(p, dane.canvas.postacieCtx);
		});
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
		},
		Pisz2: function(tekst, gdzie, x, y, rozmiar, czcionka)
		{
			gdzie.font = rozmiar + " " + czcionka;
			gdzie.fillStyle = "#2be32e";
			gdzie.fillText(tekst,x,y);
			gdzie.shadowColor="black";
			gdzie.lineWidth=1;
			gdzie.strokeText("Udało się! Przechodzimy dalej!",60,150);
		},
		Pisz3: function(tekst, gdzie, x, y, rozmiar, czcionka)
		{
			gdzie.font = rozmiar + " " + czcionka;
			gdzie.fillStyle = "#2be32e";
			gdzie.fillText(tekst,x,y);
			gdzie.shadowColor="black";
			gdzie.lineWidth=1;
			gdzie.strokeText("Odpocznij!",450,100);
		}
	}
}