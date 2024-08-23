const cardRandom = document.getElementById('card-random')
const cards = document.getElementById('cards')
const search = document.querySelector(".search")
const light = document.querySelector(".light > svg")
const ay = document.querySelector(".light > #ay")
const body = document.querySelector("body")
const header = document.querySelector('header')
const btn = document.querySelector('.show-more')


let data = [{
        "area": 3903,
        "id": "SGS",
        "capital": "King Edward Point",
        "flag": "https://flagcdn.com/gs.svg",
        "name": "South Georgia",
        "region": "Antarctic",
        "population": 30
    },
    {
        "area": 344,
        "id": "GRD",
        "capital": "St. George's",
        "flag": "https://flagcdn.com/gd.svg",
        "name": "Grenada",
        "region": "Americas",
        "population": 112519
    },
    {
        "area": 41284,
        "id": "CHE",
        "capital": "Bern",
        "flag": "https://flagcdn.com/ch.svg",
        "name": "Switzerland",
        "region": "Europe",
        "population": 8654622
    },
    {
        "area": 71740,
        "id": "SLE",
        "capital": "Freetown",
        "flag": "https://flagcdn.com/sl.svg",
        "name": "Sierra Leone",
        "region": "Africa",
        "population": 7976985
    },
    {
        "area": 93028,
        "id": "HUN",
        "capital": "Budapest",
        "flag": "https://flagcdn.com/hu.svg",
        "name": "Hungary",
        "region": "Europe",
        "population": 9749763
    },
    {
        "area": 36193,
        "id": "TWN",
        "capital": "Taipei",
        "flag": "https://flagcdn.com/tw.svg",
        "name": "Taiwan",
        "region": "Asia",
        "population": 23503349
    },
    {
        "area": 142,
        "id": "WLF",
        "capital": "Mata-Utu",
        "flag": "https://flagcdn.com/wf.svg",
        "name": "Wallis and Futuna",
        "region": "Oceania",
        "population": 11750
    },
    {
        "area": 430,
        "id": "BRB",
        "capital": "Bridgetown",
        "flag": "https://flagcdn.com/bb.svg",
        "name": "Barbados",
        "region": "Americas",
        "population": 287371
    },
    {
        "area": 47,
        "id": "PCN",
        "capital": "Adamstown",
        "flag": "https://flagcdn.com/pn.svg",
        "name": "Pitcairn Islands",
        "region": "Oceania",
        "population": 56
    },
    {
        "area": 322463,
        "id": "CIV",
        "capital": "Yamoussoukro",
        "flag": "https://flagcdn.com/ci.svg",
        "name": "Ivory Coast",
        "region": "Africa",
        "population": 26378275
    },
    {
        "area": 163610,
        "id": "TUN",
        "capital": "Tunis",
        "flag": "https://flagcdn.com/tn.svg",
        "name": "Tunisia",
        "region": "Africa",
        "population": 11818618
    },
    {
        "area": 301336,
        "id": "ITA",
        "capital": "Rome",
        "flag": "https://flagcdn.com/it.svg",
        "name": "Italy",
        "region": "Europe",
        "population": 59554023
    },
    {
        "area": 112622,
        "id": "BEN",
        "capital": "Porto-Novo",
        "flag": "https://flagcdn.com/bj.svg",
        "name": "Benin",
        "region": "Africa",
        "population": 12123198
    },
    {
        "area": 1904569,
        "id": "IDN",
        "capital": "Jakarta",
        "flag": "https://flagcdn.com/id.svg",
        "name": "Indonesia",
        "region": "Asia",
        "population": 273523621
    },
    {
        "area": 4033,
        "id": "CPV",
        "capital": "Praia",
        "flag": "https://flagcdn.com/cv.svg",
        "name": "Cape Verde",
        "region": "Africa",
        "population": 555988
    },
    {
        "area": 261,
        "id": "KNA",
        "capital": "Basseterre",
        "flag": "https://flagcdn.com/kn.svg",
        "name": "Saint Kitts and Nevis",
        "region": "Americas",
        "population": 53192
    },
    {
        "area": 236800,
        "id": "LAO",
        "capital": "Vientiane",
        "flag": "https://flagcdn.com/la.svg",
        "name": "Laos",
        "region": "Asia",
        "population": 7275556
    },
    {
        "area": 328,
        "id": "BES",
        "capital": "Kralendijk",
        "flag": "https://flagcdn.com/bq.svg",
        "name": "Caribbean Netherlands",
        "region": "Americas",
        "population": 25987
    },
    {
        "area": 241550,
        "id": "UGA",
        "capital": "Kampala",
        "flag": "https://flagcdn.com/ug.svg",
        "name": "Uganda",
        "region": "Africa",
        "population": 45741000
    },
    {
        "area": 468,
        "id": "AND",
        "capital": "Andorra la Vella",
        "flag": "https://flagcdn.com/ad.svg",
        "name": "Andorra",
        "region": "Europe",
        "population": 77265
    },
    {
        "area": 27834,
        "id": "BDI",
        "capital": "Gitega",
        "flag": "https://flagcdn.com/bi.svg",
        "name": "Burundi",
        "region": "Africa",
        "population": 11890781
    },
    {
        "area": 1221037,
        "id": "ZAF",
        "capital": "Pretoria",
        "flag": "https://flagcdn.com/za.svg",
        "name": "South Africa",
        "region": "Africa",
        "population": 59308690
    },
    {
        "area": 551695,
        "id": "FRA",
        "capital": "Paris",
        "flag": "https://flagcdn.com/fr.svg",
        "name": "France",
        "region": "Europe",
        "population": 67391582
    },
    {
        "area": 1759540,
        "id": "LBY",
        "capital": "Tripoli",
        "flag": "https://flagcdn.com/ly.svg",
        "name": "Libya",
        "region": "Africa",
        "population": 6871287
    },
    {
        "area": 1964375,
        "id": "MEX",
        "capital": "Mexico City",
        "flag": "https://flagcdn.com/mx.svg",
        "name": "Mexico",
        "region": "Americas",
        "population": 128932753
    },
    {
        "area": 267668,
        "id": "GAB",
        "capital": "Libreville",
        "flag": "https://flagcdn.com/ga.svg",
        "name": "Gabon",
        "region": "Africa",
        "population": 2225728
    },
    {
        "area": 464,
        "id": "MNP",
        "capital": "Saipan",
        "flag": "https://flagcdn.com/mp.svg",
        "name": "Northern Mariana Islands",
        "region": "Oceania",
        "population": 57557
    },
    {
        "area": 25713,
        "id": "MKD",
        "capital": "Skopje",
        "flag": "https://flagcdn.com/mk.svg",
        "name": "North Macedonia",
        "region": "Europe",
        "population": 2077132
    },
    {
        "area": 9706961,
        "id": "CHN",
        "capital": "Beijing",
        "flag": "https://flagcdn.com/cn.svg",
        "name": "China",
        "region": "Asia",
        "population": 1402112000
    },
    {
        "area": 527968,
        "id": "YEM",
        "capital": "Sana'a",
        "flag": "https://flagcdn.com/ye.svg",
        "name": "Yemen",
        "region": "Asia",
        "population": 29825968
    },
    {
        "area": 21,
        "id": "BLM",
        "capital": "Gustavia",
        "flag": "https://flagcdn.com/bl.svg",
        "name": "Saint Barthélemy",
        "region": "Americas",
        "population": 4255
    },
    {
        "area": 78,
        "id": "GGY",
        "capital": "St. Peter Port",
        "flag": "https://flagcdn.com/gg.svg",
        "name": "Guernsey",
        "region": "Europe",
        "population": 62999
    },
    {
        "area": 28896,
        "id": "SLB",
        "capital": "Honiara",
        "flag": "https://flagcdn.com/sb.svg",
        "name": "Solomon Islands",
        "region": "Oceania",
        "population": 686878
    },
    {
        "area": 61399,
        "id": "SJM",
        "capital": "Longyearbyen",
        "flag": "https://flagcdn.com/sj.svg",
        "name": "Svalbard and Jan Mayen",
        "region": "Europe",
        "population": 2562
    },
    {
        "area": 1393,
        "id": "FRO",
        "capital": "Tórshavn",
        "flag": "https://flagcdn.com/fo.svg",
        "name": "Faroe Islands",
        "region": "Europe",
        "population": 48865
    },
    {
        "area": 447400,
        "id": "UZB",
        "capital": "Tashkent",
        "flag": "https://flagcdn.com/uz.svg",
        "name": "Uzbekistan",
        "region": "Asia",
        "population": 34232050
    },
    {
        "area": 1002450,
        "id": "EGY",
        "capital": "Cairo",
        "flag": "https://flagcdn.com/eg.svg",
        "name": "Egypt",
        "region": "Africa",
        "population": 102334403
    },
    {
        "area": 196722,
        "id": "SEN",
        "capital": "Dakar",
        "flag": "https://flagcdn.com/sn.svg",
        "name": "Senegal",
        "region": "Africa",
        "population": 16743930
    },
    {
        "area": 65610,
        "id": "LKA",
        "capital": "Sri Jayawardenepura Kotte",
        "flag": "https://flagcdn.com/lk.svg",
        "name": "Sri Lanka",
        "region": "Asia",
        "population": 21919000
    },
    {
        "area": 6220,
        "id": "PSE",
        "capital": "Ramallah",
        "flag": "https://flagcdn.com/ps.svg",
        "name": "Palestine",
        "region": "Asia",
        "population": 4803269
    },
    {
        "area": 147570,
        "id": "BGD",
        "capital": "Dhaka",
        "flag": "https://flagcdn.com/bd.svg",
        "name": "Bangladesh",
        "region": "Asia",
        "population": 164689383
    },
    {
        "area": 1285216,
        "id": "PER",
        "capital": "Lima",
        "flag": "https://flagcdn.com/pe.svg",
        "name": "Peru",
        "region": "Americas",
        "population": 32971846
    },
    {
        "area": 710,
        "id": "SGP",
        "capital": "Singapore",
        "flag": "https://flagcdn.com/sg.svg",
        "name": "Singapore",
        "region": "Asia",
        "population": 5685807
    },
    {
        "area": 783562,
        "id": "TUR",
        "capital": "Ankara",
        "flag": "https://flagcdn.com/tr.svg",
        "name": "Turkey",
        "region": "Asia",
        "population": 84339067
    },
    {
        "area": 652230,
        "id": "AFG",
        "capital": "Kabul",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "name": "Afghanistan",
        "region": "Asia",
        "population": 40218234
    },
    {
        "area": 180,
        "id": "ABW",
        "capital": "Oranjestad",
        "flag": "https://flagcdn.com/aw.svg",
        "name": "Aruba",
        "region": "Americas",
        "population": 106766
    },
    {
        "area": 236,
        "id": "COK",
        "capital": "Avarua",
        "flag": "https://flagcdn.com/ck.svg",
        "name": "Cook Islands",
        "region": "Oceania",
        "population": 18100
    },
    {
        "area": 242900,
        "id": "GBR",
        "capital": "London",
        "flag": "https://flagcdn.com/gb.svg",
        "name": "United Kingdom",
        "region": "Europe",
        "population": 67215293
    },
    {
        "area": 752612,
        "id": "ZMB",
        "capital": "Lusaka",
        "flag": "https://flagcdn.com/zm.svg",
        "name": "Zambia",
        "region": "Africa",
        "population": 18383956
    },
    {
        "area": 338424,
        "id": "FIN",
        "capital": "Helsinki",
        "flag": "https://flagcdn.com/fi.svg",
        "name": "Finland",
        "region": "Europe",
        "population": 5530719
    },
    {
        "area": 1267000,
        "id": "NER",
        "capital": "Niamey",
        "flag": "https://flagcdn.com/ne.svg",
        "name": "Niger",
        "region": "Africa",
        "population": 24206636
    },
    {
        "area": 135,
        "id": "CXR",
        "capital": "Flying Fish Cove",
        "flag": "https://flagcdn.com/cx.svg",
        "name": "Christmas Island",
        "region": "Oceania",
        "population": 2072
    },
    {
        "area": 12,
        "id": "TKL",
        "capital": "Fakaofo",
        "flag": "https://flagcdn.com/tk.svg",
        "name": "Tokelau",
        "region": "Oceania",
        "population": 1411
    },
    {
        "area": 36125,
        "id": "GNB",
        "capital": "Bissau",
        "flag": "https://flagcdn.com/gw.svg",
        "name": "Guinea-Bissau",
        "region": "Africa",
        "population": 1967998
    },
    {
        "area": 86600,
        "id": "AZE",
        "capital": "Baku",
        "flag": "https://flagcdn.com/az.svg",
        "name": "Azerbaijan",
        "region": "Asia",
        "population": 10110116
    },
    {
        "area": 2511,
        "id": "REU",
        "capital": "Saint-Denis",
        "flag": "https://flagcdn.com/re.svg",
        "name": "Réunion",
        "region": "Africa",
        "population": 840974
    },
    {
        "area": 23200,
        "id": "DJI",
        "capital": "Djibouti",
        "flag": "https://flagcdn.com/dj.svg",
        "name": "Djibouti",
        "region": "Africa",
        "population": 988002
    },
    {
        "area": 120538,
        "id": "PRK",
        "capital": "Pyongyang",
        "flag": "https://flagcdn.com/kp.svg",
        "name": "North Korea",
        "region": "Asia",
        "population": 25778815
    },
    {
        "area": 2040,
        "id": "MUS",
        "capital": "Port Louis",
        "flag": "https://flagcdn.com/mu.svg",
        "name": "Mauritius",
        "region": "Africa",
        "population": 1265740
    },
    {
        "area": 102,
        "id": "MSR",
        "capital": "Plymouth",
        "flag": "https://flagcdn.com/ms.svg",
        "name": "Montserrat",
        "region": "Americas",
        "population": 4922
    },
    {
        "area": 347,
        "id": "VIR",
        "capital": "Charlotte Amalie",
        "flag": "https://flagcdn.com/vi.svg",
        "name": "United States Virgin Islands",
        "region": "Americas",
        "population": 106290
    },
    {
        "area": 1141748,
        "id": "COL",
        "capital": "Bogotá",
        "flag": "https://flagcdn.com/co.svg",
        "name": "Colombia",
        "region": "Americas",
        "population": 50882884
    },
    {
        "area": 131990,
        "id": "GRC",
        "capital": "Athens",
        "flag": "https://flagcdn.com/gr.svg",
        "name": "Greece",
        "region": "Europe",
        "population": 10715549
    },
    {
        "area": 56594,
        "id": "HRV",
        "capital": "Zagreb",
        "flag": "https://flagcdn.com/hr.svg",
        "name": "Croatia",
        "region": "Europe",
        "population": 4047200
    },
    {
        "area": 446550,
        "id": "MAR",
        "capital": "Rabat",
        "flag": "https://flagcdn.com/ma.svg",
        "name": "Morocco",
        "region": "Africa",
        "population": 36910558
    },
    {
        "area": 2381741,
        "id": "DZA",
        "capital": "Algiers",
        "flag": "https://flagcdn.com/dz.svg",
        "name": "Algeria",
        "region": "Africa",
        "population": 44700000
    },
    {
        "area": 14000000,
        "id": "ATA",
        "capital": "Yoxdur",
        "flag": "https://flagcdn.com/aq.svg",
        "name": "Antarctica",
        "region": "Antarctic",
        "population": 1000
    },
    {
        "area": 41850,
        "id": "NLD",
        "capital": "Amsterdam",
        "flag": "https://flagcdn.com/nl.svg",
        "name": "Netherlands",
        "region": "Europe",
        "population": 16655799
    },
    {
        "area": 1886068,
        "id": "SDN",
        "capital": "Khartoum",
        "flag": "https://flagcdn.com/sd.svg",
        "name": "Sudan",
        "region": "Africa",
        "population": 43849269
    },
    {
        "area": 18272,
        "id": "FJI",
        "capital": "Suva",
        "flag": "https://flagcdn.com/fj.svg",
        "name": "Fiji",
        "region": "Oceania",
        "population": 896444
    },
    {
        "area": 160,
        "id": "LIE",
        "capital": "Vaduz",
        "flag": "https://flagcdn.com/li.svg",
        "name": "Liechtenstein",
        "region": "Europe",
        "population": 38137
    },
    {
        "area": 147181,
        "id": "NPL",
        "capital": "Kathmandu",
        "flag": "https://flagcdn.com/np.svg",
        "name": "Nepal",
        "region": "Asia",
        "population": 29136808
    },
    {
        "area": 8870,
        "id": "PRI",
        "capital": "San Juan",
        "flag": "https://flagcdn.com/pr.svg",
        "name": "Puerto Rico",
        "region": "Americas",
        "population": 3194034
    },
    {
        "area": 69700,
        "id": "GEO",
        "capital": "Tbilisi",
        "flag": "https://flagcdn.com/ge.svg",
        "name": "Georgia",
        "region": "Asia",
        "population": 3714000
    },
    {
        "area": 881912,
        "id": "PAK",
        "capital": "Islamabad",
        "flag": "https://flagcdn.com/pk.svg",
        "name": "Pakistan",
        "region": "Asia",
        "population": 220892331
    },
    {
        "area": 2.02,
        "id": "MCO",
        "capital": "Monaco",
        "flag": "https://flagcdn.com/mc.svg",
        "name": "Monaco",
        "region": "Europe",
        "population": 39244
    },
    {
        "area": 582000,
        "id": "BWA",
        "capital": "Gaborone",
        "flag": "https://flagcdn.com/bw.svg",
        "name": "Botswana",
        "region": "Africa",
        "population": 2351625
    },
    {
        "area": 10452,
        "id": "LBN",
        "capital": "Beirut",
        "flag": "https://flagcdn.com/lb.svg",
        "name": "Lebanon",
        "region": "Asia",
        "population": 6825442
    },
    {
        "area": 462840,
        "id": "PNG",
        "capital": "Port Moresby",
        "flag": "https://flagcdn.com/pg.svg",
        "name": "Papua New Guinea",
        "region": "Oceania",
        "population": 8947027
    },
    {
        "area": 374,
        "id": "MYT",
        "capital": "Mamoudzou",
        "flag": "https://flagcdn.com/yt.svg",
        "name": "Mayotte",
        "region": "Africa",
        "population": 226915
    },
    {
        "area": 48671,
        "id": "DOM",
        "capital": "Santo Domingo",
        "flag": "https://flagcdn.com/do.svg",
        "name": "Dominican Republic",
        "region": "Americas",
        "population": 10847904
    },
    {
        "area": 36,
        "id": "NFK",
        "capital": "Kingston",
        "flag": "https://flagcdn.com/nf.svg",
        "name": "Norfolk Island",
        "region": "Oceania",
        "population": 2302
    },
    {
        "area": 49,
        "id": "BVT",
        "capital": "Yoxdur",
        "flag": "https://flagcdn.com/bv.svg",
        "name": "Bouvet Island",
        "region": "Antarctic",
        "population": 0
    },
    {
        "area": 11586,
        "id": "QAT",
        "capital": "Doha",
        "flag": "https://flagcdn.com/qa.svg",
        "name": "Qatar",
        "region": "Asia",
        "population": 2881060
    },
    {
        "area": 587041,
        "id": "MDG",
        "capital": "Antananarivo",
        "flag": "https://flagcdn.com/mg.svg",
        "name": "Madagascar",
        "region": "Africa",
        "population": 27691019
    },
    {
        "area": 3287590,
        "id": "IND",
        "capital": "New Delhi",
        "flag": "https://flagcdn.com/in.svg",
        "name": "India",
        "region": "Asia",
        "population": 1380004385
    },
    {
        "area": 185180,
        "id": "SYR",
        "capital": "Damascus",
        "flag": "https://flagcdn.com/sy.svg",
        "name": "Syria",
        "region": "Asia",
        "population": 17500657
    },
    {
        "area": 13812,
        "id": "MNE",
        "capital": "Podgorica",
        "flag": "https://flagcdn.com/me.svg",
        "name": "Montenegro",
        "region": "Europe",
        "population": 621718
    },
    {
        "area": 17364,
        "id": "SWZ",
        "capital": "Mbabane",
        "flag": "https://flagcdn.com/sz.svg",
        "name": "Eswatini",
        "region": "Africa",
        "population": 1160164
    },
    {
        "area": 406752,
        "id": "PRY",
        "capital": "Asunción",
        "flag": "https://flagcdn.com/py.svg",
        "name": "Paraguay",
        "region": "Americas",
        "population": 7132530
    },
    {
        "area": 21041,
        "id": "SLV",
        "capital": "San Salvador",
        "flag": "https://flagcdn.com/sv.svg",
        "name": "El Salvador",
        "region": "Americas",
        "population": 6486201
    },
    {
        "area": 603500,
        "id": "UKR",
        "capital": "Kyiv",
        "flag": "https://flagcdn.com/ua.svg",
        "name": "Ukraine",
        "region": "Europe",
        "population": 44134693
    },
    {
        "area": 572,
        "id": "IMN",
        "capital": "Douglas",
        "flag": "https://flagcdn.com/im.svg",
        "name": "Isle of Man",
        "region": "Europe",
        "population": 85032
    },
    {
        "area": 825615,
        "id": "NAM",
        "capital": "Windhoek",
        "flag": "https://flagcdn.com/na.svg",
        "name": "Namibia",
        "region": "Africa",
        "population": 2540916
    },
    {
        "area": 83600,
        "id": "ARE",
        "capital": "Abu Dhabi",
        "flag": "https://flagcdn.com/ae.svg",
        "name": "United Arab Emirates",
        "region": "Asia",
        "population": 9890400
    },
    {
        "area": 110879,
        "id": "BGR",
        "capital": "Sofia",
        "flag": "https://flagcdn.com/bg.svg",
        "name": "Bulgaria",
        "region": "Europe",
        "population": 6927288
    },
    {
        "area": 2166086,
        "id": "GRL",
        "capital": "Nuuk",
        "flag": "https://flagcdn.com/gl.svg",
        "name": "Greenland",
        "region": "Americas",
        "population": 56367
    },
    {
        "area": 357114,
        "id": "DEU",
        "capital": "Berlin",
        "flag": "https://flagcdn.com/de.svg",
        "name": "Germany",
        "region": "Europe",
        "population": 83240525
    },
    {
        "area": 181035,
        "id": "KHM",
        "capital": "Phnom Penh",
        "flag": "https://flagcdn.com/kh.svg",
        "name": "Cambodia",
        "region": "Asia",
        "population": 16718971
    },
    {
        "area": 438317,
        "id": "IRQ",
        "capital": "Baghdad",
        "flag": "https://flagcdn.com/iq.svg",
        "name": "Iraq",
        "region": "Asia",
        "population": 40222503
    },
    {
        "area": 7747,
        "id": "ATF",
        "capital": "Port-aux-Français",
        "flag": "https://flagcdn.com/tf.svg",
        "name": "French Southern and Antarctic Lands",
        "region": "Antarctic",
        "population": 400
    },
    {
        "area": 450295,
        "id": "SWE",
        "capital": "Stockholm",
        "flag": "https://flagcdn.com/se.svg",
        "name": "Sweden",
        "region": "Europe",
        "population": 10353442
    },
    {
        "area": 109884,
        "id": "CUB",
        "capital": "Havana",
        "flag": "https://flagcdn.com/cu.svg",
        "name": "Cuba",
        "region": "Americas",
        "population": 11326616
    },
    {
        "area": 199951,
        "id": "KGZ",
        "capital": "Bishkek",
        "flag": "https://flagcdn.com/kg.svg",
        "name": "Kyrgyzstan",
        "region": "Asia",
        "population": 6591600
    },
    {
        "area": 17098242,
        "id": "RUS",
        "capital": "Moscow",
        "flag": "https://flagcdn.com/ru.svg",
        "name": "Russia",
        "region": "Europe",
        "population": 144104080
    },
    {
        "area": 330803,
        "id": "MYS",
        "capital": "Kuala Lumpur",
        "flag": "https://flagcdn.com/my.svg",
        "name": "Malaysia",
        "region": "Asia",
        "population": 32365998
    },
    {
        "area": 964,
        "id": "STP",
        "capital": "São Tomé",
        "flag": "https://flagcdn.com/st.svg",
        "name": "São Tomé and Príncipe",
        "region": "Africa",
        "population": 219161
    },
    {
        "area": 9251,
        "id": "CYP",
        "capital": "Nicosia",
        "flag": "https://flagcdn.com/cy.svg",
        "name": "Cyprus",
        "region": "Europe",
        "population": 1207361
    },
    {
        "area": 9984670,
        "id": "CAN",
        "capital": "Ottawa",
        "flag": "https://flagcdn.com/ca.svg",
        "name": "Canada",
        "region": "Americas",
        "population": 38005238
    },
    {
        "area": 118484,
        "id": "MWI",
        "capital": "Lilongwe",
        "flag": "https://flagcdn.com/mw.svg",
        "name": "Malawi",
        "region": "Africa",
        "population": 19129955
    },
    {
        "area": 2149690,
        "id": "SAU",
        "capital": "Riyadh",
        "flag": "https://flagcdn.com/sa.svg",
        "name": "Saudi Arabia",
        "region": "Asia",
        "population": 34813867
    },
    {
        "area": 51209,
        "id": "BIH",
        "capital": "Sarajevo",
        "flag": "https://flagcdn.com/ba.svg",
        "name": "Bosnia and Herzegovina",
        "region": "Europe",
        "population": 3280815
    },
    {
        "area": 1104300,
        "id": "ETH",
        "capital": "Addis Ababa",
        "flag": "https://flagcdn.com/et.svg",
        "name": "Ethiopia",
        "region": "Africa",
        "population": 114963583
    },
    {
        "area": 505992,
        "id": "ESP",
        "capital": "Madrid",
        "flag": "https://flagcdn.com/es.svg",
        "name": "Spain",
        "region": "Europe",
        "population": 47351567
    },
    {
        "area": 20273,
        "id": "SVN",
        "capital": "Ljubljana",
        "flag": "https://flagcdn.com/si.svg",
        "name": "Slovenia",
        "region": "Europe",
        "population": 2100126
    },
    {
        "area": 309500,
        "id": "OMN",
        "capital": "Muscat",
        "flag": "https://flagcdn.com/om.svg",
        "name": "Oman",
        "region": "Asia",
        "population": 5106622
    },
    {
        "area": 242,
        "id": "SPM",
        "capital": "Saint-Pierre",
        "flag": "https://flagcdn.com/pm.svg",
        "name": "Saint Pierre and Miquelon",
        "region": "Americas",
        "population": 6069
    },
    {
        "area": 30,
        "id": "MAC",
        "capital": "Yoxdur",
        "flag": "https://flagcdn.com/mo.svg",
        "name": "Macau",
        "region": "Asia",
        "population": 649342
    },
    {
        "area": 61,
        "id": "SMR",
        "capital": "City of San Marino",
        "flag": "https://flagcdn.com/sm.svg",
        "name": "San Marino",
        "region": "Europe",
        "population": 33938
    },
    {
        "area": 30355,
        "id": "LSO",
        "capital": "Maseru",
        "flag": "https://flagcdn.com/ls.svg",
        "name": "Lesotho",
        "region": "Africa",
        "population": 2142252
    },
    {
        "area": 181,
        "id": "MHL",
        "capital": "Majuro",
        "flag": "https://flagcdn.com/mh.svg",
        "name": "Marshall Islands",
        "region": "Oceania",
        "population": 59194
    },
    {
        "area": 34,
        "id": "SXM",
        "capital": "Philipsburg",
        "flag": "https://flagcdn.com/sx.svg",
        "name": "Sint Maarten",
        "region": "Americas",
        "population": 40812
    },
    {
        "area": 103000,
        "id": "ISL",
        "capital": "Reykjavik",
        "flag": "https://flagcdn.com/is.svg",
        "name": "Iceland",
        "region": "Europe",
        "population": 366425
    },
    {
        "area": 2586,
        "id": "LUX",
        "capital": "Luxembourg",
        "flag": "https://flagcdn.com/lu.svg",
        "name": "Luxembourg",
        "region": "Europe",
        "population": 632275
    },
    {
        "area": 2780400,
        "id": "ARG",
        "capital": "Buenos Aires",
        "flag": "https://flagcdn.com/ar.svg",
        "name": "Argentina",
        "region": "Americas",
        "population": 45376763
    },
    {
        "area": 948,
        "id": "TCA",
        "capital": "Cockburn Town",
        "flag": "https://flagcdn.com/tc.svg",
        "name": "Turks and Caicos Islands",
        "region": "Americas",
        "population": 38718
    },
    {
        "area": 21,
        "id": "NRU",
        "capital": "Yaren",
        "flag": "https://flagcdn.com/nr.svg",
        "name": "Nauru",
        "region": "Oceania",
        "population": 10834
    },
    {
        "area": 14,
        "id": "CCK",
        "capital": "West Island",
        "flag": "https://flagcdn.com/cc.svg",
        "name": "Cocos (Keeling) Islands",
        "region": "Oceania",
        "population": 544
    },
    {
        "area": 266000,
        "id": "ESH",
        "capital": "El Aaiún",
        "flag": "https://flagcdn.com/eh.svg",
        "name": "Western Sahara",
        "region": "Africa",
        "population": 510713
    },
    {
        "area": 751,
        "id": "DMA",
        "capital": "Roseau",
        "flag": "https://flagcdn.com/dm.svg",
        "name": "Dominica",
        "region": "Americas",
        "population": 71991
    },
    {
        "area": 51100,
        "id": "CRI",
        "capital": "San José",
        "flag": "https://flagcdn.com/cr.svg",
        "name": "Costa Rica",
        "region": "Americas",
        "population": 5094114
    },
    {
        "area": 7692024,
        "id": "AUS",
        "capital": "Canberra",
        "flag": "https://flagcdn.com/au.svg",
        "name": "Australia",
        "region": "Oceania",
        "population": 25687041
    },
    {
        "area": 513120,
        "id": "THA",
        "capital": "Bangkok",
        "flag": "https://flagcdn.com/th.svg",
        "name": "Thailand",
        "region": "Asia",
        "population": 69799978
    },
    {
        "area": 27750,
        "id": "HTI",
        "capital": "Port-au-Prince",
        "flag": "https://flagcdn.com/ht.svg",
        "name": "Haiti",
        "region": "Americas",
        "population": 11402533
    },
    {
        "area": 26,
        "id": "TUV",
        "capital": "Funafuti",
        "flag": "https://flagcdn.com/tv.svg",
        "name": "Tuvalu",
        "region": "Oceania",
        "population": 11792
    },
    {
        "area": 112492,
        "id": "HND",
        "capital": "Tegucigalpa",
        "flag": "https://flagcdn.com/hn.svg",
        "name": "Honduras",
        "region": "Americas",
        "population": 9904608
    },
    {
        "area": 28051,
        "id": "GNQ",
        "capital": "Malabo",
        "flag": "https://flagcdn.com/gq.svg",
        "name": "Equatorial Guinea",
        "region": "Africa",
        "population": 1402985
    },
    {
        "area": 616,
        "id": "LCA",
        "capital": "Castries",
        "flag": "https://flagcdn.com/lc.svg",
        "name": "Saint Lucia",
        "region": "Americas",
        "population": 183629
    },
    {
        "area": 4167,
        "id": "PYF",
        "capital": "Papeetē",
        "flag": "https://flagcdn.com/pf.svg",
        "name": "French Polynesia",
        "region": "Oceania",
        "population": 280904
    },
    {
        "area": 207600,
        "id": "BLR",
        "capital": "Minsk",
        "flag": "https://flagcdn.com/by.svg",
        "name": "Belarus",
        "region": "Europe",
        "population": 9398861
    },
    {
        "area": 64559,
        "id": "LVA",
        "capital": "Riga",
        "flag": "https://flagcdn.com/lv.svg",
        "name": "Latvia",
        "region": "Europe",
        "population": 1901548
    },
    {
        "area": 459,
        "id": "PLW",
        "capital": "Ngerulmud",
        "flag": "https://flagcdn.com/pw.svg",
        "name": "Palau",
        "region": "Oceania",
        "population": 18092
    },
    {
        "area": 1628,
        "id": "GLP",
        "capital": "Basse-Terre",
        "flag": "https://flagcdn.com/gp.svg",
        "name": "Guadeloupe",
        "region": "Americas",
        "population": 400132
    },
    {
        "area": 342353,
        "id": "PHL",
        "capital": "Manila",
        "flag": "https://flagcdn.com/ph.svg",
        "name": "Philippines",
        "region": "Asia",
        "population": 109581085
    },
    {
        "area": 6,
        "id": "GIB",
        "capital": "Gibraltar",
        "flag": "https://flagcdn.com/gi.svg",
        "name": "Gibraltar",
        "region": "Europe",
        "population": 33691
    },
    {
        "area": 43094,
        "id": "DNK",
        "capital": "Copenhagen",
        "flag": "https://flagcdn.com/dk.svg",
        "name": "Denmark",
        "region": "Europe",
        "population": 5831404
    },
    {
        "area": 475442,
        "id": "CMR",
        "capital": "Yaoundé",
        "flag": "https://flagcdn.com/cm.svg",
        "name": "Cameroon",
        "region": "Africa",
        "population": 26545864
    },
    {
        "area": 245857,
        "id": "GIN",
        "capital": "Conakry",
        "flag": "https://flagcdn.com/gn.svg",
        "name": "Guinea",
        "region": "Africa",
        "population": 13132792
    },
    {
        "area": 765,
        "id": "BHR",
        "capital": "Manama",
        "flag": "https://flagcdn.com/bh.svg",
        "name": "Bahrain",
        "region": "Asia",
        "population": 1701583
    },
    {
        "area": 163820,
        "id": "SUR",
        "capital": "Paramaribo",
        "flag": "https://flagcdn.com/sr.svg",
        "name": "Suriname",
        "region": "Americas",
        "population": 586634
    },
    {
        "area": 2344858,
        "id": "COD",
        "capital": "Kinshasa",
        "flag": "https://flagcdn.com/cd.svg",
        "name": "DR Congo",
        "region": "Africa",
        "population": 108407721
    },
    {
        "area": 637657,
        "id": "SOM",
        "capital": "Mogadishu",
        "flag": "https://flagcdn.com/so.svg",
        "name": "Somalia",
        "region": "Africa",
        "population": 15893219
    },
    {
        "area": 78865,
        "id": "CZE",
        "capital": "Prague",
        "flag": "https://flagcdn.com/cz.svg",
        "name": "Czechia",
        "region": "Europe",
        "population": 10698896
    },
    {
        "area": 18575,
        "id": "NCL",
        "capital": "Nouméa",
        "flag": "https://flagcdn.com/nc.svg",
        "name": "New Caledonia",
        "region": "Oceania",
        "population": 271960
    },
    {
        "area": 12189,
        "id": "VUT",
        "capital": "Port Vila",
        "flag": "https://flagcdn.com/vu.svg",
        "name": "Vanuatu",
        "region": "Oceania",
        "population": 307150
    },
    {
        "area": 394,
        "id": "SHN",
        "capital": "Jamestown",
        "flag": "https://flagcdn.com/sh.svg",
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "region": "Africa",
        "population": 53192
    },
    {
        "area": 56785,
        "id": "TGO",
        "capital": "Lomé",
        "flag": "https://flagcdn.com/tg.svg",
        "name": "Togo",
        "region": "Africa",
        "population": 8278737
    },
    {
        "area": 151,
        "id": "VGB",
        "capital": "Road Town",
        "flag": "https://flagcdn.com/vg.svg",
        "name": "British Virgin Islands",
        "region": "Americas",
        "population": 30237
    },
    {
        "area": 580367,
        "id": "KEN",
        "capital": "Nairobi",
        "flag": "https://flagcdn.com/ke.svg",
        "name": "Kenya",
        "region": "Africa",
        "population": 53771300
    },
    {
        "area": 260,
        "id": "NIU",
        "capital": "Alofi",
        "flag": "https://flagcdn.com/nu.svg",
        "name": "Niue",
        "region": "Oceania",
        "population": 1470
    },
    {
        "area": 412,
        "id": "HMD",
        "capital": "Yoxdur",
        "flag": "https://flagcdn.com/hm.svg",
        "name": "Heard Island and McDonald Islands",
        "region": "Antarctic",
        "population": 0
    },
    {
        "area": 26338,
        "id": "RWA",
        "capital": "Kigali",
        "flag": "https://flagcdn.com/rw.svg",
        "name": "Rwanda",
        "region": "Africa",
        "population": 12952209
    },
    {
        "area": 45227,
        "id": "EST",
        "capital": "Tallinn",
        "flag": "https://flagcdn.com/ee.svg",
        "name": "Estonia",
        "region": "Europe",
        "population": 1331057
    },
    {
        "area": 238391,
        "id": "ROU",
        "capital": "Bucharest",
        "flag": "https://flagcdn.com/ro.svg",
        "name": "Romania",
        "region": "Europe",
        "population": 19286123
    },
    {
        "area": 5130,
        "id": "TTO",
        "capital": "Port of Spain",
        "flag": "https://flagcdn.com/tt.svg",
        "name": "Trinidad and Tobago",
        "region": "Americas",
        "population": 1399491
    },
    {
        "area": 214969,
        "id": "GUY",
        "capital": "Georgetown",
        "flag": "https://flagcdn.com/gy.svg",
        "name": "Guyana",
        "region": "Americas",
        "population": 786559
    },
    {
        "area": 14874,
        "id": "TLS",
        "capital": "Dili",
        "flag": "https://flagcdn.com/tl.svg",
        "name": "Timor-Leste",
        "region": "Asia",
        "population": 1318442
    },
    {
        "area": 331212,
        "id": "VNM",
        "capital": "Hanoi",
        "flag": "https://flagcdn.com/vn.svg",
        "name": "Vietnam",
        "region": "Asia",
        "population": 97338583
    },
    {
        "area": 181034,
        "id": "URY",
        "capital": "Montevideo",
        "flag": "https://flagcdn.com/uy.svg",
        "name": "Uruguay",
        "region": "Americas",
        "population": 3473727
    },
    {
        "area": 0.44,
        "id": "VAT",
        "capital": "Vatican City",
        "flag": "https://flagcdn.com/va.svg",
        "name": "Vatican City",
        "region": "Europe",
        "population": 451
    },
    {
        "area": 1104,
        "id": "HKG",
        "capital": "City of Victoria",
        "flag": "https://flagcdn.com/hk.svg",
        "name": "Hong Kong",
        "region": "Asia",
        "population": 7500700
    },
    {
        "area": 83871,
        "id": "AUT",
        "capital": "Vienna",
        "flag": "https://flagcdn.com/at.svg",
        "name": "Austria",
        "region": "Europe",
        "population": 8917205
    },
    {
        "area": 442,
        "id": "ATG",
        "capital": "Saint John's",
        "flag": "https://flagcdn.com/ag.svg",
        "name": "Antigua and Barbuda",
        "region": "Americas",
        "population": 97928
    },
    {
        "area": 488100,
        "id": "TKM",
        "capital": "Ashgabat",
        "flag": "https://flagcdn.com/tm.svg",
        "name": "Turkmenistan",
        "region": "Asia",
        "population": 6031187
    },
    {
        "area": 801590,
        "id": "MOZ",
        "capital": "Maputo",
        "flag": "https://flagcdn.com/mz.svg",
        "name": "Mozambique",
        "region": "Africa",
        "population": 31255435
    },
    {
        "area": 75417,
        "id": "PAN",
        "capital": "Panama City",
        "flag": "https://flagcdn.com/pa.svg",
        "name": "Panama",
        "region": "Americas",
        "population": 4314768
    },
    {
        "area": 702,
        "id": "FSM",
        "capital": "Palikir",
        "flag": "https://flagcdn.com/fm.svg",
        "name": "Micronesia",
        "region": "Oceania",
        "population": 115021
    },
    {
        "area": 70273,
        "id": "IRL",
        "capital": "Dublin",
        "flag": "https://flagcdn.com/ie.svg",
        "name": "Ireland",
        "region": "Europe",
        "population": 4994724
    },
    {
        "area": 444,
        "id": "CUW",
        "capital": "Willemstad",
        "flag": "https://flagcdn.com/cw.svg",
        "name": "Curaçao",
        "region": "Americas",
        "population": 155014
    },
    {
        "area": 83534,
        "id": "GUF",
        "capital": "Cayenne",
        "flag": "https://flagcdn.com/gf.svg",
        "name": "French Guiana",
        "region": "Americas",
        "population": 254541
    },
    {
        "area": 323802,
        "id": "NOR",
        "capital": "Oslo",
        "flag": "https://flagcdn.com/no.svg",
        "name": "Norway",
        "region": "Europe",
        "population": 5379475
    },
    {
        "area": 1580,
        "id": "ALA",
        "capital": "Mariehamn",
        "flag": "https://flagcdn.com/ax.svg",
        "name": "Åland Islands",
        "region": "Europe",
        "population": 29458
    },
    {
        "area": 622984,
        "id": "CAF",
        "capital": "Bangui",
        "flag": "https://flagcdn.com/cf.svg",
        "name": "Central African Republic",
        "region": "Africa",
        "population": 4829764
    },
    {
        "area": 272967,
        "id": "BFA",
        "capital": "Ouagadougou",
        "flag": "https://flagcdn.com/bf.svg",
        "name": "Burkina Faso",
        "region": "Africa",
        "population": 20903278
    },
    {
        "area": 117600,
        "id": "ERI",
        "capital": "Asmara",
        "flag": "https://flagcdn.com/er.svg",
        "name": "Eritrea",
        "region": "Africa",
        "population": 5352000
    },
    {
        "area": 945087,
        "id": "TZA",
        "capital": "Dodoma",
        "flag": "https://flagcdn.com/tz.svg",
        "name": "Tanzania",
        "region": "Africa",
        "population": 59734213
    },
    {
        "area": 100210,
        "id": "KOR",
        "capital": "Seoul",
        "flag": "https://flagcdn.com/kr.svg",
        "name": "South Korea",
        "region": "Asia",
        "population": 51780579
    },
    {
        "area": 89342,
        "id": "JOR",
        "capital": "Amman",
        "flag": "https://flagcdn.com/jo.svg",
        "name": "Jordan",
        "region": "Asia",
        "population": 10203140
    },
    {
        "area": 1030700,
        "id": "MRT",
        "capital": "Nouakchott",
        "flag": "https://flagcdn.com/mr.svg",
        "name": "Mauritania",
        "region": "Africa",
        "population": 4649660
    },
    {
        "area": 65300,
        "id": "LTU",
        "capital": "Vilnius",
        "flag": "https://flagcdn.com/lt.svg",
        "name": "Lithuania",
        "region": "Europe",
        "population": 2794700
    },
    {
        "area": 34.2,
        "id": "UMI",
        "capital": "Washington DC",
        "flag": "https://flagcdn.com/um.svg",
        "name": "United States Minor Outlying Islands",
        "region": "Americas",
        "population": 300
    },
    {
        "area": 49037,
        "id": "SVK",
        "capital": "Bratislava",
        "flag": "https://flagcdn.com/sk.svg",
        "name": "Slovakia",
        "region": "Europe",
        "population": 5458827
    },
    {
        "area": 1246700,
        "id": "AGO",
        "capital": "Luanda",
        "flag": "https://flagcdn.com/ao.svg",
        "name": "Angola",
        "region": "Africa",
        "population": 32866268
    },
    {
        "area": 2724900,
        "id": "KAZ",
        "capital": "Nur-Sultan",
        "flag": "https://flagcdn.com/kz.svg",
        "name": "Kazakhstan",
        "region": "Asia",
        "population": 18754440
    },
    {
        "area": 33846,
        "id": "MDA",
        "capital": "Chișinău",
        "flag": "https://flagcdn.com/md.svg",
        "name": "Moldova",
        "region": "Europe",
        "population": 2617820
    },
    {
        "area": 1240192,
        "id": "MLI",
        "capital": "Bamako",
        "flag": "https://flagcdn.com/ml.svg",
        "name": "Mali",
        "region": "Africa",
        "population": 20250834
    },
    {
        "area": 12173,
        "id": "FLK",
        "capital": "Stanley",
        "flag": "https://flagcdn.com/fk.svg",
        "name": "Falkland Islands",
        "region": "Americas",
        "population": 2563
    },
    {
        "area": 29743,
        "id": "ARM",
        "capital": "Yerevan",
        "flag": "https://flagcdn.com/am.svg",
        "name": "Armenia",
        "region": "Asia",
        "population": 2963234
    },
    {
        "area": 2842,
        "id": "WSM",
        "capital": "Apia",
        "flag": "https://flagcdn.com/ws.svg",
        "name": "Samoa",
        "region": "Oceania",
        "population": 198410
    },
    {
        "area": 116,
        "id": "JEY",
        "capital": "Saint Helier",
        "flag": "https://flagcdn.com/je.svg",
        "name": "Jersey",
        "region": "Europe",
        "population": 100800
    },
    {
        "area": 377930,
        "id": "JPN",
        "capital": "Tokyo",
        "flag": "https://flagcdn.com/jp.svg",
        "name": "Japan",
        "region": "Asia",
        "population": 125836021
    },
    {
        "area": 1098581,
        "id": "BOL",
        "capital": "Sucre",
        "flag": "https://flagcdn.com/bo.svg",
        "name": "Bolivia",
        "region": "Americas",
        "population": 11673029
    },
    {
        "area": 756102,
        "id": "CHL",
        "capital": "Santiago",
        "flag": "https://flagcdn.com/cl.svg",
        "name": "Chile",
        "region": "Americas",
        "population": 19116209
    },
    {
        "area": 9372610,
        "id": "USA",
        "capital": "Washington, D.C.",
        "flag": "https://flagcdn.com/us.svg",
        "name": "United States",
        "region": "Americas",
        "population": 329484123
    },
    {
        "area": 389,
        "id": "VCT",
        "capital": "Kingstown",
        "flag": "https://flagcdn.com/vc.svg",
        "name": "Saint Vincent and the Grenadines",
        "region": "Americas",
        "population": 110947
    },
    {
        "area": 54,
        "id": "BMU",
        "capital": "Hamilton",
        "flag": "https://flagcdn.com/bm.svg",
        "name": "Bermuda",
        "region": "Americas",
        "population": 63903
    },
    {
        "area": 452,
        "id": "SYC",
        "capital": "Victoria",
        "flag": "https://flagcdn.com/sc.svg",
        "name": "Seychelles",
        "region": "Africa",
        "population": 98462
    },
    {
        "area": 60,
        "id": "IOT",
        "capital": "Diego Garcia",
        "flag": "https://flagcdn.com/io.svg",
        "name": "British Indian Ocean Territory",
        "region": "Africa",
        "population": 3000
    },
    {
        "area": 108889,
        "id": "GTM",
        "capital": "Guatemala City",
        "flag": "https://flagcdn.com/gt.svg",
        "name": "Guatemala",
        "region": "Americas",
        "population": 16858333
    },
    {
        "area": 276841,
        "id": "ECU",
        "capital": "Quito",
        "flag": "https://flagcdn.com/ec.svg",
        "name": "Ecuador",
        "region": "Americas",
        "population": 17643060
    },
    {
        "area": 1128,
        "id": "MTQ",
        "capital": "Fort-de-France",
        "flag": "https://flagcdn.com/mq.svg",
        "name": "Martinique",
        "region": "Americas",
        "population": 378243
    },
    {
        "area": 143100,
        "id": "TJK",
        "capital": "Dushanbe",
        "flag": "https://flagcdn.com/tj.svg",
        "name": "Tajikistan",
        "region": "Asia",
        "population": 9537642
    },
    {
        "area": 316,
        "id": "MLT",
        "capital": "Valletta",
        "flag": "https://flagcdn.com/mt.svg",
        "name": "Malta",
        "region": "Europe",
        "population": 525285
    },
    {
        "area": 10689,
        "id": "GMB",
        "capital": "Banjul",
        "flag": "https://flagcdn.com/gm.svg",
        "name": "Gambia",
        "region": "Africa",
        "population": 2416664
    },
    {
        "area": 923768,
        "id": "NGA",
        "capital": "Abuja",
        "flag": "https://flagcdn.com/ng.svg",
        "name": "Nigeria",
        "region": "Africa",
        "population": 206139587
    },
    {
        "area": 13943,
        "id": "BHS",
        "capital": "Nassau",
        "flag": "https://flagcdn.com/bs.svg",
        "name": "Bahamas",
        "region": "Americas",
        "population": 393248
    },
    {
        "area": 10908,
        "id": "UNK",
        "capital": "Pristina",
        "flag": "https://flagcdn.com/xk.svg",
        "name": "Kosovo",
        "region": "Europe",
        "population": 1775378
    },
    {
        "area": 17818,
        "id": "KWT",
        "capital": "Kuwait City",
        "flag": "https://flagcdn.com/kw.svg",
        "name": "Kuwait",
        "region": "Asia",
        "population": 4270563
    },
    {
        "area": 300,
        "id": "MDV",
        "capital": "Malé",
        "flag": "https://flagcdn.com/mv.svg",
        "name": "Maldives",
        "region": "Asia",
        "population": 540542
    },
    {
        "area": 619745,
        "id": "SSD",
        "capital": "Juba",
        "flag": "https://flagcdn.com/ss.svg",
        "name": "South Sudan",
        "region": "Africa",
        "population": 11193729
    },
    {
        "area": 1648195,
        "id": "IRN",
        "capital": "Tehran",
        "flag": "https://flagcdn.com/ir.svg",
        "name": "Iran",
        "region": "Asia",
        "population": 83992953
    },
    {
        "area": 28748,
        "id": "ALB",
        "capital": "Tirana",
        "flag": "https://flagcdn.com/al.svg",
        "name": "Albania",
        "region": "Europe",
        "population": 2837743
    },
    {
        "area": 8515767,
        "id": "BRA",
        "capital": "Brasília",
        "flag": "https://flagcdn.com/br.svg",
        "name": "Brazil",
        "region": "Americas",
        "population": 212559409
    },
    {
        "area": 88361,
        "id": "SRB",
        "capital": "Belgrade",
        "flag": "https://flagcdn.com/rs.svg",
        "name": "Serbia",
        "region": "Europe",
        "population": 6908224
    },
    {
        "area": 22966,
        "id": "BLZ",
        "capital": "Belmopan",
        "flag": "https://flagcdn.com/bz.svg",
        "name": "Belize",
        "region": "Americas",
        "population": 397621
    },
    {
        "area": 676578,
        "id": "MMR",
        "capital": "Naypyidaw",
        "flag": "https://flagcdn.com/mm.svg",
        "name": "Myanmar",
        "region": "Asia",
        "population": 54409794
    },
    {
        "area": 38394,
        "id": "BTN",
        "capital": "Thimphu",
        "flag": "https://flagcdn.com/bt.svg",
        "name": "Bhutan",
        "region": "Asia",
        "population": 771612
    },
    {
        "area": 916445,
        "id": "VEN",
        "capital": "Caracas",
        "flag": "https://flagcdn.com/ve.svg",
        "name": "Venezuela",
        "region": "Americas",
        "population": 28435943
    },
    {
        "area": 111369,
        "id": "LBR",
        "capital": "Monrovia",
        "flag": "https://flagcdn.com/lr.svg",
        "name": "Liberia",
        "region": "Africa",
        "population": 5057677
    },
    {
        "area": 10991,
        "id": "JAM",
        "capital": "Kingston",
        "flag": "https://flagcdn.com/jm.svg",
        "name": "Jamaica",
        "region": "Americas",
        "population": 2961161
    },
    {
        "area": 312679,
        "id": "POL",
        "capital": "Warsaw",
        "flag": "https://flagcdn.com/pl.svg",
        "name": "Poland",
        "region": "Europe",
        "population": 37950802
    },
    {
        "area": 264,
        "id": "CYM",
        "capital": "George Town",
        "flag": "https://flagcdn.com/ky.svg",
        "name": "Cayman Islands",
        "region": "Americas",
        "population": 65720
    },
    {
        "area": 5765,
        "id": "BRN",
        "capital": "Bandar Seri Begawan",
        "flag": "https://flagcdn.com/bn.svg",
        "name": "Brunei",
        "region": "Asia",
        "population": 437483
    },
    {
        "area": 1862,
        "id": "COM",
        "capital": "Moroni",
        "flag": "https://flagcdn.com/km.svg",
        "name": "Comoros",
        "region": "Africa",
        "population": 869595
    },
    {
        "area": 549,
        "id": "GUM",
        "capital": "Hagåtña",
        "flag": "https://flagcdn.com/gu.svg",
        "name": "Guam",
        "region": "Oceania",
        "population": 168783
    },
    {
        "area": 747,
        "id": "TON",
        "capital": "Nuku'alofa",
        "flag": "https://flagcdn.com/to.svg",
        "name": "Tonga",
        "region": "Oceania",
        "population": 105697
    },
    {
        "area": 811,
        "id": "KIR",
        "capital": "South Tarawa",
        "flag": "https://flagcdn.com/ki.svg",
        "name": "Kiribati",
        "region": "Oceania",
        "population": 119446
    },
    {
        "area": 238533,
        "id": "GHA",
        "capital": "Accra",
        "flag": "https://flagcdn.com/gh.svg",
        "name": "Ghana",
        "region": "Africa",
        "population": 31072945
    },
    {
        "area": 1284000,
        "id": "TCD",
        "capital": "N'Djamena",
        "flag": "https://flagcdn.com/td.svg",
        "name": "Chad",
        "region": "Africa",
        "population": 16425859
    },
    {
        "area": 390757,
        "id": "ZWE",
        "capital": "Harare",
        "flag": "https://flagcdn.com/zw.svg",
        "name": "Zimbabwe",
        "region": "Africa",
        "population": 14862927
    },
    {
        "area": 53,
        "id": "MAF",
        "capital": "Marigot",
        "flag": "https://flagcdn.com/mf.svg",
        "name": "Saint Martin",
        "region": "Americas",
        "population": 38659
    },
    {
        "area": 1564110,
        "id": "MNG",
        "capital": "Ulan Bator",
        "flag": "https://flagcdn.com/mn.svg",
        "name": "Mongolia",
        "region": "Asia",
        "population": 3278292
    },
    {
        "area": 92090,
        "id": "PRT",
        "capital": "Lisbon",
        "flag": "https://flagcdn.com/pt.svg",
        "name": "Portugal",
        "region": "Europe",
        "population": 10305564
    },
    {
        "area": 199,
        "id": "ASM",
        "capital": "Pago Pago",
        "flag": "https://flagcdn.com/as.svg",
        "name": "American Samoa",
        "region": "Oceania",
        "population": 55197
    },
    {
        "area": 342000,
        "id": "COG",
        "capital": "Brazzaville",
        "flag": "https://flagcdn.com/cg.svg",
        "name": "Republic of the Congo",
        "region": "Africa",
        "population": 5657000
    },
    {
        "area": 30528,
        "id": "BEL",
        "capital": "Brussels",
        "flag": "https://flagcdn.com/be.svg",
        "name": "Belgium",
        "region": "Europe",
        "population": 11555997
    },
    {
        "area": 20770,
        "id": "ISR",
        "capital": "Jerusalem",
        "flag": "https://flagcdn.com/il.svg",
        "name": "Israel",
        "region": "Asia",
        "population": 9216900
    },
    {
        "area": 270467,
        "id": "NZL",
        "capital": "Wellington",
        "flag": "https://flagcdn.com/nz.svg",
        "name": "New Zealand",
        "region": "Oceania",
        "population": 5084300
    },
    {
        "area": 130373,
        "id": "NIC",
        "capital": "Managua",
        "flag": "https://flagcdn.com/ni.svg",
        "name": "Nicaragua",
        "region": "Americas",
        "population": 6624554
    },
    {
        "area": 91,
        "id": "AIA",
        "capital": "The Valley",
        "flag": "https://flagcdn.com/ai.svg",
        "name": "Anguilla",
        "region": "Americas",
        "population": 13452
    }
]

