const perfumeCategoryMap = {
  "La Curie Incendo": "Woody",
  "Parfums Dusita Issara": "Aromatic Fougere",
  "Stéphane Humbert Lucas 777 Black Gemstone": "Amber",
  "Roja Parfums Danger Pour Homme": "Amber Fougere",
  "Fort and Manlé Fatih Sultan Mehmed": "Floral",
  "Parfums de Marly Herod": "Woody Spicy",
  "Ormonde Jayne Ormonde Man": "Woody Spicy",
  "Lubin Korrigan": "Amber Vanila",
  "M. Micallef Emir": "Amber Oud",
  "Fort and Manlé Süleyman Le Magnifique": "Floral",
  "Auphorie Miyako": "Fruity Floral",
  "Histoires de Parfums 1740 Marquis De Sade": "Leather",
  "Parfums de Nicolaï New York Intense": "Woody Aromatic",
  "Puredistance M": "Leather",
  "Histoires de Parfums 1725 Casanova": "Aromatic Fougere",
  "Nishane Hacivat": "Fruity",
  "Histoires de Parfums 1828 Jules Verne": "Citrus Aromatic",
  "Tauer Perfumes Au Coeur Du Désert": "Amber",
  "Xerjoff Naxos": "Tobacco",
  "Shalini Parfum Jardin Nocturne": "Floral",
  "St. Clair Scents Casablanca": "Chypre",
  "Xerjoff Nio": "Citrus Aromatic",
  "Les Indemodables Fougère Emeraude": "Aromatic Fougere",
  "Senyokô Duo des Fleurs": "Floral",
  "Senyokô Migration de L’Arbre": "Woody Aromatic",
  "Kemi 'ilm": "Oud",
  "Clive Christian X for Men": "Amber Fougere",
  "Bortnikoff Sayat Nova": "Oud",
  "Atelier Cologne Jasmin Angélique": "Floral Green",
  "Etat Libre d'Orange Jasmin Et Cigarette": "Woody Floral",
  "Sylvaine Delacourte Olyssia": "Floral",
  "Slumberhouse Kiste": "Fruity Floral",
  "Profumum Roma Victrix": "Woody Aromatic",
  "Pomare's Stolen Perfume Rasa": "Oud",
  "Atelier Materi Peau d'Ambrette": "",
  "Stéphane Humbert Lucas 777 Soleil de Jeddah": "Floral",
  "Unum Io Non Ho Mani Che Mi Accarezzino Il Volto": "Incense",
  "Senyokô La Tsarine": "Leather",
  "Fragrance Du Bois Sahraa Oud": "Woody Spicy",
  "Francesca Bianchi The Lover's Tale": "Leather",
  "Frassaï Verano Porteño": "Floral",
  "Perris Monte Carlo Jasmin de Pays": "Floral",
  "Les Indemodables Rose de Jamal": "Floral",
  "Di Ser Kyara": "Woody Floral",
  "Mendittorosa Le Mat": "Woody Floral",
  "Frassaï Blondine": "Floral",
  "Pomare's Stolen Perfume Venetian Flower": "Floral",
  "Anthologie de Grands Crus Jasmin de Cherifa": "Floral",
  "Grandiflora Madagascan Jasmine": "Floral",
  "Les Indemodables Oriental Velours": "Leather",
  "fūm Jurassic Flower": "Woody Floral",
  "Chronotope Perfume Playalinda": "Fruity Floral",
  "Frassaï A Fuego Lento": "Woody Floral",
  "Frassaï Tian Di": "Fruity Floral",
  "Providence Perfume Co Hindu Honeysuckle": "Floral",
  "Di Ser Kurokami": "Woody Floral",
  "fūm Nerola": "Floral",
  "Chronotope Perfume Spite": "Floral",
  "fūm Magnifígue": "Woody",
  "Carthusia Gelsomini Di Capri": "Floral",
  "Pomare's Stolen Perfume Beulah": "Woody",
  "Pryn Parfum Aksum": "Amber",
  "Hendley Perfumes Bourbon": "",
  "Sana Jardin Savage Jasmine": "Floral",
  "St. Clair Scents Song of Aubrac": "",
  "Maher Olfactive Nefertiti": "Floral",
  "Canoe Goods Skive": "Leather",
  "Boadicea the Victorious Nemer": "Oud",
  "Lubin Idole de Lubin": "",
  "Filippo Sorcinelli – SAUF Voix Humaine 8": "",
  "Filippo Sorcinelli – SAUF Plein Jeu III–V": "",
  "Isabey Fleur Nocturne": "Floral",
  "Chatillon Lux Weinstrasse": "Fruity",
  "Pryn Parfum Aranyaka": "",
  "Marc–Antoine Barrois Ganymede": "",
  "Francesca Bianchi Etruscan Water": "Chypre",
  "Cartier Déclaration Parfum": "Woody",
  "BeauFort London Terror & Magnificence": "Amber",
  "Neela Vermeire Creations Trayee": "Amber Spicy",
  "Parfums Dusita Melodie de L'Amour": "Floral",
  "Filippo Sorcinelli – SAUF Contre Bombarde 32": "Incense",
  "Exaltatum St. Paul's": "Woody Floral",
  "Auphorie Song of Everlasting Sorrow": "Incense",
  "Jorum Studio Fantosmia": "Woody Spicy",
  "Haeckels Pegwell Bay – GPS 21'30\"E": "Citrus Aromatic",
  "Bvlgari Le Gemme Gyan": "Incense",
  "Guerlain Songe d'un Bois d'Été": "Amber Spicy",
  "L'Artisan Parfumeur Timbuktu": "Woody Spicy",
  "Serge Lutens Chergui": "Amber",
  "Serge Lutens Borneo 1834": "Patchouli",
  "Serge Lutens La Religieuse": "Floral",
  "Frederic Malle Portrait of a Lady": "Floral",
  "4160 Tuesdays The Waft from the Loft": "Amber",
  "Amouage Interlude Man": "Amber",
  "Strangelove lostinflowers": "Floral",
  "L'Artisan Parfumeur Séville à l'Aube": "Floral",
  "Christian Dior Eau Sauvage Parfum": "Citrus Aromatic",
  "Neandertal Us": "Woody",
  "Eau d'Italie Baume du Doge": "Woody Spicy",
  "Masque Milano Russian Tea": "Aromatic Spicy",
  "Strangelove fallintostars": "Oud",
  "Ormonde Jayne Black Gold": "Woody Aromatic",
  "Ormonde Jayne Nawab of Oudh": "Woody Floral",
  "Henry Jacques Onction Pure Perfume": "Woody Floral",
  "Louis Vuitton Nuit de Feu": "Incense",
  "Centauri Perfumes Dendera": "Woody Spicy",
  "Parfum Satori Satori": "Amber",
  "Thameen Carved Oud": "Woody Spicy",
  "Parfum Satori Mizunara": "Woody Aromatic",
  "Bogue Profumo LiTA": "Woody Floral",
  "Bogue Profumo Maai": "Chypre",
  "Chanel Les Exclusifs de Chanel Coromandel Eau de Parfum": "Amber",
  "Louis Vuitton Ombre Nomade": "Woody Floral",
  "January Scent Project Burvuvu": "Woody Floral",
  "Xerjoff Oud Stars Alexandria II": "Woody Floral",
  "Ormonde Jayne Tolu": "Amber",
  "Olfactive Studio Woody Mood": "Woody",
  "Stora Skuggan Mistpouffer": "",
  "Memo African Leather": "Leather",
  "Comme des Garçons Kyoto": "Woody Aromatic",
  "Ormonde Jayne Ormonde Woman": "",
  "Les Indemodables Vanille Havane": "",
  "Serge Lutens Santal Majuscule": "Woody Floral",
  "Unum LAVS": "Incense",
  "Parfums Quartana Poppy Soma": "Fruity Floral",
  "Tom Ford Private Blend Oud Wood": "Woody Spicy",
  "Stéphane Humbert Lucas 777 Oumma": "Oud",
  "Zoologist Perfumes Tyrannosaurus Rex": "Woody Floral",
};

