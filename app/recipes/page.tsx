'use client'

import Link from 'next/link'

export default function RecipesPage() {
  
  // ALL 23 RECIPES - 2 FREE + 2 MYHEAL + 19 HUSTLERS-VAULT
  const recipes = [
    // FREE TIER - 2 RECIPES
    {
      id: 'free-001',
      name: 'MORNING SHOT',
      price: 'FREE',
      subtitle: 'Your first taste of lightning',
      time: '1 min',
      benefits: 'Quick immunity boost. Perfect introduction to Zap Sauce power.',
      tier: 'FREE',
      url: '/recipes/free-001'
    },
    {
      id: 'free-002',
      name: 'IMMUNITY TEASER',
      price: 'FREE',
      subtitle: 'Second free sample',
      time: '5 mins',
      benefits: 'Soothing immunity tea. Feel the warmth spread.',
      tier: 'FREE',
      url: '/recipes/free-002'
    },

    // MYHEAL TIER - 2 RECIPES - M120 ONCE-OFF
    {
      id: 'zap-001',
      name: 'ZAP SAUCE ORIGINAL ⚡',
      price: 'M120',
      subtitle: 'Immunity in a Jar | Product of Lesotho 🇱🇸',
      time: '5 mins',
      benefits: 'Flu + sore throat + body aches. Kids missing school. M200+ pharmacy runs.',
      tier: 'MYHEAL',
      url: '/recipes/zap-001'
    },
    {
      id: 'excl-001',
      name: 'TANGY FUSION',
      price: 'M120',
      subtitle: 'EXCLUSIVE - Tamarind + Pineapple + Scotch bonnet',
      time: '5 mins',
      benefits: 'Vitamin C boost. Digestive fire. Flavor explosion. Mood lift.',
      tier: 'MYHEAL',
      url: '/recipes/excl-001'
    },

    // HUSTLERS-VAULT TIER - 19 RECIPES - M1200 ONCE-OFF
    {
      id: 'zap-002',
      name: 'SAVORY HEAL',
      price: 'M0',
      subtitle: 'For soups, stews & immunity',
      time: '10 mins',
      benefits: 'Gut healing + immune support. Collagen-rich base amplifies absorption.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-002'
    },
    {
      id: 'zap-003',
      name: 'FIRE CIDER',
      price: 'M0',
      subtitle: 'Classic immune tonic',
      time: '2 mins',
      benefits: 'Apple cider vinegar base + Zap Sauce fire. Clears sinuses.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-003'
    },
    {
      id: 'zap-004',
      name: 'LIVER FLUSH',
      price: 'M0',
      subtitle: 'Morning detox ritual',
      time: '2 mins',
      benefits: 'Supports liver detox pathways. Bitter herbs stimulate bile flow.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-004'
    },
    {
      id: 'zap-005',
      name: 'BRAIN TONIC',
      price: 'M0',
      subtitle: 'Focus & clarity blend',
      time: '5 mins',
      benefits: 'Lion\'s mane + MCT for cognitive support. Mental lightning.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-005'
    },
    {
      id: 'zap-006',
      name: 'SLEEP ELIXIR',
      price: 'M0',
      subtitle: 'Nighttime wind-down',
      time: '5 mins',
      benefits: 'Chamomile + magnesium. Calms nervous system naturally.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-006'
    },
    {
      id: 'zap-007',
      name: 'METABOLISM BOOST',
      price: 'M0',
      subtitle: 'Pre-workout fire',
      time: '1 min',
      benefits: 'Green tea extract + cayenne. Supports fat oxidation.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-007'
    },
    {
      id: 'zap-008',
      name: 'HEART GUARD',
      price: 'M0',
      subtitle: 'Circulation & blood pressure support',
      time: '5 mins',
      benefits: 'Hawthorn + garlic + beetroot. Supports healthy blood flow.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-008'
    },
    {
      id: 'zap-009',
      name: 'SKIN GLOW',
      price: 'M0',
      subtitle: 'Collagen + antioxidants',
      time: '3 mins',
      benefits: 'Vitamin C + collagen. Fights oxidative stress for radiant skin.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-009'
    },
    {
      id: 'zap-010',
      name: 'LUNG CLEAR',
      price: 'M0',
      subtitle: 'Respiratory support blend',
      time: '10 mins',
      benefits: 'Mullein + thyme + eucalyptus. Soothes airways.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-010'
    },
    {
      id: 'zap-011',
      name: 'KIDNEY CLEANSE',
      price: 'M0',
      subtitle: 'Gentle diuretic tonic',
      time: '10 mins',
      benefits: 'Dandelion + nettle + parsley. Supports kidney filtration.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-011'
    },
    {
      id: 'zap-012',
      name: 'HORMONE HARMONY',
      price: 'M0',
      subtitle: 'Adaptogenic balance for women',
      time: '5 mins',
      benefits: 'Maca + ashwagandha. Adaptogens for hormonal balance.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-012'
    },
    {
      id: 'zap-013',
      name: 'BLOOD SUGAR BALANCE',
      price: 'M0',
      subtitle: 'Glucose support tonic',
      time: '2 mins',
      benefits: 'Ceylon cinnamon + berberine. Supports healthy glucose metabolism.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-013'
    },
    {
      id: 'zap-014',
      name: 'JOINT EASE',
      price: 'M0',
      subtitle: 'Anti-inflammatory for joints',
      time: '5 mins',
      benefits: 'Turmeric + ginger + black pepper. Reduces inflammation.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-014'
    },
    {
      id: 'zap-015',
      name: 'ENERGY SHOT',
      price: 'M0',
      subtitle: 'Natural energy without crash',
      time: '1 min',
      benefits: 'Green tea + cayenne + honey. Sustained energy.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-015'
    },
    {
      id: 'zap-016',
      name: 'LENGANA LIGHTNING',
      price: 'M0',
      subtitle: 'Mountain tranquility + supercharge',
      time: '10 mins',
      benefits: 'Lengana + Prickly Pear + Cactus + Aloe + Rose Hip = Complete immunity.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-016'
    },
    {
      id: 'zap-017',
      name: 'PHATE-EA-NGAKA POWER',
      price: 'M0',
      subtitle: 'Doctor\'s medicine + supercharge',
      time: '15 mins',
      benefits: 'Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Deep cellular immunity.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-017'
    },
    {
      id: 'zap-018',
      name: 'MALUTI IMMUNITY FUSION',
      price: 'M0',
      subtitle: 'All Basotho herbs + supercharge',
      time: '20 mins',
      benefits: 'Lengana + Phate-ea-Ngaka + Prickly Pear + Cactus + Aloe + Rose Hip = Crown jewel.',
      tier: 'HUSTLERS-VAULT',
      url: '/recipes/zap-018'
    }
  ]

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'FREE': return '#fff'
      case 'MYHEAL': return '#00ff88'
      case 'HUSTLERS-VAULT': return '#00ff88'
      case 'ZAP SAUCE GLOBAL': return '#FFD700'
      default: return '#00ff88'
    }
  }

  const getTierLabel = (tier: string) => {
    switch(tier) {
      case 'FREE': return 'FREE'
      case 'MYHEAL': return 'MYHEAL M120'
      case 'HUSTLERS-VAULT': return 'HUSTLER\'S VAULT M1200'
      case 'ZAP SAUCE GLOBAL': return 'ZAP SAUCE GLOBAL M2500'
      default: return tier
    }
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '60px', paddingTop: '40px' }}>
          <h1 style={{ color: '#00ff88', fontSize: '3rem', margin: '0 0 16px 0' }}>ZAP SAUCE RECIPES ⚡</h1>
          <p style={{ color: '#ccc', fontSize: '1.2rem' }}>Lightning in a jar! Product of Lesotho 🇱🇸</p>
          <p style={{ color: '#888', marginTop: '8px' }}>23 Recipes: 2 Free + 2 MYHEAL + 19 HUSTLER'S VAULT</p>
        </div>

        {/* RECIPES GRID */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '24px',
          marginBottom: '60px'
        }}>
          {recipes.map((recipe) => (
            <Link 
              key={recipe.id} 
              href={recipe.url}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#111',
                border: `2px solid ${getTierColor(recipe.tier)}`,
                borderRadius: '12px',
                padding: '24px',
                transition: 'all 0.3s',
                cursor: 'pointer',
                height: '100%'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start',
                  marginBottom: '12px'
                }}>
                  <h3 style={{ 
                    color: getTierColor(recipe.tier), 
                    margin: 0, 
                    fontSize: '1.3rem',
                    flex: 1
                  }}>
                    {recipe.name}
                  </h3>
                  <span style={{ 
                    background: getTierColor(recipe.tier),
                    color: '#000',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    whiteSpace: 'nowrap'
                  }}>
                    {getTierLabel(recipe.tier)}
                  </span>
                </div>
                
                <p style={{ color: '#ccc', fontSize: '0.9rem', margin: '0 0 12px 0' }}>
                  {recipe.subtitle}
                </p>
                
                <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 16px 0' }}>
                  ⏱️ {recipe.time}
                </p>
                
                <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>
                  {recipe.benefits}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ZAP SAUCE GLOBAL LINK */}
        <div style={{ 
          background: '#111', 
          border: '2px solid #FFD700', 
          borderRadius: '12px', 
          padding: '32px', 
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h2 style={{ color: '#FFD700', margin: '0 0 12px 0' }}>ZAP SAUCE GLOBAL 🌍</h2>
          <p style={{ color: '#ccc', margin: '0 0 20px 0' }}>
            19 Signature Recipes + Master Base Formula. Global ingredients. M2500 once-off.
          </p>
          <Link 
            href="/recipes/global/master-base"
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
            View Global Recipes →
          </Link>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', padding: '40px 0', borderTop: '1px solid #1f1f1f' }}>
          <p style={{ color: '#666', fontSize: '1.85rem' }}>
            Not medical advice. Consult your doctor. For considered families.
          </p>
          <Link href="/" style={{ color: '#00ff88', textDecoration: 'none', fontWeight: '700', marginTop: '16px', display: 'inline-block' }}>
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  )
}