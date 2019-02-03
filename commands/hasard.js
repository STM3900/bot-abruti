const abruti = require('../abruti.js');

module.exports.de = function(face, de) {
	var faces = 6;
	var des = 1;
	var des_a_afficher = 1;
	var resultat = 0;
	var reponse = "";
	if (!isNaN(face) && face > 1 && face <= 1000000000 ) { 
		faces = Math.floor(face);
	} else if (face !== undefined) {
		reponse += `_Nombre de faces invalide. Dans l'doute, j'en mets 6 !_\n`;
	}
	if (!isNaN(de) && de >= 1 && de <= 1000000) {
		des = Math.floor(de);
		des_a_afficher = Math.min(10, des)
	} else if (de !== undefined) {
		reponse += `_Nombre de dés invalide. Dans l'doute, j'en lance qu'un !_\n`;
	}

	//Lancer des dés
	for (var i=1; i <= des; i++) {
		resultat += Math.floor(Math.random() * faces) +1;
	}
	reponse += `${abruti.emoji("abruti")}:hand_splayed: :curly_loop: ${":game_die:".repeat(des_a_afficher)} _${resultat}._`;
	return reponse;

}

module.exports.piece = function(nb) {
	var pieces = 1;
	var pieces_a_afficher = 1;
	var resultat = "";
	var reponse ="";

	if (!isNaN(nb) && nb >= 1 && nb <= 1000000000) {
		pieces = nb;
		pieces_a_afficher = Math.min(10, pieces)
	} else if (nb !== undefined) {
		reponse += `_Nombre de pièces invalide. Dans l'doute, j'en lance qu'une !_\n`;
	}

	//Lancer des pièces
	var piles = 0;
	var faces = 0;
	for (var i=1; i <= pieces; i++) {
		if (Math.random() < 0.5) {
			piles++;
		} else {
			faces++;
		}
	}
	if (pieces > 1) {
		resultat = `${piles} Pile${piles > 1 ? "s":""} et ${faces} Face${faces > 1 ? "s":""}`;
	} else {
		resultat = (piles ? "Pile" : "Face");
	}
	reponse += `${abruti.emoji("abruti")}:ok_hand: :curly_loop: ${abruti.emoji("tagcoin").toString().repeat(pieces_a_afficher)} _${resultat}._`;
	return reponse;
}

const sujets = ["Quelle est votre odeur préférée ?", "Partagez un de vos souvenirs d'enfance.", "Une petite chose qui vous rend toujours heureux.se ?",
				"Quel est votre plat préféré ?", "Quel est le premier jeu vidéo auquel vous avez joué ?", "Quelle est votre boisson préférée ?",
				"Quel sport aimeriez-vous essayer ?", "Si vous vous retrouviez 100 ans dans le futur, quelle question poseriez-vous en premier ?",
				"Où êtes-vous allé le plus loin de chez vous ?", "Sur quel site allez-vous le plus souvent ?", "Quel est votre plus grand exploit ?",
				"Si on vous demandait de prendre la parole devant le monde entier, que diriez-vous ?"];

module.exports.sujet = function() {
	return `${abruti.emoji("abruti")}:hand_splayed: :curly_loop: :game_die: _${sujets.sample()}_`;
}