function dark() {
    document.body.classList.toggle('dark-mode')
    light.classList.toggle("hidden")
    ay.classList.toggle("hidden")
}

function show() {
    header.classList.toggle("active");
}

function showInput() {
    search.classList.toggle('block')
}

function add() {
    let index = Math.floor(Math.random() * data.length - 1)
    let item = data[index]
    cardRandom.innerHTML +=
        `
        <img src="${item.flag}" alt="flag">
        <div class="texts">
        <h1>${item.name}</h1>
        <p>${item.region}</p>
        <h4>Capital: ${item.capital}</h4>
        <h4>Area: ${item.area} km<sup>2</sup></h4>
        <h4>Population: ${item.population}</h4>
        </div>

    `
}
add()


let load = 21

function show2(region) {
    cards.innerHTML = ""
    data.forEach((item) => {
        if (item.region.includes(region)) {
            cards.innerHTML +=
                `<article class="card-item">
                    <div class="flag"><img src="${item.flag}" alt="flag"></div>            
                    <div class="item-texts">
                        <p>${item.region}</p>
                        <h3>${item.name}, ${item.capital}</h3>
                            <div class="end-texts">
                                <span>Population: ${item.population}</span>
                                <span>${item.area} km<sup>2</sup></span>
                            </div>
                        </div>
                </article>`
        }
    });

}
show2("")