export const perfumes = [
  {
    date: "4/21/2020",
    name: "La Curie Incendo",
  },
  {
    date: "4/22/2020",
    name: "Parfums Dusita Issara",
  },
  {
    date: "4/23/2020",
    name: "Stéphane Humbert Lucas 777 Black Gemstone",
  },
  {
    date: "4/24/2020",
    name: "Roja Parfums Danger Pour Homme",
  },
  {
    date: "4/26/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "4/27/2020",
    name: "Parfums de Marly Herod",
  },
  {
    date: "4/28/2020",
    name: "Ormonde Jayne Ormonde Man",
  },
  {
    date: "4/29/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "4/30/2020",
    name: "Lubin Korrigan",
  },
  {
    date: "5/1/2020",
    name: "M. Micallef Emir",
  },
  {
    date: "5/2/2020",
    name: "Fort and Manlé Süleyman Le Magnifique",
  },
  {
    date: "5/3/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "5/4/2020",
    name: "Ormonde Jayne Ormonde Man",
  },
  {
    date: "5/5/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "5/6/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "5/7/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "5/8/2020",
    name: "Stéphane Humbert Lucas 777 Black Gemstone",
  },
  {
    date: "5/9/2020",
    name: "Histoires de Parfums 1740 Marquis De Sade",
  },
  {
    date: "5/10/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "5/10/2020",
    name: "Parfums de Nicolaï New York Intense",
  },
  {
    date: "5/11/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "5/12/2020",
    name: "Puredistance M",
  },
  {
    date: "5/13/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "5/14/2020",
    name: "Histoires de Parfums 1725 Casanova",
  },
  {
    date: "5/14/2020",
    name: "Nishane Hacivat",
  },
  {
    date: "5/15/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "5/16/2020",
    name: "Histoires de Parfums 1828 Jules Verne",
  },
  {
    date: "5/17/2020",
    name: "Lubin Korrigan",
  },
  {
    date: "5/18/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "5/19/2020",
    name: "Xerjoff Naxos",
  },
  {
    date: "5/20/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "5/21/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "5/22/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "5/23/2020",
    name: "St. Clair Scents Casablanca",
  },
  {
    date: "5/24/2020",
    name: "Xerjoff Nio",
  },
  {
    date: "5/25/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "5/26/2020",
    name: "Les Indemodables Fougère Emeraude",
  },
  {
    date: "5/27/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "5/28/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "5/29/2020",
    name: "Xerjoff Nio",
  },
  {
    date: "5/30/2020",
    name: "Xerjoff Nio",
  },
  {
    date: "5/31/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "6/1/2020",
    name: "Kemi 'ilm",
  },
  {
    date: "6/2/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "6/3/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "6/4/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "6/5/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "6/6/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/6/2020",
    name: "Clive Christian X for Men",
  },
  {
    date: "6/7/2020",
    name: "Xerjoff Nio",
  },
  {
    date: "6/7/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "6/8/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "6/9/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "6/10/2020",
    name: "Bortnikoff Sayat Nova",
  },
  {
    date: "6/10/2020",
    name: "Atelier Cologne Jasmin Angélique",
  },
  {
    date: "6/11/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "6/12/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/12/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/13/2020",
    name: "Etat Libre d'Orange Jasmin Et Cigarette",
  },
  {
    date: "6/14/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "6/15/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "6/15/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "6/16/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "6/17/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/18/2020",
    name: "Sylvaine Delacourte Olyssia",
  },
  {
    date: "6/19/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/20/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "6/20/2020",
    name: "Slumberhouse Kiste",
  },
  {
    date: "6/21/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "6/21/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/22/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "6/22/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/23/2020",
    name: "Etat Libre d'Orange Jasmin Et Cigarette",
  },
  {
    date: "6/24/2020",
    name: "Ormonde Jayne Ormonde Man",
  },
  {
    date: "6/25/2020",
    name: "Profumum Roma Victrix",
  },
  {
    date: "6/26/2020",
    name: "Xerjoff Nio",
  },
  {
    date: "6/26/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/27/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "6/27/2020",
    name: "Profumum Roma Victrix",
  },
  {
    date: "6/28/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/29/2020",
    name: "Pomare's Stolen Perfume Rasa",
  },
  {
    date: "6/29/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "6/30/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "7/1/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/2/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "7/3/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "7/4/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "7/5/2020",
    name: "Atelier Materi Peau d'Ambrette",
  },
  {
    date: "7/5/2020",
    name: "Stéphane Humbert Lucas 777 Soleil de Jeddah",
  },
  {
    date: "7/6/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/7/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/8/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "7/9/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "7/10/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/11/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/12/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "7/13/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/14/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "7/14/2020",
    name: "Unum Io Non Ho Mani Che Mi Accarezzino Il Volto",
  },
  {
    date: "7/15/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "7/16/2020",
    name: "Senyokô La Tsarine",
  },
  {
    date: "7/17/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/17/2020",
    name: "Fragrance Du Bois Sahraa Oud",
  },
  {
    date: "7/18/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/19/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "7/20/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "7/21/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "7/22/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "7/23/2020",
    name: "Francesca Bianchi The Lover's Tale",
  },
  {
    date: "7/23/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "7/24/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "7/25/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "7/26/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "7/27/2020",
    name: "Perris Monte Carlo Jasmin de Pays",
  },
  {
    date: "7/28/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "7/29/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "7/29/2020",
    name: "Les Indemodables Rose de Jamal",
  },
  {
    date: "7/30/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "7/30/2020",
    name: "Di Ser Kyara",
  },
  {
    date: "7/31/2020",
    name: "Mendittorosa Le Mat",
  },
  {
    date: "7/31/2020",
    name: "Frassaï Blondine",
  },
  {
    date: "8/1/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "8/2/2020",
    name: "Pomare's Stolen Perfume Venetian Flower",
  },
  {
    date: "8/2/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "8/3/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "8/3/2020",
    name: "Anthologie de Grands Crus Jasmin de Cherifa",
  },
  {
    date: "8/4/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "8/5/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "8/6/2020",
    name: "Stéphane Humbert Lucas 777 Black Gemstone",
  },
  {
    date: "8/7/2020",
    name: "Anthologie de Grands Crus Jasmin de Cherifa",
  },
  {
    date: "8/8/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "8/8/2020",
    name: "Grandiflora Madagascan Jasmine",
  },
  {
    date: "8/10/2020",
    name: "Les Indemodables Oriental Velours",
  },
  {
    date: "8/10/2020",
    name: "fūm Jurassic Flower",
  },
  {
    date: "8/10/2020",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "8/11/2020",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "8/12/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "8/13/2020",
    name: "Anthologie de Grands Crus Jasmin de Cherifa",
  },
  {
    date: "8/14/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "8/14/2020",
    name: "Auphorie Miyako",
  },
  {
    date: "8/15/2020",
    name: "Perris Monte Carlo Jasmin de Pays",
  },
  {
    date: "8/16/2020",
    name: "Chronotope Perfume Playalinda",
  },
  {
    date: "8/16/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "8/17/2020",
    name: "Frassaï Blondine",
  },
  {
    date: "8/18/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "8/19/2020",
    name: "Frassaï A Fuego Lento",
  },
  {
    date: "8/20/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "8/20/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "8/21/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "8/22/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "8/23/2020",
    name: "Frassaï Tian Di",
  },
  {
    date: "8/23/2020",
    name: "Providence Perfume Co Hindu Honeysuckle",
  },
  {
    date: "8/24/2020",
    name: "Di Ser Kurokami",
  },
  {
    date: "8/24/2020",
    name: "Fort and Manlé Süleyman Le Magnifique",
  },
  {
    date: "8/25/2020",
    name: "Frassaï A Fuego Lento",
  },
  {
    date: "8/26/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "8/27/2020",
    name: "Frassaï Blondine",
  },
  {
    date: "8/28/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "8/29/2020",
    name: "fūm Nerola",
  },
  {
    date: "8/30/2020",
    name: "Bortnikoff Sayat Nova",
  },
  {
    date: "8/31/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "9/1/2020",
    name: "Frassaï A Fuego Lento",
  },
  {
    date: "9/1/2020",
    name: "Chronotope Perfume Spite",
  },
  {
    date: "9/2/2020",
    name: "fūm Magnifígue",
  },
  {
    date: "9/2/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "9/3/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "9/3/2020",
    name: "Carthusia Gelsomini Di Capri",
  },
  {
    date: "9/4/2020",
    name: "Pomare's Stolen Perfume Beulah",
  },
  {
    date: "9/5/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "9/5/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "9/6/2020",
    name: "Frassaï Tian Di",
  },
  {
    date: "9/7/2020",
    name: "Pryn Parfum Aksum",
  },
  {
    date: "9/8/2020",
    name: "Frassaï Tian Di",
  },
  {
    date: "9/8/2020",
    name: "Hendley Perfumes Bourbon",
  },
  {
    date: "9/9/2020",
    name: "Sana Jardin Savage Jasmine",
  },
  {
    date: "9/10/2020",
    name: "St. Clair Scents Song of Aubrac",
  },
  {
    date: "9/10/2020",
    name: "Frassaï Tian Di",
  },
  {
    date: "9/10/2020",
    name: "Frassaï Blondine",
  },
  {
    date: "9/11/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "9/12/2020",
    name: "Maher Olfactive Nefertiti",
  },
  {
    date: "9/12/2020",
    name: "Canoe Goods Skive",
  },
  {
    date: "9/13/2020",
    name: "Frassaï Tian Di",
  },
  {
    date: "9/14/2020",
    name: "Boadicea the Victorious Nemer",
  },
  {
    date: "9/15/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "9/15/2020",
    name: "Filippo Sorcinelli – SAUF Voix Humaine 8",
  },
  {
    date: "9/16/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "9/16/2020",
    name: "Filippo Sorcinelli – SAUF Plein Jeu III–V",
  },
  {
    date: "9/17/2020",
    name: "Isabey Fleur Nocturne",
  },
  {
    date: "9/17/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "9/18/2020",
    name: "Chatillon Lux Weinstrasse",
  },
  {
    date: "9/18/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "9/19/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "9/20/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "9/20/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "9/21/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "9/21/2020",
    name: "Marc–Antoine Barrois Ganymede",
  },
  {
    date: "9/22/2020",
    name: "Francesca Bianchi Etruscan Water",
  },
  {
    date: "9/23/2020",
    name: "Cartier Déclaration Parfum",
  },
  {
    date: "9/23/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "9/24/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "9/25/2020",
    name: "BeauFort London Terror & Magnificence",
  },
  {
    date: "9/25/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "9/26/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "9/26/2020",
    name: "Hendley Perfumes Bourbon",
  },
  {
    date: "9/27/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "9/27/2020",
    name: "Hendley Perfumes Bourbon",
  },
  {
    date: "9/28/2020",
    name: "Neela Vermeire Creations Trayee",
  },
  {
    date: "9/28/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "9/29/2020",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "9/29/2020",
    name: "Hendley Perfumes Bourbon",
  },
  {
    date: "9/30/2020",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "9/30/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/2/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/2/2020",
    name: "Filippo Sorcinelli – SAUF Contre Bombarde 32",
  },
  {
    date: "10/3/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "10/4/2020",
    name: "Lubin Korrigan",
  },
  {
    date: "10/4/2020",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "10/4/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "10/5/2020",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "10/5/2020",
    name: "Senyokô La Tsarine",
  },
  {
    date: "10/6/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "10/6/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "10/7/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "10/8/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/9/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/9/2020",
    name: "Exaltatum St. Paul's",
  },
  {
    date: "10/10/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "10/11/2020",
    name: "Auphorie Song of Everlasting Sorrow",
  },
  {
    date: "10/11/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/12/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "10/13/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "10/13/2020",
    name: "Auphorie Song of Everlasting Sorrow",
  },
  {
    date: "10/14/2020",
    name: "Auphorie Song of Everlasting Sorrow",
  },
  {
    date: "10/14/2020",
    name: "Hendley Perfumes Bourbon",
  },
  {
    date: "10/15/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "10/16/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "10/16/2020",
    name: "Jorum Studio Fantosmia",
  },
  {
    date: "10/17/2020",
    name: "Haeckels Pegwell Bay – GPS 21'30\"E",
  },
  {
    date: "10/17/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/18/2020",
    name: "Marc–Antoine Barrois Ganymede",
  },
  {
    date: "10/18/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/19/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "10/20/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/21/2020",
    name: "Auphorie Song of Everlasting Sorrow",
  },
  {
    date: "10/22/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "10/22/2020",
    name: "Pryn Parfum Aranyaka",
  },
  {
    date: "10/23/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "10/24/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "10/25/2020",
    name: "Bvlgari Le Gemme Gyan",
  },
  {
    date: "10/26/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "10/27/2020",
    name: "Canoe Goods Skive",
  },
  {
    date: "10/28/2020",
    name: "Pomare's Stolen Perfume Rasa",
  },
  {
    date: "10/28/2020",
    name: "Filippo Sorcinelli – SAUF Contre Bombarde 32",
  },
  {
    date: "10/29/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "10/30/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "10/31/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "11/1/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/2/2020",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "11/2/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/3/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/4/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/5/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "11/6/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/6/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "11/7/2020",
    name: "Serge Lutens Chergui",
  },
  {
    date: "11/7/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/8/2020",
    name: "Serge Lutens Borneo 1834",
  },
  {
    date: "11/8/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/9/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/10/2020",
    name: "Serge Lutens La Religieuse",
  },
  {
    date: "11/10/2020",
    name: "Auphorie Song of Everlasting Sorrow",
  },
  {
    date: "11/11/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/12/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "11/13/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "11/14/2020",
    name: "Frederic Malle Portrait of a Lady",
  },
  {
    date: "11/14/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/15/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "11/15/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/16/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/16/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/17/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/18/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "11/19/2020",
    name: "4160 Tuesdays The Waft from the Loft",
  },
  {
    date: "11/19/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/20/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "11/20/2020",
    name: "Amouage Interlude Man",
  },
  {
    date: "11/21/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "11/22/2020",
    name: "4160 Tuesdays The Waft from the Loft",
  },
  {
    date: "11/23/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/24/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "11/25/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/26/2020",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "11/27/2020",
    name: "Strangelove lostinflowers",
  },
  {
    date: "11/28/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "11/29/2020",
    name: "L'Artisan Parfumeur Séville à l'Aube",
  },
  {
    date: "11/29/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "11/30/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "12/1/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "12/2/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "12/3/2020",
    name: "Francesca Bianchi Etruscan Water",
  },
  {
    date: "12/4/2020",
    name: "Christian Dior Eau Sauvage Parfum",
  },
  {
    date: "12/5/2020",
    name: "Neandertal Us",
  },
  {
    date: "12/6/2020",
    name: "Christian Dior Eau Sauvage Parfum",
  },
  {
    date: "12/6/2020",
    name: "Neandertal Us",
  },
  {
    date: "12/7/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "12/8/2020",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "12/9/2020",
    name: "Neandertal Us",
  },
  {
    date: "12/10/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "12/11/2020",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "12/12/2020",
    name: "Neandertal Us",
  },
  {
    date: "12/13/2020",
    name: "4160 Tuesdays The Waft from the Loft",
  },
  {
    date: "12/14/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "12/15/2020",
    name: "Eau d'Italie Baume du Doge",
  },
  {
    date: "12/15/2020",
    name: "Masque Milano Russian Tea",
  },
  {
    date: "12/16/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "12/17/2020",
    name: "Strangelove fallintostars",
  },
  {
    date: "12/18/2020",
    name: "Neandertal Us",
  },
  {
    date: "12/19/2020",
    name: "Neandertal Us",
  },
  {
    date: "12/20/2020",
    name: "Christian Dior Eau Sauvage Parfum",
  },
  {
    date: "12/21/2020",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "12/22/2020",
    name: "Ormonde Jayne Black Gold",
  },
  {
    date: "12/23/2020",
    name: "Ormonde Jayne Nawab of Oudh",
  },
  {
    date: "12/24/2020",
    name: "Ormonde Jayne Black Gold",
  },
  {
    date: "12/25/2020",
    name: "Tauer Perfumes Au Coeur Du Désert",
  },
  {
    date: "12/25/2020",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "12/26/2020",
    name: "Neandertal Us",
  },
  {
    date: "12/27/2020",
    name: "Henry Jacques Onction Pure Perfume",
  },
  {
    date: "12/28/2020",
    name: "Louis Vuitton Nuit de Feu",
  },
  {
    date: "12/29/2020",
    name: "Centauri Perfumes Dendera",
  },
  {
    date: "12/30/2020",
    name: "Ormonde Jayne Black Gold",
  },
  {
    date: "12/31/2020",
    name: "Parfum Satori Satori",
  },
  {
    date: "12/31/2020",
    name: "Centauri Perfumes Dendera",
  },
  {
    date: "1/1/2021",
    name: "Parfum Satori Satori",
  },
  {
    date: "1/2/2021",
    name: "Neandertal Us",
  },
  {
    date: "1/3/2021",
    name: "Neandertal Us",
  },
  {
    date: "1/4/2021",
    name: "Thameen Carved Oud",
  },
  {
    date: "1/5/2021",
    name: "Lubin Idole de Lubin",
  },
  {
    date: "1/6/2021",
    name: "Parfum Satori Satori",
  },
  {
    date: "1/7/2021",
    name: "Neandertal Us",
  },
  {
    date: "1/8/2021",
    name: "Parfum Satori Satori",
  },
  {
    date: "1/9/2021",
    name: "Parfum Satori Satori",
  },
  {
    date: "1/9/2021",
    name: "Parfum Satori Mizunara",
  },
  {
    date: "1/10/2021",
    name: "Bogue Profumo LiTA",
  },
  {
    date: "1/11/2021",
    name: "Parfum Satori Mizunara",
  },
  {
    date: "1/11/2021",
    name: "Bogue Profumo Maai",
  },
  {
    date: "1/12/2021",
    name: "Parfum Satori Satori",
  },
  {
    date: "1/13/2021",
    name: "Bogue Profumo Maai",
  },
  {
    date: "1/14/2021",
    name: "Chanel Les Exclusifs de Chanel Coromandel Eau de Parfum",
  },
  {
    date: "1/14/2021",
    name: "Bogue Profumo LiTA",
  },
  {
    date: "1/15/2021",
    name: "Louis Vuitton Ombre Nomade",
  },
  {
    date: "1/15/2021",
    name: "Centauri Perfumes Dendera",
  },
  {
    date: "1/16/2021",
    name: "L'Artisan Parfumeur Timbuktu",
  },
  {
    date: "1/16/2021",
    name: "January Scent Project Burvuvu",
  },
  {
    date: "1/17/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "1/18/2021",
    name: "Parfum Satori Satori",
  },
  {
    date: "1/19/2021",
    name: "4160 Tuesdays The Waft from the Loft",
  },
  {
    date: "1/20/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "1/21/2021",
    name: "Guerlain Songe d'un Bois d'Été",
  },
  {
    date: "1/22/2021",
    name: "Xerjoff Oud Stars Alexandria II",
  },
  {
    date: "1/22/2021",
    name: "Neandertal Us",
  },
  {
    date: "1/23/2021",
    name: "Ormonde Jayne Tolu",
  },
  {
    date: "1/24/2021",
    name: "Olfactive Studio Woody Mood",
  },
  {
    date: "1/25/2021",
    name: "Stora Skuggan Mistpouffer",
  },
  {
    date: "1/26/2021",
    name: "Memo African Leather",
  },
  {
    date: "1/27/2021",
    name: "Comme des Garçons Kyoto",
  },
  {
    date: "1/28/2021",
    name: "Comme des Garçons Kyoto",
  },
  {
    date: "1/29/2021",
    name: "Ormonde Jayne Ormonde Woman",
  },
  {
    date: "1/30/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "1/31/2021",
    name: "Comme des Garçons Kyoto",
  },
  {
    date: "2/1/2021",
    name: "Comme des Garçons Kyoto",
  },
  {
    date: "2/2/2021",
    name: "Neandertal Us",
  },
  {
    date: "2/4/2021",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "2/5/2021",
    name: "Strangelove lostinflowers",
  },
  {
    date: "2/6/2021",
    name: "Auphorie Song of Everlasting Sorrow",
  },
  {
    date: "2/7/2021",
    name: "Bogue Profumo LiTA",
  },
  {
    date: "2/8/2021",
    name: "Shalini Parfum Jardin Nocturne",
  },
  {
    date: "2/9/2021",
    name: "Centauri Perfumes Dendera",
  },
  {
    date: "2/10/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "2/11/2021",
    name: "Les Indemodables Vanille Havane",
  },
  {
    date: "2/11/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "2/12/2021",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "2/13/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "2/14/2021",
    name: "Auphorie Miyako",
  },
  {
    date: "2/15/2021",
    name: "Stéphane Humbert Lucas 777 Black Gemstone",
  },
  {
    date: "2/16/2021",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "2/17/2021",
    name: "Auphorie Miyako",
  },
  {
    date: "2/18/2021",
    name: "Clive Christian X for Men",
  },
  {
    date: "2/19/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "2/20/2021",
    name: "BeauFort London Terror & Magnificence",
  },
  {
    date: "2/20/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "2/21/2021",
    name: "Serge Lutens Santal Majuscule",
  },
  {
    date: "2/22/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "2/23/2021",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "2/24/2021",
    name: "Parfum Satori Satori",
  },
  {
    date: "2/25/2021",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "2/26/2021",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "2/27/2021",
    name: "Unum LAVS",
  },
  {
    date: "2/27/2021",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "2/28/2021",
    name: "Stéphane Humbert Lucas 777 Black Gemstone",
  },
  {
    date: "3/1/2021",
    name: "Stéphane Humbert Lucas 777 Black Gemstone",
  },
  {
    date: "3/2/2021",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "3/3/2021",
    name: "Frassaï Verano Porteño",
  },
  {
    date: "3/4/2021",
    name: "Puredistance M",
  },
  {
    date: "3/5/2021",
    name: "Parfums Quartana Poppy Soma",
  },
  {
    date: "3/6/2021",
    name: "Tom Ford Private Blend Oud Wood",
  },
  {
    date: "3/7/2021",
    name: "Fort and Manlé Fatih Sultan Mehmed",
  },
  {
    date: "3/7/2021",
    name: "Stéphane Humbert Lucas 777 Oumma",
  },
  {
    date: "3/8/2021",
    name: "Zoologist Perfumes Tyrannosaurus Rex",
  },
  {
    date: "3/10/2021",
    name: "Senyokô Migration de L’Arbre",
  },
  {
    date: "3/11/2021",
    name: "Senyokô Duo des Fleurs",
  },
  {
    date: "3/12/2021",
    name: "Parfums Dusita Melodie de L'Amour",
  },
  {
    date: "3/13/2021",
    name: "Chanel Les Exclusifs de Chanel Coromandel Eau de Parfum",
  },
];

export const perfumeCatgories = perfumes.map((perfume) => ({
  date: perfume.date,
  category: perfumeCategoryMap[perfume.name],
}));
