//Wird mit onload Attribut im body Tag aufgerufen
function main() {

	//Ruft die jeweilige Methode auf wenn auf Button geklickt wird
	document.getElementById("button_right").addEventListener("click", pfeilRechts);
	document.getElementById("button_left").addEventListener("click", pfeilLinks);

}

//Methode gibt akutelle "Nummer" des Bildes zurück
function nummerDesBildes() {
	let pfad = document.getElementById("image").src; //Speichert ganzen Pfad des aktuellen Bildes
	pfad = pfad.split("/").pop(); //Speichert nur noch z.B. 1.png
	return pfad = pfad.charAt(0); //Speichert nur noch den ersten Character, also z.B. 1
}

//Methode wird mit HTML Attribut onclick="pfeilRechts()" aufgerufen
function pfeilRechts() {

	let zaehler = nummerDesBildes();
	zaehler++;

	//Solange Pfeil rechts bis fünftes Bild erreicht ist
	if (nummerDesBildes() < 5) {
		document.getElementById("image").src = 'src/' + zaehler + '.png'; //Bildwechsel
		document.getElementById("counter").innerHTML = zaehler; //Bildnummer wechsel
		diashow(); //Farbwechsel "Diashow"
	}
	//Andernfalls wird Variable zaehler wieder auf 1 gesetzt
	//->Sprung auf das erste Bild
	else {
		zaehler = 1;
		document.getElementById("image").src = 'src/' + zaehler + '.png';
		document.getElementById("counter").innerHTML = zaehler;
		diashow();
	}
}

//Methode wird mit HTML Attribut onclick="pfeilLinks()" aufgerufen
function pfeilLinks() {

	let zaehler = nummerDesBildes();
	zaehler--;

	//Solange Pfeil links bis erstes Bild erreicht ist
	if (nummerDesBildes() > 1) {
		document.getElementById("image").src = 'src/' + zaehler + '.png';
		document.getElementById("counter").innerHTML = zaehler;
		diashow();
	}
	//Andernfalls wird Variable zaehler auf 5 gesetzt
	//->Sprung auf das letzt Bild ("Illusion" einer Endlos-Schleife)
	else {
		zaehler = 5;
		document.getElementById("image").src = 'src/' + zaehler + '.png';
		document.getElementById("counter").innerHTML = zaehler;
		diashow();
	}

}

//Weitere Methode, welche immer aufgerufen wird wenn einer der Button geklickt wurde
//->Anpassung "Diashow" Textfarbe
function diashow() {

	if (nummerDesBildes() == 1) {
		document.getElementById("slide").style.color = "orange";
	}

	if (nummerDesBildes() == 2) {
		document.getElementById("slide").style.color = "#90c2dd";
	}

	if (nummerDesBildes() == 3) {
		document.getElementById("slide").style.color = "#fca600";
	}

	if (nummerDesBildes() == 4) {
		document.getElementById("slide").style.color = "#50b281";
	}

	if (nummerDesBildes() == 5) {
		document.getElementById("slide").style.color = "#c72f21";
	}

}
