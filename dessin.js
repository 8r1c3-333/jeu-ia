// Dessin du décor, du panier et des objets. Tout est tracé au canvas.

const etoiles = [];
for (let i = 0; i < 64; i++) {
  etoiles.push({ x: Math.random() * LARGEUR, y: Math.random() * HAUTEUR * 0.6, taille: Math.random() + 0.5, phase: Math.random() * 6.28 });
}
function dessinerFond(ctx, temps) {
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, LARGEUR, HAUTEUR);
  dessinerVoiture(ctx, temps);
}
function dessinerVoiture(ctx, temps) {
  const derive = Math.sin(temps * 1.8) * 34;
  const rotation = Math.sin(temps * 1.8) * 0.12;
  ctx.save();
  ctx.translate(LARGEUR / 2 + derive, HAUTEUR * 0.46);
  ctx.rotate(rotation);
  ctx.strokeStyle = COULEURS.blanc;
  ctx.lineWidth = 3;
  ctx.shadowColor = COULEURS.blanc;
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(-92, 18);
  ctx.lineTo(-64, -10);
  ctx.lineTo(-28, -24);
  ctx.lineTo(35, -20);
  ctx.lineTo(72, -4);
  ctx.lineTo(98, 18);
  ctx.lineTo(88, 34);
  ctx.lineTo(-84, 34);
  ctx.closePath();
  ctx.moveTo(-45, -12);
  ctx.lineTo(-24, -36);
  ctx.lineTo(27, -32);
  ctx.lineTo(55, -8);
  ctx.moveTo(-88, 18);
  ctx.lineTo(-106, 7);
  ctx.moveTo(91, 18);
  ctx.lineTo(110, 8);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-57, 34, 15, 0, Math.PI * 2);
  ctx.arc(61, 34, 15, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-18, -30);
  ctx.lineTo(-10, -8);
  ctx.lineTo(38, -7);
  ctx.moveTo(-70, 5);
  ctx.lineTo(-43, 5);
  ctx.moveTo(66, 5);
  ctx.lineTo(87, 5);
  ctx.stroke();
  ctx.restore();
}
function dessinerPanier(ctx, panier, temps) {
  const inclinaison = Math.max(-0.2, Math.min(0.2, panier.vitesse * 0.00025));
  const pulsation = 0.6 + 0.4 * Math.sin(temps * 6);
  ctx.save();
  ctx.translate(panier.x + panier.largeur / 2, panier.y + panier.hauteur / 2);
  ctx.rotate(inclinaison);
  ctx.shadowColor = COULEURS.cyan;
  ctx.shadowBlur = 26;
  ctx.fillStyle = "rgba(40, 240, 255, 0.16)";
  ctx.beginPath();
  ctx.roundRect(-panier.largeur / 2, -panier.hauteur / 2, panier.largeur, panier.hauteur, 8);
  ctx.fill();
  ctx.shadowBlur = 10;
  ctx.strokeStyle = COULEURS.cyan;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.shadowColor = COULEURS.magenta;
  ctx.shadowBlur = 16 * pulsation;
  ctx.fillStyle = COULEURS.magenta;
  ctx.fillRect(-panier.largeur * 0.17, -2, panier.largeur * 0.34, 4);
  ctx.fillStyle = "rgba(40, 240, 255, 0.6)";
  ctx.fillRect(-panier.largeur * 0.32, panier.hauteur / 2, 10, 3);
  ctx.fillRect(panier.largeur * 0.32 - 10, panier.hauteur / 2, 10, 3);
  ctx.restore();
}
function dessinerCristal(ctx, objet, temps) {
  if (objet.type === GLACE) {
    dessinerOursBlanc(ctx, objet, temps);
    return;
  }
  if (objet.type === COEUR) {
    dessinerCoeur(ctx, objet, temps);
    return;
  }
  const r = objet.rayon;
  const dore = objet.type === DORE;
  const couleur = dore ? COULEURS.or : COULEURS.cyan;
  const battement = 1 + 0.06 * Math.sin(temps * 5 + objet.pulsation);
  ctx.rotate(objet.rotation);
  ctx.scale(battement, battement);
  ctx.shadowColor = couleur;
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(r * 0.62, 0);
  ctx.lineTo(0, r);
  ctx.lineTo(-r * 0.62, 0);
  ctx.closePath();
  ctx.fillStyle = dore ? "rgba(255, 209, 102, 0.22)" : "rgba(40, 240, 255, 0.2)";
  ctx.fill();
  ctx.strokeStyle = couleur;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = COULEURS.blanc;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.28, 0, Math.PI * 2);
  ctx.fill();
}
function dessinerCoeur(ctx, objet, temps) {
  const r = objet.rayon;
  const battement = 1 + 0.08 * Math.sin(temps * 7 + objet.pulsation);
  ctx.rotate(objet.rotation);
  ctx.scale(battement, battement);
  ctx.shadowColor = COULEURS.coeur;
  ctx.shadowBlur = 20;
  ctx.strokeStyle = COULEURS.coeur;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(0, r);
  ctx.lineTo(-r * 0.9, -r * 0.05);
  ctx.arc(-r * 0.45, -r * 0.35, r * 0.45, Math.PI, 0);
  ctx.arc(r * 0.45, -r * 0.35, r * 0.45, Math.PI, 0);
  ctx.closePath();
  ctx.stroke();
}
function dessinerOursBlanc(ctx, objet, temps) {
  const r = objet.rayon;
  const battement = 1 + 0.04 * Math.sin(temps * 5 + objet.pulsation);
  ctx.scale(battement, battement);
  ctx.shadowColor = COULEURS.glace;
  ctx.shadowBlur = 18;
  ctx.fillStyle = COULEURS.glace;
  ctx.beginPath();
  ctx.arc(-r * 0.62, -r * 0.62, r * 0.42, 0, Math.PI * 2);
  ctx.arc(r * 0.62, -r * 0.62, r * 0.42, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = COULEURS.blanc;
  ctx.beginPath();
  ctx.arc(-r * 0.34, -r * 0.18, r * 0.12, 0, Math.PI * 2);
  ctx.arc(r * 0.34, -r * 0.18, r * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#182331";
  ctx.beginPath();
  ctx.arc(-r * 0.34, -r * 0.18, r * 0.055, 0, Math.PI * 2);
  ctx.arc(r * 0.34, -r * 0.18, r * 0.055, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#8fc9d8";
  ctx.beginPath();
  ctx.ellipse(0, r * 0.26, r * 0.38, r * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#182331";
  ctx.beginPath();
  ctx.arc(0, r * 0.18, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#182331";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(0, r * 0.25, r * 0.2, 0.15, Math.PI - 0.15);
  ctx.stroke();
}
function dessinerBombe(ctx, objet, temps) {
  const r = objet.rayon * (1 + 0.09 * Math.sin(temps * 9 + objet.pulsation));
  ctx.rotate(objet.rotation * 0.4);
  ctx.shadowColor = COULEURS.rouge;
  ctx.shadowBlur = 22;
  ctx.strokeStyle = COULEURS.rouge;
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = i * Math.PI / 4;
    ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r);
    ctx.lineTo(Math.cos(angle) * (r + 7), Math.sin(angle) * (r + 7));
  }
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = "#1a0614";
  ctx.fill();
  ctx.strokeStyle = COULEURS.magenta;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = COULEURS.rouge;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.34, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COULEURS.blanc;
  ctx.beginPath();
  ctx.arc(-r * 0.12, -r * 0.12, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
}
function dessinerObjet(ctx, objet, temps) {
  ctx.save();
  ctx.translate(objet.x, objet.y);
  if (objet.type === BOMBE) dessinerBombe(ctx, objet, temps);
  else dessinerCristal(ctx, objet, temps);
  ctx.restore();
}
