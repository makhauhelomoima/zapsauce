'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showFree, setShowFree] = useState(false);
  const [showEFT, setShowEFT] = useState<string | null>(null);
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.countapi.xyz/hit/zapsauce/visits')
      .then(res => res.json())
      .then(data => setViews(data.value))
      .catch(() => setViews(0));
  }, []);

  const products = [
    {
      id: 'free',
      name: 'FREE SAMPLE',
      subtitle: 'Turmeric Starter',
      price: 0,
      cures: [
        'First-time inflammation test',
        'Morning energy boost',
        'Beginner-friendly intro',
        'Taste before you invest'
      ],
      teaser: 'Proof it works. Simple 3-ingredient version. No payment needed. Tap to unlock instantly.',
      free: true,
      ingredients: [
        'Raw honey 1 tbsp',
        'Organic turmeric powder 1/2 tsp', 
        'Warm water 200ml'
      ],
      prep: [
        'Heat water to warm, not boiling',
        'Stir in turmeric until dissolved',
        'Add honey, mix well',
        'Drink on empty stomach each morning'
      ],
      tips: 'Try this 7 days. If you feel less stiff, upgrade to ORIGINAL for 10x power. This free version = 5% potency. Paid recipes = 100%.'
    },
    {
      id: 'monthly',
      name: 'MONTHLY HEAL',
      subtitle: 'Auto-Restock Plan',
      price: 120,
      ussd: '*200*1*1*57031600*120%23',
      cures: [
        'Never run out of Zap Sauce',
        'Save M20 vs buying single monthly',
        'Priority WhatsApp support',
        'Cancel anytime via WhatsApp'
      ],
      teaser: 'Join 30-day healing cycle. M120/month. We remind you day 28. You stay stocked. Cancel anytime via WhatsApp STOP.',
      subscription: true
    },
    {
      id: 'original',
      name: 'ORIGINAL',
      subtitle: 'Turmeric Gold',
      price: 120,
      ussd: '*200*1*1*57031600*120%23',
      cures: [
        'Chronic inflammation',
        'Joint stiffness & arthritis pain',
        'Low immunity & frequent colds',
        'Digestive bloating'
      ],
      teaser: 'The classic. 4,000 years of Ayurvedic relief. M120 unlocks full recipe + dosage.'
    },
    {
      id: 'citrus',
      name: 'CITRUS',
      subtitle: 'Lemon Zest',
      price: 120,
      ussd: '*200*1*1*57031600*120%23',
      cures: [
        'Vitamin C deficiency',
        'Seasonal flu & congestion',
        'Sluggish metabolism',
        'Skin breakouts from toxins'
      ],
      teaser: 'Immunity in a jar. Citrus fire meets turmeric gold. M120 for complete formula.'
    },
    {
      id: 'warrior',
      name: 'WARRIOR PRO',
      subtitle: 'Black Pepper Boost',
      price: 140,
      ussd: '*200*1*1*57031600*140%23',
      cures: [
        'Poor nutrient absorption',
        'Post-workout inflammation',
        'Brain fog & low focus',
        'Chronic fatigue'
      ],
      teaser: '2000% absorption. For fighters. M140 unlocks warrior-grade ratios + timing.'
    },
    {
      id: 'queen',
      name: 'QUEEN',
      subtitle: 'Cinnamon Royal',
      price: 130,
      ussd: '*200*1*1*57031600*130%23',
      cures: [
        'Blood sugar spikes',
        'Hormonal imbalance',
        'PMS & menstrual cramps',
        'Sugar cravings'
      ],
      teaser: 'Regal relief. Balances body. M130 reveals royal ratios + evening ritual.'
    },
    {
      id: 'bone',
      name: 'BONE',
      subtitle: 'Ginger Joint',
      price: 130,
      ussd: '*200*1*1*57031600*130%23',
      cures: [
        'Knee & hip joint pain',
        'Morning stiffness',
        'Rheumatoid arthritis flare-ups',
        'Limited mobility'
      ],
      teaser: 'Mobility in a spoon. Ginger + turmeric synergy. M130 unlocks 30-day protocol.'
    },
    {
      id: 'herb',
      name: 'HERB FIRE',
      subtitle: 'Garlic Rosemary',
      price: 130,
      ussd: '*200*1*1*57031600*130%23',
      cures: [
        'High blood pressure & cholesterol',
        'Chest congestion & coughs',
        'Brain fog & memory issues',
        'Blood sugar regulation'
      ],
      teaser: 'Savory medicine. Garlic + thyme
