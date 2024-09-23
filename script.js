document.addEventListener("DOMContentLoaded", function () {
    var textarea = document.querySelector('.term');
    var text = 'sh website_afzali.sh';
    var speed = 50; // Vitesse de frappe en ms
    var i = 0;
  
    function runner() {
      if (i < text.length) {
        textarea.textContent += text.charAt(i);
        i++;
        setTimeout(runner, Math.random() * 100 + 50);
      } else {
        textarea.innerHTML += "<br>";
        setTimeout(simulerSortieTerminal, 1000); // Commence la simulation de sortie du terminal
      }
    }
  
    function simulerSortieTerminal() {
      var output = [
        "[    0.000] Initialisation...",
        "[    0.500] Chargement des composants...",
        "[    1.200] Microcode du CPU mis à jour",
        "[    2.400] Démarrage des services...",
        "[    3.500] Vérification du système terminée"
      ];
      var j = 0;
      var count = 0;
  
      function afficherSortie() {
        if (j < output.length) {
          textarea.innerHTML += output[j] + "<br>";
          count += 0.500;
          j++;
          setTimeout(afficherSortie, 1000); // Délai entre chaque ligne
        } else {
          terminerSplashScreen(); // Fin du splash et transition
        }
      }
  
      afficherSortie();
    }
  
    function terminerSplashScreen() {
      document.querySelector('.load').classList.add('fade-out');
      setTimeout(function () {
        document.querySelector('.load').style.display = 'none';
        // Affiche le contenu principal ou redirection vers le site
        alert('Le contenu principal du site peut maintenant être chargé.');
      }, 1000);
    }
  
    runner(); // Commence l'effet de frappe
  });
  