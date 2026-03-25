/**
 * Comprehensive list of Bangalore service areas for FIXplanet
 * Data compiled from service coverage analysis across 100+ Bangalore locations
 */

export interface BangaloreArea {
  name: string;
  slug: string;
  zone: 'North' | 'South' | 'East' | 'West' | 'Central';
  responseTime: string;
  landmarks: string[];
  nearbyAreas: string[];
  description: string;
  metaDescription: string;
}

// Helper function to generate area data programmatically
const generateAreaData = (
  name: string,
  zone: BangaloreArea['zone'],
  responseTime: string,
  landmarks: string[] = [],
  nearbyAreas: string[] = []
): BangaloreArea => ({
  name,
  slug: name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
  zone,
  responseTime,
  landmarks,
  nearbyAreas,
  description: `${name} is a thriving Bangalore neighborhood where Apple device users demand reliable, prompt service. FIXplanet brings expert iPhone, MacBook, iPad, and Apple Watch repair directly to your doorstep in ${name}. Our certified technicians provide same-day service with genuine parts and a 12-month warranty, ensuring your devices are restored quickly without disrupting your busy schedule.`,
  metaDescription: `Expert Apple repair in ${name}, Bangalore. iPhone screen replacement, MacBook service, iPad repair at your doorstep. Same-day service, 12-month warranty. Call now!`,
});

