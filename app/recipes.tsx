export const HERO_URL = 'https://drive.google.com/uc?export=download&id=1NjKBExO5geHyq0GsGLwLUZfYoFQbGNAa';

type FreeRecipe = {
  name: string;
  price: 0;
  content: string;
};

type PaidRecipe = {
  name: string;
  price: number;
  ussd: string;
  eft: string;
  content: string;
};

export const RECIPES: Record<string, FreeRecipe | PaidRecipe> = {
  free1: {
    name: 'TEASER SHOT',
    price: 0,
    content: `
ZAP SAUCE TEASER:

Warm water + lemon + honey
Drink now. Feel the difference in 10 mins.

This is 5% of the power.
Want 100%? Explore recipes below. ⚡`
  },
  free2: {
    name: 'IMMUNITY TEASER',
    price: 0,
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
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAP120',
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
  gout: {
    name: 'GOUT ZAP',
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAPGOUT',
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
  malnutrition: {
    name: 'MALNUTRITION ZAP',
    price: 120,
    ussd: '*777*57031600*120#',
    eft: 'EFT Ref: ZAPNUTR',
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
  code: {
    name: 'THE ZAP SAUCE CODE',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPCODE',
    content: `
THE 3-STEP ZAP PROTOCOL:

STEP 1: MORNING ZAP
Warm water + lemon + honey + cayenne

STEP 2: MIDDAY ZAP
Turmeric + black pepper + coconut oil

STEP 3: NIGHT ZAP
Ginger + honey + chamomile

BONUS: Emergency Zap for colds
Raw garlic + honey + lemon

This is the code. ⚡`
  },
  original: {
    name: 'ORIGINAL BLEND',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPORIG',
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
  tb: {
    name: 'TB SUPPORT ZAP',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPTB',
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
    name: 'LUPUS CALM ZAP',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPLUP',
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
    name: 'HIV IMMUNE ZAP',
    price: 197,
    ussd: '*777*57031600*197#',
    eft: 'EFT Ref: ZAPHIV',
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
  }
};