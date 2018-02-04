'use strict'
console.log("début main");

function controleurPlan(){
	var textePlan = document.getElementById("textePlan");
	var anneeEvolution = document.getElementById("carteEvolution");
	var annee2006 = document.getElementById("carte2006");
	var annee2007 = document.getElementById("carte2007");
	var annee2008 = document.getElementById("carte2008");
	var annee2009 = document.getElementById("carte2009");
	var annee2010 = document.getElementById("carte2010");
	var annee2011 = document.getElementById("carte2011");
	var annee2012 = document.getElementById("carte2012");
	var annee2013 = document.getElementById("carte2013");
	var annee2014 = document.getElementById("carte2014");
	var annee2015 = document.getElementById("carte2015");
	var annee2016 = document.getElementById("carte2016");
	var annee2017 = document.getElementById("carte2017");
	var scene1 = document.getElementById("scene1");
	var scene2 = document.getElementById("scene2");
	var scene3 = document.getElementById("scene3");
	var scene4 = document.getElementById("scene4");
	var scene5 = document.getElementById("scene5");
	var scene6 = document.getElementById("scene6");
	var scene7 = document.getElementById("scene7");

	anneeEvolution.onclick = function(){
		textePlan.textContent = "J’ai pu voir passer sur la Main 01 près de 306 groupes au Hellfest. Une vraie ribambelle d’artistes depuis plus de 13 ans. Cela est dû au nombre grandissant de mes amis les festivaliers. De 22 000 à 152 000 tickets vendus en 13 ans, quelle évolution, c’est incroyable! Venez vite voir cet élargissement considérable du Hellfest !";
		anneeEvolution.className = "pointEvolution active";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden ";
		document.getElementById("carte12").className = "2012 divCarte--hidden";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "pin--2012-1"
		document.getElementById("pin2012-02").className = "pin--2012-2"
		document.getElementById("pin2012-03").className = "pin--2012-3"
		document.getElementById("pin2012-04").className = "pin--2012-4"
		document.getElementById("pin2012-05").className = "pin--2012-5"
		document.getElementById("pin2012-06").className = "pin--2012-6"
		document.getElementById("pin2012-07").className = "pin--2012-7"
	}

	annee2006.onclick = function(){
		textePlan.textContent = "Les 72 groupes invités à la première édition du Hellfest sont équitablement répartis entre deux scènes : Main (la scène principale) et Hard n'Heavy stage.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point active";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte ";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden";
		document.getElementById("carte12").className = "2012 divCarte--hidden";
		document.getElementById("pin2006-01").className = "fadeInDown animated pin--2006-1"
		document.getElementById("pin2006-02").className = "fadeInDown animated pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "pin--2012-1"
		document.getElementById("pin2012-02").className = "pin--2012-2"
		document.getElementById("pin2012-03").className = "pin--2012-3"
		document.getElementById("pin2012-04").className = "pin--2012-4"
		document.getElementById("pin2012-05").className = "pin--2012-5"
		document.getElementById("pin2012-06").className = "pin--2012-6"
		document.getElementById("pin2012-07").className = "pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2006 && groupe.Scene === "Hard n'Heavy stage" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2006 && groupe.Scene === "Main" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
	}

	annee2007.onclick = function(){
		textePlan.textContent = "En 2007, la Hard n'Heavy est remplacée par la Gibson Stage.S'y ajoute la Discover stage, une nouvelle scène, sur laquelle 30 groupes se produisent.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point active";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden";
		document.getElementById("carte12").className = "2012 divCarte--hidden";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "fadeInDown animated pin--2007-1"
		document.getElementById("pin2007-02").className = "fadeInDown animated pin--2007-2"
		document.getElementById("pin2007-03").className = "fadeInDown animated pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "pin--2012-1"
		document.getElementById("pin2012-02").className = "pin--2012-2"
		document.getElementById("pin2012-03").className = "pin--2012-3"
		document.getElementById("pin2012-04").className = "pin--2012-4"
		document.getElementById("pin2012-05").className = "pin--2012-5"
		document.getElementById("pin2012-06").className = "pin--2012-6"
		document.getElementById("pin2012-07").className = "pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2007 && groupe.Scene === "Discover stage" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2007 && groupe.Scene === "Gibson stage" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2007 && groupe.Scene === "Main" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
	}
	annee2008.onclick = function(){
		textePlan.textContent = "Le nombre de groupes augmentente considérablement par rapport à 2007, passant de 84 à 108. Les groupes sont répartis entre 3 scènes distinctes et hiérarchisées : la main, la second stage et enfin la discover stage.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point active";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte";
		document.getElementById("carte09").className = "2009 divCarte--hidden";
		document.getElementById("carte12").className = "2012 divCarte--hidden";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "fadeInDown animated pin--2008-1"
		document.getElementById("pin2008-02").className = "fadeInDown animated pin--2008-2"
		document.getElementById("pin2008-03").className = "fadeInDown animated pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "pin--2012-1"
		document.getElementById("pin2012-02").className = "pin--2012-2"
		document.getElementById("pin2012-03").className = "pin--2012-3"
		document.getElementById("pin2012-04").className = "pin--2012-4"
		document.getElementById("pin2012-05").className = "pin--2012-5"
		document.getElementById("pin2012-06").className = "pin--2012-6"
		document.getElementById("pin2012-07").className = "pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2008 && groupe.Scene === "Discover stage" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2008 && groupe.Scene === "Main" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2008 && groupe.Scene === "Main" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
	}

	annee2009.onclick = function(){
		textePlan.textContent = "En 2009, une quatrième scène est crée. La Main 02, complétant la Main 01, favorise les groupes de métal alternatif, nu métal, métalcore et trashmétal. Les deux scènes accueillent toutes les deux 27 groupes.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point active";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte ";
		document.getElementById("carte12").className = "2012 divCarte--hidden";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "fadeInDown animated pin--2009-1"
		document.getElementById("pin2009-02").className = "fadeInDown animated pin--2009-2"
		document.getElementById("pin2009-03").className = "fadeInDown animated pin--2009-3"
		document.getElementById("pin2009-04").className = "fadeInDown animated pin--2009-4"
		document.getElementById("pin2012-01").className = "pin--2012-1"
		document.getElementById("pin2012-02").className = "pin--2012-2"
		document.getElementById("pin2012-03").className = "pin--2012-3"
		document.getElementById("pin2012-04").className = "pin--2012-4"
		document.getElementById("pin2012-05").className = "pin--2012-5"
		document.getElementById("pin2012-06").className = "pin--2012-6"
		document.getElementById("pin2012-07").className = "pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2009 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2009 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2009 && groupe.Scene === "Rock Hard tent" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2009 && groupe.Scene === "Terrorizer tent" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});

	}
	annee2010.onclick = function(){
		textePlan.textContent = "En 2010, le festival conserve les mêmes scènes et le même nombre de groupes qu’en 2009. La Main 01 produit principalement les groupes de heavy metal tradiotionnel et de hardrock.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point active";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte ";
		document.getElementById("carte12").className = "2012 divCarte--hidden";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "fadeInDown animated pin--2009-1"
		document.getElementById("pin2009-02").className = "fadeInDown animated pin--2009-2"
		document.getElementById("pin2009-03").className = "fadeInDown animated pin--2009-3"
		document.getElementById("pin2009-04").className = "fadeInDown animated pin--2009-4"
		document.getElementById("pin2012-01").className = "pin--2012-1"
		document.getElementById("pin2012-02").className = "pin--2012-2"
		document.getElementById("pin2012-03").className = "pin--2012-3"
		document.getElementById("pin2012-04").className = "pin--2012-4"
		document.getElementById("pin2012-05").className = "pin--2012-5"
		document.getElementById("pin2012-06").className = "pin--2012-6"
		document.getElementById("pin2012-07").className = "pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2010 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2010 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2010 && groupe.Scene === "Rock Hard tent" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2010 && groupe.Scene === "Terrorizer tent" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
	}
	annee2011.onclick = function(){
		textePlan.textContent ="118 groupes sont présents en 2011. C’est un nombre relativement constant depuis l’édition de 2008.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point active";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte ";
		document.getElementById("carte12").className = "2012 divCarte--hidden";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "fadeInDown animated pin--2009-1"
		document.getElementById("pin2009-02").className = "fadeInDown animated pin--2009-2"
		document.getElementById("pin2009-03").className = "fadeInDown animated pin--2009-3"
		document.getElementById("pin2009-04").className = "fadeInDown animated pin--2009-4"
		document.getElementById("pin2012-01").className = "pin--2012-1"
		document.getElementById("pin2012-02").className = "pin--2012-2"
		document.getElementById("pin2012-03").className = "pin--2012-3"
		document.getElementById("pin2012-04").className = "pin--2012-4"
		document.getElementById("pin2012-05").className = "pin--2012-5"
		document.getElementById("pin2012-06").className = "pin--2012-6"
		document.getElementById("pin2012-07").className = "pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2011 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2011 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2011 && groupe.Scene === "Rock Hard tent" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2011 && groupe.Scene === "Terrorizer tent" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
	}
	annee2012.onclick = function(){
		textePlan.textContent ="Le Hellfest n'accueille plus 4 scènes mais bien 7 scènes pour un total de 170 artistes en cette année 2012, un véritable boom par rapport à l’année précédente. La Warzone met à l’honneur le punk hardcore, la Valley  le sludge/ stoner et le Metal Corner déniche les talents de demain . Autres changements, la Terrorizer tent laisse place au Temple (doom / pagan metal / black metal) et la Rock Hard tent devient l’Altar ( death metal / grind).";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point active";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
		document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
		document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
		document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
		document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
		document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
		document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
		    var listeGroupe5 = new Array();
		    var listeGroupe6 = new Array();
		    var listeGroupe7 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2012 && groupe.Scene === "Altar" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2012 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2012 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2012 && groupe.Scene === "Metal Corner" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2012 && groupe.Scene === "Temple" )
    			{
    				listeGroupe5.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2012 && groupe.Scene === "Valley" )
    			{
    				listeGroupe6.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2012 && groupe.Scene === "Warzone" )
    			{
    				listeGroupe7.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
			listeGroupe5.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene5.appendChild(choix);
			});
			listeGroupe6.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene6.appendChild(choix);
			});
			listeGroupe7.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene7.appendChild(choix);
			});
	}
	annee2013.onclick = function(){
		textePlan.textContent ="170 artistes montent sur les planches du Hellfest en 2013, une répétition de 2012 avec les mêmes scènes.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point active"; 
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
		document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
		document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
		document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
		document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
		document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
		document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
		    var listeGroupe5 = new Array();
		    var listeGroupe6 = new Array();
		    var listeGroupe7 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2013 && groupe.Scene === "Altar" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2013 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2013 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2013 && groupe.Scene === "Metal Corner" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2013 && groupe.Scene === "Temple" )
    			{
    				listeGroupe5.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2013 && groupe.Scene === "Valley" )
    			{
    				listeGroupe6.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2013 && groupe.Scene === "Warzone" )
    			{
    				listeGroupe7.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
			listeGroupe5.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene5.appendChild(choix);
			});
			listeGroupe6.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene6.appendChild(choix);
			});
			listeGroupe7.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene7.appendChild(choix);
			});
	}
	annee2014.onclick = function(){
		textePlan.textContent ="Le format des scènes du Hellfest de 2012 reste toujours le même pour acceuillir le même nombre d’artistes.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point active";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
		document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
		document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
		document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
		document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
		document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
		document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
		    var listeGroupe5 = new Array();
		    var listeGroupe6 = new Array();
		    var listeGroupe7 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2014 && groupe.Scene === "Altar" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2014 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2014 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2014 && groupe.Scene === "Metal Corner" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2014 && groupe.Scene === "Temple" )
    			{
    				listeGroupe5.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2014 && groupe.Scene === "Valley" )
    			{
    				listeGroupe6.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2014 && groupe.Scene === "Warzone" )
    			{
    				listeGroupe7.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
			listeGroupe5.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene5.appendChild(choix);
			});
			listeGroupe6.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene6.appendChild(choix);
			});
			listeGroupe7.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene7.appendChild(choix);
			});
	}
	annee2015.onclick = function(){
		textePlan.textContent ="Très légère baisse de nombre d’artistes en 2015 puisque les 7 scènes reçoivent 166 groupes.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point active";
		annee2016.className = "point";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
		document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
		document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
		document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
		document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
		document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
		document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
		    var listeGroupe5 = new Array();
		    var listeGroupe6 = new Array();
		    var listeGroupe7 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2015 && groupe.Scene === "Altar" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2015 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2015 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2015 && groupe.Scene === "Metal Corner" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2015 && groupe.Scene === "Temple" )
    			{
    				listeGroupe5.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2015 && groupe.Scene === "Valley" )
    			{
    				listeGroupe6.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2015 && groupe.Scene === "Warzone" )
    			{
    				listeGroupe7.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
			listeGroupe5.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene5.appendChild(choix);
			});
			listeGroupe6.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene6.appendChild(choix);
			});
			listeGroupe7.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene7.appendChild(choix);
			});
	}
	annee2016.onclick = function(){
		textePlan.textContent ="Le Metal Corner en partenariat avec Deezer Open Hell'Stage en 2016 accueille presque le double de ce qu’il a l’habitude d’avoir. Cette scène où les groupes de métals s’affrontent pour se produirent sur une “main stage” rencontre un véritable succès.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point active";
		annee2017.className = "point";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
		document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
		document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
		document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
		document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
		document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
		document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
		    var listeGroupe5 = new Array();
		    var listeGroupe6 = new Array();
		    var listeGroupe7 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2016 && groupe.Scene === "Altar" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2016 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2016 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2016 && groupe.Scene === "Metal Corner" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2016 && groupe.Scene === "Temple" )
    			{
    				listeGroupe5.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2016 && groupe.Scene === "Valley" )
    			{
    				listeGroupe6.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2016 && groupe.Scene === "Warzone" )
    			{
    				listeGroupe7.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
			listeGroupe5.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene5.appendChild(choix);
			});
			listeGroupe6.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene6.appendChild(choix);
			});
			listeGroupe7.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene7.appendChild(choix);
			});
	}
	annee2017.onclick = function(){
		textePlan.textContent ="167 artistes font monter les décibels en 2017 pour faire vibrer les festivaliers.";
		anneeEvolution.className = "pointEvolution";
		annee2006.className = "point";
		annee2007.className = "point";
		annee2008.className = "point";
		annee2009.className = "point";
		annee2010.className = "point";
		annee2011.className = "point";
		annee2012.className = "point";
		annee2013.className = "point";
		annee2014.className = "point";
		annee2015.className = "point";
		annee2016.className = "point";
		annee2017.className = "point active";
		document.getElementById("carte06").className = "2006 divCarte--hidden";
		document.getElementById("carte07").className = "2007 divCarte--hidden";
		document.getElementById("carte08").className = "2008 divCarte--hidden";
		document.getElementById("carte09").className = "2009 divCarte--hidden ";
		document.getElementById("carte12").className = "2012 divCarte ";
		document.getElementById("pin2006-01").className = "pin--2006-1"
		document.getElementById("pin2006-02").className = "pin--2006-2"
		document.getElementById("pin2007-01").className = "pin--2007-1"
		document.getElementById("pin2007-02").className = "pin--2007-2"
		document.getElementById("pin2007-03").className = "pin--2007-3"
		document.getElementById("pin2008-01").className = "pin--2008-1"
		document.getElementById("pin2008-02").className = "pin--2008-2"
		document.getElementById("pin2008-03").className = "pin--2008-3"
		document.getElementById("pin2009-01").className = "pin--2009-1"
		document.getElementById("pin2009-02").className = "pin--2009-2"
		document.getElementById("pin2009-03").className = "pin--2009-3"
		document.getElementById("pin2009-04").className = "pin--2009-4"
		document.getElementById("pin2012-01").className = "fadeInDown animated pin--2012-1"
		document.getElementById("pin2012-02").className = "fadeInDown animated pin--2012-2"
		document.getElementById("pin2012-03").className = "fadeInDown animated pin--2012-3"
		document.getElementById("pin2012-04").className = "fadeInDown animated pin--2012-4"
		document.getElementById("pin2012-05").className = "fadeInDown animated pin--2012-5"
		document.getElementById("pin2012-06").className = "fadeInDown animated pin--2012-6"
		document.getElementById("pin2012-07").className = "fadeInDown animated pin--2012-7"
		$('li').remove();
		var json = loadData("data/AnneeSceneTypeGroupe.json");
		    var listeGroupe1 = new Array();
		    var listeGroupe2 = new Array();
		    var listeGroupe3 = new Array();
		    var listeGroupe4 = new Array();
		    var listeGroupe5 = new Array();
		    var listeGroupe6 = new Array();
		    var listeGroupe7 = new Array();
    		json.forEach(function(groupe){
    			if (groupe.Annee === 2017 && groupe.Scene === "Altar" )
    			{
    				listeGroupe1.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2017 && groupe.Scene === "Main 01" )
    			{
    				listeGroupe2.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2017 && groupe.Scene === "Main 02" )
    			{
    				listeGroupe3.push(groupe.Groupe);
    			} 
    			if (groupe.Annee === 2017 && groupe.Scene === "Metal Corner" )
    			{
    				listeGroupe4.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2017 && groupe.Scene === "Temple" )
    			{
    				listeGroupe5.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2017 && groupe.Scene === "Valley" )
    			{
    				listeGroupe6.push(groupe.Groupe);
    			}
    			if (groupe.Annee === 2017 && groupe.Scene === "Warzone" )
    			{
    				listeGroupe7.push(groupe.Groupe);
    			} 
    		});
    		listeGroupe1.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene1.appendChild(choix);
			});
			listeGroupe2.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene2.appendChild(choix);
			});
			listeGroupe3.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene3.appendChild(choix);
			});
			listeGroupe4.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene4.appendChild(choix);
			});
			listeGroupe5.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene5.appendChild(choix);
			});
			listeGroupe6.forEach(function(groupe){
				var choix = document.createElement('li');
				choix.textContent = groupe;
				scene6.appendChild(choix);
			});
			listeGroupe7.forEach(function(groupe){
			var choix = document.createElement('li');
			choix.textContent = groupe;
			scene7.appendChild(choix);
			});
	}
}