export const bangaloreAreas: BangaloreArea[] = [
  // Central Bangalore
  {
    name: 'Koramangala',
    slug: 'koramangala',
    zone: 'Central',
    responseTime: '30-45 minutes',
    landmarks: ['Sony Signal', 'Forum Mall', 'Koramangala Water Tank', 'Jyoti Nivas College', 'National Games Village'],
    nearbyAreas: ['HSR Layout', 'BTM Layout', 'Jayanagar', 'Ejipura', 'Madiwala'],
    description: 'Koramangala is widely recognized as the startup capital of Bangalore, home to hundreds of tech companies, coworking spaces, and cafes where founders and developers rely heavily on their Apple devices. From the buzzing lanes near Sony Signal to the popular eateries around Forum Mall and the student crowd near Jyoti Nivas College, Koramangala has one of the highest concentrations of MacBook and iPhone users in the city. FIXplanet provides the fastest doorstep Apple repair service in Koramangala, reaching customers in just 30-45 minutes across all eight blocks. Whether you work from a coworking hub on 80 Feet Road, run a startup near Koramangala Water Tank, or live in the residential blocks off Hosur Road, our certified technicians arrive with genuine Apple-compatible parts and professional repair tools. iPhone screen replacements start at just Rs 3,500, MacBook battery and display services from Rs 8,500, and every repair carries our 12-month warranty. We understand the urgency of device downtime in a neighbourhood where your MacBook is your livelihood and your iPhone keeps your business running. No need to visit a repair shop or leave your device overnight — FIXplanet repairs iPhones, MacBooks, iPads, and Apple Watches right at your location in Koramangala while you watch.',
    metaDescription: 'Fastest Apple repair in Koramangala. iPhone screen from ₹3,500, MacBook from ₹8,500. 30-45 min doorstep service near Forum Mall, Sony Signal. 12-month warranty.',
  },
  generateAreaData('Indiranagar', 'East', '30-45 minutes',
    ['100 Feet Road', 'CMH Road', 'Indiranagar Metro'],
    ['Domlur', 'HAL', 'Old Airport Road']),
  generateAreaData('Jayanagar', 'South', '40-50 minutes',
    ['Jayanagar Shopping Complex', 'Jayanagar Metro'],
    ['JP Nagar', 'BTM Layout', 'Banashankari']),
  generateAreaData('Rajajinagar', 'West', '40-50 minutes',
    ['Mantri Square Mall', 'Rajajinagar Metro'],
    ['Malleshwaram', 'Basaveshwaranagar', 'Yeshwanthpur']),
  generateAreaData('Malleshwaram', 'North', '40-50 minutes',
    ['Sampige Road', 'Mantri Mall'],
    ['Rajajinagar', 'Sadashivanagar', 'Yeshwanthpur']),

  // South Bangalore
  generateAreaData('HSR Layout', 'South', '40-50 minutes',
    ['27th Main Road', 'BDA Complex'],
    ['Koramangala', 'BTM Layout', 'Bommanahalli']),
  generateAreaData('BTM Layout', 'South', '45-55 minutes',
    ['BTM Bus Stand', 'Udupi Garden'],
    ['Koramangala', 'Jayanagar', 'HSR Layout']),
  generateAreaData('JP Nagar', 'South', '45-55 minutes',
    ['JP Nagar Metro', 'Central Jail Road'],
    ['Jayanagar', 'Banashankari', 'Uttarahalli']),
  generateAreaData('Banashankari', 'South', '50-60 minutes',
    ['Banashankari Temple', 'BDA Complex'],
    ['Jayanagar', 'JP Nagar', 'Uttarahalli']),
  generateAreaData('Electronic City', 'South', '60-75 minutes',
    ['Infosys Campus', 'Electronics City Metro'],
    ['Bommanahalli', 'Silk Board', 'Hosur Road']),
  generateAreaData('Electronic City Phase 1', 'South', '60-75 minutes'),
  generateAreaData('Electronic City Phase 2', 'South', '65-80 minutes'),
  generateAreaData('Basavanagudi', 'South', '45-55 minutes'),
  generateAreaData('Uttarahalli', 'South', '55-65 minutes'),
  generateAreaData('Bommanahalli', 'South', '50-60 minutes'),

  // East Bangalore
  {
    name: 'Whitefield',
    slug: 'whitefield',
    zone: 'East',
    responseTime: '50-60 minutes',
    landmarks: ['ITPL', 'Phoenix Marketcity', 'Prestige Tech Park', 'Embassy Tech Village', 'Forum Shantiniketan'],
    nearbyAreas: ['Marathahalli', 'Varthur', 'Brookefield', 'Hoodi', 'EPIP Zone', 'Kadugodi'],
    description: 'Whitefield has transformed from a quiet settlement into one of Bangalore\'s most prominent IT corridors, housing major tech parks like ITPL (International Tech Park Limited), Embassy Tech Village, Prestige Tech Park, and RMZ Ecoworld. The area is packed with young professionals, software engineers, and startup founders who depend on iPhones and MacBooks for their daily work. FIXplanet offers dedicated doorstep Apple repair service across Whitefield, reaching your apartment, office, or coworking space in 50-60 minutes. Whether you are near Phoenix Marketcity doing weekend shopping when your iPhone screen cracks, or at your desk in EPIP Zone when your MacBook keyboard stops working, our technicians come to you with all the parts and tools needed for an on-the-spot fix. We serve the entire Whitefield stretch including Brookefield, Hoodi Circle, Varthur, and Kadugodi. iPhone screen replacements start at Rs 3,500, MacBook services from Rs 8,500, and iPad repairs from Rs 4,000. Every repair includes genuine Apple-compatible parts and a 12-month warranty. Whitefield residents no longer need to drive through traffic to reach a service centre — FIXplanet brings certified Apple repair expertise directly to your doorstep, completing most repairs within 60-90 minutes.',
    metaDescription: 'iPhone, MacBook repair in Whitefield, Bangalore. Doorstep service near ITPL, Phoenix Marketcity, Prestige Tech Park. 50-60 min response. 12-month warranty.',
  },
  {
    name: 'Marathahalli',
    slug: 'marathahalli',
    zone: 'East',
    responseTime: '45-55 minutes',
    landmarks: ['Outer Ring Road', 'Marathahalli Bridge', 'Prestige Shantiniketan', 'Adarsh Palm Retreat', 'Innovative Multiplex'],
    nearbyAreas: ['Whitefield', 'Bellandur', 'HSR Layout', 'Kadubeesanahalli', 'Doddanekkundi', 'Brookefield'],
    description: 'Marathahalli sits at the heart of Bangalore\'s Outer Ring Road tech corridor, making it one of the most Apple-device-dense neighbourhoods in the city. Surrounded by major IT campuses, premium apartment complexes like Prestige Shantiniketan and Adarsh Palm Retreat, and a massive population of software engineers, Marathahalli sees heavy demand for iPhone screen repairs and MacBook servicing. The area\'s proximity to ITPL, Bellandur, and the ORR tech belt means thousands of professionals carry MacBook Pros and iPhones as their primary work devices. FIXplanet provides fast doorstep Apple repair in Marathahalli with a 45-55 minute response time. Our technicians cover the entire Marathahalli stretch — from the iconic Marathahalli Bridge junction to the residential enclaves off Outer Ring Road, and the busy commercial zone near Innovative Multiplex. iPhone screen replacements start at Rs 3,500, battery replacements from Rs 2,500, MacBook display and logic board repairs from Rs 8,500. We also serve the immediately surrounding areas of Kadubeesanahalli, Doddanekkundi, and Brookefield. No need to navigate ORR traffic to find a repair shop. FIXplanet comes to your home or office in Marathahalli, fixes your Apple device on the spot with genuine parts, and backs it with a 12-month warranty. Most repairs are completed within 60-90 minutes.',
    metaDescription: 'iPhone screen replacement from ₹3,500 in Marathahalli. MacBook, iPad repair at your doorstep near Outer Ring Road, Marathahalli Bridge. 45-55 min response. 12-month warranty.',
  },
  generateAreaData('Bellandur', 'East', '50-60 minutes',
    ['Bellandur Lake', 'Eco Space'],
    ['Marathahalli', 'HSR Layout', 'Sarjapur Road']),
  generateAreaData('Whitefield Main Road', 'East', '50-60 minutes'),
  generateAreaData('Varthur', 'East', '55-65 minutes'),
  generateAreaData('Varthur Road', 'East', '55-65 minutes'),
  generateAreaData('Marathahalli Bridge', 'East', '50-60 minutes'),
  generateAreaData('Kadubeesanahalli', 'East', '55-65 minutes'),
  generateAreaData('Panathur', 'East', '55-65 minutes'),
  generateAreaData('Belathur', 'East', '55-65 minutes'),
  generateAreaData('Carmelaram', 'East', '55-65 minutes'),
  generateAreaData('Kadugodi', 'East', '60-70 minutes'),
  generateAreaData('Hagadur', 'East', '60-70 minutes'),
  generateAreaData('Munnekollal', 'East', '55-65 minutes'),
  generateAreaData('Brookefield', 'East', '55-65 minutes'),
  generateAreaData('Kundalahalli', 'East', '50-60 minutes'),
  generateAreaData('Hoodi', 'East', '55-65 minutes'),
  generateAreaData('Hope Farm', 'East', '55-65 minutes'),
  generateAreaData('Nallurhalli', 'East', '55-65 minutes'),
  generateAreaData('Immadihalli', 'East', '55-65 minutes'),
  generateAreaData('Siddapura', 'East', '55-65 minutes'),
  generateAreaData('Nellurahalli', 'East', '55-65 minutes'),
  generateAreaData('Channasandra', 'East', '55-65 minutes'),
  generateAreaData('Thubarahalli', 'East', '60-70 minutes'),
  generateAreaData('Vinayakanagar', 'East', '55-65 minutes'),

  // Central & CBD
  generateAreaData('MG Road', 'Central', '35-45 minutes'),
  generateAreaData('Brigade Road', 'Central', '35-45 minutes'),
  {
    name: 'Cunningham Road',
    slug: 'cunningham-road',
    zone: 'Central',
    responseTime: '35-45 minutes',
    landmarks: ['Sigma Mall', 'Manipal Centre', 'Cubbon Park', 'Raj Bhavan', 'Karnataka High Court'],
    nearbyAreas: ['Vasanth Nagar', 'Shivajinagar', 'Palace Road', 'MG Road', 'Commercial Street', 'Sadashivanagar'],
    description: 'Cunningham Road is one of Bangalore\'s most prestigious business addresses, located in the heart of the Central Business District. This premium corridor connects MG Road to Sadashivanagar and is home to corporate offices, luxury hotels, upscale restaurants, and high-end boutiques. Business executives, lawyers, consultants, and professionals along Cunningham Road and the adjacent Vasanth Nagar area rely on their Apple devices for critical work — from client presentations on MacBook Pros to essential communication on iPhones. FIXplanet offers premium doorstep Apple repair service on Cunningham Road and surrounding CBD areas with a swift 35-45 minute response time. Our technicians reach your office at Manipal Centre, your meeting point near Sigma Mall, or your residence in Vasanth Nagar fully equipped with genuine parts and professional tools. We understand that professionals in the CBD cannot afford device downtime, which is why we prioritize speed and quality in equal measure. iPhone screen replacements start at Rs 3,500, MacBook services from Rs 8,500, and every repair includes a 12-month warranty. Whether you are near Commercial Street, Palace Road, or the Cubbon Park side of the CBD, FIXplanet provides certified Apple repair without the need to visit a service centre. Our service extends to the neighbouring areas of Shivajinagar, MG Road, and Ulsoor.',
    metaDescription: 'Premium Apple repair on Cunningham Road, Bangalore CBD. iPhone, MacBook doorstep service near MG Road, Commercial Street. 35-45 min response. 12-month warranty.',
  },
  generateAreaData('Shivajinagar', 'Central', '35-45 minutes'),
  generateAreaData('Ulsoor', 'Central', '35-45 minutes'),
  generateAreaData('Domlur', 'Central', '35-45 minutes'),
  generateAreaData('Cox Town', 'Central', '40-50 minutes'),
  generateAreaData('Benson Town', 'Central', '40-50 minutes'),
  generateAreaData('Frazer Town', 'Central', '40-50 minutes'),
  generateAreaData('Cooke Town', 'Central', '40-50 minutes'),
  generateAreaData('Richmond Town', 'Central', '40-50 minutes'),
  generateAreaData('Langford Town', 'Central', '40-50 minutes'),
  generateAreaData('Wilson Garden', 'Central', '40-50 minutes'),
  generateAreaData('Shanti Nagar', 'Central', '40-50 minutes'),
  generateAreaData('Adugodi', 'Central', '40-50 minutes'),
  generateAreaData('Madivala', 'Central', '45-55 minutes'),

  // Koramangala Sub-blocks
  generateAreaData('Koramangala 1st Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 2nd Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 3rd Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 4th Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 5th Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 6th Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 7th Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 8th Block', 'Central', '30-45 minutes'),
  generateAreaData('Koramangala 9th Block', 'Central', '30-45 minutes'),

  // North Bangalore
  generateAreaData('Hebbal', 'North', '45-55 minutes'),
  generateAreaData('Hennur', 'North', '50-60 minutes'),
  generateAreaData('Hennur Road', 'North', '50-60 minutes'),
  generateAreaData('HBR Layout', 'North', '45-55 minutes'),
  generateAreaData('HBR Layout 1st Block', 'North', '45-55 minutes'),
  generateAreaData('HBR Layout 2nd Block', 'North', '45-55 minutes'),
  generateAreaData('HBR Layout 3rd Block', 'North', '45-55 minutes'),
  generateAreaData('HBR Layout 4th Block', 'North', '45-55 minutes'),
  generateAreaData('HBR Layout 5th Block', 'North', '45-55 minutes'),
  generateAreaData('HRBR Layout', 'North', '45-55 minutes'),
  generateAreaData('Kalyan Nagar', 'North', '50-60 minutes'),
  generateAreaData('Kalyan Nagar 4th Block', 'North', '50-60 minutes'),
  generateAreaData('Horamavu', 'North', '50-60 minutes'),
  generateAreaData('Horamavu Banjara Layout', 'North', '50-60 minutes'),
  generateAreaData('Ramamurthy Nagar', 'North', '50-60 minutes'),
  generateAreaData('Kammanahalli', 'North', '45-55 minutes'),
  generateAreaData('Sahakar Nagar', 'North', '50-60 minutes'),
  generateAreaData('Sahakara Nagar', 'North', '50-60 minutes'),
  generateAreaData('Sanjay Nagar', 'North', '45-55 minutes'),

  // West Bangalore
  generateAreaData('Yeshwanthpur', 'West', '45-55 minutes'),
  generateAreaData('Yeshwanthpur Industrial Area', 'West', '45-55 minutes'),
  generateAreaData('Peenya', 'West', '50-60 minutes'),
  generateAreaData('Rajajinagar', 'West', '40-50 minutes'),
  {
    name: 'Basaveshwaranagar',
    slug: 'basaveshwaranagar',
    zone: 'West',
    responseTime: '45-55 minutes',
    landmarks: ['BDA Complex', 'Basaveshwara Circle', 'ISKCON Temple Rajajinagar', 'Chord Road', 'Navarang Theatre'],
    nearbyAreas: ['Rajajinagar', 'Yeshwanthpur', 'Vijayanagar', 'Mahalakshmi Layout', 'Kamakshipalya'],
    description: 'Basaveshwaranagar is a well-established residential neighbourhood in West Bangalore, known for its family-friendly atmosphere, tree-lined streets, and a healthy mix of working professionals, retired residents, and small business owners. Located between Rajajinagar and Vijayanagar along the busy Chord Road, Basaveshwaranagar has seen a steady rise in Apple device usage as families invest in iPhones, iPads for children\'s education, and MacBooks for work-from-home setups. FIXplanet brings certified doorstep Apple repair directly to homes and offices in Basaveshwaranagar, arriving within 45-55 minutes of your call. Our service covers the entire locality from BDA Complex and Basaveshwara Circle to the residential blocks extending towards Kamakshipalya and Mahalakshmi Layout. iPhone screen replacements start at Rs 3,500, iPad screen repairs from Rs 4,000, MacBook battery and display services from Rs 8,500, and Apple Watch repairs from Rs 3,000. Every component we use is a genuine Apple-compatible part, and all repairs are backed by a 12-month warranty. Families in Basaveshwaranagar appreciate not having to travel to distant service centres in the city centre — FIXplanet technicians handle everything on the spot at your home, whether it is a cracked iPhone screen, a swollen MacBook battery, or an iPad that won\'t charge. We also serve nearby areas including Yeshwanthpur, Rajajinagar, and Vijayanagar.',
    metaDescription: 'iPhone, MacBook, iPad repair in Basaveshwaranagar. Doorstep service in West Bangalore near Rajajinagar, Yeshwanthpur. 45-55 min response. 12-month warranty.',
  },
  generateAreaData('Kengeri', 'West', '60-70 minutes'),
  generateAreaData('Jalahalli', 'West', '50-60 minutes'),
  generateAreaData('Jalahalli West', 'West', '50-60 minutes'),
  generateAreaData('Rajarajeshwari Nagar', 'West', '60-70 minutes'),

  // JP Nagar Sub-phases
  generateAreaData('JP Nagar 1st Phase', 'South', '45-55 minutes'),
  generateAreaData('JP Nagar 2nd Phase', 'South', '45-55 minutes'),
  generateAreaData('JP Nagar 3rd Phase', 'South', '45-55 minutes'),
  generateAreaData('JP Nagar 4th Phase', 'South', '50-60 minutes'),
  generateAreaData('JP Nagar 5th Phase', 'South', '50-60 minutes'),
  generateAreaData('JP Nagar 6th Phase', 'South', '50-60 minutes'),
  generateAreaData('JP Nagar 7th Phase', 'South', '55-65 minutes'),
  generateAreaData('JP Nagar 8th Phase', 'South', '55-65 minutes'),
  generateAreaData('JP Nagar 9th Phase', 'South', '60-70 minutes'),

  // Additional Central Areas
  generateAreaData('Silk Board', 'South', '45-55 minutes'),
  generateAreaData('Jeevan Bima Nagar', 'East', '40-50 minutes'),
  generateAreaData('Jayamahal', 'Central', '40-50 minutes'),
  generateAreaData('Sadashivanagar', 'North', '40-50 minutes'),
  generateAreaData('Malleshpalya', 'North', '45-55 minutes'),
  generateAreaData('Doddanekundi', 'East', '55-65 minutes'),
  generateAreaData('Ramagondanahalli', 'East', '55-65 minutes'),
  generateAreaData('Gunjur', 'East', '60-70 minutes'),
  generateAreaData('Amruthahalli', 'North', '55-65 minutes'),
  generateAreaData('Amruthalli', 'North', '55-65 minutes'),
  generateAreaData('Avalahalli', 'North', '55-65 minutes'),
  generateAreaData('Byatarayanapura', 'North', '60-70 minutes'),
  generateAreaData('RMV Extension', 'North', '50-60 minutes'),
  generateAreaData('Ganganagar', 'North', '50-60 minutes'),
  generateAreaData('Sultanpalya', 'North', '50-60 minutes'),
  generateAreaData('Jakkur', 'North', '55-65 minutes'),
  generateAreaData('Jakkuru Layout', 'North', '55-65 minutes'),
  generateAreaData('Sanjeevini Nagar', 'North', '50-60 minutes'),
  generateAreaData('BEL Road', 'North', '50-60 minutes'),
  generateAreaData('Nandini Layout', 'North', '50-60 minutes'),
  generateAreaData('Kacharakana Halli', 'North', '50-60 minutes'),
  generateAreaData('MS Palya', 'North', '50-60 minutes'),
  generateAreaData('Jayanti Nagar', 'North', '50-60 minutes'),
  generateAreaData('NRI Layout', 'North', '50-60 minutes'),
  generateAreaData('Chokkanahalli', 'North', '55-65 minutes'),
  generateAreaData('Chikkagubbi', 'North', '55-65 minutes'),
  generateAreaData('Thanisandra Main Road', 'North', '55-65 minutes'),
  generateAreaData('Hormavu Agara', 'North', '55-65 minutes'),
  generateAreaData('Medahalli', 'North', '55-65 minutes'),
  generateAreaData('Byrathi Village', 'North', '60-70 minutes'),
  generateAreaData('Narayanapura', 'North', '55-65 minutes'),
  generateAreaData('Kempapura', 'North', '55-65 minutes'),
  generateAreaData('Hebbal Kempapura', 'North', '55-65 minutes'),
  generateAreaData('Goraguntepalya', 'North', '50-60 minutes'),
  generateAreaData('Doddabommasandra', 'North', '60-70 minutes'),
  generateAreaData('Pattandur Agrahara', 'North', '60-70 minutes'),
  generateAreaData('ECC Road', 'North', '55-65 minutes'),

  // Missing areas from reference data - Central Bangalore
  generateAreaData('SP Road', 'Central', '35-45 minutes'),
  generateAreaData('Murphy Town', 'Central', '40-50 minutes'),
  generateAreaData('Seshadripuram', 'Central', '40-50 minutes'),
  generateAreaData('Vasanth Nagar', 'Central', '35-45 minutes'),

  // Missing areas - South Bangalore
  generateAreaData('Sarjapur', 'South', '55-65 minutes'),
  generateAreaData('Harlur', 'South', '50-60 minutes'),
  generateAreaData('Begur', 'South', '55-65 minutes'),
  generateAreaData('Giri Nagar', 'South', '50-60 minutes'),
  generateAreaData('Kumaraswamy Layout', 'South', '55-65 minutes'),
  generateAreaData('Padmanabhanagar', 'South', '55-65 minutes'),
  generateAreaData('Anjanapura', 'South', '60-70 minutes'),
  generateAreaData('Arekere', 'South', '55-65 minutes'),
  generateAreaData('Gottigere', 'South', '60-70 minutes'),
  generateAreaData('Hulimavu', 'South', '60-70 minutes'),
  generateAreaData('Bommasandra', 'South', '65-75 minutes'),

  // Missing areas - East Bangalore
  generateAreaData('Mahadevapura', 'East', '50-60 minutes'),
  generateAreaData('ITPL', 'East', '50-60 minutes'),
  generateAreaData('Sarjapur Road', 'East', '55-65 minutes'),

  // Missing areas - North Bangalore
  generateAreaData('Banaswadi', 'North', '45-55 minutes'),
  generateAreaData('KR Puram', 'North', '50-60 minutes'),
  generateAreaData('RT Nagar', 'North', '45-55 minutes'),
  generateAreaData('Yelahanka', 'North', '55-65 minutes'),
  generateAreaData('Lingarajapuram', 'North', '50-60 minutes'),
  generateAreaData('Vidyaranyapura', 'North', '55-65 minutes'),

  // Missing areas - West Bangalore
  generateAreaData('Vijay Nagar', 'West', '50-60 minutes'),
  generateAreaData('Mathikere', 'West', '50-60 minutes'),
  generateAreaData('Kamakshipalya', 'West', '55-65 minutes'),
  generateAreaData('Mahalakshmi Layout', 'West', '50-60 minutes'),
  generateAreaData('Nagarbhavi', 'West', '55-65 minutes'),

  // Outskirts - Far locations with longer response times
  generateAreaData('Attibele', 'South', '75-90 minutes'),
  generateAreaData('Jigani', 'South', '70-85 minutes'),
  generateAreaData('Anekal', 'South', '75-90 minutes'),
  generateAreaData('Chandapura', 'South', '70-85 minutes'),
  generateAreaData('Nelamangala', 'North', '75-90 minutes'),
];

// Helper function to get area by slug
export function getAreaBySlug(slug: string): BangaloreArea | undefined {
  return bangaloreAreas.find(area => area.slug === slug);
}

// Get all area slugs for static generation
export function getAllAreaSlugs(): string[] {
  return bangaloreAreas.map(area => area.slug);
}

// Get areas by zone
export function getAreasByZone(zone: BangaloreArea['zone']): BangaloreArea[] {
  return bangaloreAreas.filter(area => area.zone === zone);
}
