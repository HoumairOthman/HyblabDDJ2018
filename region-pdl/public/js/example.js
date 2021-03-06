'use strict';

// No need for window.onload event here since we are using the def attribute
// when loading our scripts
/*
// Load a dummy json file using the fetch API
fetch('data/dummy.json')
    // this promise will be fulfilled when the json fill will be
    .then(function (response){
        // if we could load the resource, parse it
        if( response.ok )
            return response.json();
        else // if not, send some error message as JSON data
            return {data: "JSON file not found"};

    })
    // in case of invalid JSON (parse error) send some error message as JSON data
    .catch( function (error){
        return {data: "Invalid JSON"};
    })
    // this promise will be fulfilled when the json will be parsed
    .then(function (json) {
        document.querySelector('#data')
            .textContent = json.data;
    });
*/
//TODO : pourquoi le quotient ne change pas ?

// function displayValue(event, variable){
//     var varMin = document.getElementById("min" + variable).value;
//     var varMax = document.getElementById("max" + variable).value;
//     var afficheVar = document.getElementById("intervalle" + variable);
//     afficheVar.innerHTML = variable + " entre " + varMin + " et " + varMax;
// }
//
// function actualize(event, variable){
//     displayValue(event, variable);
//     afficheBarres(datas, listeAides);
// }
//
//
// displayValue("", 'Age'); //affichage de l'age par défaut
// displayValue("", 'Quotient'); //affichage du quotient par défaut
// displayValue("", 'Niveau'); //affichage du niveau par défaut
//
// var margin = {top: 50, right: 20, bottom: 10, left: 95},
//     width = 800 - margin.left - margin.right,
//     height = 200 - margin.top - margin.bottom;
//
// var y = d3.scale.ordinal()
//     .rangeRoundBands([0, 70]);
//
// var x = d3.scale.linear()
//     .rangeRound([0, width]);
//
// var nbCatAides;
// var nomCatAides = [];
//
// var vakken;
// var bars;
//
// var datas = [];
// var idSVG = [];
//
// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("top");
//
// var yAxis = d3.svg.axis()
//     .scale(y)
//     .orient("left");
//
// var color = d3.scale.ordinal()
//     .range(couleursUtilisees);
//
// var couleurs = ["#c7001e", "#f6a580", "#cccccc", "#92c6db", "#086fad"];
// var couleursUtilisees = [];
// var aides = ["aide1", "aide2", "aide3", "aide4", "aide5"];
// var aidesUtilisees = [];
//
// var listeAides = [];
//
// function getAides(){
//     $.getJSON( "data/aides.json", function(data) {
//         margin = {top: 50, right: 20, bottom: 10, left: 95},
//             width = 800 - margin.left - margin.right,
//             height = 200 - margin.top - margin.bottom;
//
//         y = d3.scale.ordinal()
//             .rangeRoundBands([0, 70]);
//
//         x = d3.scale.linear()
//             .rangeRound([0, width]);
//
//         nbCatAides = Object.keys(data).length; //on récupère le nombre de catégories d'aides
//         nomCatAides = [];
//
//         $.each(data, function(i, aide) {
//             var sommeMontants = 0;
//             var liste = [];
//             liste.boxes = [];
//
//             nomCatAides.push(i);
//
//             aide.forEach(function (d) {
//                 liste.push(d);
//                 liste.boxes.push({
//                     name: d.nomaide,
//                     x0: sommeMontants,
//                     x1: d.montant + sommeMontants,
//                     montant: d.montant,
//                     agemin: d.agemin,
//                     agemax: d.agemax,
//                     niveaumin: d.niveaumin,
//                     niveaumax: d.niveaumax,
//                     distancemin: d.distancemin,
//                     distancemax: d.distancemax,
//                     quotientmin: d.quotientmin,
//                     quotientmax: d.quotientmax,
//                     subventionrepas: d.subventionrepas,
//                     commentaire: d.subventionrepas
//                 });
//
//                 sommeMontants += d.montant;
//             }, sommeMontants);
//
//             datas.push(liste);
//             var nomAide = String("aide-" + i);
//             idSVG.push(nomAide);
//         })
//
//         couleurs = ["#c7001e", "#f6a580", "#cccccc", "#92c6db", "#086fad"];
//         couleursUtilisees = [];
//         aides = ["aide1", "aide2", "aide3", "aide4", "aide5"];
//         aidesUtilisees = [];
//
//         for (var i = 0; i < nbCatAides; i++){
//             couleursUtilisees.push(couleurs[i]);
//             aidesUtilisees.push(aides[i]);
//         }
//
//         color = d3.scale.ordinal()
//             .range(couleursUtilisees);
//
//         xAxis = d3.svg.axis()
//             .scale(x)
//             .orient("top");
//
//         yAxis = d3.svg.axis()
//             .scale(y)
//             .orient("left");
//
//         color.domain(aidesUtilisees);
//
//         for (var j = 0; j < nbCatAides; j++) {
//
//             x.domain([0, 1600]).nice();
//             y.domain(datas[j].map(function (d) { return nomCatAides[j]; }));
//
//             listeAides.push(d3.select("#figure").append("svg")
//                 .attr("width", width + margin.left + margin.right)
//                 .attr("height", height + margin.top + margin.bottom)
//                 .attr("id", idSVG[j]) //idSVG[j] contient aide-...
//                 .append("g")
//                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")"));
//
//             listeAides[j].append("g")
//                 .attr("class", "x axis")
//                 .call(xAxis);
//
//             listeAides[j].append("g")
//                 .attr("class", "y axis")
//                 .call(yAxis);
//         }
//
//         afficheBarres(datas, listeAides);
//
//
//     });
// }
//
// getAides();
//
// function getValueVariable(variable) {
//     var intervalleVariable = [];
//     if (document.getElementById("min" + variable).value < document.getElementById("max" + variable).value) {
//         intervalleVariable.push(parseInt(document.getElementById("min" + variable).value, 10));
//         intervalleVariable.push(parseInt(document.getElementById("max" + variable).value, 10));
//     } else {
//         intervalleVariable.push(parseInt(document.getElementById("max" + variable).value, 10));
//         intervalleVariable.push(parseInt(document.getElementById("min" + variable).value, 10));
//     }
//     return intervalleVariable;
// }
//
// function afficheBarres(datas, listeAides){
//     var age = getValueVariable('Age');
//     var quotient = getValueVariable('Quotient');
//     var niveau = getValueVariable('Niveau');
//
//     //       var listeAides = [];
//
//     for (var j = 0; j < 2; j++) {
//         //on sélectionne les datas correspondantes
//         var boxesU = [];
//         var xU = 0;
//         var previous = {name: "", montant: 0};
//
//         datas[j].boxes.forEach(function (aide) {
//             var pass = true;
//             if (((aide.agemin !== null) && (aide.agemin > age[1])) || ((aide.agemax !== null) && (aide.agemax < age[0]))) {
//                 //check l'age
//                 pass = false;
//             }
//             if (((aide.quotientmin !== null) && (aide.quotientmin > quotient[1])) || ((aide.quotientmax !== null) && (aide.quotientmax < quotient[0]))) {
//                 //check le coeff
//                 console.log("trop petit quotient");
//                 pass = false;
//             }
//             if (((aide.niveaumin !== null) && (aide.niveaumin > niveau[1])) || ((aide.niveaumax !== null) && (aide.niveaumax < niveau[0]))) {
//                 //check le coeff
//                 pass = false;
//             }
//             if (pass && aide.name === previous.name) {
//                 // si le précédent était la meme aide mais avec un montant inférieur, on l'enlève
//                 if (aide.montant > previous.montant) {
//                     boxesU.pop();
//                     xU = xU - previous.montant;
//                 } else { //sinon, on ajoute pas celui ci
//                     aide.x0 = previous.x0;
//                     aide.x1 = previous.x1;
//                     aide.montant = previous.montant;
//                     pass = false;
//                 }
//             }
//             if (pass) {
//                 aide.x0 = xU;
//                 aide.x1 = aide.montant + xU;
//                 boxesU.push(aide);
//                 xU += aide.montant;
//             }
//             previous = aide;
//         }, xU, previous);
//
//         /*           x.domain([0, 1600]).nice();
//                    y.domain(datas[j].map(function (d) { return nomCatAides[j]; }));
//
//                    listeAides.push(d3.select("#figure").append("svg")
//                        .attr("width", width + margin.left + margin.right)
//                        .attr("height", height + margin.top + margin.bottom)
//                        .attr("id", idSVG[j]) //idSVG[j] contient aide-...
//                        .append("g")
//                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")"));
//
//                    listeAides[j].append("g")
//                        .attr("class", "x axis")
//                        .call(xAxis);
//
//                    listeAides[j].append("g")
//                        .attr("class", "y axis")
//                        .call(yAxis);*/
//
//         vakken = listeAides[j].selectAll(".question")
//             .data(datas[j])
//             .enter().append("g")
//             .attr("class", "bar")
//             .attr("transform", function (d) {
//                 return "translate(0," + y(d.name) + ")";
//             });
//
//         bars = vakken.selectAll("rect")
//             .data(boxesU)
//             .enter().append("g").attr("class", "subbar");
//
//         bars.append("rect")
//             .attr("height", y.rangeBand())
//             .attr("x", function (d) {
//                 return x(d.x0);
//             }) //d.x0 au lieu de 0
//             .attr("width", function (d) {
//                 return x(d.x1) - x(d.x0);
//             }) //d.x0 au lieu de 0
//             .style("fill", function (d) {
//                 return color(d.name);
//             });
//
//         bars.append("text")
//             .attr("x", function (d) {
//                 return x(d.x0);
//             })  //d.x0 au lieu de 0
//             .attr("y", y.rangeBand() / 2)
//             .attr("dy", "0.5em")
//             .attr("dx", "0.5em")
//             .style("font", "10px sans-serif")
//             .style("text-anchor", "begin")
//             .text(function (d) {
//                 return d.name
//             });
//
//         vakken.insert("rect", ":first-child")
//             .attr("height", y.rangeBand())
//             .attr("x", "1")
//             .attr("width", width)
//             .attr("fill-opacity", "0.5")
//             .style("fill", "#F5F5F5")
//             .attr("class", function (d, index) {
//                 return index % 2 == 0 ? "even" : "uneven";
//             });
//
//         listeAides[j].append("g")
//             .attr("class", "y axis")
//             .append("line")
//             .attr("x1", x(0))
//             .attr("x2", x(0))
//             .attr("y2", height);
//
//         listeAides[j].append("g")
//             .attr("class", "x axis")
//             .append("line")
//             .attr("x1", x(0))
//             .attr("x2", x(0))
//             .attr("y2", height);
//
//         //pour l'aspect des axes
//         listeAides[j].selectAll(".axis path")
//             .style("fill", "none")
//             //   .style("stroke", "#00913c")
//             .style("shape-rendering", "crispEdges");
//     }
// }