function showMore() {
    if (load < data.length) {
        load += 21;
        show2()
    } else {
        btn.disabled = true
        btn.innerHTML = "No more cards"

    }
}
// let lists = document.querySelectorAll('.first-lists li a')
// lists.forEach((item) => {
//     item.addEventListener('click', function (event) {
//         event.preventDefault();
//         let region = item.innerText;
//         filter(region);
//     });
// });

// function filter(region) {
//     load = data.length
//     show2(region);
// }

// let deyisen = lists.innerText
// let arr = ['Americas', 'Europe', 'Asia', 'Africa', 'Oceania', 'Antarctic']

// function filter(region) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.includes(region)) {
//             show2(region)
//             console.log(region);
            
//         }
//     }
// }
// show2(region)
// }





// let start = 0
// let load = 10

// let end = start + load
// for (let i = start; i < end && i < data.length; i++) {
//     let elem = data[i]
//     // console.log(elem);
//     cards.innerHTML +=
//         `
//           <article class="card-item">
//                    <div class="flag"><img src="${elem.flag}" alt="flag"></div>            
//                    <div class="item-texts">
//                             <p>${elem.region}</p>
//                             <h3>${elem.name}, ${elem.capital}</h3>
//                             <div class="end-texts">
//                                 <span>Population: ${elem.population}</span>
//                                 <span>${elem.area} km<sup>2</sup></span>
//                             </div>
//                         </div>
//             </article>
//         `
// }
// start += load