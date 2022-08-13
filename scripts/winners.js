const winners = [
    {
        year: "2022",
        constructors: "Toyota",
        name: "Toyota GR010 Hybrid",
        drivers: "Sebastien Buemi<br>Brendon Hartley<br>Ryo Hirakawa",
        img_src: "/assets/cars/toyotagr010.png",
        con_src: "/assets/logos/toyota.png"
    },

    {
        year: "2021",
        constructors: "Toyota",
        name: "Toyota GR010 Hybrid",
        drivers: "Mike Conway<br>José Maria Lopez<br>Kamui Kobayashi",
        img_src: "/assets/cars/toyotagr010.png",
        con_src: "/assets/logos/toyota.png"
    },

    {
        year:"2020",
        constructors: "Toyota",
        name: "Toyota TS050 Hybrid",
        drivers: "Sebastien Buemi<br>Brendon Hartley<br>Kazuki Nakajima",
        img_src: "/assets/cars/toyota ts050.png",
        con_src: "/assets/logos/toyota.png"
    },

    {
        year:"2019",
        constructors: "Toyota",
        name: "Toyota TS050 Hybrid",
        drivers: "Sebastien Buemi<br>Fernando Alonso<br>Kazuki Nakajima",
        img_src: "/assets/cars/toyota ts050.png",
        con_src: "/assets/logos/toyota.png"
    },

    {
        year:"2018",
        constructors: "Toyota",
        name: "Toyota TS050 Hybrid",
        drivers: "Sebastien Buemi<br>Fernando Alonso<br>Kazuki Nakajima",
        img_src: "/assets/cars/toyota ts050.png",
        con_src: "/assets/logos/toyota.png"
    },

    {
        year:"2017",
        constructors: "Porsche",
        name: "Porsche 919 Hybrid",
        drivers: "Timo Berhard<br>Earl Bamber<br>Brendon Hartley",
        img_src: "/assets/cars/porsche919.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"2016",
        constructors: "Porsche",
        name: "Porsche 919 Hybrid",
        drivers: "Marc Lieb<br>Neel Jani<br>Romain Dumas",
        img_src: "/assets/cars/porsche919.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"2015",
        constructors: "Porsche",
        name: "Porsche 919 Hybrid",
        drivers: "Nico Hülkenberg<br>Earl Bamber<br>Nick Tandy",
        img_src: "/assets/cars/porsche919.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"2014",
        constructors: "Audi",
        name: "Audi R18 e-tron quattro",
        drivers: "Marcel Fässler<br>André Lotterer<br>Benoît Tréluyer",
        img_src: "/assets/cars/audir18.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2013",
        constructors: "Audi",
        name: "Audi R18 e-tron quattro",
        drivers: "Tom Kristensen<br>Allan McNish<br>Loïc Duval",
        img_src: "/assets/cars/audir18.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2012",
        constructors: "Audi",
        name: "Audi R18 e-tron quattro",
        drivers: "Marcel Fässler<br>André Lotterer<br>Benoît Tréluyer",
        img_src: "/assets/cars/audir18.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2011",
        constructors: "Audi",
        name: "Audi R18 TDi",
        drivers: "Marcel Fässler<br>André Lotterer<br>Benoît Tréluyer",
        img_src: "/assets/cars/audir18tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2010",
        constructors: "Audi",
        name: "Audi R15 TDI plus",
        drivers: "Mike Rockenfeller<br>Timo Bernhard<br>Romain Dumas",
        img_src: "/assets/cars/audir15.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2009",
        constructors: "Peugeot",
        name: "Peugeot 908 HDi FAP",
        drivers: "David Brabham<br>Marc Gené<br>Alexander Wurz",
        img_src: "/assets/cars/peugeot.png",
        con_src: "/assets/logos/peugeot.png"
    },

    {
        year:"2008",
        constructors: "Audi",
        name: "Audi R10 TDI",
        drivers: "Tom Kristensen<br>Allan McNish<br>Rinaldo Capello",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2007",
        constructors: "Audi",
        name: "Audi R10 TDI",
        drivers: "Frank Biela<br>Emanuele Pirro<br>Marco Werner",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2006",
        constructors: "Audi",
        name: "Audi R10 TDI",
        drivers: "Frank Biela<br>Emanuele Pirro<br>Marco Werner",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2005",
        constructors: "Audi",
        name: "Audi R8",
        drivers: "JJ Lehto<br>Marco Werner<br>Tom Kristensen",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2004",
        constructors: "Audi",
        name: "Audi R8",
        drivers: "Seiji Ara<br>Tom Kristensen<br>Rinaldo Capello",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2003",
        constructors: "Bentley",
        name: "Bentley Speed 8",
        drivers: "Guy Smith<br>Tom Kristensen<br>Rinaldo Capello",
        img_src: "/assets/cars/bentleyspeed8.png",
        con_src: "/assets/logos/bentley.png"
    },

    {
        year:"2002",
        constructors: "Audi",
        name: "Audi R8",
        drivers: "Frank Biela<br>Tom Kristensen<br>Emanuele Pirro",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2001",
        constructors: "Audi",
        name: "Audi R8",
        drivers: "Frank Biela<br>Tom Kristensen<br>Emanuele Pirro",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"2000",
        constructors: "Audi",
        name: "Audi R8",
        drivers: "Frank Biela<br>Tom Kristensen<br>Emanuele Pirro",
        img_src: "/assets/cars/audir10tdi.png",
        con_src: "/assets/logos/audi.png"
    },

    {
        year:"1999",
        constructors: "BMW",
        name: "BMW V12 LMR",
        drivers: "Pierluigi Martini<br>Yannick Dalmas<br>Joachim Winkelhock",
        img_src: "/assets/cars/bmw15.png",
        con_src: "/assets/logos/bmw.png"
    },

    {
        year:"1998",
        constructors: "Porsche",
        name: "Porsche 911 GT1-98",
        drivers: "Laurent Aïello<br>Allan McNish<br>Stéphane Ortelli",
        img_src: "/assets/cars/porsche911gt3.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1997",
        constructors: "Porsche",
        name: "TWR Porsche WSC-95",
        drivers: "Michele Alboreto<br>Stefan Johansson<br>Tom Kristensen"
    },

    {
        year:"1996",
        constructors: "Porsche",
        name: "TWR Porsche WSC-95",
        drivers: "Manuel Reuter<br>Davy Jones<br>Alexander Wurz"
    },

    {
        year:"1995",
        constructors: "McLaren",
        name: "McLaren F1 GTR",
        drivers: "Yannick Dalmas<br>JJ Lehto<br>Masanori Sekiya",
        img_src: "/assets/cars/mclarenf1gtr.png",
        con_src: "/assets/logos/Mclaren.png"
    },

    {
        year:"1994",
        constructors: "Porsche",
        name: "Dauer 962 Le Mans",
        drivers: "Yannick Dalmas<br>Hurley Haywood<br>Mauro Baldi",
        img_src: "/assets/cars/porsche962.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1993",
        constructors: "Peugeot",
        name: "Peugeot 905 Evo 1B",
        drivers: "Geoff Brabham<br>Christophe Bouchut<br>Eric Hélary",
        img_src: "/assets/cars/peugeot905evo.png",
        con_src: "/assets/logos/peugeot.png"
    },

    {
        year:"1992",
        constructors: "Peugeot",
        name: "Peugeot 905 Evo 1B",
        drivers: "Derek Warwick<br>Yannick Dalmas<br>Mark Blundell",
        img_src: "/assets/cars/peugeot905evo.png",
        con_src: "/assets/logos/peugeot.png"
    },

    {
        year:"1991",
        constructors: "Mazda",
        name: "Mazda 787B",
        drivers: "Volker Weidler<br>Johnny Herbert<br>Bertrand Gachot",
        img_src: "/assets/cars/mazda 787b.png",
        con_src: "/assets/logos/mazda.png"
    },

    {
        year:"1990",
        constructors: "Jaguar",
        name: "Jaguar XJR-12",
        drivers: "John Nielsen<br>Price Cobb<br>Martin Brundle",
        img_src: "/assets/cars/jaguar xjr.png",
        con_src: "/assets/logos/jaguar.png"
    },

    {
        year:"1989",
        constructors: "Mercedes",
        name: "Sauber C9-Mercedes-Benz",
        drivers: "Jochen Mass<br>Manuel Reuter<br>Stanley Dickens",
        img_src: "/assets/cars/mercedessauberc9.png",
        con_src: "/assets/logos/mercedes.png"
    },

    {
        year:"1988",
        constructors: "Jaguar",
        name: "Jaguar XJR-9LM",
        drivers: "Jan Lammers<br>Johnny Dumfries<br>Andy Wallace",
        img_src: "/assets/cars/jaguar xjr.png",
        con_src: "/assets/logos/jaguar.png"
    },

    {
        year:"1987",
        constructors: "Porsche",
        name: "Porsche 962C",
        drivers: "Derek Bell<br>Hans-Joachim Stuck<br>Al Holbert",
        img_src: "/assets/cars/porsche962.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1986",
        constructors: "Porsche",
        name: "Porsche 962C",
        drivers: "Derek Bell<br>Hans-Joachim Stuck<br>Al Holbert",
        img_src: "/assets/cars/porsche962.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1985",
        constructors: "Porsche",
        name: "Porsche 956",
        drivers: "Klaus Ludwig<br>Paolo Barilla<br>John Winter",
        img_src: "/assets/cars/porsche956.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1984",
        constructors: "Porsche",
        name: "Porsche 956",
        drivers: "Klaus Ludwig<br>Henri Pescarolo",
        img_src: "/assets/cars/porsche956.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1983",
        constructors: "Porsche",
        name: "Porsche 956",
        drivers: "Vern Schuppan<br>Al Holbert<br>Hurley Haywood",
        img_src: "/assets/cars/porsche956.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1982",
        constructors: "Porsche",
        name: "Porsche 956",
        drivers: "Jacky Ickx<br>Derek Bell",
        img_src: "/assets/cars/porsche956.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1981",
        constructors: "Porsche",
        name: "Porsche 936",
        drivers: "Jacky Ickx<br>Derek Bell",
        img_src: "/assets/cars/porsche936.png",
        con_src: "/assets/logos/porsche.png"
    },

    {
        year:"1980",
        constructors: "FORD",
        name: "Rondeau M379B-Ford Cosworth",
        drivers: "Jean Rondeau<br>Jean-Pierre Jaussaud",
        img_src: "/assets/cars/ford-cowoth.png",
        con_src: "/assets/logos/ford.png"
    },
];

function GetWinners(){
    return winners
}

export{GetWinners, winners}