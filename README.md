# Datavisual

####Mon premier projet avec Node.js, mongoDB, dc.js, d3.js et Crossfilter sous windows.
_____________________________________________________________________________________________________________

Pour utiliser ce projet, ouvrir la commande windows (cmd) et aller à la racine du projet (ie C:/Datavisual) et passer la commande suivante pour installer les dépendances spécifiées dans le *package.json*: **npm install**. Cela suppose que vous avez déjà installé node et mongodb.
________________________________________________________________________________________________________________________

-Pour inserer les données sur mongodb ouvrir une nouvelle commande windows et utiliser la commande suivante:

**use HitperDay** cette commande creer automatiquement la base de données HitperDay si elle n'existe pas.

-Ensuite **db.hit.insert**([{date: "12/27/2012", http_404: 2, http_200: 190, http_302: 100},
		{date: "12/28/2012", http_404: 2, http_200: 10, http_302: 100},
		{date: "12/29/2012", http_404: 1, http_200: 300, http_302: 200},
		{date: "12/30/2012", http_404: 2, http_200: 90, http_302: 0},
		{date: "12/31/2012", http_404: 2, http_200: 90, http_302: 0},
		{date: "01/01/2013", http_404: 2, http_200: 90, http_302: 0},
		{date: "01/02/2013", http_404: 1, http_200: 10, http_302: 1},
		{date: "01/03/2013", http_404: 2, http_200: 90, http_302: 0},
		{date: "01/04/2013", http_404: 2, http_200: 90, http_302: 0},
		{date: "01/05/2013", http_404: 2, http_200: 90, http_302: 0},
		{date: "01/06/2013", http_404: 2, http_200: 200, http_302: 1},
		{date: "01/07/2013", http_404: 1, http_200: 200, http_302: 100}])
__________________________________________________________________________________________
	-Tu peux vérifier l'enrégistrement en tapant **db.hit.findOne()**
_______________________________________________________________________________________________________________
	-Maintenant en ligne de commande à la racine du projet, taper **node server.js**. Tu peux voir un message 
	*server running on port 3000*
	-Tu peux ouvrir ton navigateur et taper **localhost:3000**
______________________________________________________________________________________________________________________
	-Soyez les bienvenues pour vos suggestions et les erreurs signalées.
	
	-Inspiré à partir du tutorial de 
	[anmolkoul](https://anmolkoul.wordpress.com/2015/06/05/interactive-data-visualization-using-d3-js-dc-js-nodejs-and-mongodb/ "To the site")
___________________________________________________________________________________________________________________
