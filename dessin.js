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
  const angle = temps * 1.15;
  const profondeur = (Math.sin(angle) + 1) / 2;
  const distanceX = 155;
  const distanceY = 92;
  const centreX = LARGEUR / 2 + Math.cos(angle) * distanceX;
  const centreY = HAUTEUR * 0.46 + Math.sin(angle) * distanceY;
  const taille = 0.62 + profondeur * 0.48;
  const rotation = angle + Math.PI / 2 + Math.sin(angle * 2) * 0.18;
  ctx.save();
  ctx.translate(centreX, centreY);
  ctx.scale(taille, taille);
  ctx.rotate(rotation);
  ctx.strokeStyle = COULEURS.blanc;
  ctx.lineWidth = 2.5;
  ctx.shadowColor = COULEURS.blanc;
  ctx.shadowBlur = 12;
  ctx.beginPath();
  ctx.moveTo(-108, 24);
  ctx.lineTo(-92, 4);
  ctx.lineTo(-64, -10);
  ctx.lineTo(-32, -34);
  ctx.lineTo(36, -34);
  ctx.lineTo(68, -13);
  ctx.lineTo(96, 2);
  ctx.lineTo(112, 23);
  ctx.lineTo(96, 39);
  ctx.lineTo(-94, 39);
  ctx.closePath();
  ctx.moveTo(-38, -31);
  ctx.lineTo(-19, -53);
  ctx.lineTo(30, -51);
  ctx.lineTo(54, -31);
  ctx.moveTo(-80, -1);
  ctx.lineTo(-52, 4);
  ctx.lineTo(-39, 29);
  ctx.moveTo(65, -2);
  ctx.lineTo(88, 7);
  ctx.lineTo(98, 26);
  ctx.moveTo(-107, 22);
  ctx.lineTo(-126, 14);
  ctx.moveTo(109, 22);
  ctx.lineTo(126, 13);
  ctx.stroke();
  ctx.shadowBlur = 0;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-19, -50);
  ctx.lineTo(-7, -32);
  ctx.lineTo(36, -31);
  ctx.moveTo(-92, 15);
  ctx.lineTo(-67, 15);
  ctx.moveTo(71, 15);
  ctx.lineTo(100, 15);
  ctx.moveTo(-87, 34);
  ctx.lineTo(-53, 34);
  ctx.moveTo(55, 34);
  ctx.lineTo(89, 34);
  ctx.stroke();
  ctx.fillStyle = COULEURS.blanc;
  ctx.beginPath();
  ctx.arc(-84, 20, 4, 0, Math.PI * 2);
  ctx.arc(84, 20, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(-63, 39, 18, 0, Math.PI * 2);
  ctx.arc(64, 39, 18, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(-63, 39, 7, 0, Math.PI * 2);
  ctx.arc(64, 39, 7, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([12, 16]);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-150, 48);
  ctx.lineTo(-112, 48);
  ctx.moveTo(112, 48);
  ctx.lineTo(150, 48);
  ctx.stroke();
  ctx.setLineDash([]);
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
