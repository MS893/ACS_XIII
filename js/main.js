document.addEventListener("DOMContentLoaded", () => {

  fetch('tarifs.json')
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur lors du chargement des tarifs");
      }
      return response.json();
    })
    .then(data => {
      // 1. Injection des tarifs Avions (Solo)
      document.getElementById('prix-kx').textContent = data.avions.F_GYKX.solo + " €";
      document.getElementById('prix-bvcy').textContent = data.avions.F_BVCY.solo + " €";
      document.getElementById('prix-haix').textContent = data.avions.F_HAIX.solo + " €";

      // 2. Injection du tarif unique de Double Commande (5 €) partout
      document.querySelector('.dc-kx').textContent = data.double_commande_globale;
      document.querySelector('.dc-bvcy').textContent = data.double_commande_globale;
      document.querySelector('.dc-haix').textContent = data.double_commande_globale;

      // 3. Injection des Cotisations
      document.getElementById('cotis-jeune').textContent = data.cotisations.jeune + " €";
      document.getElementById('cotis-adulte').textContent = data.cotisations.adulte + " €";
      document.getElementById('cotis-associe').textContent = data.cotisations.associe + " €";

      // 4. Injection de la Licence FFA
      document.getElementById('ffa-standard').textContent = data.licence_ffa.standard + " €";
      document.getElementById('ffa-revue').textContent = data.licence_ffa.revue + " €";

      // 5. Injection Enseignement Théorique & Avantages Jeunes
      document.getElementById('theorie-mermoz').textContent = data.theorie.e_learning + " €";
      document.getElementById('jeune-manuels').textContent = data.theorie.avantage_jeune.manuels;
      document.getElementById('jeune-carnet').textContent = data.theorie.avantage_jeune.carnet;
    })
    .catch(error => {
      console.error("Impossible de mettre à jour les tarifs :", error);
    });
});
