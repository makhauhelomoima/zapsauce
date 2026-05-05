export const HERO_URL = 'https://drive.google.com/uc?export=download&id=1NjKBExO5geHyq0GsGLwLUZfYoFQbGNAa';

type Recipe = {
  name: string;
  subtitle: string;
  category: string;
  badge?: string;
  price: number;
  ussd: string;
  eft: string;
  cures: string[];
  description: string;
  content: string;
};

export const RECIPES: Record<string, Recipe> = {
  free1: {
    name: 'FREE SAMPLE',
    subtitle: 'Turmeric Starter',
    category: 'FREE',
    badge: 'FREE',
    price: 0,
    ussd: '',
    eft: '',
    cures: [
      'First-time inflammation test',
      'Morning energy boost',
      'Beginner-friendly intro',
      'Taste before you invest'
    ],
    description: 'Proof it works. Simple 3-ingredient version. No payment needed. Tap to unlock instantly.',
    content: `
ZAP SAUCE TEASER:

Warm water + lemon + honey
Drink now. Feel the difference in 10 mins.

This is 5% of the power.
Want 100%? Explore recipes below. ⚡`
  },
  free2: {
    name: 'IMMUNITY TEASER',
    subtitle: 'Garlic Fire Shot',
    category: 'FREE',
    badge: 'FREE',
    price: 0,
    ussd: '',
    eft: '',
    cures: [
      'Instant immune kick',
      'Sinus clearing power',
      'Natural antibiotic test',
      'Cold warning shot'
    ],
    description: 'Tastes like fire. Works like medicine. Raw power in 10 seconds.',
    content: `
IMMUNITY TEASER SHOT:

1 clove raw garlic, crushed
1 teaspoon raw honey
1/2 teaspoon grated ginger
Mix. Swallow. Chase with water.

Tastes like fire. Works like medicine.
Full protocols in Explore Recipes. ⚡`
  },
  monthly: {
    name: 'MONTHLY HEAL',
    subtitle: 'Auto-Restock Plan',
    category: 'MONTHLY',
    badge: 'AUTO',
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAP120',
    cures: [
      'Never run out of Zap Sauce',
      'Save M20 vs buying single monthly',
      'Priority WhatsApp support',
      'Cancel anytime via WhatsApp'
    ],
    description: 'Join 30-day healing cycle. M120/month. We remind you day 28. You stay stocked. Cancel anytime via WhatsApp STOP.',
    content: `
MONTHLY HEAL - 28 DAY PROTOCOL:

1. Raw honey: 1 tablespoon
2. Organic turmeric: 1 teaspoon
3. Black pepper: Pinch
4. Warm water: 200ml
5. Lemon juice: Half lemon

Every morning, empty stomach, 28 days.
Reduces inflammation. Boosts energy.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  original: {
    name: 'ORIGINAL',
    subtitle: 'Turmeric Gold',
    category: 'SWEET',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPORIG',
    cures: [
      'Chronic inflammation',
      'Joint stiffness & arthritis pain',
      'Low immunity & frequent colds',
      'Digestive bloating'
    ],
    description: 'The classic. 4,000 years of Ayurvedic relief. M197 unlocks full recipe + dosage.',
    content: `
ZAP SAUCE ORIGINAL BLEND - RATIOS:

Base: 500ml raw honey
Add: 100g organic turmeric powder
Add: 20g black pepper, finely ground
Add: 10g ginger powder
Add: 5g cayenne pepper

Mix in glass jar. Shake daily.
Dose: 1 teaspoon in warm water every morning.
Shelf life: 6 months.

Scale it. Sell it. Heal Lesotho. ⚡`
  },
  citrus: {
    name: 'CITRUS',
    subtitle: 'Lemon Zest',
    category: 'SWEET',
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAPCIT',
    cures: [
      'Vitamin C deficiency',
      'Seasonal flu & congestion',
      'Sluggish metabolism',
      'Skin breakouts from toxins'
    ],
    description: 'Immunity in a jar. Citrus fire meets turmeric gold. M120 for complete formula.',
    content: `
CITRUS ZAP - VITAMIN C BLAST:

Base: Original blend
Add: Lemon zest: 2 tablespoons
Add: Orange peel powder: 1 teaspoon
Add: Vitamin C powder: 500mg

Extra immune power. Tastes amazing.
Dose: 1 teaspoon morning + night during flu season.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  gout: {
    name: 'GOUT ZAP',
    subtitle: 'Uric Acid Flush',
    category: 'CONDITION',
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAPGOUT',
    cures: [
      'Uric acid buildup',
      'Gout flare pain',
      'Joint crystal deposits',
      'Kidney stone prevention'
    ],
    description: 'Targeted relief. 7 days to reduce flare. 30 days for control.',
    content: `
GOUT ZAP - URIC ACID FLUSH:

Morning:
Tart cherry juice: 200ml
Celery seed powder: 1/2 teaspoon
Water: 500ml

Night:
Lemon water: 500ml
Baking soda: 1/4 teaspoon
Turmeric: 1 teaspoon

Drink 3L water daily. Avoid red meat.
7 days to reduce flare. 30 days for control.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  tb: {
    name: 'TB SUPPORT',
    subtitle: 'Lung Strength',
    category: 'CONDITION',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPTB',
    cures: [
      'Lung tissue support',
      'Cough & congestion',
      'Energy during treatment',
      'Immune system boost'
    ],
    description: 'Nutritional support ONLY. NEVER stop TB meds. Use alongside treatment.',
    content: `
TB SUPPORT ZAP - LUNG STRENGTH:

Daily support with medication:
Garlic: 2 cloves raw, crushed
Raw honey: 2 tablespoons
Ginger: 1 tablespoon grated
Black seed oil: 1 teaspoon
Warm milk: 250ml

Steam: Eucalyptus + hot water, inhale 10 mins.

NEVER stop TB meds. This supports only.
Nutrition + medicine = Recovery.

Disclaimer: Not medical advice. Take with prescribed TB treatment. ⚡`
  },
  lupus: {
    name: 'LUPUS CALM',
    subtitle: 'Anti-Inflammatory',
    category: 'CONDITION',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPLUP',
    cures: [
      'Autoimmune flares',
      'Joint pain & swelling',
      'Skin rashes & sensitivity',
      'Chronic fatigue'
    ],
    description: 'Calm the storm. Track flares. Rest during flares. Consult rheumatologist.',
    content: `
LUPUS CALM ZAP - ANTI-INFLAMMATORY:

Morning:
Turmeric: 2 teaspoons
Black pepper: Pinch
Coconut oil: 1 tablespoon
Pineapple juice: 200ml

Night:
Chamomile tea + honey
Omega-3: Flaxseed 1 tablespoon

Avoid: Sun exposure, processed food.
Track flares. Rest during flares.

Disclaimer: Not medical advice. Consult rheumatologist. ⚡`
  },
  hiv: {
    name: 'HIV IMMUNE',
    subtitle: 'Immune Support',
    category: 'CONDITION',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPHIV',
    cures: [
      'CD4 count support',
      'Opportunistic infection defense',
      'Energy & appetite',
      'Medication side effects'
    ],
    description: 'Nutrition ONLY. NEVER stop ARVs. Strong body = Strong fight.',
    content: `
HIV IMMUNE ZAP - IMMUNE SUPPORT:

Daily with ARVs:
Moringa powder: 2 teaspoons
Baobab powder: 1 tablespoon
Raw honey: 2 tablespoons
Garlic: 1 clove
Probiotic yogurt: 250ml

Eat: Eggs, beans, green vegetables daily.

NEVER stop ARVs. This is nutrition only.
Strong body = Strong fight.

Disclaimer: Not medical advice. Take with prescribed ARVs. Consult doctor. ⚡`
  },
  malnutrition: {
    name: 'MALNUTRITION ZAP',
    subtitle: 'Weight Gain',
    category: 'CONDITION',
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAPNUTR',
    cures: [
      'Unhealthy weight loss',
      'Protein deficiency',
      'Vitamin depletion',
      'Weak immune system'
    ],
    description: 'Safe weight gain. +2kg per month target. Nutrient dense.',
    content: `
MALNUTRITION ZAP - WEIGHT GAIN:

Base shake 3x daily:
Peanut butter: 2 tablespoons
Banana: 1
Raw honey: 1 tablespoon
Full cream milk: 250ml
Moringa powder: 1 teaspoon
Blend.

Bonus: Boiled egg + avocado daily.
Target: +2kg per month safely.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  warrior: {
    name: 'WARRIOR PRO',
    subtitle: 'Black Pepper Boost',
    category: 'SWEET',
    price: 140,
    ussd: '*777*57031600*140#',
    eft: 'EFT Ref: ZAPWAR',
    cures: [
      'Poor nutrient absorption',
      'Post-workout inflammation',
      'Brain fog & low focus',
      'Chronic fatigue'
    ],
    description: '2000% absorption. For fighters. M140 unlocks warrior-grade ratios + timing.',
    content: `
WARRIOR PRO - 2000% ABSORPTION:

Base: Original blend
Add: Black pepper: 2x normal
Add: Piperine extract: 20mg
Add: MCT oil: 1 tablespoon

Take with food. Morning + post-workout.
Absorption: 2000% vs normal turmeric.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  queen: {
    name: 'QUEEN',
    subtitle: 'Cinnamon Royal',
    category: 'SWEET',
    price: 130,
    ussd: '*777*57031600*130#',
    eft: 'EFT Ref: ZAPQUE',
    cures: [
      'Blood sugar spikes',
      'Hormonal imbalance',
      'PMS & menstrual cramps',
      'Sugar cravings'
    ],
    description: 'Regal relief. Balances body. M130 reveals royal ratios + evening ritual.',
    content: `
QUEEN ZAP - CINNAMON ROYAL:

Base: Original blend
Add: Ceylon cinnamon: 2 teaspoons
Add: Maca powder: 1 teaspoon
Add: Evening primrose oil: 1 teaspoon

Evening ritual: 1 teaspoon in warm milk.
Balances hormones. Reduces cramps.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  bone: {
    name: 'BONE',
    subtitle: 'Ginger Joint',
    category: 'SWEET',
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAPBONE',
    cures: [
      'Knee & hip joint pain',
      'Cartilage support',
      'Morning stiffness',
      'Arthritis progression'
    ],
    description: 'Joint fortress. M120 unlocks bone ratios + mobility routine.',
    content: `
BONE ZAP - GINGER JOINT:

Base: Original blend
Add: Ginger: 3x normal
Add: Collagen powder: 10g
Add: MSM powder: 1 teaspoon

Morning: 1 teaspoon in bone broth.
Evening: Gentle stretching routine.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  },
  herbfire: {
    name: 'HERB FIRE',
    subtitle: 'Garlic Rosemary',
    category: 'SAVORY',
    badge: 'SAVORY',
    price: 150,
    ussd: '*777*57031600*150#',
    eft: 'EFT Ref: ZAPHERB',
    cures: [
      'High blood pressure & cholesterol',
      'Heart disease risk',
      'Poor circulation',
      'Bacterial infections'
    ],
    description: 'Heart fire. Savory blend. M150 unlocks garlic-rosemary ratios.',
    content: `
HERB FIRE - GARLIC ROSEMARY:

Base: Raw honey 500ml
Add: Garlic: 10 cloves, crushed
Add: Rosemary: 2 tablespoons
Add: Hawthorn berry: 1 tablespoon
Add: Cayenne: 1 teaspoon

Ferment 2 weeks. Strain.
Dose: 1 teaspoon before meals.
Lowers BP. Fights infection.

Disclaimer: Not medical advice. Consult doctor. ⚡`
  }
};