function chargement(){
	document.getElementById('jackGif').className = "jackGif--hidden";
	document.getElementById('logo').className = "logo";
	document.getElementById('bulleAccueil').className = "accueil-obtuse";
	document.getElementById('jackAccueil').className = "jackAccueil";
}

function controleurPodium()
{
	var PodiumEvolution = document.getElementById("PodiumEvolution");
	var Podium2006 = document.getElementById("Podium2006");
	var Podium2007 = document.getElementById("Podium2007");
	var Podium2008 = document.getElementById("Podium2008");
	var Podium2009 = document.getElementById("Podium2009");
	var Podium2010 = document.getElementById("Podium2010");
	var Podium2011 = document.getElementById("Podium2011");
	var Podium2012 = document.getElementById("Podium2012");
	var Podium2013 = document.getElementById("Podium2013");
	var Podium2014 = document.getElementById("Podium2014");
	var Podium2015 = document.getElementById("Podium2015");
	var Podium2016 = document.getElementById("Podium2016");
	var Podium2017 = document.getElementById("Podium2017");
	var TextePodium = document.getElementById("textePodium");

	PodiumEvolution.onclick = function(){
		PodiumEvolution.className = "pointEvolution active";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		TextePodium.textContent = "Environ ⅓ des groupes présents pendant ces éditions viennent du pays de la country. Ils devancent de loin la France et le Royaume-Uni qui à eux deux ne parviennent même pas à égaler les Etats-Unis."
		document.getElementById("podium").className = "podium--hidden";
	}

	Podium2006.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "Pour cette première édition du Hellfest, 35% des groupes proviennent des Etats-Unis. En deuxième position se trouvent la France et l'Angleterre, représentant respectivement 16% et 11% du total des groupes. 15% des groupes viennent de pays scandinaves, dont la moitié de la Suède.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point active";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2007.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "2007 s'accompagne d'une nette hausse de participation des groupes français, aussi nombreux que les groupes américains. La somme des deux représente plus de la moitié du total des groupes.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point active";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "fadeInDown animated allemand troisieme drapeau";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2008.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "En 2008, le Hellfest élargit ses horizons et accueille des groupes japonais, autrichiens et irlandais. La participation de la France diminue et équivaut presque à celle de l'Angleterre et de la Suède.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point active";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2009.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "Jamais les Etats-Unis n'ont atteint un tel taux de participation : ils représentent en 2009 plus de 40% des groupes ! En revanche, les participation des pays scandinaves recule.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point active";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2010.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "Les groupe français sont en perte de vitesse en cette année 2010... La Roumanie fait son entrée dans le festival avec le groupe Negurâ Bunget.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point active";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "francais deuxieme drapeau--hidden";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "fadeInDown animated anglais deuxieme drapeau";
		document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
		document.getElementById('troisiemeSuede').className = "fadeInDown animated suede troisieme drapeau";
	}
	Podium2011.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "Alors que la France est toujours moins bien représentée, de nouveaux pays font leur apparition sur la scène du métal. L'Ecosse, la Russie, l'Irlande du Nord et la Letonnie sont les petits nouveaux de 2011.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point active";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "francais deuxieme drapeau--hidden";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "fadeInDown animated anglais deuxieme drapeau";
		document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
		document.getElementById('troisiemeSuede').className = "fadeInDown animated suede troisieme drapeau";
	}
	Podium2012.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "2012 est synonyme d'âge d'or des groupes français. Ils connaissent une fulgurante augmentation pour la représentativité du pays. Pour la première fois le groupe Solstafir devient ambassadeur de son pays : l'Islande.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point active";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2013.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "La Suède et l'Angleterre sont au coude à coude sur la troisième place du podium. Quant aux iles Féroé, le Chili et la Colombie, ils s'installent pour la première fois au Hellfest.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point active";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2014.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "Encore jamais représentée au Hellfest, cette année l'Afrique du sud fait son entrée dans le palmarès des groupes présent au festival.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point active";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2015.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "Pour la seconde fois, l'Irlande du nord est présente au Hellfest pour des représentations toujours plus impressionnantes !";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point active";
		Podium2016.className = "point";
		Podium2017.className = "point";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2016.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "En 2016, pour la première fois depuis la création du Hellfest, un groupe ukrainien se produit sur l'une des scènes du festival, pour le plaisir de nos oreilles.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point active";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "fadeInDown animated allemand troisieme drapeau";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "anglais troisieme drapeau--hidden";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
	Podium2017.onclick = function(){
		document.getElementById("podium").className = "";
		TextePodium.textContent = "Apparition inédite dans la programmation du festival en cette année 2017, la Tunisie invite le public à découvrir ses artistes aux multiples talents.";
		PodiumEvolution.className = "pointEvolution";
		Podium2006.className = "point";
		Podium2007.className = "point";
		Podium2008.className = "point";
		Podium2009.className = "point";
		Podium2010.className = "point";
		Podium2011.className = "point";
		Podium2012.className = "point";
		Podium2013.className = "point";
		Podium2014.className = "point";
		Podium2015.className = "point";
		Podium2016.className = "point";
		Podium2017.className = "point active";
		document.getElementById('premierAmericain').className = "fadeInDown animated americain premier drapeau";
		document.getElementById('deuxiemeAmericain').className = "americain deuxieme drapeau--hidden";
		document.getElementById('troisiemeAmericain').className = "americain troiseme drapeau--hidden";
		document.getElementById('premierFrancais').className = "francais premier drapeau--hidden";
		document.getElementById('deuxiemeFrancais').className = "fadeInDown animated francais deuxieme drapeau";
		document.getElementById('troisiemeFrancais').className = "francais troisieme drapeau--hidden";
		document.getElementById('premierAllemand').className = "allemand premier drapeau--hidden";
		document.getElementById('deuxiemeAllemand').className = "allemand deuxieme drapeau--hidden";
		document.getElementById('troisiemeAllemand').className = "allemand troisieme drapeau--hidden";
		document.getElementById('premierAnglais').className = "anglais premier drapeau--hidden";
		document.getElementById('deuxiemeAnglais').className = "anglais deuxieme drapeau--hidden";
		document.getElementById('troisiemeAnglais').className = "fadeInDown animated anglais troisieme drapeau";
		document.getElementById('troisiemeSuede').className = "suede troisieme drapeau--hidden";
	}
}

