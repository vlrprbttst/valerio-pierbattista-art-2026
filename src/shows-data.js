/* Exhibitions — grouped by the year the show OPENED, newest first.
 *
 * Fields: title, type ('Solo' | 'Group'), venue, city, country, dates,
 *         address?, details?, flyer? (assets/artshows/flyers/…, shown first in the lightbox),
 *         sources? (photo folders under assets/artshows, listed in shows-manifest.json)
 *
 * Sources (verified Nov 2026):
 *  - 2007–2013: the 2013 site (old/index.php: venue, address, dates, type)
 *  - 2004–2007: archived valeriopierbattista.info — artshows.html (2007), artshows.php (2010),
 *    news pages (2006–2010) and the original flyers in old/images/artshows_img
 *  Types were reviewed by the artist (Apr 2026) and are kept unless a source contradicts them.
 */
export const SHOWS_BASE = 'assets/artshows';

export const SHOWS_DATA = [
  {
    year: 2013,
    shows: [
      { title: 'I Want More', type: 'Group', venue: 'Bamboo Curtain Studio', city: 'Taipei', country: 'Taiwan', dates: 'June 7–14, 2013' },
      { title: 'Group Show with Valentina Zummo', type: 'Group', venue: 'Barnum Cafè', city: 'Rome', country: 'Italy', dates: 'January 25 – February 8, 2013' },
    ],
  },
  {
    year: 2012,
    shows: [
      { title: 'Make Love with Us', type: 'Group', venue: 'Antica Biblioteca Valle', city: 'Rome', country: 'Italy', dates: 'December 2, 2012' },
      { title: 'Valerio Pierbattista + Gianni Lancellotti', type: 'Group', venue: 'Hula Hoop Club', city: 'Rome', country: 'Italy', dates: 'November 23 – December 6, 2012', sources: ['added/SOLO DUE - hula hoop 23-11-12'] },
      { title: 'Group Show', type: 'Group', venue: 'Caffè QuattroTempi', city: 'Rome', country: 'Italy', dates: 'May 25 – June 8, 2012' },
      { title: 'Lilli and the Noise Collective', type: 'Group', venue: 'Hula Hoop Club', city: 'Rome', country: 'Italy', dates: 'April 20 – May 1, 2012', sources: ['added/LILLY AND THE NOISE COLLECTIVE aprile 2012'] },
    ],
  },
  {
    year: 2011,
    shows: [
      { title: 'Group Show', type: 'Group', venue: 'Tornatora Art Gallery', city: 'Rome', country: 'Italy', dates: 'June 22 – July 6, 2011', sources: ['added/tornatora luglio 2011'] },
      { title: 'Dirty Show Los Angeles', type: 'Group', venue: 'City Center Hotel', city: 'Los Angeles', country: 'USA', dates: 'June 10–11, 2011', sources: ['added/Dirty show LA 2011 june'] },
      { title: 'Solo Show', type: 'Solo', venue: 'Hula Hoop Club', city: 'Rome', country: 'Italy', dates: 'April 27 – May 11, 2011', sources: ['added/hulahoop-aprile2011'] },
      { title: 'Group Show', type: 'Group', venue: 'Balmaceda Arte Joven Gallery', city: 'Santiago de Chile', country: 'Chile', dates: 'March 24 – April 29, 2011' },
    ],
  },
  {
    year: 2010,
    shows: [
      { title: 'Group Show', type: 'Group', venue: 'MF Gallery', city: 'Genova', country: 'Italy', dates: 'September 17 – October 10, 2010' },
      { title: 'Dirty Show Chicago', type: 'Group', venue: 'Viaduct Theatre', city: 'Chicago', country: 'USA', dates: 'June 25–26, 2010' },
      { title: 'Group Show', type: 'Group', venue: 'Parlor Art Gallery', city: 'New Jersey', country: 'USA', dates: 'May 29 – June 28, 2010' },
      { title: 'One Night Stand', type: 'Solo', venue: 'Foollyc', address: 'Vicolo della Fontana 1', city: 'Rome', country: 'Italy', dates: 'February 26, 2010', flyer: 'flyers/foollyc-2010.jpg', details: 'Paintings and screen prints, special guest of the “Nero” night (10/24 project)' },
      { title: 'Group Show', type: 'Group', venue: 'Faenas Cafè', address: 'Via Portuense 47', city: 'Rome', country: 'Italy', dates: 'February 19–26, 2010', sources: ['faenas'] },
      { title: 'Dirty Show 2010', type: 'Group', venue: "Bert's Warehouse Theater", address: '2739 Russell St', city: 'Detroit', country: 'USA', dates: 'February 12–20, 2010' },
      { title: 'Lilli and the Noise Collective', type: 'Group', venue: "Alice's Cafè", address: 'Viale Guglielmo Massaia 15', city: 'Rome', country: 'Italy', dates: 'February 11–24, 2010', details: 'With Gianni Lancellotti, Valentina Zummo, Marco About and Luigi Alieni', flyer: 'flyers/alices-2010.jpg', sources: ['alices'] },
    ],
  },
  {
    year: 2009,
    shows: [
      { title: 'Arte Sagra', type: 'Group', venue: 'MondoPop International Gallery', address: 'Via dei Greci 30', city: 'Rome', country: 'Italy', dates: 'December 12, 2009 – February 20, 2010', details: 'Curated by David Vecchiato and Serena Melandri', flyer: 'flyers/mondopop-arte-sagra-2009.jpg', sources: ['mondopop_artesagra', 'added/mondopop dicembre 2009'] },
      { title: '21st Century Sexy Art', type: 'Group', venue: 'Sexy Art Gallery, Erotic Museum', address: 'Oudezijds Achterburgwal 54', city: 'Amsterdam', country: 'Netherlands', dates: 'From December 10, 2009', details: 'Opening exhibition of the Sexy Art Gallery in the Red Light District', flyer: 'flyers/sexy-art-gallery-2009.jpg', sources: ['sag', 'added/sag amsterdam erotic museum'] },
      { title: 'Lilli and the Noise Collective', type: 'Group', venue: 'Re Bacco Wine + Art Showroom', address: 'Via Pomezia 12', city: 'Rome', country: 'Italy', dates: 'November 26 – December 2, 2009', details: 'With Gianni Lancellotti, Luigi Alieni, Valentina Zummo and Marco About', flyer: 'flyers/rebacco-2009.jpg', sources: ['rebacco'] },
      { title: 'Berlino… Palestina, Messico: quando cadrà il prossimo muro?', type: 'Group', venue: 'Aequalis Contemporary Art Gallery', address: 'Via Margutta 47', city: 'Rome', country: 'Italy', dates: 'November 9 – December 9, 2009', details: 'Twenty years after the fall of the Berlin Wall, with the City of Rome. Works by Keith Haring, Mark Kostabi, A.R. Penck, Mimmo Rotella, Gilberto Zorio and others', flyer: 'flyers/aequalis-2009.jpg', sources: ['aequalis', 'added/aequalis gallery via margutta - 9 novembre 09'] },
      { title: 'Moth-a-Fucker', type: 'Group', venue: 'MF Gallery', address: 'Vico dietro il Coro della Maddalena 26A', city: 'Genova', country: 'Italy', dates: 'October 24 – December 22, 2009', details: 'Italian underground art, presented by MF Gallery and Riot Queer', flyer: 'flyers/moth-a-fucker-2009.jpg', sources: ['mfgallery'] },
      { title: 'Punk Surrealism', type: 'Group', venue: 'Laboratorio 51', address: 'Via degli Ausoni 47, San Lorenzo', city: 'Rome', country: 'Italy', dates: 'September 24 – October 13, 2009', details: 'Curated by Elsewhere Factory. With Luigi Alieni, Gianni Lancellotti, Sicks and Riot Queer', flyer: 'flyers/laboratorio51-2009.jpg', sources: ['laboratorio51', 'added/lab51'] },
      { title: 'Valerio Pierbattista and The Seventh Life', type: 'Group', venue: 'Straight to Hell', address: 'Via dei Volsci 44', city: 'Rome', country: 'Italy', dates: 'June 19 – July 31, 2009', details: 'Two-person show with Gianni Lancellotti', flyer: 'flyers/straight-to-hell-2009.jpg', sources: ['straight', 'added/Straight to Hell - G&V'] },
      { title: "Una Mostra per l'Abruzzo", type: 'Group', venue: 'MondoPop International Gallery', address: 'Via dei Greci 30', city: 'Rome', country: 'Italy', dates: 'May 23 – June 13, 2009', flyer: 'flyers/mondopop-abruzzo-2009.jpg', sources: ['mondopop_abruzzo'] },
      { title: 'Dirty Show 10', type: 'Group', venue: "Bert's Warehouse Theater", address: '2739 Russell St', city: 'Detroit', country: 'USA', dates: 'February 6–14, 2009', flyer: 'flyers/dirty-show-10-2009.jpg', sources: ['dirtydetroit10'] },
    ],
  },
  {
    year: 2008,
    shows: [
      { title: 'Group Show', type: 'Group', venue: 'KIN Shop', city: 'London', country: 'UK', dates: 'December 2008 – January 2009' },
      { title: 'Art@Large Juried Group Show', type: 'Group', venue: 'CryBaby Art Gallery', city: 'New York', country: 'USA', dates: 'August 2 – September 3, 2008' },
      { title: 'Solo Show', type: 'Solo', venue: 'Museum of Porn in Art', address: 'Stüssihofstatt 14', city: 'Zurich', country: 'Switzerland', dates: 'July 4 – August 31, 2008', flyer: 'flyers/porn-in-art-zurich-2008.jpg', sources: ['porninart', 'added/Zurich - Porn in art - 4 Luglio 2008'] },
      { title: 'Caput Mundi Pop', type: 'Group', venue: 'MondoPop International Gallery', address: 'Via dei Greci 30', city: 'Rome', country: 'Italy', dates: 'March 15 – April 26, 2008', flyer: 'flyers/mondopop-caput-mundi-2008.jpg', sources: ['mondopop_caput', 'added/mondopop marzo 2008'] },
      { title: 'Dirty Show 9', type: 'Group', venue: "Bert's Warehouse Theater", address: '2739 Russell St', city: 'Detroit', country: 'USA', dates: 'February 8–16, 2008', flyer: 'flyers/dirty-show-9-2008.jpg', sources: ['dirtydetroit9'] },
    ],
  },
  {
    year: 2007,
    shows: [
      { title: "Artigianando nell'Arte", type: 'Group', venue: '', city: 'Torino', country: 'Italy', dates: 'October 6–21, 2007', details: 'Erotic art group show' },
      { title: 'Art Bologna', type: 'Group', venue: '', city: 'Bologna', country: 'Italy', dates: 'September 1–26, 2007' },
      { title: 'Arte Erotica 2007', type: 'Group', venue: 'Officine Artistiche', city: 'Treviso', country: 'Italy', dates: 'From June 16, 2007', sources: ['added/Treviso Giugno 2007'] },
      { title: 'Punk Surrealism', type: 'Group', venue: 'Forte Prenestino', city: 'Rome', country: 'Italy', dates: 'April 14, 2007' },
      { title: 'QueerJubilee', type: 'Group', venue: 'Metaverso', city: 'Rome', country: 'Italy', dates: 'April 13, 2007', details: 'Punk Surrealism group show', sources: ['added/Metaverso-QueerJubilee-13Aprile2007'] },
      { title: 'Punk Surrealism', type: 'Group', venue: 'Lettere Caffè', address: 'Via San Francesco a Ripa 100, Trastevere', city: 'Rome', country: 'Italy', dates: 'March 18 – April 1, 2007' },
      { title: 'Multisensorial Lab #3 — In Riot We Trust', type: 'Group', venue: 'Kollatino Underground', address: 'Via Georges Sorel 10', city: 'Rome', country: 'Italy', dates: 'March 16, 2007', details: 'Art, installations and live music with 28 artists, organized by Subculture' },
      { title: 'Technè 2007', type: 'Group', venue: 'Ex-Lavanderia, Parco Santa Maria della Pietà', address: 'Padiglione 31', city: 'Rome', country: 'Italy', dates: 'February 24 – March 2, 2007', details: 'Group show inside a former psychiatric hospital', sources: ['added/Techne - Santa Maria della Pietà - Febbraio 2007'] },
      { title: 'Killer Pimps and Superstar Hoes', type: 'Solo', venue: 'Locanda Atlantide', address: 'Via dei Lucani 22/b, San Lorenzo', city: 'Rome', country: 'Italy', dates: 'February 17 – March 2, 2007', details: 'Exhibition at Amigdala / QUEERneVale, the queer night of Romateatro.com', sources: ['added/Locanda Atlantide Queernevale Febbraio 2007'] },
      { title: 'Dirty Show 8', type: 'Group', venue: "Bert's Warehouse Theater", address: '2739 Russell St', city: 'Detroit', country: 'USA', dates: 'February 9–17, 2007' },
      { title: 'Punk Surrealism', type: 'Group', venue: 'Università La Sapienza', address: 'Aula VI, Facoltà di Lettere e Filosofia', city: 'Rome', country: 'Italy', dates: 'February 1–2, 2007', details: 'Two-day hip hop and hardcore punk event. With Riot Queer, Sicks, Marco Bevivino and The Seventh Life' },
    ],
  },
  {
    year: 2006,
    shows: [
      { title: 'Multisensorial Lab #2', type: 'Group', venue: 'Kollatino Underground', address: 'Via Georges Sorel 10', city: 'Rome', country: 'Italy', dates: 'October 27, 2006', details: 'Organized by Subculture', sources: ['added/Multisensorial 2'] },
      { title: 'Toner Party', type: 'Group', venue: 'Kollatino Underground', address: 'Via Georges Sorel 10', city: 'Rome', country: 'Italy', dates: 'October 14, 2006', details: 'Punk Surrealism group show, organized by Anna Tufano' },
      { title: 'Dirty Show 7.5', type: 'Group', venue: "Bert's Warehouse Theater", city: 'Detroit', country: 'USA', dates: 'September 22–24, 2006' },
      { title: 'Group Show', type: 'Group', venue: 'Bar Magenta', city: 'Santiago de Chile', country: 'Chile', dates: 'July 22 – August 12, 2006', details: 'First showing of the Death Giver, Death Receiver series, hosted by Leonardo Casas' },
      { title: 'Solo Show', type: 'Solo', venue: 'Explorer Coffee Gallery', city: 'Rome', country: 'Italy', dates: 'June 16, 2006', details: 'Curated by Guido and Pino Molica' },
      { title: 'Solo Show', type: 'Solo', venue: 'Explorer Coffee Gallery', city: 'Rome', country: 'Italy', dates: 'May 5, 2006', details: 'Curated by Guido and Pino Molica', sources: ['added/Explorer Coffee Gallery - 5 maggio 2006'] },
      { title: 'MarteLive', type: 'Group', venue: 'Alpheus', city: 'Rome', country: 'Italy', dates: 'April 25, 2006', sources: ['added/MarteLive 25.4.2006'] },
      { title: 'Multisensorial Lab #1', type: 'Group', venue: 'Kollatino Underground', address: 'Via Georges Sorel 10', city: 'Rome', country: 'Italy', dates: 'April 7, 2006', details: 'Organized by Subculture', sources: ['added/Esposizione Multisensorial Lab 7.4.2006'] },
      { title: 'Vaudeville Flesh — Fashion Show & Performances', type: 'Group', venue: 'DragonFly', address: '6510 Santa Monica Blvd', city: 'Hollywood CA', country: 'USA', dates: 'March 18, 2006', details: 'Hosted by Courtney Cruz and Gidget Gein. Art by Clive Barker, Annie Sprinkle and others' },
      { title: 'Solo Show', type: 'Solo', venue: 'Explorer Coffee Gallery', city: 'Rome', country: 'Italy', dates: 'March 10 and 17, 2006', details: 'With a live set by Mr. Spank. Curated by Guido and Mattia Molica', sources: ['added/Explorer Coffee Gallery - 10 e 17 marzo 2006'] },
      { title: 'Dirty Show 7', type: 'Group', venue: 'Tangent Gallery', address: '715 E. Milwaukee', city: 'Detroit', country: 'USA', dates: 'February 10–14, 2006' },
    ],
  },
  {
    year: 2005,
    shows: [
      { title: 'Capodanno', type: 'Solo', venue: 'Locanda Atlantide', address: 'Via dei Lucani 22/b, San Lorenzo', city: 'Rome', country: 'Italy', dates: 'December 31, 2005 – February 2, 2006', details: 'A selection of the works of 2005. Special guest: Leonardo Casas', sources: ['added/Locanda Atlantide capodanno 2005'] },
      { title: 'True Hate X-Mas Group Show', type: 'Group', venue: 'True Hate Art Gallery', city: 'La Rochelle', country: 'France', dates: 'December 15, 2005 – January 31, 2006' },
      { title: 'Group Show', type: 'Group', venue: 'Hype Gallery', address: 'Via Assab 1', city: 'Milan', country: 'Italy', dates: 'November 8–28, 2005', details: 'Live painting by TvBoy and Seacreative' },
      { title: 'Solo Show', type: 'Solo', venue: 'Skorie Industriali', city: 'Rome', country: 'Italy', dates: 'September 14 – October 2, 2005', details: 'Latest works on kraft paper and the works painted in Paris', sources: ['added/Skorie Industriali Artshow - 14.9.2005'] },
      { title: 'Beat Connection', type: 'Group', venue: 'Florence Summer Festival', city: 'Florence', country: 'Italy', dates: 'July 25, 2005', details: 'Captain America projected on big screens' },
      { title: 'Solo Show', type: 'Solo', venue: 'Dr Vagap', city: 'Ostia, Rome', country: 'Italy', dates: 'February 18, 2005', details: 'Organized by Fronte Popolare per la Musica Libera', sources: ['added/Ostia Artshow 18.2.2005'] },
    ],
  },
  {
    year: 2004,
    shows: [
      { title: 'Solo Show', type: 'Solo', venue: 'Coetus Pub', city: 'Rome', country: 'Italy', dates: 'December 22, 2004', sources: ['added/Coetus Artshow 22.12.04'] },
      { title: 'Solo Show', type: 'Solo', venue: 'Le Nebbie di Avalon', city: 'Bracciano, Rome', country: 'Italy', dates: 'December 12, 2004', sources: ['added/Bracciano Artshow 12.12.04'] },
    ],
  },
];
