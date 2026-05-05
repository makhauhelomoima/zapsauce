export const RECIPES = {
  'free-sample': {
    name: 'FREE SAMPLE - Turmeric Starter',
    price: 0,
    ussd: '*777*57031600*0%23',
    ref: 'FREE',
    type: 'FREE',
    cures: ['First-time inflammation test', 'Morning energy boost', 'Beginner-friendly intro']
  },
  'monthly-home': {
    name: 'MONTHLY HOME - Auto-Restock',
    price: 120,
    ussd: '*777*57031600*120%23',
    ref: 'HOME',
    type: 'SUBSCRIPTION',
    cures: ['Never run out of Zap Sauce', 'Save M20 vs buying single monthly', 'Priority WhatsApp support']
  },
  'pack-all-5': {
    name: 'PACK - ALL 5 - Best Value',
    price: 647,
    ussd: '*777*57031600*647%23',
    ref: 'PACK',
    type: 'BUNDLE',
    cures: ['Full arsenal', 'Save M164', 'Full family protection']
  },
  'citrus': {
    name: 'CITRUS',
    price: 120,
    ussd: '*777*57031600*120%23',
    ref: 'ZAPCIT',
    type: 'RECIPE',
    cures: ['Seasonal flu & congestion', 'Sluggish metabolism', 'Skin breakouts from toxins']
  },
  'gout-zap': {
    name: 'GOUT ZAP',
    price: 120,
    ussd: '*777*57031600*120%23',
    ref: 'ZAPGOUT',
    type: 'RECIPE',
    cures: ['Gout flare pain', 'Joint crystal deposits', 'Kidney stone prevention']
  },
  'tb-support': {
    name: 'TB SUPPORT - Lung Strength',
    price: 197,
    ussd: '*777*57031600*197%23',
    ref: 'ZAPTB',
    type: 'CONDITION',
    cures: ['Lung tissue support', 'Cough & congestion', 'Energy during treatment', 'Immune system boost'],
    warning: 'Nutritional support ONLY. NEVER stop TB meds. Use alongside treatment.'
  },
  'lupus-calm': {
    name: 'LUPUS CALM - Anti-inflammatory',
    price: 197,
    ussd: '*777*57031600*197%23',
    ref: 'ZAPLUP',
    type: 'CONDITION',
    cures: ['Autoimmune flares', 'Joint pain & swelling', 'Skin rashes & sensitivity', 'Chronic fatigue'],
    warning: 'Calm the storm. Track flares. Rest during flares. Consult rheumatologist.'
  },
  'hiv-immune': {
    name: 'HIV IMMUNE - Immune Support',
    price: 197,
    ussd: '*777*57031600*197%23',
    ref: 'ZAPHIV',
    type: 'CONDITION',
    cures: ['CD4 count support', 'Opportunistic infection defense', 'Energy & appetite', 'Medication side effects'],
    warning: 'Nutrition ONLY. NEVER stop ARVs. Strong body = Strong fight.'
  },
  'malnutrition-zap': {
    name: 'MALNUTRITION ZAP - Weight Gain',
    price: 120,
    ussd: '*777*57031600*120%23',
    ref: 'ZAPNUTR',
    type: 'CONDITION',
    cures: ['Unhealthy weight loss', 'Protein deficiency', 'Vitamin depletion', 'Weak immune system'],
    warning: 'Safe weight gain +2kg per month target. Nutrient dense.'
  },
  'warrior-pro': {
    name: 'WARRIOR PRO - Black Pepper Boost',
    price: 140,
    ussd: '*777*57031600*140%23',
    ref: 'ZAPWAR',
    type: 'SWEET',
    cures: ['Poor nutrient absorption', 'Post-workout inflammation', 'Brain fog & low focus', 'Chronic fatigue']
  },
  'queen': {
    name: 'QUEEN - Cinnamon Royal',
    price: 130,
    ussd: '*777*57031600*130%23',
    ref: 'ZAPQUE',
    type: 'SWEET',
    cures: ['Blood sugar spikes', 'Hormonal imbalance', 'PMS & menstrual cramps', 'Sugar cravings']
  },
  'bone': {
    name: 'BONE - Ginger Joint',
    price: 157,
    ussd: '*777*57031600*157%23',
    ref: 'BONE',
    type: 'SWEET',
    cures: ['Adults 30+ Joint pain', 'Knee & hip joint pain', 'Osteoarthritis flare-ups', 'Morning stiffness']
  },
  'herb-fire': {
    name: 'HERB FIRE - Garlic Rosemary',
    price: 157,
    ussd: '*777*57031600*157%23',
    ref: 'HERB',
    type: 'SAVORY',
    cures: ['High blood pressure & cholesterol', 'Poor circulation', 'Antibiotic resistance', 'Cognitive decline']
  }
}