import { randomInteger } from "./random.js";
document.addEventListener("DOMContentLoaded", loadCites);
function loadCites() {
    const cites = ["La cosa más difícil es conocernos a nosotros mismos; la más fácil es hablar mal de los demás<br><strong>(Tales-de-Mileto)</strong>", "No puedo enseñar nada a nadie. Solo puedo hacerles pensar<br><strong>(Sócrates)</strong>", "El conocimiento es poder<br><strong>(Francis Bacon)</strong>", "La peor lucha es la que no se hace<br><strong>(Karl Marx)</strong>", "Exígete mucho a ti mismo y espera poco de los demás. Así te ahorrarás disgustos<br><strong>(Confucio)</strong>", "Nunca moriría por mis creencias porque podría estar equivocado<br><strong>(Bertrand Russell)</strong>", "Nuestra vida siempre expresa el resultado de nuestros pensamientos dominantes <br><strong>(Søren Kierkegaard)</strong>"];
    document.getElementById("cite").innerHTML = cites[0, randomInteger(0, cites.length - 1)];
}