export type Recipe = {
  name: string
  price: number
  ussd: string
  ref: string
  type: string
  cures: string[]
  subtitle?: string
  warning?: string
}

export const RECIPES: Record<string, Recipe> = {
  'free-sample': {
    name: 'FREE SAMPLE',
    subtitle: 'Turmeric Starter',
    price: 0,
    ussd: '*777*57031600*0%23',
    ref: 'FREE',
    type: 'FREE',
    cures: ['First-time inflammation test', 'Morning energy boost', 'Beginner-friendly intro', 'Taste before you invest']
  },
  'immunity-teaser': {
    name: 'IMMUNITY TEASER',
    subtitle: 'Lightning Defense Shot',
    price: 0,
    ussd: '*777*57031600*0%23',
    ref: 'TEASER',
    type: 'FREE',
    cures: ['Rapid immune system test', 'Instant warming sensation', 'Perfect for cold mornings', 'Share with skeptical friends']
  },
  'monthly-heal': {
    name: 'MONTHLY HEAL',
    subtitle: 'Auto-Restock Plan',
    price: 120,
    ussd: '*777*57031600*120%23',
    ref: 'HOME',
    type: 'AUTO',
    cures: ['Never run out of Zap Sauce', 'Save M20 vs buying single monthly', 'Priority WhatsApp support', 'Cancel anytime via WhatsApp']
  },
  'pdf-kit': {
    name: 'PDF RECIPES KIT - All 13',
    subtitle: 'Complete Collection - Save 70%',
    price: 560,
    ussd: '*777*57031600*560%23',
    ref: 'PDF',
    type: 'BUNDLE',
    cures: ['All 13 recipes in one PDF', '2 FREE samples included', '11 paid recipes included', 'Save M1328 vs buying all separately', 'Lifetime WhatsApp access', 'Print or share with family']
  },
  'original': {
    name: 'ORIGINAL',
    subtitle: 'Turmeric Gold',
    price: 120,
    ussd: '*777*57031600*120%23',
    ref: 'ZAPORIG',
    type: 'SWEET',
    cures: ['Chronic inflammation', 'Joint stiffness & arthritis pain', 'Low immunity & frequent colds', 'Digestive bloating']
  },
  'citrus': {
    name: 'CITRUS',
    subtitle: 'Lemon Zest',
    price: 120,
    ussd: '*777*57031600*120%23',
    ref: 'ZAPCIT',
    type: 'SWEET',
    cures: ['Vitamin C deficiency', 'Seasonal flu & congestion', 'Sluggish metabolism', 'Skin breakouts from toxins']
  },
  'warrior-pro': {
    name: 'WARRIOR PRO',
    subtitle: 'Black Pepper Boost',
    price: 140,
    ussd: '*777*57031600*140%23',
    ref: 'ZAPWAR',
    type: 'SWEET',
    cures: ['Poor nutrient absorption', 'Post-workout inflammation', 'Brain fog & low focus', 'Chronic fatigue']
  },
  'queen': {
    name: 'QUEEN',
    subtitle: 'Cinnamon Royal',
    price: 130,
    ussd: '*777*57031600*130%23',
    ref: 'ZAPQUE',
    type: 'SWEET',
    cures: ['Blood sugar spikes', 'Hormonal imbalance', 'PMS & menstrual cramps', 'Sugar cravings']
  },
  'bone': {
    name: 'BONE',
    subtitle: 'Ginger Joint',
    price: 157,
    ussd: '*777*57031600*157%23',
    ref: 'BONE',
    type: 'SWEET',
    cures: ['Knee & hip joint pain', 'Morning stiffness', 'Osteoarthritis flare-ups']
  },
  'herb-fire': {
    name: 'HERB FIRE',
    subtitle: 'Garlic Rosemary',
    price: 157,
    ussd: '*777*57031600*157%23',
    ref: 'HERB',
    type: 'SAVORY',
    cures: ['High blood pressure & cholesterol', 'Poor circulation', 'Antibiotic resistance', 'Cognitive decline']
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
  }
}