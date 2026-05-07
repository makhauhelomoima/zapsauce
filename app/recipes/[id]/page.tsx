'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function RecipePage() {
  const params = useParams()
  const recipeId = params.id

  // ALL 23 RECIPES - FREE + MYHEAL + HUSTLERS-VAULT
  const recipes = {
    // FREE TIER - 2 RECIPES
    'free-001': {
      id: 'free-001',
      name: 'MORNING SHOT',
      price: 0,
      subtitle: 'Your first taste of lightning',
      time: '1 min',
      benefits: 'Quick immunity boost. Perfect introduction to Zap Sauce power.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '100ml warm water', 'Raw honey'],
      prep: ['Mix all ingredients', 'Drink immediately', 'Feel the spark'],
      locked: false,
      tier: 'FREE'
    },
    'free-002': {
      id: 'free-002',
      name: 'IMMUNITY TEASER',
      price: 0,
      subtitle: 'Second free sample',
      time: '5 mins',
      benefits: 'Soothing immunity tea. Feel the warmth spread.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml hot water', 'Lemon slice'],
      prep: ['Steep Zap Sauce in hot water 3 mins', 'Add lemon', 'Sip slowly'],
      locked: false,
      tier: 'FREE'
    },

    // MYHEAL TIER - 2 RECIPES - M120 ONCE-OFF
    'zap-001': {
      id: 'zap-001',
      name: 'ZAP SAUCE ORIGINAL ⚡',
      price: 0,
      subtitle: 'Immunity in a Jar | Product of Lesotho 🇱🇸',
      time: '5 mins',
      benefits: '✓ Morning flu + sore throat + body aches ✓ Coughs + chest congestion + winter chills ✓ Low immunity + kids missing school ✓ Inflammation + joint pain ✓ M200+ weekly pharmacy runs for family',
      ingredients: [
        'Raw Honey - 250ml | M40 | The conductor + armor',
        'Turmeric Powder - 3 tbsp | M15 | The voltage + inflammation killer',
        'Fresh Ginger Grated - 2 tbsp | M8 | The spark + cough zapper',
        'Black Pepper Ground - 1/2 tsp | M3 | The switch + activates turmeric',
        'Ceylon Cinnamon - 1 tsp | M5 | The smooth current + blood sugar'
      ],
      prep: [
        'STEP 1: GROUND THE WIRES: Mix turmeric + pepper + cinnamon in bowl',
        'STEP 2: ADD THE SPARK: Fold in grated ginger until paste forms',
        'STEP 3: CHARGE IT: Slowly stir in honey 60sec until smooth like your photo',
        'STEP 4: BOTTLE THE LIGHTNING: Clean glass jar. Label "ZAP SAUCE". Pantry 6 months.',
        'DOSE: Adults: 1 tsp morning empty stomach. Kids 5+: 1/2 tsp in rooibos. Kids 2-5: 1/4 tsp in porridge. Sick: 1 tsp every 3 hours until flu gets ZAPPED.'
      ],
      locked: true,
      tier: 'MYHEAL'
    },
    'excl-001': {
      id: 'excl-001',
      name: 'TANGY FUSION',
      price: 0,
      subtitle: 'EXCLUSIVE - Secret blend base + Tamarind + Pineapple + Scotch bonnet',
      time: '5 mins',
      benefits: 'Vitamin C boost. Digestive fire. Flavor explosion. Mood lift.',
      ingredients: ['Secret blend base', 'Tamarind 1 tbsp', 'Pineapple 1/4 cup', 'Scotch bonnet tiny pinch', 'Lime juice 1 tbsp'],
      prep: ['Blend pineapple', 'Mix with tamarind', 'Add scotch bonnet carefully', 'Secret blend last', 'Shake and serve'],
      locked: true,
      tier: 'MYHEAL'
    },

    // HUSTLERS-VAULT TIER - 19 RECIPES - M1200 ONCE-OFF
    'zap-002': {
      id: 'zap-002',
      name: 'SAVORY HEAL',
      price: 0,
      subtitle: 'For soups, stews & immunity',
      time: '10 mins',
      benefits: 'Gut healing + immune support. Collagen-rich base amplifies absorption.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '250ml bone broth', 'Fresh thyme'],
      prep: ['Heat broth gently', 'Whisk in Zap Sauce', 'Garnish with thyme', 'Serve hot'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-003': {
      id: 'zap-003',
      name: 'FIRE CIDER',
      price: 0,
      subtitle: 'Classic immune tonic',
      time: '2 mins',
      benefits: 'Apple cider vinegar base + Zap Sauce fire. Clears sinuses.',
      ingredients: ['2 tbsp Zap Sauce Master Base', '1 cup apple cider vinegar', 'Sparkling water'],
      prep: ['Mix Zap Sauce + vinegar', 'Top with sparkling water', 'Drink daily'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-004': {
      id: 'zap-004',
      name: 'LIVER FLUSH',
      price: 0,
      subtitle: 'Morning detox ritual',
      time: '2 mins',
      benefits: 'Supports liver detox pathways. Bitter herbs stimulate bile flow.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '300ml warm water', 'Lemon juice', 'Sea salt'],
      prep: ['Mix all ingredients', 'Drink first thing morning', 'Wait 30 mins before eating'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-005': {
      id: 'zap-005',
      name: 'BRAIN TONIC',
      price: 0,
      subtitle: 'Focus & clarity blend',
      time: '5 mins',
      benefits: 'Lion\'s mane + MCT for cognitive support. Mental lightning.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml almond milk', 'MCT oil', 'Cinnamon'],
      prep: ['Warm almond milk gently', 'Whisk in Zap Sauce + MCT', 'Dust with cinnamon', 'Sip mindfully'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-006': {
      id: 'zap-006',
      name: 'SLEEP ELIXIR',
      price: 0,
      subtitle: 'Nighttime wind-down',
      time: '5 mins',
      benefits: 'Chamomile + magnesium. Calms nervous system naturally.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml warm oat milk', 'Nutmeg'],
      prep: ['Warm oat milk', 'Stir in Zap Sauce', 'Add nutmeg', 'Drink 1 hour before bed'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-007': {
      id: 'zap-007',
      name: 'METABOLISM BOOST',
      price: 0,
      subtitle: 'Pre-workout fire',
      time: '1 min',
      benefits: 'Green tea extract + cayenne. Supports fat oxidation.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '250ml cold water', 'Lemon'],
      prep: ['Mix all ingredients', 'Drink 20 mins before exercise', 'Feel the thermogenesis'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-008': {
      id: 'zap-008',
      name: 'HEART GUARD',
      price: 0,
      subtitle: 'Circulation & blood pressure support',
      time: '5 mins',
      benefits: 'Hawthorn + garlic + beetroot. Supports healthy blood flow.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml beetroot juice', 'Garlic'],
      prep: ['Mix beetroot juice with Zap Sauce', 'Crush garlic clove', 'Drink daily'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-009': {
      id: 'zap-009',
      name: 'SKIN GLOW',
      price: 0,
      subtitle: 'Collagen + antioxidants',
      time: '3 mins',
      benefits: 'Vitamin C + collagen. Fights oxidative stress for radiant skin.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml coconut water', 'Collagen peptides', 'Blueberries'],
      prep: ['Blend coconut water + collagen', 'Stir in Zap Sauce', 'Top with blueberries', 'Drink morning'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-010': {
      id: 'zap-010',
      name: 'LUNG CLEAR',
      price: 0,
      subtitle: 'Respiratory support blend',
      time: '10 mins',
      benefits: 'Mullein + thyme + eucalyptus. Soothes airways.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '1 cup hot water', 'Eucalyptus honey'],
      prep: ['Dissolve Zap Sauce in hot water', 'Add eucalyptus honey', 'Inhale steam 5 mins', 'Sip tea'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-011': {
      id: 'zap-011',
      name: 'KIDNEY CLEANSE',
      price: 0,
      subtitle: 'Gentle diuretic tonic',
      time: '10 mins',
      benefits: 'Dandelion + nettle + parsley. Supports kidney filtration.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '300ml water', 'Parsley', 'Lemon'],
      prep: ['Boil parsley 5 mins', 'Strain + cool slightly', 'Add Zap Sauce + lemon', 'Drink between meals'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-012': {
      id: 'zap-012',
      name: 'HORMONE HARMONY',
      price: 0,
      subtitle: 'Adaptogenic balance for women',
      time: '5 mins',
      benefits: 'Maca + ashwagandha. Adaptogens for hormonal balance.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml warm oat milk', 'Maca powder'],
      prep: ['Warm oat milk', 'Whisk in Zap Sauce + maca', 'Dust cinnamon', 'Drink evening'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-013': {
      id: 'zap-013',
      name: 'BLOOD SUGAR BALANCE',
      price: 0,
      subtitle: 'Glucose support tonic',
      time: '2 mins',
      benefits: 'Ceylon cinnamon + berberine. Supports healthy glucose metabolism.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '200ml water', 'Apple cider vinegar'],
      prep: ['Mix water + vinegar', 'Stir in Zap Sauce', 'Add cinnamon', 'Drink before meals'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-014': {
      id: 'zap-014',
      name: 'JOINT EASE',
      price: 0,
      subtitle: 'Anti-inflammatory for joints',
      time: '5 mins',
      benefits: 'Turmeric + ginger + black pepper. Reduces inflammation.',
      ingredients: ['1 tbsp Zap Sauce Master Base', 'Golden milk', 'Extra ginger'],
      prep: ['Warm golden milk', 'Stir in Zap Sauce', 'Add ginger', 'Drink nightly'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-015': {
      id: 'zap-015',
      name: 'ENERGY SHOT',
      price: 0,
      subtitle: 'Natural energy without crash',
      time: '1 min',
      benefits: 'Green tea + cayenne + honey. Sustained energy.',
      ingredients: ['1 tbsp Zap Sauce Master Base', 'Cold brew coffee'],
      prep: ['Mix Zap Sauce into cold brew', 'Shake well', 'Morning kick'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-016': {
      id: 'zap-016',
      name: 'LENGANA LIGHTNING',
      price: 0,
      subtitle: 'Mountain tranquility + supercharge',
      time: '10 mins',
      benefits: 'Lengana + Prickly Pear + Cactus + Aloe + Rose Hip = Complete immunity.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '5g Lengana leaves', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
      prep: ['Steep Lengana 7 mins', 'Add Zap Sauce + superfoods', 'Stir well', 'Sip slowly'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-017': {
      id: 'zap-017',
      name: 'PHATE-EA-NGAKA POWER',
      price: 0,
      subtitle: 'Doctor\'s medicine + supercharge',
      time: '15 mins',
      benefits: 'Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Deep cellular immunity.',
      ingredients: ['1 tbsp Zap Sauce Master Base', '3g Phate-ea-Ngaka decoction', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
      prep: ['Gentle decoction of Phate-ea-Ngaka', 'Add Zap Sauce + superfoods', 'Morning dose'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    },
    'zap-018': {
      id: 'zap-018',
      name: 'MALUTI IMMUNITY FUSION',
      price: 0,
      subtitle: 'All Basotho herbs + supercharge',
      time: '20 mins',
      benefits: 'Lengana + Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Crown jewel.',
      ingredients: ['1 tbsp Zap Sauce Master Base', 'Lengana + Phate-ea-Ngaka blend', '20ml Prickly Pear pulp', '15ml Cactus gel', '10ml Aloe Vera gel', '5g Rose Hip tea'],
      prep: ['Full moon brew of herbs', 'Add Zap Sauce + superfoods', '21-day dose'],
      locked: true,
      tier: 'HUSTLERS-VAULT'
    }
  }

  const recipe = recipes[recipeId as keyof typeof recipes]

  if (!recipe) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
        <h1 style={{ color: '#00ff88' }}>Recipe Not Found</h1>
        <p style={{ color: '#ccc', marginBottom: '24px' }}>Lightning in a jar! ⚡</p>
        <Link href="/recipes" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: '700' }}>
          ← Back to All Recipes
        </Link>
      </div>
    )
  }

  const getTierInfo = (tier: string) => {
    switch(tier) {
      case 'MYHEAL':
        return { price: 'M120 once-off', note: 'Pay once. Own forever. 30% Affiliation: Earn M36 per sale.', button: 'Get MYHEAL - M120' }
      case 'HUSTLERS-VAULT':
        return { price: 'M1200 once-off', note: '30% Affiliation: Earn M360 per sale. 19 products total.', button: 'Get HUSTLER\'S VAULT - M1200' }
      case 'ZAP SAUCE GLOBAL':
        return { price: 'M2500 once-off', note: 'NOT RESELLABLE. Personal empire use only.', button: 'Get ZAP SAUCE GLOBAL - M2500' }
      case 'FREE':
        return { price: 'FREE', note: 'No payment needed. Try Zap Sauce on us.', button: 'Get Free Recipe' }
      default:
        return { price: '', note: '', button: 'Contact Support' }
    }
  }

  const tierInfo = getTierInfo(recipe.tier)

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '40px' }}>
          <Link href="/recipes" style={{ color: '#00ff88', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← All Recipes
          </Link>
          <h1 style={{ color: '#00ff88', fontSize: '2.5rem', margin: '16px 0 8px' }}>{recipe.name}</h1>
          <p style={{ color: '#ccc' }}>{recipe.subtitle}</p>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Prep Time: {recipe.time}</p>
        </div>

        {/* TIER NOTICE */}
        <div style={{ 
          background: '#111', 
          border: '2px solid #00ff88', 
          borderRadius: '12px', 
          padding: '24px', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#00ff88', margin: '0 0 8px 0' }}>{recipe.tier} - {tierInfo.price}</h3>
          <p style={{ color: '#ccc', margin: '0 0 16px 0', fontSize: '0.95rem' }}>{tierInfo.note}</p>
          <a 
            href={`https://wa.me/26657031600?text=I%20want%20${encodeURIComponent(recipe.name)}%20${recipe.tier}%20${tierInfo.price}.%20MPESA%20proof:`}
            style={{
              background: '#00ff88',
              color: '#000',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-block'
            }}
          >
            {tierInfo.button}
          </a>
        </div>

        {/* BENEFITS */}
        <div style={{ marginBottom: '30px', background: '#111', padding: '20px', borderRadius: '12px' }}>
          <h2 style={{ color: '#00ff88', fontSize: '1.2rem', marginBottom: '12px' }}>Benefits</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>{recipe.benefits}</p>
        </div>

        {/* INGREDIENTS - YOUR RECIPES UNTOUCHED */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#00ff88', borderBottom: '1px solid #1f1f1f', paddingBottom: '8px', marginBottom: '16px' }}>Ingredients</h2>
          <ul style={{ lineHeight: '2', color: '#ccc', paddingLeft: '20px' }}>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* PREPARATION - YOUR RECIPES UNTOUCHED */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#00ff88', borderBottom: '1px solid #1f1f1f', paddingBottom: '8px', marginBottom: '16px' }}>Preparation</h2>
          <ol style={{ lineHeight: '2', color: '#ccc', paddingLeft: '20px' }}>
            {recipe.prep.map((step, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>{step}</li>
            ))}
          </ol>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f' }}>
          <p style={{ color: '#666', fontSize: '1.85rem' }}>
            Not medical advice. Consult your doctor. For considered families.
          </p>
          <Link href="/recipes" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: '700', marginTop: '16px', display: 'inline-block' }}>
            ← Back to All Recipes
          </Link>
        </div>

      </div>
    </div>
  )
}