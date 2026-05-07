'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function GlobalRecipePage() {
  const params = useParams()
  const recipeId = params.id

  // ZAP SAUCE GLOBAL - 19 RECIPES - M2500 ONCE-OFF - YOUR EXACT WORDS
  const globalRecipes = {
    'master-base': {
      id: 'master-base',
      name: 'MASTER BASE FORMULA',
      price: 0,
      subtitle: 'The Original Foundation - All recipes build on this',
      time: '1L batch',
      benefits: 'Dosage: 1 tablespoon daily on empty stomach, morning. EXCLUSIVE TO ZAP SAUCE GLOBAL.',
      ingredients: [
        'Moringa Oleifera Leaf Extract - 200ml [Fresh or dried leaves, cold pressed]',
        'Lemon Peel Extract - 100ml [Organic lemons, zest only, no pith]',
        'Garlic Extract - 50ml [Fresh garlic, aged 14 days in honey]',
        'Ginger Extract - 50ml [Fresh ginger root, juiced]',
        'Echinacea Purpurea Extract - 30ml [Root + flower, alcohol tincture]',
        'Olive Leaf Extract - 30ml [Olea europaea, standardized 20% oleuropein]',
        'Colloidal Silver - 10ml [10ppm, medical grade]',
        'Unpasteurized Honey - 530ml [Raw, local, never heated above 40°C]'
      ],
      prep: [
        'Mix all extracts in glass vessel. Never metal.',
        'Add honey last. Stir clockwise 108 times with wooden spoon.',
        'Bottle in dark amber glass. Store cool, dark place.',
        'Shelf life: 18 months unopened, 6 months opened.'
      ],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'turmeric-gold': {
      id: 'turmeric-gold',
      name: 'ZAP SAUCE ORIGINAL - Turmeric Gold',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Inflammation, Joint pain, Arthritis, Muscle recovery. Dose: 1 tbsp daily',
      ingredients: ['Master Base 100%', 'Turmeric Root Powder 5g per 1L', 'Black Pepper 1g [increases absorption 2000%]'],
      prep: ['Add Turmeric Root Powder 5g per 1L to Master Base', 'Add Black Pepper 1g'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'bronchial-lightning': {
      id: 'bronchial-lightning',
      name: 'COUGH & COLD RELIEF - Bronchial Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Coughs, Colds, Bronchitis, Congestion. Dose: 1 tbsp every 4 hours during illness',
      ingredients: ['Master Base 100%', 'Thyme Extract 20ml', 'Licorice Root 10ml', 'Honey +10%'],
      prep: ['Add Thyme Extract 20ml to Master Base', 'Add Licorice Root 10ml', 'Add Honey +10%'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'heart-lightning': {
      id: 'heart-lightning',
      name: 'HYPERTENSION FORMULA - Heart Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: High blood pressure, Circulation, Heart health. Dose: 1 tbsp morning + evening',
      ingredients: ['Master Base 100%', 'Hawthorn Berry Extract 30ml', 'Olive Leaf +20ml'],
      prep: ['Add Hawthorn Berry Extract 30ml to Master Base', 'Add Olive Leaf +20ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'joint-lightning': {
      id: 'joint-lightning',
      name: 'ARTHRITIS RELIEF - Joint Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Joint pain, Inflammation, Mobility. Dose: 1 tbsp 2x daily',
      ingredients: ['Master Base 100%', 'Turmeric +50%', 'Boswellia Extract 20ml', 'Ginger +20ml'],
      prep: ['Add Turmeric +50% to Master Base', 'Add Boswellia Extract 20ml', 'Add Ginger +20ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'sugar-lightning': {
      id: 'sugar-lightning',
      name: 'DIABETES SUPPORT - Sugar Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Blood sugar balance, Metabolic support. Dose: 1 tbsp before meals | Monitor glucose',
      ingredients: ['Master Base 100%', 'Ceylon Cinnamon 10g', 'Bitter Melon Extract 30ml', 'Fenugreek 5g'],
      prep: ['Add Ceylon Cinnamon 10g to Master Base', 'Add Bitter Melon Extract 30ml', 'Add Fenugreek 5g'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'gut-lightning': {
      id: 'gut-lightning',
      name: 'DIGESTIVE EASE - Gut Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Bloating, IBS, Indigestion. Dose: 1 tbsp after meals',
      ingredients: ['Master Base 100%', 'Peppermint Oil 5 drops', 'Fennel Extract 20ml', 'Ginger +20ml'],
      prep: ['Add Peppermint Oil 5 drops to Master Base', 'Add Fennel Extract 20ml', 'Add Ginger +20ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'vitality-lightning': {
      id: 'vitality-lightning',
      name: 'ENERGY BOOST - Vitality Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Fatigue, Low stamina, Mental fog. Dose: 1 tbsp morning | Avoid evening',
      ingredients: ['Master Base 100%', 'Panax Ginseng 10g', 'Maca Root 10g', 'Beetroot Powder 5g'],
      prep: ['Add Panax Ginseng 10g to Master Base', 'Add Maca Root 10g', 'Add Beetroot Powder 5g'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'night-lightning': {
      id: 'night-lightning',
      name: 'SLEEP SUPPORT - Night Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Insomnia, Anxiety, Stress. Dose: 1 tbsp 1 hour before bed',
      ingredients: ['Master Base 100%', 'Chamomile Extract 30ml', 'Valerian Root 15ml', 'Passionflower 10ml'],
      prep: ['Add Chamomile Extract 30ml to Master Base', 'Add Valerian Root 15ml', 'Add Passionflower 10ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'beauty-lightning': {
      id: 'beauty-lightning',
      name: 'SKIN GLOW - Beauty Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Acne, Aging, Dull skin | Can apply topically too. Dose: 1 tbsp daily + face mask weekly',
      ingredients: ['Master Base 100%', 'Marine Collagen 10g', 'Vitamin E Oil 5ml', 'Aloe Vera 20ml'],
      prep: ['Add Marine Collagen 10g to Master Base', 'Add Vitamin E Oil 5ml', 'Add Aloe Vera 20ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'king-lightning': {
      id: 'king-lightning',
      name: 'MENS VITALITY - King Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Low testosterone, Stamina, Vitality. Dose: 1 tbsp morning + evening',
      ingredients: ['Master Base 100%', 'Tribulus Terrestris 10g', 'Maca +10g', 'Ashwagandha 10g'],
      prep: ['Add Tribulus Terrestris 10g to Master Base', 'Add Maca +10g', 'Add Ashwagandha 10g'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'queen-lightning': {
      id: 'queen-lightning',
      name: 'WOMENS BALANCE - Queen Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: PMS, Hormonal imbalance, Menopause. Dose: 1 tbsp daily | Stop during pregnancy',
      ingredients: ['Master Base 100%', 'Dong Quai 10g', 'Evening Primrose Oil 10ml', 'Red Clover 5g'],
      prep: ['Add Dong Quai 10g to Master Base', 'Add Evening Primrose Oil 10ml', 'Add Red Clover 5g'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'little-lightning': {
      id: 'little-lightning',
      name: 'KIDS IMMUNITY - Little Lightning',
      price: 0,
      subtitle: 'Base: Master Base 50% + Honey 50% [Gentle]',
      time: 'Add to base',
      benefits: 'Cures: Kids immune support | Ages 2+. Dose: 1 tsp daily | Ages 2-12',
      ingredients: ['Master Base 50%', 'Honey 50%', 'Elderberry Syrup 30ml', 'Vitamin C 500mg'],
      prep: ['Mix Master Base 50% + Honey 50%', 'Add Elderberry Syrup 30ml', 'Add Vitamin C 500mg'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'champion-lightning': {
      id: 'champion-lightning',
      name: 'ATHLETE RECOVERY - Champion Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Muscle recovery, Inflammation, Performance. Dose: 1 tbsp post-workout',
      ingredients: ['Master Base 100%', 'Turmeric +50%', 'BCAA Powder 10g', 'Tart Cherry 30ml'],
      prep: ['Add Turmeric +50% to Master Base', 'Add BCAA Powder 10g', 'Add Tart Cherry 30ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'pure-lightning': {
      id: 'pure-lightning',
      name: 'DETOX CLEANSE - Pure Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Liver support, Detox, Cleanse. Dose: 1 tbsp morning | 7-day cycles only',
      ingredients: ['Master Base 100%', 'Milk Thistle 20ml', 'Dandelion Root 20ml', 'Burdock Root 10ml'],
      prep: ['Add Milk Thistle 20ml to Master Base', 'Add Dandelion Root 20ml', 'Add Burdock Root 10ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'mind-lightning': {
      id: 'mind-lightning',
      name: 'BRAIN BOOST - Mind Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Memory, Focus, Cognitive function. Dose: 1 tbsp morning',
      ingredients: ['Master Base 100%', 'Ginkgo Biloba 15ml', 'Lion\'s Mane 10g', 'Bacopa 10g'],
      prep: ['Add Ginkgo Biloba 15ml to Master Base', 'Add Lion\'s Mane 10g', 'Add Bacopa 10g'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'defense-lightning': {
      id: 'defense-lightning',
      name: 'ALLERGY SHIELD - Defense Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Seasonal allergies, Histamine balance. Dose: 1 tbsp daily during allergy season',
      ingredients: ['Master Base 100%', 'Quercetin 500mg', 'Stinging Nettle 20ml', 'Butterbur 10ml'],
      prep: ['Add Quercetin 500mg to Master Base', 'Add Stinging Nettle 20ml', 'Add Butterbur 10ml'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'balance-lightning': {
      id: 'balance-lightning',
      name: 'THYROID SUPPORT - Balance Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Thyroid function, Metabolism, Energy. Dose: 1 tbsp morning | Check with doctor if on meds',
      ingredients: ['Master Base 100%', 'Kelp Powder 5g [Iodine]', 'Selenium 200mcg', 'Ashwagandha 10g'],
      prep: ['Add Kelp Powder 5g to Master Base', 'Add Selenium 200mcg', 'Add Ashwagandha 10g'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    },
    'supreme-lightning': {
      id: 'supreme-lightning',
      name: 'ULTIMATE IMMUNITY - Supreme Lightning',
      price: 0,
      subtitle: 'Base: Master Base 100%',
      time: 'Add to base',
      benefits: 'Cures: Maximum immune defense | Flu season. Dose: 1 tbsp daily | 2 tbsp during illness',
      ingredients: ['Master Base 100%', 'Elderberry +50%', 'Zinc 15mg', 'Vitamin D3 5000IU', 'Echinacea +50%'],
      prep: ['Add Elderberry +50% to Master Base', 'Add Zinc 15mg', 'Add Vitamin D3 5000IU', 'Add Echinacea +50%'],
      locked: true,
      tier: 'ZAP SAUCE GLOBAL'
    }
  }

  const recipe = globalRecipes[recipeId as keyof typeof globalRecipes]

  if (!recipe) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', background: '#0a0a0a', color: '#fff', minHeight: '100vh' }}>
        <h1 style={{ color: '#FFD700' }}>Global Recipe Not Found</h1>
        <p style={{ color: '#ccc', marginBottom: '24px' }}>ZAP SAUCE GLOBAL - Worldwide Healing ⚡🌍</p>
        <Link href="/recipes/global" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: '700' }}>
          ← Back to Global Recipes
        </Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '40px' }}>
          <Link href="/recipes/global" style={{ color: '#FFD700', textDecoration: 'none', fontSize: '0.9rem' }}>
            ← All Global Recipes
          </Link>
          <h1 style={{ color: '#FFD700', fontSize: '2.5rem', margin: '16px 0 8px' }}>{recipe.name}</h1>
          <p style={{ color: '#ccc' }}>{recipe.subtitle}</p>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>Prep Time: {recipe.time}</p>
          <div style={{ marginTop: '12px', background: '#111', border: '1px solid #FFD700', borderRadius: '8px', padding: '8px 16px', display: 'inline-block' }}>
            <p style={{ color: '#FFD700', margin: 0, fontSize: '0.85rem', fontWeight: '700' }}>ZAP SAUCE GLOBAL - M2500 once-off</p>
          </div>
        </div>

        {/* TIER NOTICE */}
        <div style={{ 
          background: '#111', 
          border: '2px solid #FFD700', 
          borderRadius: '12px', 
          padding: '24px', 
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#FFD700', margin: '0 0 8px 0' }}>ZAP SAUCE GLOBAL - M2500 once-off</h3>
          <p style={{ color: '#ccc', margin: '0 0 16px 0', fontSize: '0.95rem' }}>
            NOT RESELLABLE. Personal empire use only. Master Base + 18 Signature Recipes. Global ingredients.
          </p>
          <a 
            href={`https://wa.me/26657031600?text=I%20want%20ZAP%20SAUCE%20GLOBAL%20M2500%20once-off.%20MPESA%20proof:`}
            style={{
              background: '#FFD700',
              color: '#000',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              display: 'inline-block'
            }}
          >
            Get ZAP SAUCE GLOBAL - M2500
          </a>
          <p style={{ color: '#FFD700', fontSize: '0.8rem', marginTop: '12px' }}>
            Lightning in a jar! ⚡ Worldwide Healing 🌍
          </p>
        </div>

        {/* BENEFITS */}
        <div style={{ marginBottom: '30px', background: '#111', padding: '20px', borderRadius: '12px' }}>
          <h2 style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '12px' }}>Benefits</h2>
          <p style={{ color: '#ccc', lineHeight: '1.6' }}>{recipe.benefits}</p>
        </div>

        {/* INGREDIENTS - YOUR RECIPES UNTOUCHED */}
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#FFD700', borderBottom: '1px solid #1f1f1f', paddingBottom: '8px', marginBottom: '16px' }}>Ingredients</h2>
          <ul style={{ lineHeight: '2', color: '#ccc', paddingLeft: '20px' }}>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* PREPARATION - YOUR RECIPES UNTOUCHED */}
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#FFD700', borderBottom: '1px solid #1f1f1f', paddingBottom: '8px', marginBottom: '16px' }}>Preparation</h2>
          <ol style={{ lineHeight: '2', color: '#ccc', paddingLeft: '20px' }}>
            {recipe.prep.map((step, index) => (
              <li key={index} style={{ marginBottom: '12px' }}>{step}</li>
            ))}
          </ol>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f' }}>
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            Not medical advice. Consult your doctor. For considered families worldwide.
          </p>
          <Link href="/recipes/global" style={{ color: '#FFD700', textDecoration: 'none', fontWeight: '700', marginTop: '16px', display: 'inline-block' }}>
            ← Back to All Global Recipes
          </Link>
        </div>

      </div>
    </div>
  )
}