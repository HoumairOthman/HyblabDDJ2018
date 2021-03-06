/** lien entre les secteurs et les numéros **/
var GFE = [ 'Agriculture', 'Pêche - Mer - Aquaculture','Bâtiment gros œuvre - Génie civil - Extraction',
    'Bâtiment : équipements et finitions','Structures métalliques - Travail des métaux - Fonderie',
    'Mécanique - Automatismes', 'Electricité - Electrotechnique - Electronique',
    'Travail des matériaux - Industries de process - Laboratoire','Production alimentaire - Cuisine',
    'Textile - Habillement - Cuir','Travail du bois', 'Techniques graphiques - Impression',
    'Transports - Conduite - Manutention - Magasinage','Tertiaire de bureau - Tertiaire spécialisé',
    'Commerce et distribution','Paramédical - Travail social - Soins personnels',
    'Hôtellerie - Restauration - Tourisme - Sports - Animation socioculturelle - Loisirs',
    'Nettoyage - Assainissement - Environnement - Sécurité',
    'Techniques de la communication - Média',
    'Arts appliqués - Arts du spectacle',
    'Formations générales - Généralistes - Développement personnel',
    'Formations d’aide à l’insertion sociale et professionnell'];

var secteurs = { "Agriculture" : ["Amenagement paysager", "Productions animales, élevages spéc., aquacultures",
        "Productions végétales, cultures spéc, protection", "Spéc. plurivalentes de l'agronomie - agriculture" ],
    "Pêche - Mer - Aquaculture" : ["Forêts, espaces naturels, faune sauvage, pêche"],
    "Bâtiment gros œuvre - Génie civil - Extraction" : ["Batiment: construction et couverture","Mines et carrières, génie civil, topographie",
        "Spéc. pluri-techno. génie civil-construction-bois"],
    "Bâtiment : équipements et finitions" :  ["Batiment: finitions"],
    "Structures métalliques - Travail des métaux - Fonderie" : ["Métallurgie", "Structures métalliques"],
    "Mécanique - Automatismes" :  ["Mécanique aéronautique et spatiale","Mécanique générale et de précision, usinage",
        "Moteurs et mécanique auto","Spécialités pluritechnologiques des transformations",
        "Technologies de commandes, transformations indust.","Technologies industrielles fondamentales"],
    "Electricité - Electrotechnique - Electronique" : ["Electricité, électronique","Energie, génie climatique" ],
    "Formations d’aide à l’insertion sociale et professionnelle": ["Développement des capacités d'orientation"],
    "Travail des matériaux - Industries de process - Laboratoire" :  ["Matériaux de construction, verre et céramique",
        "Plasturgie, matériaux composites", "Spécialités pluri-techno, mécanique électricité",
        " Transformations chimiques et apparentées"],
    "Production alimentaire - Cuisine" : ["Agro-alimentaire, alimentation, cuisine"],
    "Textile - Habillement - Cuir" : ["Cuirs et peaux", "Habillement", "Spécialités pluri-technologiques matériaux souples"],
    "Travail du bois" : ["Travail du bois et de l'ameublement"],
    "Techniques graphiques - Impression" : ["Techniques de l'imprimerie et de l'édition"],
    "Transports - Conduite - Manutention - Magasinage" : ["Transport, manutention, magasinage"],
    "Commerce et distribution" : ["Commerce, vente","Spécialités plurivalentes des échanges - gestion" ],
    "Tertiaire de bureau - Tertiaire spécialisé" : ["Comptabilité, gestion", "Droit,sciences politiques",
        "Finances, banque, assurances", "Informatique, traitement de l'information, réseaux",
        "Ressources humaines, gestion personnel et emploi", "Secrétariat, bureautique",
        "Spécialités plurivalentes des services"],
    "Arts appliqués - Arts du spectacle" : ["Musique, arts du spectacle"],
    "Paramédical - Travail social - Soins personnels" : ["Coiffure, esthétique", "Santé",
        "Spécialités plurivalentes sanitaires et sociales", "Travail social"],
    "Hôtellerie - Restauration - Tourisme - Sports - Animation socioculturelle - Loisirs": ["Accueil, Hotellerie, tourisme",
        "Animation culturelle, sportive et de loisirs"],
    "Nettoyage - Assainissement - Environnement - Sécurité" : [
        "Nettoyage-assainissement-protection-environnement", "Sécurité des biens-personnes, police, surveillance"    ],
    "Techniques de la communication - Média" : [" Spécialités plurivalentes de la communication",
        "Techniques de l'image et du son, métiers connexes"],
    "Formations générales - Généralistes - Développement personnel" : [
        "Français, littérature et civilisation française", "Chimie",
        "Langues vivantes, civilisations étrangères", "Mathématiques",
        "Physique", "Physique - chimie", "Sciences de la vie", "Sciences sociales","Spécialités pluriscientifiques"]
}

