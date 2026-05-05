export type Recipe = {
  id: string
  name: string
  subtitle?: string
  type: 'FREE' | 'PAID' | 'SUBSCRIPTION' | 'EXCLUSIVE'
  price: number
  ref: string
  ussd?: string
  cures: string[]
  warning?: string
  ingredients?: string[]
  instructions?: string[]
  isSubscriberOnly?: boolean
}

export const RECIPES: Record<string, Recipe> = {
  // FREE TEASERS - KEEP SAME
  'free-sample': {
    id: 'free-sample',
    name: 'FREE TEASER SHOT',
    subtitle: 'Taste of healing',
    type: 'FREE',
    price: 0,
    ref: 'FREE-001',
    cures: ['Morning energy boost', 'Digestive kickstart', 'Immune primer'],
    ingredients: ['Ginger 1 tsp', 'Lemon juice 1 tbsp', 'Warm water 100ml', 'Raw Honey 1 tsp'],
    instructions: ['Mix all in warm water', 'Drink on empty stomach', 'Wait 15 mins before breakfast']
  },
  'immunity-teaser': {
    id: 'immunity-teaser',
    name: 'IMMUNITY TEASER',
    subtitle: 'Your first defense',
    type: 'FREE',
    price: 0,
    ref: 'FREE-002',
    cures: ['Cold prevention', 'Throat soothing', 'Vitamin C boost'],
    ingredients: ['Turmeric 1/2 tsp', 'Black Pepper pinch', 'Raw Honey 1 tbsp', 'Hot water 150ml'],
    instructions: ['Dissolve turmeric + pepper in hot water', 'Stir in honey', 'Sip slowly']
  },

  // PAID RECIPES - 14 TOTAL - UPDATED USSD TO *200#
  'original': {
    id: 'original',
    name: 'ORIGINAL - Turmeric Gold',
    type: 'PAID',
    price: 120,
    ref: 'ZAP-001',
    ussd: '*200#',
    cures: ['Inflammation', 'Joint pain', 'Arthritis', 'Muscle recovery'],
    ingredients: ['Turmeric Powder 2 tbsp', 'Black Pepper 1 tsp', 'Coconut Oil 1 tbsp', 'Raw Honey 2 tbsp', 'Ginger Powder 1 tsp'],
    instructions: ['Mix all dry ingredients in bowl', 'Add coconut oil to form thick paste', 'Store in glass jar', 'Take 1 tsp daily with warm water', 'Keep refrigerated']
  },
  'savory-heal': {
    id: 'savory-heal',
    name: 'SAVORY HEAL',
    type: 'PAID',
    price: 150,
    ref: 'ZAP-002',
    ussd: '*200#',
    cures: ['Gut health', 'Bloating', 'IBS symptoms', 'Appetite control'],
    ingredients: ['Apple Cider Vinegar 2 tbsp', 'Fresh Garlic 2 cloves crushed', 'Cayenne Pepper 1/4 tsp', 'Extra Virgin Olive Oil 1 tbsp', 'Sea Salt pinch'],
    instructions: ['Crush garlic finely', 'Mix all ingredients in jar', 'Shake well before each use', 'Take 1 tbsp before meals', 'Store in cool dark place']
  },
  'monthly-heal': {
    id: 'monthly-heal',
    name: 'MONTHLY HEAL',
    subtitle: 'Subscription Base',
    type: 'SUBSCRIPTION',
    price: 120,
    ref: 'SUB-001',
    ussd: '*200#',
    cures: ['Monthly immune reset', 'Hormone balance', 'Energy cycles', 'Stress relief'],
    warning: 'Subscription unlocks EXCLUSIVE recipe'
  },
  'recipe-4': { id: 'recipe-4', name: 'FIRE CIDER', type: 'PAID', price: 130, ref: 'ZAP-004', ussd: '*200#', cures: ['Sinus relief', 'Congestion'], ingredients: ['ACV 1 cup', 'Horseradish 2 tbsp', 'Onion 1/4 cup', 'Ginger 2 tbsp', 'Cayenne 1 tsp', 'Honey 1/4 cup'] },
  'recipe-5': { id: 'recipe-5', name: 'LIVER FLUSH', type: 'PAID', price: 140, ref: 'ZAP-005', ussd: '*200#', cures: ['Detox', 'Liver support'], ingredients: ['Lemon juice 1/4 cup', 'Olive Oil 2 tbsp', 'Garlic 1 clove', 'Ginger 1 tsp', 'Cayenne pinch'] },
  'recipe-6': { id: 'recipe-6', name: 'BRAIN TONIC', type: 'PAID', price: 145, ref: 'ZAP-006', ussd: '*200#', cures: ['Focus', 'Memory'], ingredients: ['Turmeric 1 tbsp', 'Cinnamon 1 tsp', 'Coconut Oil 1 tbsp', 'Black Pepper pinch', 'Raw Honey 2 tbsp'] },
  'recipe-7': { id: 'recipe-7', name: 'SLEEP ELIXIR', type: 'PAID', price: 155, ref: 'ZAP-007', ussd: '*200#', cures: ['Insomnia', 'Anxiety'], ingredients: ['Chamomile tea 1 cup', 'Raw Honey 1 tbsp', 'Cinnamon 1/2 tsp', 'Nutmeg pinch', 'Vanilla extract 1/4 tsp'] },
  'recipe-8': { id: 'recipe-8', name: 'METABOLISM BOOST', type: 'PAID', price: 160, ref: 'ZAP-008', ussd: '*200#', cures: ['Weight loss', 'Energy'], ingredients: ['Green Tea 1 cup', 'Ginger 1 tbsp', 'Lemon 1/2', 'Cayenne 1/4 tsp', 'ACV 1 tbsp'] },
  'recipe-9': { id: 'recipe-9', name: 'HEART GUARD', type: 'PAID', price: 165, ref: 'ZAP-009', ussd: '*200#', cures: ['Blood pressure', 'Circulation'], ingredients: ['Hibiscus tea 1 cup', 'Garlic 2 cloves', 'Lemon juice 2 tbsp', 'Raw Honey 1 tbsp', 'Cinnamon 1 tsp'] },
  'recipe-10': { id: 'recipe-10', name: 'SKIN GLOW', type: 'PAID', price: 170, ref: 'ZAP-010', ussd: '*200#', cures: ['Acne', 'Eczema'], ingredients: ['Aloe Vera juice 2 tbsp', 'Turmeric 1 tsp', 'Raw Honey 1 tbsp', 'Lemon juice 1 tsp', 'Coconut Oil 1 tsp'] },
  'recipe-11': { id: 'recipe-11', name: 'LUNG CLEAR', type: 'PAID', price: 175, ref: 'ZAP-011', ussd: '*200#', cures: ['Cough', 'Asthma'], ingredients: ['Eucalyptus tea 1 cup', 'Ginger 2 tbsp', 'Raw Honey 2 tbsp', 'Lemon 1/2', 'Cayenne pinch'] },
  'recipe-12': { id: 'recipe-12', name: 'KIDNEY CLEANSE', type: 'PAID', price: 180, ref: 'ZAP-012', ussd: '*200#', cures: ['UTI', 'Kidney stones'], ingredients: ['Cranberry juice 1 cup', 'Lemon juice 2 tbsp', 'ACV 1 tbsp', 'Parsley 1 tbsp', 'Ginger 1 tsp'] },
  'recipe-13': { id: 'recipe-13', name: 'HORMONE HARMONY', type: 'PAID', price: 185, ref: 'ZAP-013', ussd: '*200#', cures: ['PMS', 'Menopause'], ingredients: ['Maca powder 1 tsp', 'Cinnamon 1 tsp', 'Raw Honey 1 tbsp', 'Coconut Oil 1 tbsp', 'Vanilla 1/4 tsp'] },
  'recipe-14': { id: 'recipe-14', name: 'BLOOD SUGAR BALANCE', type: 'PAID', price: 190, ref: 'ZAP-014', ussd: '*200#', cures: ['Diabetes', 'Sugar cravings'], ingredients: ['Cinnamon 2 tsp', 'ACV 1 tbsp', 'Ginger 1 tsp', 'Lemon juice 1 tbsp', 'Stevia leaf pinch'] },

  // EXCLUSIVE - SUBSCRIBERS ONLY
  'exclusive-tangy': {
    id: 'exclusive-tangy',
    name: 'EXCLUSIVE TANGY FUSION',
    subtitle: 'Subscribers Only',
    type: 'EXCLUSIVE',
    price: 0,
    ref: 'EXCL-001',
    isSubscriberOnly: true,
    cures: ['Ultimate immunity', 'Fat burning', 'Anti-aging', 'Total body reset'],
    ingredients: ['Fresh Ginger 2 tbsp grated', 'Turmeric Powder 2 tbsp', 'Raw Honey 3 tbsp', 'Cayenne Pepper 1 tsp', 'Ceylon Cinnamon 1 tsp', 'Apple Cider Vinegar 3 tbsp', 'Black Pepper 1/2 tsp', 'Lemon juice 2 tbsp'],
    instructions: ['Combine ginger + turmeric in glass jar', 'Add all spices + mix well', 'Pour ACV + lemon juice', 'Stir in raw honey last', 'Ferment 24hrs in fridge', 'Take 1 tbsp morning + night', 'WARNING: Extremely potent - start with 1/2 tsp'],
    warning: 'SUBSCRIBERS ONLY - Subscribe to Monthly Heal to unlock'
  }
}