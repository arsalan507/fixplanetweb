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
  generateAreaData('Koramangala', 'Central', '30-45 minutes',
    ['Sony Signal', 'Forum Mall', 'Koramangala Water Tank'],
    ['HSR Layout', 'BTM Layout', 'Jayanagar']),
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
  generateAreaData('Whitefield', 'East', '50-60 minutes',
    ['ITPL', 'Phoenix Marketcity', 'Prestige Tech Park'],
    ['Marathahalli', 'Varthur', 'Brookefield']),
  generateAreaData('Marathahalli', 'East', '45-55 minutes',
    ['Outer Ring Road', 'Marathahalli Bridge'],
    ['Whitefield', 'Bellandur', 'HSR Layout']),
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
  generateAreaData('Cunningham Road', 'Central', '35-45 minutes'),
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
  generateAreaData('Basaveshwaranagar', 'West', '45-55 minutes'),
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