function recupereNom(numeroSecteur, numeroGFE) {
    var numeroS = numeroSecteur.split("-")[1];
    var numeroG = numeroGFE.split("-")[1];
    var indiceS = parseInt(numeroS.substring(1, 2)) - 1;
    var indiceG = parseInt(numeroG.substring(1, 2)) - 1;
    var nomGFE = GFE[indiceG];
    var nomSecteur = secteurs[nomGFE][indiceS];

    return nomSecteur;
}

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    //initialise a svg
    var width = 450;
    var height = 350;
    var radius = Math.min(width, height) / 2;

    // Breadcrumb dimensions: width, height, spacing, width of tip/tail.
    var b = {
        w: 100, h: 25, s: 3, t: 10
    };
    var totalSize = 0;
    var totalM = 0;
    var total = 0;
    var totalM1 = 0;
    var total1 = 0;
    var totalM2 = 0;
    var total2 = 0;
    var totalM3 = 0;
    var total3 = 0;

// Mapping of step names to colors.
    var colors = {
        'Niveau1': '#4e2850',
        'Niveau2': '#6a376e',
        'Niveau3': '#8d4d91',
        'Niveau4': '#7f699d',
        'Niveau5': '#a594eb',
        'Niveau6': '#d6d4f5',
        'Secteur-01': '#093045',
        'Secteur-02': '#0b435f',
        'Secteur-03': '#0c587b',
        'Secteur-04': '#1078a8',
        'Secteur-05': '#149ed9',
        'Secteur-06': '#00bbff',
        'Secteur-07': '#33AFCE',
        'Secteur-08': '#77c0db',
        'Secteur-09': '#b9e3ec'
    };

    var vis = null;
    /* Initial the image*/
    $scope.initChart = function () {
        vis = d3.select('#chart').append('svg:svg')
            .attr('width', width)
            .attr('height', height)
            .append('svg:g')
            .attr('id', 'container')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
        drawLegend();
    };

    var partition = d3.layout.partition()
        .size([2 * Math.PI, radius * radius])
        .value(function (d) {
            return d.T_effectifs;
        });

    var arc = d3.svg.arc()
        .startAngle(function (d) {
            return d.x;
        })
        .endAngle(function (d) {
            return d.x + d.dx;
        })
        .innerRadius(function (d) {
            return Math.sqrt(d.y);
        })
        .outerRadius(function (d) {
            return Math.sqrt(d.y + d.dy);
        });

    $scope.aJson = [{
        'first': 'GFE-01',
        'second': 'Agriculture',
        'third':'img/01_agriculture.svg'
    }, {
        'first': 'GFE-02',
        'second': 'Pêche - Mer - Aquaculture',
        'third':'img/02_peche.svg'
    }, {
        'first': 'GFE-03',
        'second': 'Bâtiment gros œuvre - Génie civil - Extraction',
        'third':'img/03_batiment.svg'
    }, {
        'first': 'GFE-04',
        'second': 'Bâtiment : équipements et finitions',
        'third':'img/04_construction.svg'
    }, {
        'first': 'GFE-05',
        'second': 'Structures métalliques - Travail des métaux - Fonderie',
        'third':'img/05_structures.svg'
    }, {
        'first': 'GFE-06',
        'second': 'Mécanique - Automatismes',
        'third':'img/06_mecanique.svg'
    }, {
        'first': 'GFE-07',
        'second': 'Electricité - Electrotechnique - Electronique',
        'third':'img/07_electricite.svg'
    }, {
        'first': 'GFE-08',
        'second': 'Travail des matériaux - Industries de process - Laboratoire',
        'third':'img/08_process.svg'
    }, {
        'first': 'GFE-09',
        'second': 'Production alimentaire - Cuisine',
        'third':'img/09_cuisine.svg'
    }, {
        'first': 'GFE-10',
        'second': 'Textile - Habillement - Cuir',
        'third':'img/10_textile.svg'
    }, {
        'first': 'GFE-11',
        'second': 'Travail du bois',
        'third':'img/11_travail_bois.svg'
    }, {
        'first': 'GFE-12',
        'second': 'Techniques graphiques - Impression',
        'third':'img/12_graphisme.svg'
    }, {
        'first': 'GFE-13',
        'second': 'Transports - Conduite - Manutention - Magasinage',
        'third':'img/13_logistique.svg'
    }, {
        'first': 'GFE-14',
        'second': 'Tertiaire de bureau - Tertiaire spécialisé',
        'third':'img/14_tertiaire.svg'
    }, {
        'first': 'GFE-15',
        'second': 'Commerce et distribution',
        'third':'img/15_commerce.svg'
    }, {
        'first': 'GFE-16',
        'second': 'Paramédical - Travail social - Soins personnels',
        'third':'img/16_paramedical.svg'
    }, {
        'first': 'GFE-17',
        'second': 'Hôtellerie - Restauration - Tourisme - Sports - Animation socioculturelle - Loisirs',
        'third':'img/17_hotellerie.svg'
    }, {
        'first': 'GFE-18',
        'second': 'Nettoyage - Assainissement - Environnement - Sécurité',
        'third':'img/18_entretien.svg'
    }, {
        'first': 'GFE-19',
        'second': 'Techniques de la communication - Média',
        'third':'img/19_communication.svg'
    }, {
        'first': 'GFE-20',
        'second': 'Arts appliqués - Arts du spectacle',
        'third':'img/20_arts.svg'
    }, {
        'first': 'GFE-21',
        'second': 'Formations générales - Généralistes - Développement personnel',
        'third':'img/21_general.svg'
    }
    ];

    var GFE = 0;
    var GFETotalM = 0;

    $scope.clickGetImage = function (params) {
        var data = [];
        data.boxes = [];
        GFE = 0;
        var hierarchyData = {name: 'root', children: []},
            levels = ['SECTEUR', 'NIV'];
        d3.json('data/effectifs.json', function (dataset) {
            // select some important infos
            angular.forEach(dataset, function (value, key) {
                if (value.GFE === params.first) {
                    data.push(value);
                    data.boxes.push({
                        SECTEUR: value.SECTEUR,
                        NIV: value.NIV,
                        an1_capacité_maxi: value.an1_capacité_maxi,
                        an1: value.an1,
                        an2_capacité_maxi: value.an2_capacité_maxi,
                        an2: value.an2,
                        an3_capacité_maxi: value.an3_capacité_maxi,
                        an3: value.an1,
                        Total_capacité_maxi: value.Total_capacité_maxi,
                        Total_effectifs: value.Total_effectifs
                    });
                }
                for (var i = 0; i < data.length; i++) {
                    GFETotalM += value.Total_capacité_maxi;
                    GFE += value.Total_effectifs
                }
            });

            d3.select('#name')
                .text(params.second);

            d3.select('#exp1')
                .text('Effectifs par rapport à la capacité max.\n');

            var percentGFE = (100 * GFE / GFETotalM).toPrecision(3);

            var option = {
                value: percentGFE,
                name: '',//必填
                backgroundColor: null,
                color: ['#a0cb4d', '#c6dac4'],
                fontSize: 24,
                fontFamily: 'sans-serif',
                domEle: document.getElementById("exp")//必填
            }, percentPie = new PercentPie(option);
            percentPie.init();

            //Layered data
            angular.forEach(data, function (value, key) {
                var depthCursor = hierarchyData.children;
                levels.forEach(function (property, depth) {
                    var index;
                    depthCursor.forEach(function (child, i) {
                        if (value[property] === child.name) index = i;
                    });
                    if (isNaN(index)) {
                        depthCursor.push({name: value[property], children: []});
                        index = depthCursor.length - 1;
                    }
                    // Now reference the new child array as we go deeper into the tree
                    depthCursor = depthCursor[index].children;
                    // This is a leaf, so add the last element to the specified branch
                    if (depth === levels.length - 1) depthCursor.push({
                        Diplôme: value.DIPLOME,
                        an1_Max: value.an1_capacité_maxi,
                        an1_Effectifs: value.an1,
                        an2_Max: value.an2_capacité_maxi,
                        an2_Effectifs: value.an2,
                        an3_Max: value.an3_capacité_maxi,
                        an3_Effectifs: value.an3,
                        T_Max: value.Total_capacité_maxi,
                        T_effectifs: value.Total_effectifs
                    });
                })
            });
            document.getElementById("main").style.display=""
            d3.select('#showExplain')
                .style('visibility', '');
            d3.select('#dessus')
                .style('visibility', 'hidden');
            createVisualization(hierarchyData);
        });
    };

    function createVisualization(json) {
        // Basic setup of page elements.
        document.getElementById('chart').innerHTML = '';
        document.getElementById('legend').innerHTML = '';

        $scope.initChart();

        initializeBreadcrumbTrail();
        d3.select('#togglelegend').on('click', toggleLegend);

        // Bounding circle underneath the sunburst, to make it easier to detect
        // when the mouse leaves the parent g.
        vis.append('svg:circle')
            .attr('r', radius)
            .style('opacity', 0);

        var nodes = partition.nodes(json)
            .filter(function (d) {
                return (d.dx > 0.00001);
            });

        var path = vis.data([json]).selectAll('path')
            .data(nodes)
            .enter().append('svg:path')
            .attr('display', function (d) {
                return d.depth < 3 && d.depth > 0 ? null : 'none';
            })
            .attr('d', arc)
            .attr('fill-rule', 'evenodd')
            .style('fill', function (d) {
                return colors[d.name];
            })
            .style('opacity', 1)
            .on('mouseover', mouseover)
            .on('click', getDescription);

        // Add the mouseleave handler to the bounding circle.
        d3.select('#container').on('mouseleave', mouseleave);

        // Get total size of the tree = value of root node from partition.
        totalSize = path.node().__data__.value;

    }

    // Fade all but the current sequence, and show it in the breadcrumb trail.
    function mouseover(d) {
        var percentage = (100 * d.value / totalSize).toPrecision(3);
        var percentageString = percentage + '%';
        if (percentage < 0.1) {
            percentageString = '< 0.1%';
        }

        d3.select('#percentage')
            .text(percentageString);

        d3.select('#explanation')
            .style("visibility", "");

        var sequenceArray = getAncestors(d);
        updateBreadcrumbs(sequenceArray, percentageString);

        // Fade all the segments.
        d3.selectAll('path')
            .style('opacity', 0.3);

        // Then highlight only those that are an ancestor of the current segment.
        vis.selectAll('path')
            .filter(function (node) {
                return (sequenceArray.indexOf(node) >= 0);
            })
            .style('opacity', 1);
    }

