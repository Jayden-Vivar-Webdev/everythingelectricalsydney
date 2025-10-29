import HeroMain from "@/app/components/hero/hero-main";
import { notFound, redirect } from "next/navigation";
import { EnhancedTestimonialSection } from "@/app/components/content/content-image";
import type { ContentData } from "@/app/components/content/content-image";
import generateLongDescription from "@/app/lib/generateLongDescription";
import { PortableTextComponents } from '@portabletext/react';
import MapLocations from "@/app/components/locations/map-locations";
import { Metadata } from 'next';
import { cache } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const dynamic = 'force-dynamic';
// Define valid locations
const validLocations = [
  {name: 'Abbotsbury', slug: 'abbotsbury'},
  {name: 'Acacia Gardens', slug: 'acacia-Gardens'},
  {name: 'Agnes Banks', slug: 'agnes-banks'},
  {name: 'Airds', slug: 'airds'},
  {name: 'Ambarvale', slug: 'ambarvale'},
  {name: 'Arndell Park', slug: 'andell-park'},
  {name: 'Austral', slug: 'austral'},
  {name: 'Sydney', slug: 'sydney'},
  {name: 'Parramatta', slug: 'parramatta'},
  {name: 'Liverpool', slug: 'liverpool'},
  {name: 'Blacktown', slug: 'blacktown'},
  {name: 'Penrith', slug: 'penrith'},
  {name: 'Campbelltown', slug: 'campbelltown'},
  {name: 'Camden', slug: 'camden'},
  {name: 'Oran Park', slug: 'oran-park'},
  {name: 'Narellan', slug: 'narellan'},
  {name: 'Glenmore Park', slug: 'glenmore-park'},
  {name: 'St Marys', slug: 'st-marys'},
  {name: 'Narellan Vale', slug: 'narellan-vale'},
  {name: 'Newtown', slug: 'newtown'},
  {name: 'Ashfield', slug: 'ashfield'},
  {name: 'Leichhardt', slug: 'leichhardt'},
  {name: 'Marrickville', slug: 'marrickville'},
  {name: 'Abbotsford', slug: 'abbotsford'},
  {name: 'Ashbury', slug: 'ashbury'},
  {name: 'Ashcroft', slug: 'ashcroft'},
  {name: 'Auburn', slug: 'auburn'},
  {name: 'Bondi', slug: 'bondi'},
  {name: 'Randwick', slug: 'randwick'},
  {name: 'Maroubra', slug: 'maroubra'},
  {name: 'Coogee', slug: 'coogee'},
  {name: 'Alexandria', slug: 'alexandria'},
  {name: 'Arncliffe', slug: 'arncliffe'},
  {name: 'Mount Druitt', slug: 'mount-druitt'},
  {name: 'Rooty Hill', slug: 'rooty-hill'},
  {name: 'Doonside', slug: 'doonside'},
  {name: 'Fairfield', slug: 'fairfield'},
  {name: 'Granville', slug: 'granville'},
  {name: 'Quakers Hill', slug: 'quakers-hill'},
  {name: 'Schofields', slug: 'schofields'},
  {name: 'Castle Hill', slug: 'castle-hill'},
  {name: 'Baulkham Hills', slug: 'baulkham-hills'},
  {name: 'Kellyville', slug: 'kellyville'},
  {name: 'Rouse Hill', slug: 'rouse-hill'},
  {name: 'The Ponds', slug: 'the-ponds'},
  {name: 'Leppington', slug: 'leppington'},
  {name: 'Edmondson Park', slug: 'edmondson-park'},
  {name: 'Cecil Hills', slug: 'cecil-hills'},
  {name: 'Badgerys Creek', slug: 'badgerys-creek'},
  {name: 'Wollongong', slug: 'wollongong'},
  {name: 'Fairy Meadow', slug: 'fairy-meadow'},
  {name: 'Shellharbour', slug: 'shellharbour'},
  {name: 'Dapto', slug: 'dapto'},
  {name: 'Corrimal', slug: 'corrimal'},
  {name: 'Figtree', slug: 'figtree'},
  {name: 'Albion Park', slug: 'albion-park'},
  {name: 'Austinmer', slug: 'austinmer'},
  {name: 'Balgownie', slug: 'balgownie'},
  {name: 'Bellambi', slug: 'bellambi'},
  {name: 'Berkeley', slug: 'berkeley'},
  {name: 'Bulli', slug: 'bulli'},
  {name: 'Coledale', slug: 'coledale'},
  {name: 'Coniston', slug: 'coniston'},
  {name: 'Helensburgh', slug: 'helensburgh'},
  {name: 'Kanahooka', slug: 'kanahooka'},
  {name: 'Keiraville', slug: 'keiraville'},
  {name: 'Mount Ousley', slug: 'mount-ousley'},
  {name: 'North Wollongong', slug: 'north-wollongong'},
  {name: 'Port Kembla', slug: 'port-kembla'},
  {name: 'Stanwell Park', slug: 'stanwell-park'},
  {name: 'Thirroul', slug: 'thirroul'},
  {name: 'Towradgi', slug: 'towradgi'},
  {name: 'Unanderra', slug: 'unanderra'},
  {name: 'Woonona', slug: 'woonona'},
  {name: 'Albion Park Rail', slug: 'albion-park-rail'},
  {name: 'Barrack Heights', slug: 'barrack-heights'},
  {name: 'Blackbutt', slug: 'blackbutt'},
  {name: 'Calderwood', slug: 'calderwood'},
  {name: 'Flinders', slug: 'flinders'},
  {name: 'Oak Flats', slug: 'oak Flats'},
  {name: 'Shell Cove', slug: 'shell Cove'},
  {name: 'Warilla', slug: 'warilla'},
  {name: 'Windang', slug: 'windang'},
  {name: 'Bombo', slug: 'bombo'},
  {name: 'Foxground', slug: 'foxground'},
  {name: 'Gerringong', slug: 'gerringong'},
  {name: 'Jamberoo', slug: 'jamberoo'},
  {name: 'Berry', slug: 'berry'},
  {name: 'Bawley Point', slug: 'bawley-point'},
  {name: 'Culburra Beach', slug: 'culburra-beach'},
  {name: 'Gerroa', slug: 'gerroa'},
  {name: 'Huskisson', slug: 'huskisson'},
  {name: 'Kangaroo Valley', slug: 'kangaroo-valley'},
  {name: 'Milton', slug: 'milton'},
  {name: 'Mollymook', slug: 'mollymook'},
  {name: 'Nowra', slug: 'nowra'},
  {name: 'Shoalhaven Heads', slug: 'shoalhaven-heads'},
  {name: 'Ulladulla', slug: 'ulladulla'},
  {name: 'Katoomba', slug: 'katoomba'},
  {name: 'Springwood', slug: 'springwood'},
  {name: 'Blaxland', slug: 'blaxland'},
  {name: 'Glenbrook', slug: 'glenbrook'},
  {name: 'Lawson', slug: 'lawson'},
  {name: 'Balgowlah', slug: 'balgowlah'},
  {name: 'Balgowlah Heights', slug: 'balgowlah-heights'},
  {name: 'Balmain', slug: 'balmain'},
  {name: 'Balmain East', slug: 'balmain-east'},
  {name: 'Bangor', slug: 'bangor'},
  {name: 'Banksia', slug: 'banksia'},
  {name: 'Banksmeadow', slug: 'banksmeadow'},
  {name: 'Bankstown', slug: 'bankstown'},
  {name: 'Bankstown Aerodrome', slug: 'bankstown-aerodrome'},
  {name: 'Barangaroo', slug: 'barangaroo'},
  {name: 'Barden Ridge', slug: 'barden-ridge'},
  {name: 'Bardia', slug: 'bardia'},
  {name: 'Bardwell Park', slug: 'bardwell-park'},
  {name: 'Bardwell Valley', slug: 'bardwell-valley'},
  {name: 'Bass Hill', slug: 'bass-hill'},
  {name: 'Bayview', slug: 'bayview'},
  {name: 'Beacon Hill', slug: 'beacon-hill'},
  {name: 'Beaconsfield', slug: 'beaconsfield'},
  {name: 'Beaumont Hills', slug: 'beaumont-hills'},
  {name: 'Cremorne', slug: 'cremorne'},
  {name: 'Cremorne Point', slug: 'cremorne-point'},
  {name: 'Cromer', slug: 'cromer'},
  {name: 'Cronulla', slug: 'cronulla'},
  {name: 'Crows Nest', slug: 'crows-est'},
  {name: 'Croydon', slug: 'croydon'},
  {name: 'Croydon Park', slug: 'croydon-park'},
  {name: 'Curl Curl', slug: 'curl-curl'},
  {name: 'Currans Hill', slug: 'currans-hill'},
  {name: 'Currawong Beach', slug: 'currawong-beach'},
  {name: 'Daceyville', slug: 'daceyville'},
  {name: 'Dangar Island', slug: 'dangar-island'},
  {name: 'Darling Point', slug: 'darling-point'},
  {name: 'Darlinghurst', slug: 'darlinghurst'},
  {name: 'Darlington', slug: 'darlington'},
  {name: 'Davidson', slug: 'davidson'},
  {name: 'Dawes Point', slug: 'dawes-point'},
  {name: 'Dean Park', slug: 'dean-park'},
  {name: 'Dee Why', slug: 'dee-why'},
  {name: 'Denham Court', slug: 'denham-dourt'},
  {name: 'Denistone', slug: 'denistone'},
  {name: 'Denistone East', slug: 'denistone-east'},
  {name: 'Denistone West', slug: 'denistone-eest'},
  {name: 'Dharruk', slug: 'dharruk'},
  {name: 'Dolans Bay', slug: 'dolans-bay'},
  {name: 'Dolls Point', slug: 'dolls-point'},
  {name: 'Double Bay', slug: 'double-bay'},
  {name: 'Dover Heights', slug: 'dover-heights'},
  {name: 'Drummoyne', slug: 'drummoyne'},
  {name: 'Duffys Forest', slug: 'duffys-forest'},
  {name: 'Dulwich Hill', slug: 'dulwich-hill'},
  {name: 'Dundas', slug: 'dundas'},
  {name: 'Dundas Valley', slug: 'dundas-valley'},
  {name: 'Dural', slug: 'dural'},
  //COMPLETE ^



  {name: 'Eagle Vale', slug: 'eagle-vale'},
  {name: 'Earlwood', slug: 'earlwood'},
  {name: 'East Hills', slug: 'east-hills'},
  {name: 'East Killara', slug: 'east-killara'},
  {name: 'East Lindfield', slug: 'east-lindfield'},
  {name: 'East Ryde', slug: 'east-ryde'},
  {name: 'Eastern Creek', slug: 'eastern-creek'},
  {name: 'Eastgardens', slug: 'eastgardens'},
  {name: 'Eastlakes', slug: 'eastlakes'},
  {name: 'Eastwood', slug: 'eastwood'},
  {name: 'Edensor Park', slug: 'edensor-park'},
  {name: 'Kurnell', slug: 'kurnell'},
  {name: 'Kurraba Point', slug: 'kurraba-point'},
  {name: 'Kyeemagh', slug: 'kyeemagh'},
  {name: 'Kyle Bay', slug: 'kyle-bay'},
  {name: 'La Perouse', slug: 'la-perouse'},
  {name: 'Lakemba', slug: 'lakemba'},
  {name: 'Lalor Park', slug: 'lalor-park'},
  {name: 'Lane Cove', slug: 'lane-cove'},
  {name: 'Lane Cove North', slug: 'lane-cove-north'},
  {name: 'Lane Cove West', slug: 'lane-cove-west'},
  {name: 'Lansdowne', slug: 'lansdowne'},
  {name: 'Lansvale', slug: 'lansvale'},
  {name: 'Laughtondale', slug: 'laughtondale'},
  {name: 'Lavender Bay', slug: 'lavender-bay'},
  {name: 'Leets Vale', slug: 'leets-vale'},
  {name: 'Len Waters Estate', slug: 'len-waters-estate'},
  {name: 'Lethbridge Park', slug: 'lethbridge-park'},
  {name: 'Leumeah', slug: 'leumeah'},
  {name: 'Lewisham', slug: 'lewisham'},
  {name: 'Liberty Grove', slug: 'liberty-grove'},
  {name: 'Lidcombe', slug: 'lidcombe'},
  {name: 'Lilli Pilli', slug: 'lilli-pilli'},
  {name: 'Lilyfield', slug: 'lilyfield'},
  {name: 'Lindfield', slug: 'lindfield'},
  {name: 'Linley Point', slug: 'linley-point'},
  {name: 'Little Bay', slug: 'little-bay'},
  {name: 'Llandilo', slug: 'llandilo'},
  {name: 'Loftus', slug: 'loftus'},
  {name: 'Londonderry', slug: 'londonderry'},
  {name: 'Long Point', slug: 'long-point'},
  {name: 'Longueville', slug: 'longueville'},
  {name: 'Lovett Bay', slug: 'lovett-bay'},
  {name: 'Lower Portland', slug: 'lower-portland'},
  {name: 'Lucas Heights', slug: 'lucas-heights'},
  {name: 'Luddenham', slug: 'luddenham'},
  {name: 'Lugarno', slug: 'lugarno'},
  {name: 'Lurnea', slug: 'lurnea'},
  {name: 'Macquarie Fields', slug: 'macquarie-fields'},
  {name: 'Macquarie Links', slug: 'macquarie-links'},
  {name: 'Macquarie Park', slug: 'macquarie-park'},
  {name: 'Maianbar', slug: 'maianbar'},
  {name: 'Malabar', slug: 'malabar'},
  {name: 'Manly', slug: 'manly'},
  {name: 'Manly Vale', slug: 'manly-vale'},
  {name: 'Maraylya', slug: 'maraylya'},
  {name: 'Marayong', slug: 'marayong'},
  {name: 'Maroota', slug: 'maroota'},
  {name: 'Marsden Park', slug: 'marsden-park'},
  {name: 'Marsfield', slug: 'marsfield'},
  {name: 'Mascot', slug: 'mascot'},
  {name: 'Matraville', slug: 'matraville'},
  {name: 'Mays Hill', slug: 'mays-hill'},
  {name: 'McCarrs Creek', slug: 'mccarrs-creek'},
  {name: 'McGraths Hill', slug: 'mcgraths-hill'},
  {name: 'McMahons Point', slug: 'mcmahons-point'},
  {name: 'Meadowbank', slug: 'meadowbank'},
  {name: 'Melonba', slug: 'melonba'},
  {name: 'Melrose Park', slug: 'melrose-park'},
  {name: 'Menai', slug: 'menai'},
  {name: 'Menangle Park', slug: 'menangle-park'},
  {name: 'Merrylands', slug: 'merrylands'},
  {name: 'Merrylands West', slug: 'merrylands-west'},
  {name: 'Middle Cove', slug: 'middle-cove'},
  {name: 'Middle Dural', slug: 'middle-dural'},
  {name: 'Middleton Grange', slug: 'middleton-grange'},
  {name: 'Miller', slug: 'miller'},
  {name: 'Millers Point', slug: 'millers-point'},
  {name: 'Milperra', slug: 'milperra'},
  {name: 'Milsons Passage', slug: 'milsons-passage'},
  {name: 'Milsons Point', slug: 'milsons-point'},
  {name: 'Minchinbury', slug: 'minchinbury'},
  {name: 'Minto', slug: 'minto'},
  {name: 'Minto Heights', slug: 'minto-heights'},
  {name: 'Miranda', slug: 'miranda'},
  {name: 'Mona Vale', slug: 'mona-vale'},
  {name: 'Monterey', slug: 'monterey'},
  {name: 'Moore Park', slug: 'moore-park'},
  {name: 'Moorebank', slug: 'moorebank'},
  {name: 'Morning Bay', slug: 'morning-bay'},
  {name: 'Mortdale', slug: 'mortdale'},
  {name: 'Mortlake', slug: 'mortlake'},
  {name: 'Mosman', slug: 'mosman'},
  //COMPLETE ^

  {name: 'Mount Annan', slug: 'mount-annan'},
  {name: 'Mount Colah', slug: 'mount-colah'},
  {name: 'Mount Kuring-Gai', slug: 'mount-kuring-gai'},
  {name: 'Mount Lewis', slug: 'mount-lewis'},
  {name: 'Mount Pritchard', slug: 'mount-pritchard'},
  {name: 'Mount Vernon', slug: 'mount-vernon'},
  {name: 'Mulgoa', slug: 'mulgoa'},
  {name: 'Mulgrave', slug: 'mulgrave'},
  {name: 'Naremburn', slug: 'naremburn'},
  {name: 'Narrabeen', slug: 'narrabeen'},
  {name: 'Narraweena', slug: 'narraweena'},
  {name: 'Narwee', slug: 'narwee'},
  {name: 'Nelson', slug: 'nelson'},
  {name: 'Neutral Bay', slug: 'neutral-bay'},
  {name: 'Newington', slug: 'newington'},
  {name: 'Newport', slug: 'newport'},
  {name: 'Nirimba Fields', slug: 'nirimba-fields'},
  {name: 'Normanhurst', slug: 'normanhurst'},
  {name: 'North Balgowlah', slug: 'north-balgowlah'},
  {name: 'North Bondi', slug: 'north-bondi'},
  {name: 'North Curl Curl', slug: 'north-curl-curl'},
  {name: 'North Epping', slug: 'north-epping'},
  {name: 'North Kellyville', slug: 'north-kellyville'},
  {name: 'North Manly', slug: 'north-manly'},
  {name: 'North Narrabeen', slug: 'north-narrabeen'},
  {name: 'North Parramatta', slug: 'north-parramatta'},
  {name: 'North Rocks', slug: 'north-rocks'},
  {name: 'North Ryde', slug: 'north-ryde'},
  {name: 'North St Marys', slug: 'north-st-marys'},
  {name: 'North Strathfield', slug: 'north-strathfield'},
  {name: 'North Sydney', slug: 'north-sydney'},
  {name: 'North Turramurra', slug: 'north-turramurra'},
  {name: 'North Wahroonga', slug: 'north-wahroonga'},
  {name: 'North Willoughby', slug: 'north-willoughby'},
  {name: 'Northbridge', slug: 'northbridge'},
  {name: 'Northmead', slug: 'northmead'},
  {name: 'Northwood', slug: 'northwood'},
  {name: 'Norwest', slug: 'norwest'},
  {name: 'Oakhurst', slug: 'oakhurst'},
  {name: 'Oakville', slug: 'oakville'},
  {name: 'Oatlands', slug: 'oatlands'},
  {name: 'Oatley', slug: 'oatley'},
  {name: 'Old Guildford', slug: 'old-guildford'},
  {name: 'Old Toongabbie', slug: 'old-toongabbie'},
  {name: 'Orchard Hills', slug: 'orchard-hills'},
  {name: 'Oxford Falls', slug: 'oxford-falls'},
  {name: 'Oxley Park', slug: 'oxley-park'},
  {name: 'Oyster Bay', slug: 'oyster-bay'},
  {name: 'Paddington', slug: 'paddington'},
  {name: 'Padstow', slug: 'padstow'},
  {name: 'Padstow Heights', slug: 'padstow-heights'},
  {name: 'Pagewood', slug: 'pagewood'},
  {name: 'Palm Beach', slug: 'palm-beach'},
  {name: 'Panania', slug: 'panania'},
  {name: 'Parklea', slug: 'parklea'},
  {name: 'Peakhurst', slug: 'peakhurst'},
  {name: 'Peakhurst Heights', slug: 'peakhurst-heights'},
  {name: 'Pemulwuy', slug: 'pemulwuy'},
  {name: 'Pendle Hill', slug: 'pendle-hill'},
  {name: 'Pennant Hills', slug: 'pennant-hills'},
  {name: 'Penshurst', slug: 'penshurst'},
  {name: 'Petersham', slug: 'petersham'},
  {name: 'Phillip Bay', slug: 'phillip-bay'},
  {name: 'Picnic Point', slug: 'picnic-point'},
  {name: 'Pitt Town', slug: 'pitt-town'},
  {name: 'Pleasure Point', slug: 'pleasure-point'},
  {name: 'Plumpton', slug: 'plumpton'},
  {name: 'Point Piper', slug: 'point-piper'},
  {name: 'Port Botany', slug: 'port-botany'},
  {name: 'Port Hacking', slug: 'port-hacking'},
  {name: 'Potts Hill', slug: 'potts-hill'},
  {name: 'Potts Point', slug: 'potts-point'},
  {name: 'Prairiewood', slug: 'prairiewood'},
  {name: 'Prestons', slug: 'prestons'},
  {name: 'Prospect', slug: 'prospect'},
  {name: 'Punchbowl', slug: 'punchbowl'},
  {name: 'Putney', slug: 'putney'},
  {name: 'Pymble', slug: 'pymble'},
  {name: 'Pyrmont', slug: 'pyrmont'},
  {name: 'Queens Park', slug: 'queens-park'},
  {name: 'Queenscliff', slug: 'queenscliff'},
  {name: 'Raby', slug: 'raby'},
  {name: 'Ramsgate', slug: 'ramsgate'},
  {name: 'Ramsgate Beach', slug: 'ramsgate-beach'},
  {name: 'Redfern', slug: 'redfern'},
  {name: 'Regents Park', slug: 'regents-park'},
  {name: 'Regentville', slug: 'regentville'},
  {name: 'Revesby', slug: 'revesby'},
  {name: 'Revesby Heights', slug: 'revesby-heights'},
  {name: 'Rhodes', slug: 'rhodes'},
  {name: 'Richards', slug: 'richards'},
  {name: 'Richmond', slug: 'richmond'},
  {name: 'Riverstone', slug: 'riverstone'},
  {name: 'Riverview', slug: 'riverview'},
  {name: 'Riverwood', slug: 'riverwood'},
  {name: 'Rockdale', slug: 'rockdale'},
  {name: 'Rodd Point', slug: 'rodd-point'},
  {name: 'Rookwood', slug: 'rookwood'},
  {name: 'Ropes Crossing', slug: 'ropes-crossing'},
  //COMPLETE ^

  {name: 'Rose Bay', slug: 'rose-bay'},
  {name: 'Rosebery', slug: 'rosebery'},
  {name: 'Rosehill', slug: 'rosehill'},
  {name: 'Roselands', slug: 'roselands'},
  {name: 'Rosemeadow', slug: 'rosemeadow'},
  {name: 'Roseville', slug: 'roseville'},
  {name: 'Roseville Chase', slug: 'roseville-chase'},
  {name: 'Rossmore', slug: 'rossmore'},
  {name: 'Rozelle', slug: 'rozelle'},
  {name: 'Ruse', slug: 'ruse'},
  {name: 'Rushcutters Bay', slug: 'rushcutters-bay'},
  {name: 'Russell Lea', slug: 'russell-lea'},
  {name: 'Rydalmere', slug: 'rydalmere'},
  {name: 'Ryde', slug: 'ryde'},
  {name: 'Sackville North', slug: 'sackville-north'},
  {name: 'Sadleir', slug: 'sadleir'},
  {name: 'Sandringham', slug: 'sandringham'},
  {name: 'Sandy Point', slug: 'sandy-point'},
  {name: 'Sans Souci', slug: 'sans-souci'},
  {name: 'Scotland Island', slug: 'scotland-island'},
  {name: 'Seaforth', slug: 'seaforth'},
  {name: 'Sefton', slug: 'sefton'},
  {name: 'Seven Hills', slug: 'seven-hills'},
  {name: 'Shalvey', slug: 'shalvey'},
  {name: 'Shanes Park', slug: 'shanes-park'},
  {name: 'Silverwater', slug: 'silverwater'},
  {name: 'Singletons Mill', slug: 'singletons-mill'},
  {name: 'Smeaton Grange', slug: 'smeaton-grange'},
  {name: 'Smithfield', slug: 'smithfield'},
  {name: 'South Coogee', slug: 'south-coogee'},
  {name: 'South Granville', slug: 'south-granville'},
  {name: 'South Hurstville', slug: 'south-hurstville'},
  {name: 'South Maroota', slug: 'south-maroota'},
  {name: 'South Penrith', slug: 'south-penrith'},
  {name: 'South Turramurra', slug: 'south-turramurra'},
  {name: 'South Wentworthville', slug: 'south-wentworthville'},
  {name: 'South Windsor', slug: 'south-windsor'},
  {name: 'Spring Farm', slug: 'spring-farm'},
  {name: 'St Andrews', slug: 'st-andrews'},
  {name: 'St Clair', slug: 'st-clair'},
  {name: 'St Helens Park', slug: 'st-helens-park'},
  {name: 'St Ives', slug: 'st-ives'},
  {name: 'St Ives Chase', slug: 'st-ives-chase'},
  {name: 'St Johns Park', slug: 'st-johns-park'},
  {name: 'St Leonards', slug: 'st-leonards'},
  {name: 'St Peters', slug: 'st-peters'},
  {name: 'Stanhope Gardens', slug: 'stanhope-gardens'},
  {name: 'Stanmore', slug: 'stanmore'},
  {name: 'Strathfield', slug: 'strathfield'},
  {name: 'Strathfield South', slug: 'strathfield-south'},
  {name: 'Summer Hill', slug: 'summer-hill'},
  {name: 'Surry Hills', slug: 'surry-hills'},
  {name: 'Sutherland', slug: 'sutherland'},
  {name: 'Sydenham', slug: 'sydenham'},
  {name: 'Sydney Olympic Park', slug: 'sydney-olympic-park'},
  {name: 'Sylvania', slug: 'sylvania'},
  {name: 'Sylvania Waters', slug: 'sylvania-waters'},
  {name: 'Tallawong', slug: 'tallawong'},
  {name: 'Tamarama', slug: 'tamarama'},
  {name: 'Taren Point', slug: 'taren-point'},
  {name: 'Telopea', slug: 'telopea'},
  {name: 'Tempe', slug: 'tempe'},
  {name: 'Tennyson Point', slug: 'tennyson-point'},
  {name: 'Terrey Hills', slug: 'terrey-hills'},
  {name: 'The Rocks', slug: 'the-rocks'},
  {name: 'Thornleigh', slug: 'thornleigh'},
  {name: 'Toongabbie', slug: 'toongabbie'},
  {name: 'Tregear', slug: 'tregear'},
  {name: 'Turramurra', slug: 'turramurra'},
  {name: 'Turrella', slug: 'turrella'},
  {name: 'Ultimo', slug: 'ultimo'},
  {name: 'Varroville', slug: 'varroville'},
  {name: 'Vaucluse', slug: 'vaucluse'},
  {name: 'Villawood', slug: 'villawood'},
  {name: 'Vineyard', slug: 'vineyard'},
  {name: 'Voyager Point', slug: 'voyager-point'},
  {name: 'Wahroonga', slug: 'wahroonga'},
  {name: 'Waitara', slug: 'waitara'},
  {name: 'Wakeley', slug: 'wakeley'},
  {name: 'Wareemba', slug: 'wareemba'},
  {name: 'Warrawee', slug: 'warrawee'},
  {name: 'Warriewood', slug: 'warriewood'},
  {name: 'Warwick Farm', slug: 'warwick-farm'},
  {name: 'Waterfall', slug: 'waterfall'},
  {name: 'Waterloo', slug: 'waterloo'},
  {name: 'Watsons Bay', slug: 'watsons-bay'},
  {name: 'Wattle Grove', slug: 'wattle-grove'},
  {name: 'Waverley', slug: 'waverley'},
  {name: 'Waverton', slug: 'waverton'},
  {name: 'Wedderburn', slug: 'wedderburn'},
  {name: 'Wentworth Point', slug: 'wentworth-point'},
  {name: 'Wentworthville', slug: 'wentworthville'},
  {name: 'Werrington', slug: 'werrington'},
  {name: 'Werrington County', slug: 'werrington-county'},
  {name: 'Werrington Downs', slug: 'werrington-downs'},
  {name: 'West Hoxton', slug: 'west-hoxton'},
  {name: 'West Pennant Hills', slug: 'west-pennant-hills'},
  {name: 'West Pymble', slug: 'west-pymble'},
  //COMPLETE

  {name: 'West Ryde', slug: 'west-ryde'},
  {name: 'Westleigh', slug: 'westleigh'},
  {name: 'Westmead', slug: 'westmead'},
  {name: 'Wetherill Park', slug: 'wetherill-park'},
  {name: 'Whalan', slug: 'whalan'},
  {name: 'Whale Beach', slug: 'whale-beach'},
  {name: 'Wheeler Heights', slug: 'wheeler-heights'},
  {name: 'Wiley Park', slug: 'wiley-park'},
  {name: 'Willmot', slug: 'willmot'},
  {name: 'Willoughby', slug: 'willoughby'},
  {name: 'Willoughby East', slug: 'willoughby-east'},
  {name: 'Windsor', slug: 'windsor'},
  {name: 'Windsor Downs', slug: 'windsor-downs'},
  {name: 'Winston Hills', slug: 'winston-hills'},
  {name: 'Wisemans Ferry', slug: 'wisemans-ferry'},
  {name: 'Wolli Creek', slug: 'wolli-creek'},
  {name: 'Wollstonecraft', slug: 'wollstonecraft'},
  {name: 'Woodbine', slug: 'woodbine'},
  {name: 'Woodcroft', slug: 'woodcroft'},
  {name: 'Woodpark', slug: 'woodpark'},
  {name: 'Woollahra', slug: 'woollahra'},
  {name: 'Woolloomooloo', slug: 'woolloomooloo'},
  {name: 'Woolooware', slug: 'woolooware'},
  {name: 'Woolwich', slug: 'woolwich'},
  {name: 'Woronora', slug: 'woronora'},
  {name: 'Woronora Heights', slug: 'woronora-heights'},
  {name: 'Yagoona', slug: 'yagoona'},
  {name: 'Yarrawarrah', slug: 'yarrawarrah'},
  {name: 'Yennora', slug: 'yennora'},
  {name: 'Yowie Bay', slug: 'yowie-bay'},
  {name: 'Zetland', slug: 'zetland'},
  {name: 'Edgecliff', slug: 'edgecliff'},
  {name: 'Elanora Heights', slug: 'elanora-heights'},
  {name: 'Elderslie', slug: 'elderslie'},
  {name: 'Elizabeth Bay', slug: 'elizabeth-bay'},
  {name: 'Elizabeth Hills', slug: 'elizabeth-hills'},
  {name: 'Elvina Bay', slug: 'elvina-bay'},
  {name: 'Emerton', slug: 'emerton'},
  {name: 'Enfield', slug: 'enfield'},
  {name: 'Engadine', slug: 'engadine'},
  {name: 'Englorie Park', slug: 'englorie-park'},
  {name: 'Enmore', slug: 'enmore'},
  {name: 'Epping', slug: 'epping'},
  {name: 'Ermington', slug: 'ermington'},
  {name: 'Erskine Park', slug: 'erskine-park'},
  {name: 'Erskineville', slug: 'erskineville'},
  {name: 'Eschol Park', slug: 'eschol-park'},
  {name: 'Eveleigh', slug: 'eveleigh'},
  {name: 'Fairfield East', slug: 'fairfield-east'},
  {name: 'Fairfield Heights', slug: 'fairfield-heights'},
  {name: 'Fairfield West', slug: 'fairfield-west'},
  {name: 'Fairlight', slug: 'fairlight'},
  {name: 'Fiddletown', slug: 'fiddletown'},
  {name: 'Five Dock', slug: 'five-dock'},
  {name: 'Forest Glen', slug: 'forest-glen'},
  {name: 'Forest Lodge', slug: 'forest-lodge'},
  {name: 'Forestville', slug: 'forestville'},
  {name: 'Frenchs Forest', slug: 'frenchs-forest'},
  {name: 'Freshwater', slug: 'freshwater'},
  {name: 'Gables', slug: 'gables'},
  {name: 'Galston', slug: 'galston'},
  {name: 'Georges Hall', slug: 'georges-hall'},
  {name: 'Gilead', slug: 'gilead'},
  {name: 'Girraween', slug: 'girraween'},
  {name: 'Gladesville', slug: 'gladesville'},
  {name: 'Glebe', slug: 'glebe'},
  {name: 'Gledswood Hills', slug: 'gledswood-hills'},
  {name: 'Glen Alpine', slug: 'glen-alpine'},
  {name: 'Glendenning', slug: 'glendenning'},
  {name: 'Glenfield', slug: 'glenfield'},
  //COMPLETE ^

  {name: 'Glenhaven', slug: 'glenhaven'},
  {name: 'Glenorie', slug: 'glenorie'},
  {name: 'Glenwood', slug: 'glenwood'},
  {name: 'Gordon', slug: 'gordon'},
  {name: 'Grantham Farm', slug: 'grantham-farm'},
  {name: 'Grays Point', slug: 'grays-point'},
  {name: 'Great Mackerel Beach', slug: 'great-mackerel-beach'},
  {name: 'Green Valley', slug: 'green-valley'},
  {name: 'Greenacre', slug: 'greenacre'},
  {name: 'Greendale', slug: 'greendale'},
  {name: 'Greenfield Park', slug: 'greenfield-park'},
  {name: 'Greenhills Beach', slug: 'greenhills-beach'},
  {name: 'Greenwich', slug: 'greenwich'},
  {name: 'Gregory Hills', slug: 'gregory-hills'},
  {name: 'Greystanes', slug: 'greystanes'},
  {name: 'Guildford', slug: 'guildford'},
  {name: 'Guildford West', slug: 'guildford-west'},
  {name: 'Gymea', slug: 'gymea'},
  {name: 'Gymea Bay', slug: 'gymea-bay'},
  {name: 'Haberfield', slug: 'haberfield'},
  {name: 'Hammondville', slug: 'hammondville'},
  {name: 'Harrington Park', slug: 'harrington-park'},
  {name: 'Harris Park', slug: 'harris-park'},
  {name: 'Hassall Grove', slug: 'hassall-grove'},
  {name: 'Haymarket', slug: 'haymarket'},
  {name: 'Heathcote', slug: 'heathcote'},
  {name: 'Hebersham', slug: 'hebersham'},
  {name: 'Heckenberg', slug: 'heckenberg'},
  {name: 'Henley', slug: 'henley'},
  {name: 'Hillsdale', slug: 'hillsdale'},
  {name: 'Hinchinbrook', slug: 'hinchinbrook'},
  {name: 'Hobartville', slug: 'hobartville'},
  {name: 'Holroyd', slug: 'holroyd'},
  {name: 'Holsworthy', slug: 'holsworthy'},
  {name: 'Homebush', slug: 'homebush'},
  {name: 'Homebush West', slug: 'homebush-west'},
  {name: 'Horningsea Park', slug: 'horningsea-park'},
  {name: 'Hornsby', slug: 'hornsby'},
  {name: 'Hornsby Heights', slug: 'hornsby-heights'},
  {name: 'Horsley Park', slug: 'horsley-park'},
  {name: 'Hoxton Park', slug: 'hoxton-park'},
  {name: 'Hunters Hill', slug: 'hunters-hill'},
  {name: 'Huntingwood', slug: 'huntingwood'},
  {name: 'Huntleys Cove', slug: 'huntleys-cove'},
  {name: 'Huntleys Point', slug: 'huntleys-point'},
  {name: 'Hurlstone Park', slug: 'hurlstone-park'},
  {name: 'Hurstville', slug: 'hurstville'},
  {name: 'Hurstville Grove', slug: 'hurstville-grove'},
  {name: 'Illawong', slug: 'illawong'},
  {name: 'Ingleburn', slug: 'ingleburn'},
  {name: 'Ingleside', slug: 'ingleside'},
  {name: 'Jamisontown', slug: 'jamisontown'},
  {name: 'Jannali', slug: 'jannali'},
  {name: 'Jordan Springs', slug: 'jordan-springs'},
  {name: 'Kangaroo Point', slug: 'kangaroo-point'},
  {name: 'Kareela', slug: 'kareela'},
  {name: 'Kearns', slug: 'kearns'},
  {name: 'Kellyville Ridge', slug: 'kellyville-ridge'},
  {name: 'Kemps Creek', slug: 'kemps-creek'},
  {name: 'Kensington', slug: 'kensington'},
  {name: 'Kenthurst', slug: 'kenthurst'},
  {name: 'Kentlyn', slug: 'kentlyn'},
  {name: 'Killara', slug: 'killara'},
  {name: 'Killarney Heights', slug: 'killarney-heights'},
  {name: 'Kings Langley', slug: 'kings-langley'},
  {name: 'Kings Park', slug: 'kings-park'},
  {name: 'Kingsford', slug: 'kingsford'},
  {name: 'Kingsgrove', slug: 'kingsgrove'},
  {name: 'Kingswood', slug: 'kingswood'},
  {name: 'Kirkham', slug: 'kirkham'},
  {name: 'Kirrawee', slug: 'kirrawee'},
  {name: 'Kirribilli', slug: 'kirribilli'},
  {name: 'Kogarah', slug: 'kogarah'},
  {name: 'Kogarah Bay', slug: 'kogarah-bay'},
  {name: 'Ku-ring-gai Chase', slug: 'ku-ring-gai-chase'},
  {name: 'Beecroft', slug: 'beecroft'},
  {name: 'Belfield', slug: 'belfield'},
  //COMPLETE ^

  {name: 'Bella Vista', slug: 'bella-vista'},
  {name: 'Bellevue Hill', slug: 'bellevue-hill'},
  {name: 'Belmore', slug: 'belmore'},
  {name: 'Belrose', slug: 'belrose'},
  {name: 'Berala', slug: 'berala'},
  {name: 'Berkshire Park', slug: 'berkshire-park'},
  {name: 'Berowra', slug: 'berowra'},
  {name: 'Berowra Heights', slug: 'berowra-heights'},
  {name: 'Berowra Waters', slug: 'berowra-waters'},
  {name: 'Berrilee', slug: 'berrilee'},
  {name: 'Beverley Park', slug: 'beverley-park'},
  {name: 'Beverly Hills', slug: 'beverly-hills'},
  {name: 'Bexley', slug: 'bexley'},
  {name: 'Bexley North', slug: 'bexley-north'},
  {name: 'Bidwill', slug: 'bidwill'},
  {name: 'Bilgola Beach', slug: 'bilgola-beach'},
  {name: 'Bilgola Plateau', slug: 'bilgola-plateau'},
  {name: 'Birchgrove', slug: 'birchgrove'},
  {name: 'Birrong', slug: 'birrong'},
  {name: 'Blackett', slug: 'blackett'},
  {name: 'Blair Athol', slug: 'blair-athol'},
  {name: 'Blairmount', slug: 'blairmount'},
  {name: 'Blakehurst', slug: 'blakehurst'},
  {name: 'Bligh Park', slug: 'bligh-park'},
  {name: 'Bondi Beach', slug: 'bondi-beach'},
  {name: 'Bondi Junction', slug: 'bondi-junction'},
  {name: 'Bonnet Bay', slug: 'bonnet-bay'},
  {name: 'Bonnyrigg', slug: 'bonnyrigg'},
  {name: 'Bonnyrigg Heights', slug: 'bonnyrigg-heights'},
  {name: 'Bossley Park', slug: 'bossley-park'},
  {name: 'Botany', slug: 'botany'},
  {name: 'Bow Bowing', slug: 'bow-bowing'},
  {name: 'Box Hill', slug: 'box-hill'},
  {name: 'Bradbury', slug: 'bradbury'},
  {name: 'Bradfield', slug: 'bradfield'},
  {name: 'Breakfast Point', slug: 'breakfast-point'},
  {name: 'Brighton-Le-Sands', slug: 'brighton-le-sands'},
  {name: 'Bringelly', slug: 'bringelly'},
  {name: 'Bronte', slug: 'bronte'},
  {name: 'Brooklyn', slug: 'brooklyn'},
  {name: 'Brookvale', slug: 'brookvale'},
  {name: 'Bundeena', slug: 'bundeena'},
  {name: 'Bungarribee', slug: 'bungarribee'},
  {name: 'Burraneer', slug: 'burraneer'},
  {name: 'Burwood', slug: 'burwood'},
  {name: 'Burwood Heights', slug: 'burwood-heights'},
  {name: 'Busby', slug: 'busby'},
  {name: 'Cabarita', slug: 'cabarita'},
  {name: 'Cabramatta', slug: 'cabramatta'},
  {name: 'Cabramatta West', slug: 'cabramatta-west'},
  {name: 'Caddens', slug: 'caddens'},
  {name: 'Cambridge Gardens', slug: 'cambridge-gardens'},
  {name: 'Cambridge Park', slug: 'cambridge-park'},
  {name: 'Camellia', slug: 'camellia'},
  {name: 'Cammeray', slug: 'cammeray'},
  {name: 'Camperdown', slug: 'camperdown'},
  {name: 'Campsie', slug: 'campsie'},
  {name: 'Canada Bay', slug: 'canada-bay'},
  {name: 'Canley Heights', slug: 'canley-heights'},
  {name: 'Canley Vale', slug: 'canley-vale'},
  {name: 'Canoelands', slug: 'canoelands'},
  {name: 'Canterbury', slug: 'canterbury'},
  {name: 'Caringbah', slug: 'caringbah'},
  {name: 'Caringbah South', slug: 'caringbah-south'},
  {name: 'Carlingford', slug: 'carlingford'},
  {name: 'Carlton', slug: 'carlton'},
  {name: 'Carnes Hill', slug: 'carnes-hill'},
  {name: 'Carramar', slug: 'carramar'},
  {name: 'Carss Park', slug: 'carss-park'},
  {name: 'Cartwright', slug: 'cartwright'},
  {name: 'Castle Cove', slug: 'castle-cove'},
  {name: 'Castlecrag', slug: 'castlecrag'},
  {name: 'Castlereagh', slug: 'castlereagh'},
  {name: 'Casula', slug: 'casula'},
  {name: 'Catherine Field', slug: 'catherine-field'},
  {name: 'Cattai', slug: 'cattai'},
  {name: 'Cecil Park', slug: 'cecil-park'},
  {name: 'Centennial Park', slug: 'centennial-park'},
  {name: 'Chatswood', slug: 'chatswood'},
  {name: 'Chatswood West', slug: 'chatswood-west'},
  {name: 'Cheltenham', slug: 'cheltenham'},
  {name: 'Cherrybrook', slug: 'cherrybrook'},
  {name: 'Chester Hill', slug: 'chester-hill'},
  {name: 'Chifley', slug: 'chifley'},
  {name: 'Chippendale', slug: 'chippendale'},
  {name: 'Chipping Norton', slug: 'chipping-norton'},
  {name: 'Chiswick', slug: 'chiswick'},
  //Complete

  {name: 'Chullora', slug: 'chullora'},
  {name: 'Church Point', slug: 'church-point'},
  {name: 'Claremont Meadows', slug: 'claremont-meadows'},
  {name: 'Clarendon', slug: 'clarendon'},
  {name: 'Clareville', slug: 'clareville'},
  {name: 'Claymore', slug: 'claymore'},
  {name: 'Clemton Park', slug: 'clemton-park'},
  {name: 'Clontarf', slug: 'clontarf'},
  {name: 'Clovelly', slug: 'clovelly'},
  {name: 'Clyde', slug: 'clyde'},
  {name: 'Coasters Retreat', slug: 'coasters-retreat'},
  {name: 'Cobbitty', slug: 'cobbitty'},
  {name: 'Colebee', slug: 'colebee'},
  {name: 'Collaroy', slug: 'collaroy'},
  {name: 'Collaroy Plateau', slug: 'collaroy-plateau'},
  {name: 'Colyton', slug: 'colyton'},
  {name: 'Como', slug: 'como'},
  {name: 'Concord', slug: 'concord'},
  {name: 'Concord West', slug: 'concord-west'},
  {name: 'Condell Park', slug: 'condell-park'},
  {name: 'Connells Point', slug: 'connells-point'},
  {name: 'Constitution Hill', slug: 'constitution-hill'},
  {name: 'Cottage Point', slug: 'cottage-point'},
  {name: 'Cowan', slug: 'cowan'},
  {name: 'Cranebrook', slug: 'cranebrook'},
  {name: "Akuna Bay", slug: "akuna-bay"},
  {name: "Allambie", slug: "allambie"},
  {name: "Argyle Cut", slug: "argyle-cut"},
  {name: "Avalon Beach", slug: "avalon-beach"},
  {name: "Bald Face", slug: "bald-face"},
  {name: "Balmoral", slug: "balmoral"},
  {name: "Bantry Bay", slug: "bantry-bay"},
  {name: "Barra Brui", slug: "barra-brui"},
  {name: "Bardwell Valley", slug: "bardwell-valley"},
  {name: "Beauty Point", slug: "beauty-point"},
  {name: "Ben Buckler", slug: "ben-buckler"},
  {name: "Blacktown Industrial Area", slug: "blacktown-industrial-area"},
  {name: "Blaxlands Corner", slug: "blaxlands-corner"},
  {name: "Broadway", slug: "broadway"},
  {name: "Bungaroo", slug: "bungaroo"},
  {name: "Caravan Head", slug: "caravan-head"},
  {name: "Careel Bay", slug: "careel-bay"},
  {name: "Centennial Parklands Dining Precinct", slug: "centennial-parklands-dining-precinct"},
  {name: "Centennial Parklands Entertainment Quarter", slug: "centennial-parklands-entertainment-quarter"},
  {name: "Centennial Parklands Office Precinct", slug: "centennial-parklands-office-precinct"},
  {name: "Centennial Square", slug: "centennial-square"},
  {name: "Central", slug: "central"},
  {name: "Charing Cross", slug: "charing-cross"},
  {name: "Chatsworth", slug: "chatsworth"},
  {name: "Chinatown", slug: "chinatown"},
  {name: "Church Hill", slug: "church-hill"},
  {name: "Clifton Gardens", slug: "clifton-gardens"},
  {name: "Cliftonville", slug: "cliftonville"},
  {name: "Coba Point", slug: "coba-point"},
  {name: "Collaroy Beach", slug: "collaroy-beach"},
  {name: "Corr Neighbourhood Centre", slug: "corr-neighbourhood-centre"},
  {name: "Cremorne Junction", slug: "cremorne-junction"},
  {name: "Crestwood", slug: "crestwood"},
  {name: "Cromer Heights", slug: "cromer-heights"},
  {name: "Crosslands", slug: "crosslands"},
  {name: "Darling Square", slug: "darling-square"},
  {name: "Dee Why Beach", slug: "dee-why-beach"},
  {name: "Diamond Bay", slug: "diamond-bay"},
  {name: "Dobroyd Point", slug: "dobroyd-point"},
  {name: "Dunheved", slug: "dunheved"},
  {name: "East St Ives", slug: "east-st-ives"},
  {name: "East Sydney", slug: "east-sydney"},
  {name: "East Wahroonga", slug: "east-wahroonga"},
  {name: "Equality Green", slug: "equality-green"},
  {name: "Fishermans Beach", slug: "fishermans-beach"},
  {name: "Five Ways", slug: "five-ways"},
  {name: "Flemington", slug: "flemington"},
  {name: "Forestville Bend", slug: "forestville-bend"},
  {name: "Fox Studios", slug: "fox-studios"},
  {name: "Fox Valley", slug: "fox-valley"},
  {name: "Fullers Bridge", slug: "fullers-bridge"},
  {name: "Gallows Hill", slug: "gallows-hill"},
  {name: "Georges Heights", slug: "georges-heights"},
  {name: "Golden Grove", slug: "golden-grove"},
  {name: "Gooseberry Flat", slug: "gooseberry-flat"},
  {name: "Gore Hill", slug: "gore-hill"},
  {name: "Hewitt Hillside", slug: "hewitt-hillside"},
  {name: "Jack Mundey Place", slug: "jack-mundey-place"},
  {name: "Kings Cross", slug: "kings-cross"},
  {name: "Kingswood Park", slug: "kingswood-park"},
  {name: "Lemongrove", slug: "lemongrove"},
  {name: "Little Greece", slug: "little-greece"},
  {name: "Little Italy", slug: "little-italy"},
  {name: "Little Portugal", slug: "little-portugal"},
  {name: "Little Vietnam", slug: "little-vietnam"},
  {name: "Long Reef", slug: "long-reef"},
  {name: "Macdonaldtown", slug: "macdonaldtown"},
  {name: "Maroubra Junction", slug: "maroubra-junction"},
  {name: "Melville", slug: "melville"},
  {name: "Mill Hill", slug: "mill-hill"},
  {name: "Mobbs Hill", slug: "mobbs-hill"},
  {name: "Mosman Junction", slug: "mosman-junction"},
  {name: "Mosmans Bay", slug: "mosmans-bay"},
  //Complete ^

  {name: "Mount Pleasant", slug: "mount-pleasant"},
  {name: "Murray Farm", slug: "murray-farm"},
  {name: "Narrabeen Peninsula", slug: "narrabeen-peninsula"},
  {name: "Neutral Bay Junction", slug: "neutral-bay-junction"},
  {name: "Newport Beach", slug: "newport-beach"},
  {name: "North St Ives", slug: "north-st-ives"},
  {name: "Paradise Beach", slug: "paradise-beach"},
  {name: "Park Central", slug: "park-central"},
  {name: "Peach Trees", slug: "peach-trees"},
  {name: "Pearces Corner (Blacktown)", slug: "pearces-corner-blacktown"},
  {name: "Pearces Corner (Hornsby)", slug: "pearces-corner-hornsby"},
  {name: "Penrith Park", slug: "penrith-park"},
  {name: "Peryman Square", slug: "peryman-square"},
  {name: "Pyes Crossing", slug: "pyes-crossing"},
  {name: "Quarry Hill", slug: "quarry-hill"},
  {name: "Queens Square", slug: "queens-square"},
  {name: "Rose Bay North", slug: "rose-bay-north"},
  {name: "Round Corner", slug: "round-corner"},
  {name: "Ryde Central", slug: "ryde-central"},
  {name: "Shorts Corner", slug: "shorts-corner"},
  {name: "Sorlie", slug: "sorlie"},
  {name: "Spit Junction", slug: "spit-junction"},
  {name: "Strawberry Hills", slug: "strawberry-hills"},
  {name: "Sunny Corner", slug: "sunny-corner"},
  {name: "Sydney Olympic Park", slug: "sydney-olympic-park"},
  {name: "Taylor Square", slug: "taylor-square"},
  {name: "The Basin", slug: "the-basin"},
  {name: "The Hungry Mile", slug: "the-hungry-mile"},
  {name: "The Spit", slug: "the-spit"},
  {name: "The University Of Sydney", slug: "the-university-of-sydney"},
  {name: "The Warren", slug: "the-warren"},
  {name: "Thompsons Corner", slug: "thompsons-corner"},
  {name: "Three Saints Square", slug: "three-saints-square"},
  {name: "Town Hall", slug: "town-hall"},
  {name: "Victoria Cross", slug: "victoria-cross"},
  {name: "Walsh Bay", slug: "walsh-bay"},
  {name: "Washington Park", slug: "washington-park"},
  {name: "Wingala", slug: "wingala"},
  {name: "Wynyard", slug: "wynyard"},
  {name: "Bullaburra", slug: "bullaburra"},
  {name: "Blackheath", slug: "blackheath"},
  {name: "Blue Mountains National Park", slug: "blue-mountains-national-park"},
  {name: "Braemar", slug: "braemar"},
  {name: "Clarence", slug: "clarence"},
  {name: "Emu Heights", slug: "emu-heights"},
  {name: "Faulconbridge", slug: "faulconbridge"},
  {name: "Leura", slug: "leura"},
  {name: "Linden", slug: "linden"},
  {name: "Medlow Bath", slug: "medlow-bath"},
  {name: "Mount Riverview", slug: "mount-riverview"},
  {name: "Mount Victoria", slug: "mount-victoria"},
  {name: "Sun Valley", slug: "sun-valley"},
  {name: "Valley Heights", slug: "valley-heights"},
  {name: "Wentworth Falls", slug: "wentworth-falls"},
  {name: "Winmalee", slug: "winmalee"},
  {name: "Warrimoo", slug: "warrimoo"},
  {name: "Woodford", slug: "woodford"},
  {name: "Hazelbrook", slug: "hazelbrook"},
  {name: "Lapstone", slug: "lapstone"},
  {name: "Mount Wilson", slug: "mount-wilson"},
  {name: "Mount Irvine", slug: "mount-irvine"},
  {name: "Mount York", slug: "mount-york"},
  {name: "Megalong Valley", slug: "megalong-valley"},
  {name: "Mount Tomah", slug: "mount-tomah"},
  {name: "Bell", slug: "bell"},
  {name: "Mount Hay", slug: "mount-hay"},
  {name: "Newnes Plateau", slug: "newnes-plateau"},
  {name: "Hartley Vale", slug: "hartley-vale"},
  {name: "Little Hartley", slug: "little-hartley"},
  {name: "Hartley", slug: "hartley"},
  {name: "Bowenfels", slug: "bowenfels"},
  {name: "Glenbrook Heights", slug: "glenbrook-heights"},
  {name: "Lennox Bridge", slug: "lennox-bridge"},
  {name: "Yellow Rock", slug: "yellow-rock"}
] as const;

