/*
Raw gym data - include a different file for different city

NEVER change order of gyms or delete gyms
ONLY append at the end, and mark deleted gyms with 'deleted: true'
BECAUSE progress is stored in user's localStorage by gym index

Entries for each gym:
{
  name: "The Gym Name",                // required
  location: [latitude,longitude],      // required
  district: "A Neighborhood",          // optional, used for sorting by neighborhood
  address: "e.g. street and house#",   // optional, used as label for google maps link
  park: true | "OSM feature",          // optional, potential EX raid location. If string, link to that OSM feature
  exraid: true,                        // optional, confirmed EX raid location (a raid actually happened here)
  deleted: true,                       // optional, used for hiding removed gyms without changing IDs
  
  // added by program in getGyms()
  id: number,                          // index in this list. THIS MUST NEVER CHANGE!
}
*/

function gymData() {
    return {
    city: "DE-MD", // country-city (used in localStorage key to allow tracking multiple cities)
    gyms: [
    {name: "3 Flotte Bienen", district: "Leipziger Straße", address: "Fermersleber Weg 45D", location: [52.105404,11.615429]},
    {name: "30 Jahre Straßenbahn nach Olvenstedt", district: "Neu Olvenstedt", address: "Scharnhorstring 51", location: [52.149517,11.586183]},
    {name: "Alter Getreidespeicher Buckau", district: "Buckau", address: "Bleckenburgstraße 11A", location: [52.111855,11.637621]},
    {name: "Alter Schlachthof", district: "Stadtfeld Ost", address: "Johann-Gottlieb-Schoch-Straße", location: [52.121349,11.612569]},
    {name: "Altes Rathaus Olvenstedt", district: "Alt Olvenstedt", address: "Helmstedter Chaussee 25", location: [52.155323,11.565906]},
    {name: "Altes Theater Reform", district: "Reform", address: "Kirschweg 25", location: [52.09499,11.618528], park: "way/27144897"},
    {name: "Bahnhof Magdeburg-Buckau", district: "Buckau", address: "Porsestraße 16", location: [52.109352,11.630778]},
    {name: "Bahnhof Neustadt", district: "Alte Neustadt", address: "Gröperstraße 2", location: [52.148232,11.641431]},
    {name: "Bahnwärterhaus Südost", district: "Salbke", address: "Welsleber Str. 1", location: [52.070456,11.669139]},
    {name: "Black Smiler", district: "Sudenburg", address: "Sudenburger Wuhne 48", location: [52.118736,11.587494]},
    {name: "Brauereistr Circus Museum", district: "Buckau", address: "Brauereistraße 2", location: [52.103832,11.638013]},
    {name: "Bridge Lion", district: "Brückfeld", address: "Turmschanzenstraße 7", location: [52.12701,11.65309]},
    {name: "Bronzefarbener Reiter", district: "Herrenkrug", address: "Breitscheidstraße 46", location: [52.140396,11.67838]},
    {name: "Buckauer Graffitiwand", district: "Buckau", address: "Klosterbergestraße 17", location: [52.108852,11.634948]},
    {name: "Börde Brauerei", district: "Alte Neustadt", address: "Sieverstorstraße 45", location: [52.149586,11.647303]},
    {name: "Bürgerdenkmal Magdeburg", district: "Altstadt", address: "Lothar-Kreyssig-Straße", location: [52.125088,11.633311]},
    {name: "Children Outdoor Art - Picnic", district: "Buckau", address: "Schönebecker Str. 82", location: [52.102982,11.643632]},
    {name: "Circusmuseum", district: "Buckau", address: "Karl-Schmidt-Straße 13C", location: [52.104977,11.637986]},
    {name: "Dampfwalze Bauhof", district: "Industriehafen", address: "Allerstraße", location: [52.161587,11.663179]},
    {name: "Das Pferd", district: "Westerhüsen", address: "Alt Westerhüsen 31", location: [52.064858,11.676651]},
    {name: "Das Rote Haus", district: "Alte Neustadt", address: "Wittenberger Str. 26", location: [52.143295,11.650275]},
    {name: "Das, was nie sein wird", district: "Berliner Chaussee", address: "An der Lake 28-36", location: [52.137978,11.68624], park: "way/30020890"},
    {name: "Denkmal Dampfmaschine Buckau", district: "Buckau", address: "Schönebecker Str. 106B", location: [52.107243,11.642326]},
    {name: "Denkmal Julius Fučik", district: "Stadtfeld Ost", address: "Albert-Vater-Straße 21", location: [52.141945,11.624286]},
    {name: "Der bunte Weg", district: "Sudenburg", address: "Seehäuser Weg", location: [52.120815,11.586438]},
    {name: "Der Löwe", district: "Sudenburg", address: "Halberstädter Str. 137", location: [52.109203,11.598706]},
    {name: "Der Schäfer", district: "Buckau", address: "Klosterbergestraße 10", location: [52.109509,11.634358]},
    {name: "Deutsche Reichsbahn", district: "Alte Neustadt", address: "Niels-Bohr-Straße", location: [52.145481,11.658057]},
    {name: "Die Badende", district: "Altstadt", address: "Breiter Weg 30", location: [52.134174,11.638214]},
    {name: "Die Magdeburger Jungfrau", district: "Buckau", address: "An der Elbe 14", location: [52.106861,11.644071]},
    {name: "Die trauernde Witwe", district: "Stadtfeld West", address: "Große Diesdorfer Str. 160", location: [52.126232,11.584242]},
    {name: "Dom zu Magdeburg St. Mauritius und Katharina", district: "Altstadt", address: "Am Dom 1", location: [52.124676,11.633836]},
    {name: "Düppler Mühle", district: "Neu Olvenstedt", address: "Düppler Mühlenstraße 27", location: [52.1474,11.58775]},
    {name: "Eiserner Vogel", district: "Alte Neustadt", address: "Haydnpl. 11", location: [52.141609,11.63884], park: "way/266613622"},
    {name: "Elbauenpark / Kugelfänger", district: "Herrenkrug", address: "Breitscheidstraße 46", location: [52.139027,11.679312], park: "way/30020890"},
    {name: "Elbauenpark, Strategen", district: "Herrenkrug", address: "Herrenkrugstraße 18", location: [52.137753,11.665789], park: "way/6175077"},
    {name: "Elbauenpark, Stundenblumen", district: "Herrenkrug", address: "Breitscheidstraße 48", location: [52.140385,11.685577], park: "way/30020890"},
    {name: "Elbelandhaus", district: "Buckau", address: "Benediktinerstraße", location: [52.113049,11.635954]},
    {name: "Endzeit Jeep", district: "Hopfengarten", address: "Carnotstraße 10", location: [52.080368,11.625407]},
    {name: "Erbaut Anno 1899 - Kleiststraße", district: "Stadtfeld Ost", address: "Kleiststraße 2", location: [52.125191,11.612781]},
    {name: "Erdachse, M. 1:1.000.000 ", district: "Altstadt", address: "Bahnhofstraße 69", location: [52.130592,11.62895]},
    {name: "Erich-Rademacher-Bad", district: "Neu Olvenstedt", address: "Johannes-Göderitz-Straße 113", location: [52.153633,11.595796]},
    {name: "Erker Maxim-Gorki-Straße", district: "Stadtfeld Ost", address: "Maxim-Gorki-Straße 6", location: [52.131969,11.618515]},
    {name: "Ernst Toller Straße", district: "Sudenburg", address: "Ernst-Toller-Straße 29", location: [52.107811,11.588989]},
    {name: "Erwin und die Holzsoldaten", district: "Alte Neustadt", address: "Walther-Rathenau-Straße 8", location: [52.13821,11.651306], park: "way/295783550", exraid: true},
    {name: "EXFA", district: "Alte Neustadt", address: "Sandtorstraße 23", location: [52.138821,11.651945]},
    {name: "Feierabendheim Süd", district: "Sudenburg", address: "Hesekielstraße 7A", location: [52.111774,11.596048]},
    {name: "Fenstermotive", district: "Stadtfeld Ost", address: "Liebknechtstraße 44", location: [52.12373,11.610421]},
    {name: "Finanzdirektion", district: "Altstadt", address: "Otto-von-Guericke-Straße 108", location: [52.134018,11.632949]},
    {name: "Fischbrunnen an der Elbe", district: "Altstadt", address: "Schleinufer 5", location: [52.131416,11.646236], park: "way/25594103", exraid: true},
    {name: "Fluss des Geldes", district: "Neue Neustadt", address: "Lübecker Str. 126A", location: [52.151459,11.63866]},
    {name: "Fußgängerbrücke im Herrenkrug über die Elbe", district: "Industriehafen", address: "Zwischenwerkstraße 2", location: [52.153851,11.675391]},
    {name: "Gedenkstätte Diesdorf", district: "Diesdorf", address: "Am Denkmal 1", location: [52.130844,11.566249]},
    {name: "GETEC Arena", district: "Brückfeld", address: "Friedrich-Ebert-Straße 72", location: [52.128757,11.66736], park: "way/304599225"},
    {name: "GETEC Arena North Side", district: "Brückfeld", address: "Friedrich-Ebert-Straße 72", location: [52.12833,11.666959]},
    {name: "Glockenklingel", district: "Reform", address: "Neptunweg 13", location: [52.08709,11.608916]},
    {name: "Grabsteine der Familie Schneiders", district: "Sudenburg", address: "Brunnerstraße 13B", location: [52.115723,11.609468], park: "way/27772022", exraid: true, nick: "Schneidersgarten"},
    {name: "Graf Schwerin August 1934", district: "Herrenkrug", address: "Herrenkrugstraße 40", location: [52.148834,11.677138], park: "way/150402153", exraid: true},
    {name: "Graffiti", district: "Stadtfeld Ost", address: "B71", location: [52.135288,11.624513], nick: "Editharing"},
    {name: "Graffiti Brenneckestr", district: "Lemsdorf", address: "B71", location: [52.102821,11.60326]},
    {name: "Graffiti Funkmast", district: "Altstadt", address: "Weitlingstraße 12", location: [52.136303,11.641777]},
    {name: "Graffiti Kunst", district: "Stadtfeld West", address: "Große Diesdorfer Str. 202", location: [52.129501,11.604249]},
    {deleted: true, name: "Graffiti Lido Duschen", district: "Alte Neustadt", address: "Sieverstorstraße 32-33", location: [52.151344,11.649406]},
    {name: "Graffiti Liebknechtstraße", district: "Stadtfeld Ost", address: "Sachsenring 21", location: [52.123116,11.617804]},
    {name: "Graffiti Luftballons", district: "Altstadt", address: "Ernst-Reuter-Allee", location: [52.128887,11.642442], park: "way/176647043"},
    {name: "Graffiti Neustädter See", district: "Neustädter See", address: "Barleber Str.", location: [52.170265,11.63267]},
    {name: "Graffiti Park", district: "Alte Neustadt", address: "Sieverstorstraße 55A", location: [52.147873,11.64394]},
    {name: "Graffiti Schnecke", district: "Stadtfeld Ost", address: "Lessingstraße 21", location: [52.126328,11.612149]},
    {name: "Gravurwerk Hubbrücke", district: "Werder", address: "Kleiner Stadtmarsch", location: [52.120747,11.638299], park: "way/5880756", exraid: true, nick: "Stadtparkseite"},
    {name: "Grosser Angerfelsen", district: "Herrenkrug", address: "Tessenowstraße 15", location: [52.136417,11.675737], park: "way/30020890"},
    {name: "Grüne Zitadelle - Hundertwasserhaus", district: "Altstadt", address: "Arthur-Ruppin-Straße", location: [52.126701,11.63357]},
    {name: "Gruson-Gewächshäuser", district: "Buckau", address: "Schönebecker Str. 129a", location: [52.113815,11.631601]},
    {name: "Guardian Angel", district: "Westerhüsen", address: "Sohlener Str. 6", location: [52.064209,11.673188]},
    {name: "Gussasphaltkocher", district: "Werder", address: "Am Winterhafen 3", location: [52.123486,11.649843], park: "way/5880756", exraid: true},
    {name: "Gustav Adolf Pfeiffer", district: "Cracau", address: "Schwarzkopfweg 2", location: [52.116249,11.667232]},
    {name: "Halbkugeln Lemsdorfer Lümmel", district: "Lemsdorf", address: "Blankenburger Str. 11", location: [52.099281,11.597336]},
    {name: "Harry Potter Spielplatz", district: "Neustädter Feld", address: "Othrichstraße 34", location: [52.155457,11.617514], park: "way/197849495", exraid: true},
    {name: "Hasselbachplatz / Plättbolzen", district: "Altstadt", address: "Breiter Weg 232", location: [52.120865,11.627843]},
    {name: "Hauptbahnhof", district: "Altstadt", address: "Bahnhofstraße 69", location: [52.130337,11.628231]},
    {name: "Hauptbahnhof Seiteneingang", district: "Altstadt", address: "Ernst-Reuter-Allee 45", location: [52.131149,11.626944]},
    {name: "Haus mit Hüten", district: "Stadtfeld Ost", address: "Olvenstedter Str. 39", location: [52.136105,11.609808], nick: "HmH"},
    {name: "Healing Power Statue", district: "Leipziger Straße", address: "Brenneckestraße", location: [52.099957,11.617117], park: "way/37388929"},
    {name: "Henning von Tresckow", district: "Alte Neustadt", address: "Henning-von-Tresckow-Straße 2", location: [52.141697,11.642134]},
    {name: "Hier Wohnte Abraham Basch", district: "Stadtfeld Ost", address: "Annastraße 17", location: [52.130554,11.608861]},
    {name: "Hier wohnte Marianne Zentawer", district: "Stadtfeld Ost", address: "Friesenstraße 51", location: [52.135227,11.610068], nick: "Friesenstraße"},
    {name: "Hier Wohnten Grete Spangenthal Und Klaus Zindel", district: "Stadtfeld Ost", address: "Goethestraße 41", location: [52.13308,11.611289], nick: "Goethestraße"},
    {name: "Holundermauer Leipziger Straße", district: "Hopfengarten", address: "Lindenplan 1", location: [52.092258,11.621087]},
    {name: "Holzkunst im Art Depot", district: "Stadtfeld West", address: "Spielhagenstraße 14", location: [52.127319,11.60489]},
    {name: "Holzschnecke", district: "Herrenkrug", address: "Herrenkrugstraße 14", location: [52.139408,11.673041], park: "way/424488437"},
    {name: "HS Magdeburg-Stendal, Haus 1", district: "Herrenkrug", address: "Breitscheidstraße 1B", location: [52.141144,11.673909]},
    {name: "Hsv Medizin Magdeburg", district: "Hopfengarten", address: "Leipziger Chaussee 55", location: [52.090614,11.621261]},
    {name: "Hubbrücke \"Von So Weit Her Bis Hier Hin\"", district: "Altstadt", address: "Hubbrücke", location: [52.119759,11.635375], nick: "Domseite"},
    {name: "Ich warte vor der Turnhalle", district: "Alte Neustadt", address: "Johann-Gottlob-Nathusius-Ring 8", location: [52.139713,11.648348], park: "way/295559352", exraid: true},
    {name: "Iss Raumstation", district: "Reform", address: "Lunochodstraße 7", location: [52.092087,11.615098]},
    {name: "Jean Burger", district: "Leipziger Straße", address: "Lennéstraße 4-5", location: [52.115273,11.621239]},
    {name: "Johann Gutenberg", district: "Alte Neustadt", address: "Gareisstraße 12", location: [52.140247,11.63952]},
    {name: "Kampfmähdrescher", district: "Sudenburg", address: "Sudenburger Wuhne 4", location: [52.118385,11.615154]},
    {name: "Kapelle of Death", district: "Fermersleben", address: "Alt Fermersleben 104", location: [52.098377,11.649622]},
    {name: "Karl-Liebknecht-Platz", district: "Sudenburg", address: "Karl-Liebknecht-Platz 1", location: [52.104862,11.588102]},
    {name: "Katholische Kirche", district: "Neu Olvenstedt", address: "St.-Josef-Straße 13A", location: [52.154083,11.57892]},
    {name: "Kettenschleppdampfer „Gustav Zeuner“", district: "Alte Neustadt", address: "Werner-Heisenberg-Straße 38", location: [52.148357,11.661748]},
    {name: "Kidsplace Frankefelde", district: "Ottersleben", address: "Zum Wiesgen 33A", location: [52.096172,11.580728]},
    {name: "Kirche Prester", district: "Prester", address: "Alt Prester 86", location: [52.103487,11.675044]},
    {name: "Klausenerstr. 45", district: "Sudenburg", address: "Klausenerstraße 49", location: [52.118015,11.604719]},
    {name: "Kleiner Leuchtturm", district: "Industriehafen", address: "Zwischenwerkstraße", location: [52.153019,11.670544], park: "way/22897160"},
    {name: "Klinik St. Marienstift", district: "Stadtfeld West", address: "Neustädter Bierweg 11A", location: [52.136959,11.600485]},
    {name: "Kopfarbeit", district: "Stadtfeld West", address: "Westring 18", location: [52.127487,11.605249]},
    {name: "Kreuzkirche", district: "Nordwest", address: "Flachsbreite 17", location: [52.151855,11.605404]},
    {name: "Kriegerdenkmal Buckau 1914", district: "Fermersleben", address: "Faberstraße 8", location: [52.097694,11.652882]},
    {name: "Kriegerdenkmal Fermersleben", district: "Fermersleben", address: "Alt Fermersleben 87A", location: [52.092785,11.654331], park: 'way/27231637'},
    {name: "Kriegerdenkmal", district: "Alt Olvenstedt", address: "Am Freiheitspl. 1", location: [52.155952,11.571209]},
    {name: "Kristall-Palast", district: "Leipziger Straße", address: "Am Fuchsberg 5", location: [52.112911,11.61912]},
    {name: "Krokodil", district: "Stadtfeld West", address: "Liebknechtstraße 79-89", location: [52.122692,11.599438]},
    {name: "Kulturdenkmal Wasserkunst 1849", district: "Neue Neustadt", address: "Wasserkunststraße 99", location: [52.154926,11.651033]},
    {name: "Kunst an der Elbe", district: "Werder", address: "Kleiner Werder", location: [52.132156,11.650037]},
    {name: "Kunst in Olve", district: "Neu Olvenstedt", address: "Johannes-Göderitz-Straße 79", location: [52.153629,11.591518]},
    {name: "KZ Gedenkstätte", district: "Stadtfeld West", address: "Liebknechtstraße 68", location: [52.123314,11.604337]},
    {name: "Landeshauptarchiv Sachsen-Anhalt", district: "Brückfeld", address: "Brückstraße 2", location: [52.128395,11.659899]},
    {name: "Leeres Wasserspiel", district: "Alte Neustadt", address: "Rogätzer Str. 13", location: [52.146633,11.653295]},
    {name: "Leibniz-Institut für Neurobiologie", district: "Leipziger Straße", address: "Brenneckestraße 6", location: [52.101871,11.611201]},
    {name: "Lemsdorfer Kunst", district: "Lemsdorf", address: "Blankenburger Str. 21", location: [52.100555,11.597927]},
    {name: "Lichtstele", district: "Werder", address: "Heinrich-Heine-Weg", location: [52.118587,11.640822], park: "way/5880756", exraid: true},
    {name: "Lindwurmbrücke", district: "Neustädter See", address: "Lumumbastraße 9", location: [52.169106,11.628008]},
    {name: "Little John Bike", district: "Neue Neustadt", address: "K1170 3", location: [52.161312,11.635264]},
    {name: "LU FT Magdeburger Halbkugeln", district: "Herrenkrug", address: "Breitscheidstraße 3-4", location: [52.141499,11.67533]},
    {name: "Luise, Königin von Preussen", district: "Altstadt", address: "Walther-Rathenau-Straße 4", location: [52.139713,11.635723], park: "way/9827672", exraid: true},
    {name: "Lübecker Privatweg, Streetart Detektiv", district: "Neue Neustadt", address: "Lübecker Privatweg 1", location: [52.164463,11.632186]},
    {name: "Magdeburg fährt Grün", district: "Leipziger Straße", address: "Semmelweisstraße 2A", location: [52.109444,11.619825]},
    {name: "Markus Gemeinde", district: "Stadtfeld West", address: "Heinrich-Zille-Straße 5", location: [52.130196,11.587504]},
    {name: "Martins Gemeinde", district: "Alte Neustadt", address: "Salzwedeler Str. 4", location: [52.148697,11.65332]},
    {name: "Mausoleum C.F. Budenberg", district: "Buckau", address: "Budenbergstraße 9", location: [52.108543,11.636356]},
    {name: "Mechthild von Magdeburg", district: "Altstadt", address: "Schleinufer", location: [52.125721,11.638008]},
    {name: "Meerjungfrau", district: "Werder", address: "Kleiner Stadtmarsch", location: [52.11924,11.639757], park: "way/5880756", exraid: true},
    {name: "MICO-Pumpe Helmstedter", district: "Sudenburg", address: "Helmstedter Str. 54", location: [52.114971,11.602646]},
    {name: "Ministerium der Finanzen", district: "Stadtfeld Ost", address: "Editharing 42", location: [52.132683,11.622254]},
    {name: "Mutter Teresa", district: "Cracau", address: "Mühlweg 11", location: [52.121357,11.665217]},
    {name: "Nachdenken Im Klinikum Magdeburg", district: "Alt Olvenstedt", address: "Oberer Sülzeweg 25", location: [52.158146,11.579957], park: "way/184449905"},
    {name: "Nackte Magdeburger", district: "Neustädter See", address: "Lumumbastraße 15", location: [52.166428,11.632191]},
    {name: "Naturmauer", district: "Reform", address: "Apollostraße 15", location: [52.090729,11.609923]},
    {name: "Nautilus", district: "Herrenkrug", address: "Herrenkrugstraße 18", location: [52.134869,11.664994], park: "way/6175077"},
    {name: "Neuer Sudenburger Friedhof", district: "Sudenburg", address: "Otto-Richter-Straße 45", location: [52.113148,11.585842]},
    {name: "Neustädter Friedhof, Sockel des gestohlenen Engel", district: "Neue Neustadt", address: "Mittagstraße 9", location: [52.151287,11.629927]},
    {name: "Neustädter See", district: "Neustädter See", address: "Am Seeufer 9", location: [52.172245,11.636692]},
    {name: "Neustädtersee, Pumpe am Altersheim", district: "Neustädter See", address: "Heideweg 48", location: [52.170883,11.643472]},
    {name: "Notwasserpumpe Hospitalstraße", district: "Neue Neustadt", address: "Hospitalstraße 5", location: [52.154804,11.640614]},
    {name: "Notwasserpumpe Morgenstraße", district: "Neue Neustadt", address: "Morgenstraße 63", location: [52.15794,11.640862]},
    {name: "Oberfinanzdirektion", district: "Altstadt", address: "Stresemannstraße 4", location: [52.133694,11.631972]},
    {name: "Ökozentrum Magdeburg", district: "Stadtfeld West", address: "Harsdorfer Str. 49", location: [52.135277,11.596242]},
    {name: "Otto von Guericke - Brunnen", district: "Altstadt", address: "Bei der Hauptwache 3", location: [52.131832,11.639949]},
    {name: "Otto-von-Guericke-Universität", district: "Alte Neustadt", address: "Denhardtstraße 18", location: [52.139832,11.640374], park: "way/273248911", exraid: true, nick: "Uni Schriftzug"},
    {name: "OVGU Heissdampf-Hochdruck-Lokomobile", district: "Alte Neustadt", address: "Gustav-Adolf-Straße 15", location: [52.139736,11.644889]},
    {name: "Palm Fountain - Allee Center", district: "Altstadt", address: "Prämonstratenserberg", location: [52.129147,11.638456], park: "way/25185480", exraid: true},
    {name: "Paul Niemeyer Denkmal", district: "Werder", address: "Niemeyerweg", location: [52.106754,11.657681], park: "way/5880756"},
    {name: "Pavillon", district: "Stadtfeld Ost", address: "Albert-Vater-Straße 9", location: [52.139866,11.629824]},
    {name: "Poliklinik Sket", district: "Leipziger Straße", address: "Freie Str. 38", location: [52.105045,11.631012]},
    {name: "Power Station, Erich-Weinert-Straße", district: "Buckau", address: "Erich-Weinert-Straße 44", location: [52.114208,11.629316], park: "way/97287792", exraid: true},
    {name: "Pumpe G. Hauptmann-Str.", district: "Stadtfeld Ost", address: "Gerhart-Hauptmann-Straße 15", location: [52.132454,11.616352]},
    {name: "Pumpe Heidestraße", district: "Sudenburg", address: "Heidestraße 14-15", location: [52.108025,11.603041]},
    {name: "Pumpe Ottersleben", district: "Ottersleben", address: "Ernst-Wille-Straße 38-39", location: [52.090036,11.574036]},
    {name: "Radiator", district: "Beyendorfer Grund", address: "Leipziger Chaussee 91", location: [52.077503,11.620125]},
    {name: "Rayonhaus Leipziger Straße 8", district: "Leipziger Straße", address: "Leipziger Str. 7", location: [52.114025,11.619281]},
    {name: "Reformbrunnen", district: "Reform", address: "Kosmos-Promenade", location: [52.090103,11.611564]},
    {name: "Roter Gang", district: "Herrenkrug", address: "Herrenkrugstraße 18", location: [52.138306,11.666251], park: "way/6175077"},
    {name: "Salzquelle", district: "Werder", address: "Niemeyerweg", location: [52.107155,11.654969], park: "way/5880756"},
    {name: "Sandmann", district: "Herrenkrug", address: "Herrenkrugstraße 18", location: [52.136417,11.670594], park: "way/30020890"},
    {name: "Sankt Maria Hilf Kirche", district: "Ottersleben", address: "Müllergasse 2", location: [52.090545,11.578117]},
    {name: "Sankt Petri Kirche", district: "Altstadt", address: "Neustädter Str. 1A", location: [52.13332,11.645133]},
    {name: "Sankt-Nicolai-Kirche", district: "Neue Neustadt", address: "Nicolaistraße 8", location: [52.155838,11.638322]},
    {name: "Schafkuh", district: "Ottersleben", address: "Am Birnengarten 3", location: [52.088715,11.563516]},
    {name: "Schauspielhaus Magdeburg", district: "Altstadt", address: "Otto-von-Guericke-Straße 64", location: [52.123398,11.628647]},
    {name: "Schlafende Schönheit", district: "Stadtfeld West", address: "Spielhagenstraße 60", location: [52.127983,11.597104], park: "way/55279407", exraid: true},
    {name: "Schleckerbiene", district: "Buckau", address: "Karl-Schmidt-Straße 45", location: [52.102837,11.641193], park: "way/100348319", exraid: true},
    {name: "Schubkarre", district: "Stadtfeld Ost", address: "Stormstraße 15", location: [52.138805,11.608778]},
    {name: "Schulkomplex Albert-Vater-Straße", district: "Stadtfeld Ost", address: "Albert-Vater-Straße 7", location: [52.139996,11.615286]},
    {name: "Schwarze Kunst", district: "Neue Neustadt", address: "Umfassungsstraße 76a", location: [52.154984,11.63217]},
    {name: "Schwarze Pumpe", district: "Werder", address: "Badestraße 2", location: [52.128723,11.65041]},
    {name: "Schwerkran Elefant", district: "Alte Neustadt", address: "Wittenberger Str. 17", location: [52.149151,11.660668]},
    {name: "Schützende Mutter", district: "Nordwest", address: "Ginsterbreite 21", location: [52.155128,11.603308], park: "way/27060217", exraid: true},
    {name: "Skulptur Fröhliche Frau", district: "Sudenburg", address: "Wiener Straße", location: [52.112953,11.608056]},
    {name: "Skulptur I Mensa", district: "Leipziger Straße", address: "Brenneckestraße 4B", location: [52.101601,11.614984], park: "way/37387303"},
    {name: "Skulpturenpark/Jaguar", district: "Altstadt", address: "Regierungsstraße 6", location: [52.12772,11.636788], park: "way/31761380"},
    {name: "Sowjetischer Ehrenfriedhof", district: "Alte Neustadt", address: "Große Weinhofstraße", location: [52.143799,11.646197]},
    {name: "Spielplatz Buckau", district: "Leipziger Straße", address: "Grusonstraße 8B", location: [52.107681,11.628183], park: "way/31115803", exraid: true},
    {name: "Sportkomplex Seilerwiesen", district: "Werder", address: "Am Winterhafen 8", location: [52.120594,11.646641], park: "way/5880756", exraid: true},
    {name: "Stadtbibliothek Magdeburg", district: "Altstadt", address: "Breiter Weg 109", location: [52.136845,11.6389]},
    {name: "Station Sudenburg", district: "Sudenburg", address: "Am Sudenburger Bahnhof 2", location: [52.120415,11.597279]},
    {name: "Statue Pfeiffersche Stiftung", district: "Cracau", address: "Schwarzkopfweg", location: [52.116356,11.666139]},
    {name: "Statue Sportgymnasium", district: "Cracau", address: "Friedrich-Ebert-Straße 48", location: [52.12328,11.664376]},
    {name: "Sternstraße 31", district: "Altstadt", address: "Sternstraße 31", location: [52.119167,11.627575]},
    {name: "Stolpersteine Einsteinstraße", district: "Altstadt", address: "Otto-von-Guericke-Straße 48", location: [52.122517,11.627476]},
    {name: "Street Art", district: "Neue Neustadt", address: "Haldensleber Str. 1", location: [52.159168,11.634065]},
    {name: "Streetart 24", district: "Sudenburg", address: "Halberstädter Str. 96-98", location: [52.111485,11.60364]},
    {name: "Säule Bahnhof Neustadt", district: "Alte Neustadt", address: "Lüneburger Str. 22", location: [52.147865,11.639375]},
    {name: "Südfriedhof Die Hüterin", district: "Leipziger Straße", address: "Leipziger Str. 47", location: [52.106895,11.622799]},
    {name: "Südfriedhof Kapelle", district: "Leipziger Straße", address: "Leipziger Str. 47", location: [52.107155,11.620982]},
    {name: "Südfriedhof, Tür zur Anderen Seite", district: "Leipziger Straße", address: "Leipziger Str. 28A", location: [52.108387,11.620258]},
    {name: "Tattoo Graffiti", district: "Alte Neustadt", address: "Stendaler Str. 31", location: [52.150314,11.651618]},
    {name: "Technikmuseum", district: "Leipziger Straße", address: "Dodendorfer Str. 65", location: [52.103737,11.625546]},
    {name: "Tessenows Erbe", district: "Herrenkrug", address: "Tessenowstraße 2", location: [52.132778,11.66669]},
    {name: "Theater an der Angel", district: "Werder", address: "Zollstraße 19", location: [52.135326,11.654621]},
    {name: "Toepffer-Villa", district: "Stadtfeld Ost", address: "Liebknechtstraße 10", location: [52.123852,11.615721]},
    {name: "Toller Hecht", district: "Salbke", address: "Am Unterhorstweg 10", location: [52.086567,11.664533]},
    {name: "Troja Statue", district: "Altstadt", address: "Erich-Weinert-Straße 27", location: [52.114052,11.628258]},
    {name: "Turm Hundertwasser", district: "Altstadt", address: "Kreuzgangstraße", location: [52.127171,11.634887]},
    {name: "Turmuhr Ottersleben", district: "Ottersleben", address: "Alt Ottersleben 40", location: [52.088478,11.570251]},
    {name: "Uniklinikum / Mutter Mit Kind", district: "Leipziger Straße", address: "Leipziger Str. 45D", location: [52.101482,11.619031]},
    {name: "VDTC", district: "Alte Neustadt", address: "Werner-Heisenberg-Straße", location: [52.141384,11.656794]},
    {name: "Vollportal -Wippdrehkran Kran 20", district: "Alte Neustadt", address: "Werner-Heisenberg-Straße 33", location: [52.146473,11.66028]},
    {name: "Wächterin", district: "Sudenburg", address: "Wolfenbütteler Str. 12", location: [52.114616,11.600541]},
    {name: "Wandkunst", district: "Neue Neustadt", address: "Kastanienstraße 16", location: [52.162586,11.641619]},
    {name: "Wappen Adolf Mittag", district: "Werder", address: "Arkonastraße 1", location: [52.133163,11.652818]},
    {name: "Wartehäuschen Herrenkrug", district: "Herrenkrug", address: "Herrenkrugstraße 194", location: [52.151302,11.679046], park: "way/150402153", exraid: true},
    {name: "Wasser Marsch!", district: "Altstadt", address: "Schellingstraße 4", location: [52.115646,11.629254]},
    {name: "Wasserpumpe", district: "Stadtfeld Ost", address: "Alexander-Puschkin-Straße 50", location: [52.132816,11.606946], nick: "Pauluskirche"},
    {name: "Wasserspiele", district: "Neu Olvenstedt", address: "St.-Josef-Straße 34", location: [52.149872,11.581864]},
    {name: "Wasserturm Salbke", district: "Salbke", address: "Alt Salbke 111E", location: [52.082485,11.666805]},
    {name: "Westernplan 1945", district: "Stadtfeld Ost", address: "Klopstockstraße 13", location: [52.137051,11.617642]},
    {name: "Windspiel", district: "Hopfengarten", address: "Gustav-Ricker-Straße 4", location: [52.08646,11.638298]},
    {name: "Wood Statue", district: "Neue Neustadt", address: "Klosterwuhne 27", location: [52.166401,11.64205]},
    {name: "Zoo, Bronzener Widder", district: "Neustädter See", address: "Pablo-Neruda-Straße 10", location: [52.16827,11.638449]},
    {name: "Zoo, Der Ponystall", district: "Neue Neustadt", address: "Klosterwuhne 25", location: [52.167717,11.640037]},
    {name: "Zoo, Zoowelle", district: "Neue Neustadt", address: "Zooallee", location: [52.165314,11.645291], park: "way/42075717", exraid: true},
    {name: "Zug Spray", district: "Alte Neustadt", address: "Sieverstorstraße 33", location: [52.150318,11.650093]},
    {name: "Zum Pelikan", district: "Altstadt", address: "Himmelreichstraße 4", location: [52.129059,11.633474]},
    {name: "Zweierpack Russian Style", district: "Neustädter See", address: "Am Seeufer 10", location: [52.171268,11.636608]},
    // gyms below were added later - no sorting required
    {name: "Wasserturm Malerei", district: "Salbke", address: "Alt Salbke 20", location: [52.077903,11.66734]},
    {name: "Eurofusions Statue", district: "Westerhüsen", address: "Alt Westerhüsen 49A", location: [52.061427,11.678522]},
    {name: "Merkurstatue", district: "Salbke", address: "Alt Salbke 49", location: [52.072258,11.67038]},
    {name: "Stadtpumpe Salbke", district: "Salbke", address: "Alt Salbke 65", location: [52.072992,11.670269]},
    {name: "Kunst am Klinikum", district: "Alt Olvenstedt", address: "Birkenallee 34", location: [52.156825,11.583394]},
    {name: "Die Kuh", district: "Neustädter Feld", address: "Milchweg 1", location: [52.162102,11.62061]},
    {name: "steel construction mural", district: "Brückfeld", address: "Berliner Chaussee 102", location: [52.130587,11.680261]},
    {name: "Nihil Sine Deo, Nichts Ohne Gott", district: "Sudenburg", address: "Braunschweiger Str. 30", location: [52.113144,11.59681]},
    {name: "Siegessäule Magdeburg", district: "Stadtfeld West", address: "Große Diesdorfer Str. 160A", location: [52.127288,11.585099]},
    {name: "Gedenksäulen / Westfriedhof / Feld XVIII", district: "Diesdorf", address: "Diesdorfer Graseweg 26", location: [52.123844,11.575425]},
    {name: "St. Stephani", district: "Ottersleben", address: "Alt Ottersleben 65", location: [52.087057,11.578938]},
    {name: "Halbkugeln Ottersleben", district: "Ottersleben", address: "Geschwister-Scholl-Straße 31", location: [52.089742,11.572509]},
    {name: "Siedlung Cracau", district: "Cracau", address: "Mehringstraße 15", location: [52.12307,11.660761]},
    {name: "Fire in the Hole MD", district: "Altstadt", address: "Schleinufer 1", location: [52.135792,11.651157], park: "way/27732059"},
    {name: "Südfriedhof / Black Obelisk III", district: "Leipziger Straße", address: "Bertolt-Brecht-Straße 2", location: [52.104689,11.622919]},
    {name: "Pferd an der Wand", district: "Sudenburg", address: "Lemsdorfer Weg 28", location: [52.109207,11.605525]},
    {name: "Engel auf Erden", district: "Stadtfeld West", address: "Große Diesdorfer Str. 103", location: [52.127942,11.581919]},
    {name: "Raumfahrt-Comic", district: "Brückfeld", address: "Gübser Weg 17", location: [52.12687,11.6752]},
    //{name: "", district: "", address: "", location: []},
    ],
    // local names for Level 12 cells
    cells: {
        '47af5f5': 'Zelle 1 (Nördl. Altstadt)',
        '47a5f5f': 'Zelle 2 (Südl. Altstadt)',
        '47a5f59': 'Zelle 3 (MD West)',
        '47af5f7': 'Zelle 4 (Stadtfeld)',
        '47af5f1': 'Zelle 5 (MD Nordwest)',
        '47af5f3': 'Zelle 6 (MD Nord)',
        '47af58d': 'Zelle 7 (MD Nordost)',
        '47af58b': 'Zelle 8 (Elbauenpark)',
        '47a5f61': 'Zelle 9 (Rotehornpark)',
        '47a5f67': 'Zelle 10 (Buckau/Fermersleben)',
        '47a5f5d': 'Zelle 11 (MD Süd)',
        '47af5fb': 'Zelle 16 (Olvenstedt)',
        '47af589': 'Zelle 23 (Elbauenpark Ost)',
        /*
        '47af5f5': 'Zelle A-1 (Nördl. Altstadt)',
        '47a5f5f': 'Zelle A-2 (Südl. Altstadt)',
        '47a5f59': 'Zelle B-3 (MD West)',
        '47af5f7': 'Zelle A-4 (Stadtfeld)',
        '47af5f1': 'Zelle A-5 (MD Nordwest)',
        '47af5f3': 'Zelle A-6 (MD Nord)',
        '47af58d': 'Zelle D-7 (MD Nordost)',
        '47af58b': 'Zelle D-8 (Elbauenpark)',
        '47a5f61': 'Zelle C-9 (Rotehornpark)',
        '47a5f67': 'Zelle C-10 (Buckau/Fermersleben)',
        '47a5f5d': 'Zelle B-11 (MD Süd)',
        '47af5fb': 'Zelle A-16 (Olvenstedt)',
        '47af589': 'Zelle D-23 (Elbauenpark Ost)',
        */
        '47af5f54': 'Zelle 1a',
        '47af5f44': 'Zelle 1c',
        '47af5f4c': 'Zelle 1d',
        '47a5f5e4': 'Zelle 2a',
        '47a5f5fc': 'Zelle 2d',
        '47a5f594': 'Zelle 3a',
        '47a5f584': 'Zelle 3c',
        '47af5f14': 'Zelle 5a',
        '47af5f0c': 'Zelle 5c',
        '47af5f24': 'Zelle 6c',
        '47af58c4': 'Zelle 7a',
        '47af58cc': 'Zelle 7b',
        '47af58a4': 'Zelle 8a',
        '47af58ac': 'Zelle 8b',
        '47af58b4': 'Zelle 8c',
        '47af58bc': 'Zelle 8d',
        '47a5f614': 'Zelle 9a',
        '47a5f60c': 'Zelle 9b',
        '47a5f604': 'Zelle 9c',
        '47a5f664': 'Zelle 10a',
        '47a5f674': 'Zelle 10c',
        '47a5f5cc': 'Zelle 11b',
        '47a5f5c4': 'Zelle 11c',
        '47af5fbc': 'Zelle 16b',
        '47af5894': 'Zelle 23c',
    },
    };
}