// Restore everything to full opacity when moving off the visualization.
    function mouseleave(d) {
        // Hide the breadcrumb trail
        d3.select('#trail')
            .style('visibility', 'hidden');

        // Deactivate all segments during transition.
        d3.selectAll('path').on('mouseover', null);

        // Transition each segment to full opacity and then reactivate it.
        d3.selectAll('path')
            .transition()
            .duration(1000)
            .style('opacity', 1)
            .each('end', function () {
                d3.select(this).on('mouseover', mouseover);
            });

        d3.select('#explanation')
            .style('visibility', 'hidden');
    }

// Given a node in a partition layout, return an array of all of its ancestor
// nodes, highest first, but excluding the root.
    function getAncestors(node) {
        var path = [];
        var current = node;
        while (current.parent) {
            path.unshift(current);
            current = current.parent;
        }
        return path;
    }

    function getDescription(d) {
        totalM = 0;
        total = 0;
        totalM1 = 0;
        total1 = 0;
        totalM2 = 0;
        total2 = 0;
        totalM3 = 0;
        total3 = 0;
        if (d.depth === 1) {
            for (var i = 0; i < d.children.length; i++) {
                for (var j = 0; j < d.children[i].children.length; j++) {
                    totalM += d.children[i].children[j].T_Max;
                    total += d.children[i].children[j].T_effectifs;
                    totalM1 += d.children[i].children[j].an1_Max;
                    total1 += d.children[i].children[j].an1_Effectifs;
                    totalM2 += d.children[i].children[j].an2_Max;
                    total2 += d.children[i].children[j].an2_Effectifs;
                    totalM3 += d.children[i].children[j].an3_Max;
                    total3 += d.children[i].children[j].an3_Effectifs;
                }
            }
            var percent = (100 * total / totalM).toPrecision(3);
            var percent1, percent2, percent3;
            if (totalM1 === 0) {
                percent1 = 0;
            } else {
                percent1 = (100 * total1 / totalM1).toPrecision(3);
            }
            if (totalM2 === 0) {
                percent2 = 0;
            } else {
                percent2 = (100 * total2 / totalM2).toPrecision(3);
            }
            if (totalM3 === 0) {
                percent3 = 0;
            } else {
                percent = (100 * total3 / totalM3).toPrecision(3);
            }

            d3.select('#dessus')
                .style('visibility', '');

            d3.select('#text')
                .text('Effectifs par rapport à la capacité max.\n');

            var optionT = {
                value: percent,
                name: 'Total',//必填
                backgroundColor: null,
                color: ['#4bb8e6', '#ffffff'],
                fontSize: 14,
                fontWeight: 100,
                fontFamily: 'sans-serif',
                domEle: document.getElementById("exptotal")//必填
            }, percentPie1 = new PercentPie(optionT);
            percentPie1.init();

            var option1 = {
                value: percent1,
                name: 'Année1',//必填
                backgroundColor: null,
                color: ['#4bb8e6', '#ffffff'],
                fontSize: 14,
                fontWeight: 100,
                fontFamily: 'sans-serif',
                domEle: document.getElementById("expan1")//必填
            }, percentPie1 = new PercentPie(option1);
            percentPie1.init();

            var option2 = {
                value: percent2,
                name: 'Année2',//必填
                backgroundColor: null,
                color: ['#4bb8e6', '#ffffff'],
                fontSize: 14,
                fontWeight: 100,
                fontFamily: 'sans-serif',
                domEle: document.getElementById("expan2")//必填
            }, percentPie2 = new PercentPie(option2);
            percentPie2.init();

            var option3 = {
                value: percent3,
                name: 'Année3',//必填
                backgroundColor: null,
                color: ['#4bb8e6', '#ffffff'],
                fontSize: 14,
                fontWeight: 100,
                fontFamily: 'sans-serif',
                domEle: document.getElementById("expan3")//必填
            }, percentPie3 = new PercentPie(option3);
            percentPie3.init();
        } else{
            d3.select('#dessus')
                .style('visibility', 'hidden');
        }
    }


    function initializeBreadcrumbTrail() {
        // Add the svg area.
        var trail = d3.select('#sequence').append('svg:svg')
            .attr('width', width)
            .attr('height', 50)
            .attr('id', 'trail');
        // Add the label at the end, for the percentage.
        trail.append('svg:text')
            .attr('id', 'endlabel')
            .style('fill', '#d8d8dd');
    }

