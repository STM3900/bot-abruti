
const salutations = ["Salut","Salut","Bonjour", "Bonsoir", "Coucou", "Hello", "Yo"];

const groupes = ["bande","bande","ramassis","tas","espèces"];

const adjectifs_N = ["de","de","de","de","de","de","de","de","d'infâmes", "d'ignobles", "de sales", "de putains de", "d'énormes", "de gigantesques", "de giga",
					"d'immondes", "de triples", "de quintuples"];
const adjectifs_M = ["d'affreux", "de gros", "de vieux", "de petits", "d'insignifiants", "de grands", "d'éternels"].concat(adjectifs_N);
const adjectifs_F = ["d'affreuses", "de grosses", "de vieilles", "de petites", "d'insignifiantes", "de grandes", "d'éternelles"].concat(adjectifs_N);

const objets_M = ["porcs","puceaux","rouleaux de PQ","rouleaux de PQ usagés","connards","tabourets","tractopelles","pineux","pauvres cons","mongols",
				"merdeux","branleurs","enculés","abrutis","préservatifs usagés","chiens","gens plutôt méprisables","bâtards",
				"fumiers","salauds","foutriquets","casse-couilles","cons","chieurs","branlomanes","consanguins","clochards","cas sociaux", "gougnafiers",
				"trous de balle","trous du cul","branle-couilles","jean-foutres","déchets","demeurés","moules à gaufre","bachi-bouzouks","branquignols","branques",
				"meurtriers récidivistes","vers d'urètre","rats","couillons"];

const objets_F = ["truies","chiennes","pucelles","salopes","putains","pourritures","connasses","ordures","couilles molles","catins","vulves","vulves dégoulinantes",
				"raclures de chiotte","raclures de bidet","raclures de lavabo","pétasses","aubergines","merdes","saloperies","tartiputes","petites bites",
				"foutrelles","bennes à ordures","fosses septiques","têtes de bite"];

const objets_substance_M = ["sacs à","réservoirs de","canons à","camions de","mangeurs de","coulis de","jerrycans de","refourgueurs de","dealers de","distributeurs de",
							"résidus de","robinets à"];

const objets_substance_F = ["poches à","putes à","flaques de","capotes remplies de","serviettes à","poubelles à", "mangeuses de"];

const substances = ["caca","merde","chiasse","vomi","morve","foutre","sperme","glaires","pisse","excréments","gerbouille","cyprine","diarrhée","vieux pâté","dégueulis",
					"crottes de nez","urine","crotte"];

const conteneurs = ["en boîte","en spray","en poudre","en tube","en barres","en bocal","en tonneau","en bouteille"];

const animal = ["chèvre","chien","chat","yack","boeuf","rhinocéros","lapin","lama"]; //TODO

const complements_N = ["des bois","des plaines","des montagnes","des mers","de mort","à la con","dégueulasses","à deux balles","en rut","qui puent","sans couilles","de mon zob",
					"de mon cul","de mes deux","à la mords-moi-l'noeud","à la sauce barbecue","à la sauce soja","à la sauce samouraï","à la sauce blanche","sans ketchup",
					"de mille sabords","de mille sabordel de merde","de tonnerre de Brest","qui feraient vomir un dromadaire","qui feraient vomir un bisounours",
					"du fond des chiottes","borgnes","malades","à chier","en putréfaction","à l'eau de Javel",""];

const complements_M = ["finis","dégénérés","pourris","dépressifs","putassiers","croupissants","galeux"].concat(complements_N);
const complements_F = ["finies","dégénérées","pourries","dépressives","putassières","croupissantes","galeuses"].concat(complements_N);

const questions = ["comment ça va", "ça va", "comment ça se passe", "comment vous allez", "vous faites quoi", "quoi de neuf", "quoi de beau",
				  "je vous dérange pas", "je vous ai manqué", "vous allez bien", "vous passez une bonne journée"];


Array.prototype.sampleProba = function(p) {
	if (Math.random() < p) {
		return this.sample();
	} else {
		return "";
	}
}

function objet_M() {
	if (Math.random() < 0.75) {
		return objets_M.sample();
	} else {
		return objets_substance_M.sample() + " " + substance();
	} 
}

function objet_F() {
	if (Math.random() < 0.75) {
		return objets_F.sample();
	} else {
		return objets_substance_F.sample() + " " + substance();
	} 
}

function substance() {
	return substances.sample() + " " + conteneurs.sampleProba(0.5); 
}

function adjectifObjetComplement() {
	if (Math.random() < 0.5) {
		return adjectifs_M.sample() + " " + objet_M() + " " + complements_M.sampleProba(0.75);
	} else {
		return adjectifs_F.sample() + " " + objet_F() + " " + complements_F.sampleProba(0.75);
	}
}

function contract(string) {
	return string.replace("de a","d'a").replace("de e","d'e").replace("de é","d'é").replace("de u","d'u").replace("de i, d'i").replace("de o","d'o").replace(" ,",",").replace("  "," ");
}

module.exports.generate = function() {
	return contract(`${salutations.sample()} ${groupes.sample()} ${adjectifObjetComplement()}, ${questions.sample()} ?`);
}