function pin(){
	var pin200601 =document.getElementById("pin2006-01");
	var pin200602 =document.getElementById("pin2006-02");
	var pin200701 =document.getElementById("pin2007-01");
	var pin200702 =document.getElementById("pin2007-02");
	var pin200703 =document.getElementById("pin2007-03");
	var pin200801 =document.getElementById("pin2008-01");
	var pin200802 =document.getElementById("pin2008-02");
	var pin200803 =document.getElementById("pin2008-03");
	var pin200901 =document.getElementById("pin2009-01");
	var pin200902 =document.getElementById("pin2009-02");
	var pin200903 =document.getElementById("pin2009-03");
	var pin200904 =document.getElementById("pin2009-04");
	var pin201201 =document.getElementById("pin2012-01");
	var pin201202 =document.getElementById("pin2012-02");
	var pin201203 =document.getElementById("pin2012-03");
	var pin201204 =document.getElementById("pin2012-04");
	var pin201205 =document.getElementById("pin2012-05");
	var pin201206 =document.getElementById("pin2012-06");
	var pin201207 =document.getElementById("pin2012-07");
	var popup = document.getElementById("fenetrePopup");
	var croix = document.getElementById("croix");
	var titre = document.getElementById("scène");

	croix.onclick = function(){
		popup.className = "fenetrePopup--hidden";
	}

	pin200601.onclick = function(){
		titre.textContent = "Hard n'Heavy";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200602.onclick = function(){
		titre.textContent = "Main Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200701.onclick = function(){
		titre.textContent = "Discover Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";

	}
	pin200702.onclick = function(){
		titre.textContent = "Gibson Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200703.onclick = function(){
		titre.textContent = "Main Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200801.onclick = function(){
		titre.textContent = "Discover Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200802.onclick = function(){
		titre.textContent = "Main 2 Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200803.onclick = function(){
		titre.textContent = "Main 1 Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
 	pin200901.onclick = function(){
 		titre.textContent = "Main 1 Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
 	pin200902.onclick = function(){
 		titre.textContent = "Main 2 Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200903.onclick = function(){
		titre.textContent = "Rock Hard tent";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin200904.onclick = function(){
		titre.textContent = "Terrorizer tent";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin201201.onclick = function(){
		titre.textContent = "Altar";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin201202.onclick = function(){
		titre.textContent = "Main 1 Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin201203.onclick = function(){
		titre.textContent = "Main 2 Stage";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin201204.onclick = function(){
		titre.textContent = "Métal Corner";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin201205.onclick = function(){
		titre.textContent = "Temple";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin201206.onclick = function(){
		titre.textContent = "Valley";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene";
		document.getElementById("scene7").className = "listeScene--hidden";
	}
	pin201207.onclick = function(){
		titre.textContent = "Warzone";
		popup.className = "fenetrePopup";
		document.getElementById("scene1").className = "listeScene--hidden";
		document.getElementById("scene2").className = "listeScene--hidden";
		document.getElementById("scene3").className = "listeScene--hidden";
		document.getElementById("scene4").className = "listeScene--hidden";
		document.getElementById("scene5").className = "listeScene--hidden";
		document.getElementById("scene6").className = "listeScene--hidden";
		document.getElementById("scene7").className = "listeScene";
	}
}

function loadData(JsonPath)
{
	var json = null;
	$.ajax({
		'async': false,
		'global':false,
		'url':JsonPath,
		'dataType':"json",
		'success':function(data)
		{
			json = data;
		}
	});
	return json;
}

pin();
controleurPodium();
controleurPlan();
setTimeout(chargement, 5000); 