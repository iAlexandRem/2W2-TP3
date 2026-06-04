/************************ tableau des vignettes 2J2 ******************************/


const vignettes = [
    {
        arcadetitre: "Alimentation",
        mots: "sante legumes consommation manger table pots cuisine refrigerateur frigidaire 6ans 7ans 8ans pixels souris william lancup",
        image: "assets/images/vignettes/lancup_vignette.png",
        lien: "https://h26-2j2.github.io/Lancup_William_travail-pratique-vrai/",
        genre: ["Santé", "Légumes", "Consommation"],
        description: "Voici le premier niveau : tu dois manger tous les légumes en te déplaçant avec la souris.",
        auteur: "William Lancup"
    },
    {
        arcadetitre: "Au contraire",
        mots: "logique puzzle casse tete cassetete association 6ans 7ans 8ans bulles symboles aucontraire icones signes contraire oppose eve marie vallieres",
        image: "assets/images/vignettes/vallieres_vignette.png",
        lien: "https://h26-2j2.github.io/Vallieres_EveMarie_TravailPratique/",
        genre: ["Logique", "Puzzle", "Association"],
        description: "Associe des paires de phylactères contenant des symboles de signification contraire.",
        auteur: "Ève-Marie Vallières"
    },
    {
        arcadetitre: "Au pays des merveilles",
        mots: "alice wonderland conte logique puzzle casse tete cassetete 6ans 7ans 8ans aupaysdesmerveilles foret ours bois lapin herbe verte verdure ihasina joanna jacky",
        image: "assets/images/vignettes/jacky_vignette.png",
        lien: "https://h26-2j2.github.io/JACKY_IHASINA_JOANNA_TravailPratique/",
        genre: ["Conte", "Logique", "Puzzle"],
        description: "Sortez du pays des merveilles en aidant ses habitants. L'aventure mise sur des énigmes courtes et un imaginaire de conte.",
        auteur: "Ihasina Joanna Jacky"
    },
    {
        arcadetitre: "Billy & Mini",
        mots: "jeunesse logique animal animaux logique exploration billymini billyetmini entraide 3ans 4ans 5ans foret herbe verte verdure pixels oiseau ours eau amitie ludique et amusante cedryck paquette",
        image: "assets/images/vignettes/paquette-cedryck-vignette.png",
        lien: "https://h26-2j2.github.io/Paquette_Cedryck_TravailPratique/",
        genre: ["Jeunesse", "Logique", "Animaux"],
        description: "Billy & Mini est un jeu éducatif de logique qui explore les thèmes de l'entraide et de l'amitié dans une ambiance ludique et amusante.",
        auteur: "Cedryck Paquette"
    },
    {
        arcadetitre: "Bloc et sable",
        mots: "calme blocs construction creativite manipulation blocetsable blocsable plage 3ans 4ans 5ans ciel nuages liberte relaxant cedric leclerc",
        image: "assets/images/vignettes/leclerc-cedric-vignette.png",
        lien: "https://h26-2j2.github.io/Leclerc_Cedric_TP/",
        genre: ["Bloc", "Créativité", "Relaxant"],
        description: "Un jeu calme portant sur des blocs de construction où la seule limite est la créativité. Le projet valorise la manipulation libre et le jeu relaxant.",
        auteur: "Cédric Leclerc"
    },
    {
        arcadetitre: "Boîtes à gogo",
        mots: "puzzle casse tete cassetete educatif logique livreur colis 3ans 4ans 5ans boitesagogo boiteagogo taille formes couleurs personne gens cadeaux logique tri leonie cantegrel",
        image: "assets/images/vignettes/leonie_vignette.png",
        lien: "https://h26-2j2.github.io/CantegrelLeonie_TravailPratique/",
        genre: ["Puzzle", "Éducatif", "Logique"],
        description: "Aidez le livreur à remettre des colis de taille, forme et couleur différentes à la bonne personne. Le projet met de l'avant la logique et le tri visuel.",
        auteur: "Léonie Cantegrel"
    },
    {
        arcadetitre: "Bobato",
        mots: "creativite bateaux colorier coloriage creatif couleurs aquatiques beaubateau bobateau mer 2ans 3ans 4ans 5ans ocean mer ciel nuages eau voilier navire philippe fauchon",
        image: "assets/images/vignettes/fauchon-philippe-vignette.png",
        lien: "https://h26-2j2.github.io/Fauchon_Philippe_TP1_V2/",
        genre: ["Créativité", "Bateau", "Coloriage"],
        description: "Bobato est un jeu 2D éducatif et créatif destiné aux enfants de 2 à 5 ans, où ils conçoivent et personnalisent leur propre bateau grâce à des interactions simples sur tablette et ordinateur. Le parcours se déroule en trois étapes: choisir la forme du bateau, le colorer librement, puis le voir prendre vie dans une animation sur l'eau.",
        auteur: "Philippe Fauchon"
    },
    {
        arcadetitre: "Bulle de jouet",
        mots: "precision math mathematiques magasin ville controle canon tirer bulles jouets bulledejouets pixels identiques 6ans 7ans 8ans eclater viser capturer resoudre equations mathematiques david hwang",
        image: "assets/images/vignettes/hwang_vignette.png",
        lien: "https://h26-2j2.github.io/Hwang_David_TravailPratique/",
        genre: ["Tir", "Précision", "Math"],
        description: "Contrôle un canon qui tourne sans arrêt et tire au bon moment des bulles contenant des jouets. Associe deux jouets identiques pour les faire éclater, vise les jouets à capturer, ou résous de simples équations en touchant la bonne réponse.",
        auteur: "David Hwang"
    },
    {
        arcadetitre: "Choisis ta route",
        mots: "voiture choix choisir compter comptage nombres chemin court choisistaroute 3ans 4ans 5ans route rapide decisions minh lee ho",
        image: "assets/images/vignettes/ho-minh-lee-vignette.png",
        lien: "https://h26-2j2.github.io/Tp1-volet-2/",
        genre: ["Voiture", "Choix", "Comptage"],
        description: "Choisis le chemin le plus court en cliquant sur la route qui contient le moins de carrés. Le jeu associe comptage rapide et prise de décision.",
        auteur: "Minh-lee Ho"
    },
    {
        arcadetitre: "ChromaC",
        mots: "couleurs exploration scientifiques sciences etudier melanges erlenmeyer 6ans 7ans 8ans flask laboratoire manipuler objets combinaisons veronika vong",
        image: "assets/images/vignettes/vong_vignette.png",
        lien: "https://h26-2j2.github.io/vv_TravailPratique/",
        genre: ["Couleur", "Exploration", "Scientifique"],
        description: "Un nouveau scientifique étudie comment les couleurs se mélangent. Dans son laboratoire, il manipule différents objets colorés pour apprendre les combinaisons et les effets visuels.",
        auteur: "Véronika Vong"
    },
    {
        arcadetitre: "Colorami",
        mots: "couleurs formes classement trier differentes differences animal animaux 2ans 3ans 4ans 5ans poissons fishes aquarium bacs aquatiques calme etienne minville",
        image: "assets/images/vignettes/etienne_vignette.png",
        lien: "https://h26-2j2.github.io/Minville_Etienne_Colorami/",
        genre: ["Éducatif", "Formes", "Classement"],
        description: "Colorami est un jeu éducatif destiné aux enfants de 2 à 5 ans. Le jeu consiste à trier différentes formes dans leurs bacs appropriés en cliquant et glissant à l'aide de la souris, dans une expérience calme et encourageante.",
        auteur: "Étienne Minville"
    },
    {
        arcadetitre: "Constructor",
        mots: "castor beaver aventures puzzle casse tete cassetete magie bateaux tactique monde fantaisie 6ans 7ans 8ans chemin destruction detruire passages aquatiques animaux animal univers fantastique karl anthony bastien bisson",
        image: "assets/images/vignettes/kbb_vignette.png",
        lien: "https://h26-2j2.github.io/kbb_tp1/",
        genre: ["Aventure", "Puzzle", "Tactique"],
        description: "Constructor: vous incarnez un castor qui traverse le monde, construit son chemin et détruit les structures sur son passage dans un univers fantastique.",
        auteur: "Karl-Anthony Bastien-Bisson"
    },
    {
        arcadetitre: "Coul-mot",
        mots: "correspondance correspondre matcher couleurs formes poissons aquatiques fishes coulmot 3ans 4ans 5ans coulemots herbe verte verdure familles ciel nuages attraper hamecon interactif animaux animal pecher canne couler imane mechali",
        image: "assets/images/vignettes/imane-mechali-vignette.png",
        lien: "https://h26-2j2.github.io/TP1_Volet3_Imane_Mechali/",
        genre: ["Correspondance", "Couleurs", "Interactif"],
        description: "Retournez les poissons à leur famille en attrapant la bonne couleur grâce à l'hameçon. Le projet combine correspondance, couleurs et interaction directe.",
        auteur: "Imane Mechali"
    },
    {
        arcadetitre: "Déjeuner parfait",
        mots: "memoire sante logique cuisine rapidite aliments petit attraper panier dejeunerparfait 6ans 7ans 8ans dejparfait table ronde mur assiettes points score malbouffe nathan chiasson",
        image: "assets/images/vignettes/chiasson_vignette.png",
        lien: "https://h26-2j2.github.io/Nathan_Chiasson_TravailPratique/",
        genre: ["Mémoire", "Santé", "Logique"],
        description: "Jeu éducatif mêlant mémoire et rapidité où le joueur associe des aliments du petit-déjeuner puis attrape avec un panier les aliments sains pour gagner des points, en évitant la malbouffe qui en fait perdre, afin de maximiser son score.",
        auteur: "Nathan Chiasson"
    },
    {
        arcadetitre: "Devinez l'animal",
        mots: "educatif memoire aventures retourner cartes paires animal animaux kirby identiques deviner 6ans 7ans 8ans devineranimal devinerlanimal similaires herbe verte verdure lapins lapines fragments placer silhouettes noires foret arbres singes ours sofia kaufman",
        image: "assets/images/vignettes/kaufman-sofia-vignette.png",
        lien: "https://h26-2j2.github.io/TP2-Kaufman-Sofia-Devinez-Animal/",
        genre: ["Éducatif", "Mémoire", "Aventure"],
        description: "Retournez les cartes pour retrouver les paires d'animaux identiques. Ensuite, recomposez le sprite de la lapine en cliquant sur ses fragments pour les placer correctement sur sa silhouette noire. Finalement, cliquez sur le singe.",
        auteur: "Sofia Kaufman"
    },
    {
        arcadetitre: "Electro",
        mots: "electriques electricite electrochoc logique ordre puzzle casse tete cassetete 6ans 7ans 8ans verdure aligner alignement composantes circuits volts voltage connexions jad razouani",
        image: "assets/images/vignettes/razouani-jad-vignette.png",
        lien: "https://h26-2j2.github.io/Razouani-Jad_TravailPratique/",
        genre: ["Électricité", "Logique", "Puzzle"],
        description: "Electro demande d'aligner des composantes électriques dans des circuits. Le défi met en avant la logique et la lecture de connexions simples.",
        auteur: "Jad Razouani"
    },
    {
        arcadetitre: "Ferrallibra",
        mots: "exploration animal animaux rpg rehabiliter rehabilitation habitats naturels 6ans 7ans 8ans feral libra pixels herbe verte verdure village hero foret arbres eau sauver pokemon shen dumas",
        image: "assets/images/vignettes/dumas-shen-vignette.png",
        lien: "https://h26-2j2.github.io/ShenDumas_Tp1/",
        genre: ["Exploration", "Animaux", "RPG"],
        description: "Ferrallibra est un jeu éducatif destiné à un public de 8 ans où le joueur retrouve des animaux et les réhabilite dans leur habitat naturel. Inspiré des codes du RPG classique, le projet marie exploration, animaux et aventure légère.",
        auteur: "Shen Dumas"
    },
    {
        arcadetitre: "Insectissime! La Collection.",
        mots: "insectes aventures interactivite souris clavier terre insectissimelacollection hungry caterpillar 6ans 7ans 8ans chenille fourmi coccinelles rouges jaunes compter chiffres nombres 1 42 labyrinthe interactif trous sucre brun globes verdure ciel nuages chemins debut fin connect 4 grille alexandre remy",
        image: "assets/images/vignettes/remy_vignette.png",
        lien: "https://ialexandrem.github.io/2J2-Insectissime-LaCollection/",
        genre: ["Insectes", "Aventure", "Interactif"],
        description: "Chenille apprend à compter. Fourmi va dans labyrinthe. Coccis Connect 4.",
        auteur: "Alexandre Rémy"
    },
    {
        arcadetitre: "La Chasse aux Pommes",
        mots: "decouverte couleurs motricite fruits arbres sortie famille verger lachasseauxpommes 2ans 3ans 4ans 5ans chasseauxpommes herbe verte verdure 2ans 3ans 4ans 5ans trouver cueillir laver nathaniel ouellet",
        image: "assets/images/vignettes/ouellet-nathaniel-vignette.png",
        lien: "https://h26-2j2.github.io/OuelletNathaniel-TravailPratique/",
        genre: ["Découverte", "Couleurs", "Motricité"],
        description: "La Chasse aux Pommes est un jeu éducatif destiné aux enfants de 2 à 5 ans qui simule une sortie en famille dans un verger. L'enfant doit trouver, cueillir et laver des pommes dans un cadre axé sur la découverte et la motricité.",
        auteur: "Nathaniel Ouellet"
    },
    {
        arcadetitre: "La saveur des fruits",
        mots: "nature detente observation logique 6 7 8 ans tournesols fleurs lasaveurdesfruits saveurdesfruits 6ans 7ans 8ans herbe verte verdure ciel nuages arbres tuiles pareilles identiques memoire jardins cindy phan",
        image: "assets/images/vignettes/phan-cindy-xuan-yen-vignette.png",
        lien: "https://h26-2j2.github.io/PHAN_CINDY_TravailPratique/",
        genre: ["Détente", "Observation", "Logique"],
        description: "La saveur des fruits est un jeu éducatif et de détente destiné à un public de 6 à 8 ans. L'expérience prend la forme d'une simulation légère axée sur les fruits, l'observation et la logique.",
        auteur: "Cindy Phan"
    },
    {
        arcadetitre: "Labyrinthe",
        mots: "labyrinthe puzzle casse tete cassetete tuyaux metal monstres cosmo ordre orientation perdu 6ans 7ans 8ans perdre retrouver amis cedryk bilodeau",
        image: "assets/images/vignettes/bilodeau-cedryk-vignette.png",
        lien: "https://h26-2j2.github.io/Bilodeau_Cedryk_TP1/",
        genre: ["Labyrinthe", "Puzzle", "Monstre"],
        description: "Ton ami Cosmo le monstre s'est perdu dans le labyrinthe. Parviendras-tu à compléter les épreuves du labyrinthe et à le retrouver?",
        auteur: "Cedryk Bilodeau"
    },
    {
        arcadetitre: "La tanière des taupes",
        mots: "reaction vite rapidite rapides taupes fruits animal animaux trous 6ans 7ans 8ans herbe verte verdure latanieredestaupes destaupes reflexes deguisements deguisees nature arbres ciel nuages ulrich brunel",
        image: "assets/images/vignettes/brunel_vignette.png",
        lien: "https://h26-2j2.github.io/ulrichbrunel-volet2/",
        genre: ["Rapidité", "Taupe", "Fruits"],
        description: "Réagis vite et attrape le bon fruit tout en évitant les mauvais ! Contrôle des taupes déguisées et teste tes réflexes dans ce jeu rapide et amusant.",
        auteur: "Ulrich Brunel"
    },
    {
        arcadetitre: "Le Chaudron de Merlin",
        mots: "mathematiques logique chaudrons marmites sorciers sorcieres fantaisie 6ans 7ans 8ans educatif potions lechaudrondemerlin chaudrondemerlin bulles ingredients merlin magie multiplier multiplication nombres nicolas gavriliouk",
        image: "assets/images/vignettes/nicholas_vignette.png",
        lien: "https://h26-2j2.github.io/Nicolas_Gavriliouk_h26-2j2_-Le_Chaudron_de_Merlin/",
        genre: ["Math", "Éducatif", "Logique"],
        description: "Retrouvez les ingrédients manquants du chaudron de Merlin et maîtrisez la magie des multiplications. Chaque ingrédient représente un nombre à combiner pour atteindre la valeur demandée.",
        auteur: "Nicolas Gavriliouk"
    },
    {
        arcadetitre: "Le Fort de Thomas",
        mots: "puzzle casse tete cassetete creativite formes 4 5 ans chambre jouets 4ans 5ans jouer couverture lefortdethomas lefort construire construction maisons amis outils jaider contreras",
        image: "assets/images/vignettes/contreras-jaider-vignette.png",
        lien: "https://h26-2j2.github.io/ContrerasJaider_LeFortDeThomas/",
        genre: ["Puzzle", "Créativité", "Formes"],
        description: "Jeu pour les enfants de 4 à 5 ans dans lequel Thomas doit construire la maison de ses amis en apprenant à reconnaître des outils de construction et des formes.",
        auteur: "Jaider Contreras"
    },
    {
        arcadetitre: "Le monstre affamé",
        mots: "monstre alien amusant faim hungry cuisine glouton nourrir educatif 3ans 4ans 5ans pixels nourriture manger lemonstreaffame monstreaffame monstreafaim monstrefaim heureux aliments herbe verte verdure malbouffe boucle nature maison arbres forte ciel nuages arthur vaccari pereira",
        image: "assets/images/vignettes/arthur_vignette.png",
        lien: "https://h26-2j2.github.io/Arthur_Vaccari_TP/",
        genre: ["Éducatif", "Monstre", "Amusant"],
        description: "Nourrissez le monstre pour le rendre heureux. Le jeu mise sur une boucle simple, amusante et très accessible.",
        auteur: "Arthur Vaccari Pereira"
    },
    {
        arcadetitre: "Le Repas de Ludo l'Alligator",
        mots: "assemblage reconnaissance cuisine sandwich ludo aligato crocodile servir aliments 3ans 4ans 5ans lerepasdeludoalligator repasalligator lerepasdeludolalligator ludoalligator ludolalligator assiettes faim hungry table fromage laitue jambon tomate pain nourrir nourriture mangeur heureux glouton andre armendariz jasso",
        image: "assets/images/vignettes/jasso-andre-vignette.png",
        lien: "https://h26-2j2.github.io/ARMENDARIZ-JASSO_ANDRE_TravailPratique/",
        genre: ["Assemblage", "Reconnaissance", "Cuisine"],
        description: "Prépare le sandwich de Ludo dans un jeu d'assemblage et de reconnaissance. Le projet combine cuisine éducative et séquences simples à compléter.",
        auteur: "André Armendariz-Jasso"
    },
    {
        arcadetitre: "Les aventures des petits curieux",
        mots: "memoire apprendre observer observation chambre ordre jouets observation montagnes 6ans 7ans 8ans ciel educatif lesaventuresdespetitscurieux despetitscurieux lespetitscurieux nuages montgolfiere compter nombres chiffres 6 7 8 ans rose hins",
        image: "assets/images/vignettes/hins_vignette.png",
        lien: "https://h26-2j2.github.io/hins_rose_TravailPratique/",
        genre: ["Éducatif", "Mémoire", "Apprendre"],
        description: "Le but du jeu est d'aider les enfants à développer leur mémoire, les aider à observer et à compter. C'est un jeu pour les 6-8 ans.",
        auteur: "Rose Hins"
    },
    {
        arcadetitre: "Les aventures de Dino",
        mots: "controler dinosaures plateformer exploration forets arbres pixels objets oeufs 6ans 7ans 8ans supermariobros mariobros prehistoriques lesaventuresdedino aventuredino aventuresdino sous terre rochers nid",
        image: "assets/images/vignettes/fernandez_vignette.png",
        lien: "https://h26-2j2.github.io/Nicolas-Fernandez_Leandre_Volet3_V2/",
        genre: ["Dinosaure", "Plateforme", "Exploration"],
        description: "Contrôle un dinosaure vert dans cette aventure 2D mêlant plateforme et manipulation d'objets : collecte des œufs, aide-le à avancer sous terre en déplaçant des rochers, puis dépose les œufs dans son nid.",
        auteur: "Léandre Nicolas Fernandez"
    },
    {
        arcadetitre: "Les Mathématiciens",
        mots: "mathematiques mathematiciens lesmathematiciens puzzle logique casse tete educatif cassetete 6ans 7ans 8ans operations maison nature herbe verte verdure arbres ciel nuages calculs resoudre rapidite reflexes vitesse angela feng",
        image: "assets/images/vignettes/feng-angela-vignette.png",
        lien: "https://h26-2j2.github.io/Feng_Angela_TravailPratique/",
        genre: ["Éducatif", "Puzzle", "Logique"],
        description: "Les Mathématiciens est un jeu éducatif destiné aux enfants de 6 à 8 ans. Le concept mise sur de mini opérations mathématiques à résoudre rapidement pour développer les réflexes et la vitesse de calcul.",
        auteur: "Angela Feng"
    },
    {
        arcadetitre: "L'océan des lettres",
        mots: "mer ocean couleurs interactif colorees 6ans 7ans 8ans ordre alphabetique oceandeslettres loceandeslettres reperage reperer observation poissons fishes pixels requins eau bleue plantes aquatiques marianne lemay",
        image: "assets/images/vignettes/marianne_vignette.png",
        lien: "https://h26-2j2.github.io/LEMAY_Marianne_TravailPratique/",
        genre: ["Coloré", "Interactif", "Alphabet"],
        description: "L'océan des lettres est un jeu éducatif destiné aux enfants de 6 à 8 ans dans lequel il faut placer des lettres données dans l'océan en ordre alphabétique. L'activité mise sur le repérage visuel et l'ordre aléatoire des lettres.",
        auteur: "Marianne Lemay"
    },
    {
        arcadetitre: "Math Shinobi",
        mots: "mathematiques logique calculs ninja pixel apprentissage aventures pixels equations mathshinobi mathninja additions angel gabriel medina almonte",
        image: "assets/images/vignettes/medina-almonte-angel-gabriel-vignette.png",
        lien: "https://h26-2j2.github.io/Medina-Almonte-Angel-Gabriel-tpVolet3/",
        genre: ["Math", "Logique", "Calcul"],
        description: "Math Shinobi transforme l'apprentissage du calcul en aventure interactive. En incarnant un ninja, les élèves répondent rapidement à des additions pour progresser dans le jeu.",
        auteur: "Angel Gabriel Medina Almonte"
    },
    {
        arcadetitre: "Mille marées",
        mots: "mer ocean bateaux couleurs poissons fishes animal animaux filets aquatiques 6ans 7ans 8ans ciel nuages pecher millemarees tactique concentration gestion eau aquarium theo gilbert",
        image: "assets/images/vignettes/gilbert_vignette.png",
        lien: "https://h26-2j2.github.io/Theo_Gilbert_Mille_Marees/",
        genre: ["Tactique", "Concentration", "Gestion"],
        description: "Vous devez attraper des poissons pour un aquarium.",
        auteur: "Théo Gilbert"
    },
    {
        arcadetitre: "Mission Drapeau",
        mots: "memoire cartes drapeaux geographie globe monde pays 6ans 7ans 8ans connaissances politique missiondrapeau camila tieimi shiozuka rezende",
        image: "assets/images/vignettes/shiozuka_vignette.png",
        lien: "https://h26-2j2.github.io/Shiozuka_Rezende_Camila_Tieimi_TP1_Remise2/",
        genre: ["Mémoire", "Drapeaux", "Géographie"],
        description: "Un jeu de mémoire portant sur quelques drapeaux du monde. Ce jeu est destiné aux enfants (6-8 ans) afin de les aider à apprendre les pays et reconnaître différents drapeaux",
        auteur: "Camila Tieimi Shiozuka Rezende"
    },
    {
        arcadetitre: "Mon Petit Miaou",
        mots: "chats chattes chatons felins lait animal animaux fleurs pelote laine 2ans 3ans 4ans 5ans simulation petitmiaou meow monpetitmiaou exploration nature maison ludique nourrir manger soin compagnie domestiquer melyse larissa malo",
        image: "assets/images/vignettes/malo-melyse-vignette.png",
        lien: "https://h26-2j2.github.io/MelyseMalo_TravailPratique/",
        genre: ["Simulation", "Exploration", "Ludique"],
        description: "Ludique tout en restant éducatif, Mon Petit Miaou offre la possibilité aux tout-petits d'apprendre à prendre soin d'un animal de compagnie à travers différentes actions.",
        auteur: "Mélyse Larissa Malo"
    },
    {
        arcadetitre: "Nettoyer sa chambre",
        mots: "menage nettoie souris motricite parents ramasser autos 3ans 4ans 5ans voitures rouges boites jouets nettoyezsachambre nettoyersachambre sachambre lachambre machambre pieces salles maison reperage quotidien marc alexandre di marco francois",
        image: "assets/images/vignettes/dimarco-francois-marc-alexandre-vignette.png",
        lien: "https://h26-2j2.github.io/DiMarcoFrancois_Marc-Alexandre_TravailPratique/",
        genre: ["Souris", "Ménage", "Motricité"],
        description: "Aide tes parents à ramasser les jouets dans la chambre. Le projet travaille le repérage visuel et la motricité fine dans un décor du quotidien.",
        auteur: "Marc-Alexandre Di Marco François"
    },
    {
        arcadetitre: "Plomblime",
        mots: "slimes logique puzzle casse tete interactif cassetete pixels 6ans 7ans 8ans plombslime tuyaux chemin tomber boites mur couleurs identiques similaires association matheo sousa",
        image: "assets/images/vignettes/sousa_vignette.png",
        lien: "https://h26-2j2.github.io/MatheoSousa_volet2/",
        genre: ["Interactif", "Logique", "Puzzle"],
        description: "Placez les tuyaux afin de créer un chemin pour le slime. Attrapez les slimes qui tombent à l'aide des tuyaux. Placez les slimes dans la boîte avec la même couleur.",
        auteur: "Matheo Sousa"
    },
    {
        arcadetitre: "PixelMath",
        mots: "mathematiques pixelmathematiques rapidite defi equations pixelsmath 6ans 7ans 8ans calculs temps limite rhythme ciel nuages herbe verte verdure pixels precision pression adriano blaise",
        image: "assets/images/vignettes/blaise_vignette.png",
        lien: "https://h26-2j2.github.io/Bilodeau_Cedryk_TP1/",
        genre: ["Math", "Rapidité", "Défi"],
        description: "PixelMath est un jeu éducatif dans lequel le joueur doit répondre à plusieurs problèmes mathématiques en temps limité. Le rythme mise sur la précision sous pression.",
        auteur: "Adriano Blaise"
    },
    {
        arcadetitre: "Quipro-Quoi?",
        mots: "monstres alien loupe observation logique questions environnement quiproquoquoi 6ans 7ans 8ans poissons aquatiques ocean fishes mer herbe verte verdure 6 7 8 ans reperage reperer elements identiques similaires differents differences nature planetes cometes fusees espace objets brandon ducheine",
        image: "assets/images/vignettes/ducheine-brandon-vignette.png",
        lien: "https://h26-2j2.github.io/Quipro-Quoi-/",
        genre: ["Observation", "Logique", "Environnement"],
        description: "Quipro-Quoi? est un jeu éducatif destiné aux 6 à 8 ans dans lequel le joueur doit repérer les éléments qui ne correspondent pas au thème de l'environnement présenté.",
        auteur: "Brandon Ducheine"
    },
    {
        arcadetitre: "Ramassez les tous",
        mots: "ramassage dechets environnement bac recylage recycler superhero heros marvel 6ans 7ans 8ans ramasser ramasserlestous ramassezlestous toutes costume vert man parc trier poubelle compost proprete elie kozaily",
        image: "assets/images/vignettes/kozaily_vignette.png",
        lien: "https://h26-2j2.github.io/KozailyElie_TravailPrartique/",
        genre: ["Déchets", "Tri", "Environnement"],
        description: "Contrôlez un bac puis un super-héro du recyclage en costume vert. Ramassez uniquement les déchets recyclables dans le parc, puis triez-les : poubelle, recyclage ou compost. Gardez le parc propre et maîtrisez le tri !",
        auteur: "Elie Kozaily"
    },
    {
        arcadetitre: "Raton tout propre",
        mots: "chercher trouver animal animaux menage pixels ratons laveurs jus banane pomme poubelle 3ans 4ans 5ans ratontoutpropre ratonpropre tri proprete aider amis dechets ville rechercher attention observation izak laberge",
        image: "assets/images/vignettes/laberge_vignette.png",
        lien: "https://izak-laberge.github.io/volet-2-Laberge-Izak/",
        genre: ["Observation", "Tri", "Déchets"],
        description: "Aidez votre ami raton à trouver les déchets dans la ville. Le jeu repose sur la recherche visuelle et l'attention soutenue.",
        auteur: "Izak Laberge"
    },
    {
        arcadetitre: "Triple échelon",
        mots: "trois logique formes geometriques carres cercles triangles geometrie placer triplechelons 6ans 7ans 8ans troisechelons bon endroit association modele reflexes rapidite temps zach landry",
        image: "assets/images/vignettes/landry_vignette.png",
        lien: "https://h26-2j2.github.io/Landry_Zack_Volet2/",
        genre: ["Logique", "Formes", "Géométrie"],
        description: "Place les formes géométriques au bon endroit. Reproduis le modèle de formes empilées à partir des tiennes. Associe par réflexe la bonne forme au bon endroit rapidement.",
        auteur: "Zach Landry"
    },
    {
        arcadetitre: "Trouve l'animal",
        mots: "animaux chiens chats domestiques felins canins educatif interactif interactions 3ans 4ans 5ans trouvelanimal trouverlanimal trouveranimal chercher decouverte maison herbe verte verdure ciel nuages arbres reconnaissance association observation jamila vargas",
        image: "assets/images/vignettes/vargas-jamila-vignette.png",
        lien: "https://h26-2j2.github.io/Vargas_jamila-TP-Trouve-l-animaux/",
        genre: ["Éducatif", "Interactif", "Animal"],
        description: "Jeu de découverte et éducatif centré sur les animaux de la maison. L'expérience privilégie l'interaction directe et la reconnaissance visuelle.",
        auteur: "Jamila Vargas"
    },
    {
        arcadetitre: "Trouve l'animal !",
        mots: "chercher trouver observation reflexion educatif reflechir reconnaissance pixels 3ans 4ans 5ans silhouettes trouvelanimal trouverlanimal trouveranimal placer puzzle casse tete cassetete cartes animaux ferme farm grange silo fermier nature herbe verte verdure ciel nuages attention caleb celestin",
        image: "assets/images/vignettes/celestin-caleb-vignette.png",
        lien: "https://h26-2j2.github.io/Celestin_Caleb_TpFinal/",
        genre: ["Réflexion", "Éducatif", "Puzzle"],
        description: "Trouve l'animal ! est un jeu interactif avec des cartes d'animaux sur lesquelles il faut cliquer lorsque la voix annonce l'animal demandé.",
        auteur: "Caleb Celestin"
    }
];