interface PageProps {
  searchParams: Promise<{ location?: string }>;
}


interface LocationInfo {
  name: string;
  slug: string;
}

// Cache location validation
const validateLocation = cache((slug: string): LocationInfo | null => {
  return validLocations.find(location => location.slug === slug) || null;
});



export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  try {
    const locationParam = await searchParams;
    const location = locationParam.location ? validateLocation(locationParam.location) : null;

    if (!location) {
      return {
        title: 'Location Not Found | Everything Electrical Sydney',
        description: 'The requested location could not be found.',
        robots: { index: false, follow: false },
      };
    }

    const pageTitle = `Everything Electrical Sydney - Professional Electrical Services in ${locationParam.location}`;
    const pageDescription = `Everything Electrical Sydney provides comprehensive electrical services in ${locationParam.location}. Commercial, residential work, and Level 2 electrical services. 24/7 emergency electrical services available.`;

    return {
      title: pageTitle,
      description: pageDescription,
      alternates: {
        canonical: `https://everythingelectricalsydney.com.au/all-services?location=sydney`,
      },
      openGraph: {
        url: `https://everythingelectricalsydney.com.au/all-services?location=${locationParam.location}`,
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: 'https://everythingelectricalsydney.com.au/images/electrical_og.png',
            width: 1200,
            height: 630,
            alt: `Everything Electrical Sydney - Professional Electrical Services in ${locationParam.location}`,
            type: 'image/png',
          },
        ],
        siteName: 'Everything Electrical Sydney',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: ['https://everythingelectricalsydney.com.au/images/electrical_og.png'],
      },
      keywords: [
        `Everything Electrical Sydney ${locationParam.location}`,
        `${locationParam.location} electrical services`,
        `${locationParam.location} electrician`,
        'CCTV installation',
        'Level 2 electrical services',
        '24/7 emergency electrical',
        `commercial electrician ${locationParam.location}`,
        `residential electrician ${locationParam.location}`,
      ],
      authors: [{ name: 'Everything Electrical Sydney' }],
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Everything Electrical Sydney - Professional Electrical Services',
      description: 'Professional electrical services across Sydney',
    };
  }
}