// Generate a strisng that describes the points of a breadcrumb polygon.
    function breadcrumbPoints(d, i) {
        var points = [];
        points.push('0,0');
        points.push(b.w + ',0');
        points.push(b.w + b.t + ',' + (b.h / 2));
        points.push(b.w + ',' + b.h);
        points.push('0,' + b.h);
        if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
            points.push(b.t + ',' + (b.h / 2));
        }
        return points.join(' ');
    }

// Update the breadcrumb trail to show the current sequence and percentage.
    function updateBreadcrumbs(nodeArray, percentageString) {

        // Data join; key function combines name and depth (= position in sequence).
        var g = d3.select('#trail')
            .selectAll('g')
            .data(nodeArray, function (d) {
                return d.name + d.depth;
            });

        // Add breadcrumb and label for entering nodes.
        var entering = g.enter().append('svg:g');

        entering.append('svg:polygon')
            .attr('points', breadcrumbPoints)
            .style('fill', function (d) {
                return colors[d.name];
            });

        entering.append('svg:text')
            .attr('x', (b.w + b.t) / 2)
            .attr('y', b.h / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'middle')
            .text(function (d) {
                return d.name;
            });

        // Set position for entering and updating nodes.
        g.attr('transform', function (d, i) {
            return 'translate(' + i * (b.w + b.s) + ', 0)';
        });

        // Remove exiting nodes.
        g.exit().remove();

        // Now move and update the percentage at the end.
        d3.select('#trail').select('#endlabel')
            .attr('x', (nodeArray.length + 0.5) * (b.w + b.s))
            .attr('y', b.h / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'middle')
            .text(percentageString);

        // Make the breadcrumb trail visible, if it's hidden.
        d3.select('#trail')
            .style('visibility', '');
    }

    function drawLegend() {
        // Dimensions of legend item: width, height, spacing, radius of rounded rect.
        var li = {
            w: 75, h: 25, s: 3, r: 3
        };

        var legend = d3.select('#legend').append('svg:svg')
            .attr('width', li.w)
            .attr('height', d3.keys(colors).length * (li.h + li.s));

        var g = legend.selectAll('g')
            .data(d3.entries(colors))
            .enter().append('svg:g')
            .attr('transform', function (d, i) {
                return 'translate(0,' + i * (li.h + li.s) + ')';
            });

        g.append('svg:rect')
            .attr('rx', li.r)
            .attr('ry', li.r)
            .attr('width', li.w)
            .attr('height', li.h)
            .style('fill', function (d) {
                return d.value;
            });

        g.append('svg:text')
            .attr('x', li.w / 2)
            .attr('y', li.h / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'middle')
            .text(function (d) {
                return d.key;
            });
    }

    function toggleLegend() {
        var legend = d3.select('#legend');
        if (legend.style('visibility') === 'hidden') {
            legend.style('visibility', '');
        } else {
            legend.style('visibility', 'hidden');
        }
    }

    function PercentPie(option){
        this.backgroundColor = option.backgroundColor||'#fff';
        this.color           = option.color||['#a0cb4d','#c1dac2'];
        this.fontSize        = option.fontSize||12;
        this.domEle          = option.domEle;
        this.value           = option.value;
        this.name            = option.name;
        this.title           = option.title;
        this.fontWeight      = option.fontWeight
    }

    PercentPie.prototype.init = function(){
        var _that = this;
        var option = {
            backgroundColor:_that.backgroundColor,
            color:_that.color,
            series: [{
                name: 'name',
                type: 'pie',
                radius: ['65%', '90%'],
                avoidLabelOverlap: false,
                hoverAnimation:false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: _that.fontSize,
                            fontWeight: 500,
                            color:['#000000']
                        },
                        formatter:'{b}\n{c}%'
                    }
                },
                data: [{
                    value: _that.value,
                    name: _that.name,
                    label:{
                        normal:{
                            show:true
                        }
                    }
                },
                    {
                        value: 100-_that.value,
                        name: '',
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }
                ]
            }]
        };
        echarts.init(_that.domEle).setOption(option);
    };
});

function returnPage() {
    document.getElementById("main").style.display="none";
}

function nextPage() {
    document.getElementById("detail2").style.display="";
}

function showDetail(){
    document.getElementById("detail").style.display="";
}

function returnAll() {
    document.getElementById("detail").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("detail2").style.display="none";
    document.getElementById("detail3").style.display="none";
}

function retourPage() {
    document.getElementById("detail2").style.display="none";
    document.getElementById("detail").style.display="";
    document.getElementById("detail3").style.display="none";
}

function retourPage2() {
    document.getElementById("detail3").style.display="none";
    document.getElementById("detail2").style.display="";
}

function nextPage2() {
    document.getElementById("detail3").style.display="";
}

