document.addEventListener("DOMContentLoaded", () => {

  fetch('tarifs.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des tarifs");
      }
      return response.json();
    })
    .then(data => {
      // Année de tarification:
      document.getElementById('annee-tarifs').textContent = data.annee;
      // 1. Injection des tarifs Avions (Solo)
      document.getElementById('prix-kx').textContent = data.avions.F_GYKX + " €";
      document.getElementById('prix-bvcy').textContent = data.avions.F_BVCY + " €";
      document.getElementById('prix-haix').textContent = data.avions.F_HAIX + " €";

      // 2. Injection du tarif unique de Double Commande (5 €) partout
      document.querySelector('.dc-kx').textContent = data.double_commande;
      document.querySelector('.dc-bvcy').textContent = data.double_commande;
      document.querySelector('.dc-haix').textContent = data.double_commande;

      // 3. Injection des Cotisations
      document.getElementById('cotis-jeune').textContent = data.cotisations.jeune + " €";
      document.getElementById('cotis-adulte').textContent = data.cotisations.adulte + " €";
      document.getElementById('cotis-associe').textContent = data.cotisations.associe + " €";

      // 4. Injection de la Licence FFA
      document.getElementById('ffa-standard').textContent = data.licence_ffa.standard + " €";
      document.getElementById('ffa-revue').textContent = data.licence_ffa.info_pilote + " €";

      // 5. Injection Enseignement Théorique & Avantages Jeunes
      document.getElementById('theorie-mermoz').textContent = data.theorie.e_learning + " €";
      document.getElementById('jeune-manuels').textContent = data.theorie.avantage_jeune.manuels;
      document.getElementById('jeune-carnet').textContent = data.theorie.avantage_jeune.carnet;

      // 6. Injection du tarif de vol découverte
      document.getElementById('prix-decouverte').textContent = data.vol_decouverte + " €";
    })
    .catch(error => {
      console.error("Impossible de mettre à jour les tarifs :", error);
    });

  // Alternance d'image de fond pour la section Hero sur la page d'accueil
  const heroHeader = document.getElementById('hero-header');
  if (heroHeader) {
    const images = ['assets/img/accueil.jpeg', 'assets/img/hangar.jpeg'];
    let currentIndex = 0;

    // Préchargement des images pour éviter tout délai visuel
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      heroHeader.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images[currentIndex]}')`;
    }, 5000);
  }
});