export default async function AllServices({ searchParams }: PageProps) {
  try {
    const locationParam = await searchParams;
    const location = locationParam.location ? validateLocation(locationParam.location) : null;

    if (!location) {
      notFound();
    }

    const locationName = location.name;

    const content: ContentData = {
      title: `Comprehensive Electrical Services in ${locationName}`,
      label: "Areas We Serve",
      quote: `We've proudly helped hundreds of homeowners and businesses in ${locationName} with reliable and efficient electrical services.`,
      image: {
        src: "/images/electrician.jpg",
        alt: `Professional electrical services in ${locationName}`
      },
      logoImage: {
        src: "https://cdn.sanity.io/images/8dp3bjvf/production/1b7e474f74450217589bd452389ec3f836edbce3-1250x1250.png",
        alt: "Everything Electrical Sydney Logo"
      },
      companyName: "Everything Electrical Sydney",
      location: `Everything Electrical Sydney serving ${locationName}`,
      description: [
        {
          _type: 'block',
          style: 'normal',
          children: [
            {
              _type: 'span',
              text: generateLongDescription(locationName),
            },
          ],
          markDefs: []
        }
      ],
      stats: [
        { label: "Jobs Completed", value: "3,000+" },
        { label: "Emergency Services", value: "24/7" },
        { label: "Years Experience", value: "10+" },
        { label: "Star Rating", value: "5.0" },
      ],
      cta: "Get a Free Quote",
    };

    const portableTextComponents: PortableTextComponents = {
      block: {
        normal: ({ children }) => (
          <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
        ),
      },
    };

    return (
      <>
        {/* Structured Data for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Everything Electrical Sydney",
              "description": `Professional electrical services in ${locationName}`,
              "url": `https://everythingelectricalsydney.com.au/all-services?location=${locationParam}`,
              "telephone": "0449003526",
              "email": "info@everythingelectricalsydney.com.au",
              "areaServed": {
                "@type": "Place",
                "name": locationName
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -33.8688,
                  "longitude": 151.2093
                },
                "geoRadius": "50000"
              },
              "services": [
                "Electrical Installation",
                "Emergency Electrical Services",
                "Level 2 Electrical Services",
                "CCTV Installation",
                "Commercial Electrical Work",
                "Residential Electrical Work"
              ],
              "openingHours": [
                "Mo-Fr 06:00-17:30",
                "Sa 08:00-12:00"
              ],
              "priceRange": "$$"
            })
          }}
        />

        <main>
          <HeroMain 
            announcementText={`Professional Electrical Services in ${locationName}`}
            announcementLink={'#contact'}
            headline={`${locationName} Electrical Services`}
            subheadline={`Everything Electrical - Your Trusted Electrical Provider in ${locationName}`}
            backgroundImage={'/images/electrician.jpg'}
            backgroundImageAlt={`Professional electrical services in ${locationName}`}
            primaryCtaText={'Call Now'}
            primaryCtaUrl={`tel:0449003526`}
            secondaryCtaText={`Book Now`}
            secondaryCtaUrl={'/contact'}
          />
          <div className="p-18 sm:p-4">
          </div>
      
          <EnhancedTestimonialSection 
            contentInfo={content} 
            isDarkMode={false}
            portableTextComponents={portableTextComponents}
          />

          {/* Service Area Map Section */}
          <section className='py-16 bg-white' aria-labelledby="service-area-heading">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <header className="text-left mb-12">
                <h2 id="service-area-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                  <span className="mr-2">Service Areas</span>
                  <span className="text-red-600">Interactive Map</span>
                </h2>
                <p className="mb-6 mt-5 text-lg md:text-xl text-gray-600">
                  Comprehensive electrical services across {locationName} and surrounding areas
                </p>
              </header>
              <MapLocations />
            </div> 
          </section>
          
          {/* Contact Section */}
          <section className="py-24 bg-gray-900" aria-labelledby="contact-heading">
            <div className="container mx-auto px-4">
              <header className="text-center mb-20">
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Contact Our Team
                </h2>
                <div className="w-24 h-1 bg-red-600 mx-auto mb-6" aria-hidden="true"></div>
                <p className="mb-6 text-lg md:text-xl text-white">
                  Professional electrical services with multiple convenient ways to reach our certified specialists in {locationName}
                </p>
              </header>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Phone Support */}
                <div className="group bg-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" aria-hidden="true"></div>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                      <Phone className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Phone Support</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                      Direct access to our certified electrical specialists for immediate professional consultation and emergency services in {locationName}.
                    </p>
                    <div className="mt-auto">
                      <a 
                        href="tel:0449003526"
                        className="text-2xl font-bold text-red-400 mb-2 hover:text-red-300 transition-colors block"
                      >
                        0449 003 526
                      </a>
                      <p className="text-gray-400 mb-4 text-lg">Call us directly</p>
                      <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                        <p className="text-sm font-semibold text-gray-200">Business Hours</p>
                        <p className="text-sm text-gray-300">Mon-Fri: 6:00am - 5:30pm AEST</p>
                        <p className="text-sm text-gray-300">Saturday: 8:00am - 12:00pm AEST</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Email Support */}
                <div className="group bg-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" aria-hidden="true"></div>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                      <Mail className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Email Support</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                      Professional correspondence for project inquiries, detailed quotes, and comprehensive electrical assessments in {locationName}.
                    </p>
                    <div className="mt-auto">
                      <p className="text-2xl font-bold text-red-400 mb-2">Email Us</p>
                      <div
                        
                        className="text-gray-400 mb-4 text-lg hover:text-gray-300 transition-colors block break-all"
                      >
                        info@everythingelectricalsydney.com.au
                      </div>
                      <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                        <p className="text-sm font-semibold text-gray-200">Response Time</p>
                        <p className="text-sm text-gray-300">Professional inquiries within 24 hours</p>
                        <p className="text-sm text-gray-300">Quote requests prioritized</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Location */}
                <div className="group bg-gray-800 p-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-red-500/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600" aria-hidden="true"></div>
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg" aria-hidden="true">
                      <MapPin className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Service Area</h3>
                    <p className="text-gray-300 mb-8 leading-relaxed flex-grow">
                      Comprehensive electrical services delivered across {locationName} and Sydney&apos;s metropolitan area with full licensing and insurance coverage.
                    </p>
                    <div className="mt-auto">
                      <p className="text-2xl font-bold text-red-400 mb-2">{locationName}</p>
                      <p className="text-gray-400 mb-4 text-lg">New South Wales, Australia</p>
                      <div className="bg-gray-700/50 px-6 py-4 rounded-lg border border-gray-600">
                        <p className="text-sm font-semibold text-gray-200">Coverage Area</p>
                        <p className="text-sm text-gray-300">{locationName} and surrounding areas</p>
                        <p className="text-sm text-gray-300">Licensed and insured</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Trust Indicators */}
              <footer className="mt-16 pt-12 border-t border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center 
                    mb-3 border border-green-500 transition-all duration-500
                    hover:scale-110 hover:border-green-400" aria-hidden="true">
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="font-semibold text-white">Fully Licensed</p>
                    <p className="text-sm text-gray-400">NSW Electrical License</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3 border border-blue-500
                    transition-all duration-500 hover:scale-110 hover:border-blue-400" aria-hidden="true">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="font-semibold text-white">Fully Insured</p>
                    <p className="text-sm text-gray-400">Public Liability Coverage</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-3 
                    border border-orange-500 transition-all duration-500 hover:scale-110 hover:border-orange-400" aria-hidden="true">
                      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                    </div>
                    <p className="font-semibold text-white">24/7 Emergency</p>
                    <p className="text-sm text-gray-400">Emergency Call-Out Available</p>
                  </div>
                </div>
              </footer>
            </div>
          </section>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error rendering location page:', error);
    redirect('/areas')
  }
}