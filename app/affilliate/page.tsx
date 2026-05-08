const handleLogin = async () => {
  if (password === 'LIGHTNING2026') {
    // TEMP: Skip Supabase lookup. Just show dashboard.
    setCurrentUser({
      name: 'Makhauhelo',
      earned: 0,
      due: 0,
      rank: 'Queen',
      link: 'https://zapsauce.vercel.app?ref=MakhauheloMoima',
      clicks: 0,
      totalSales: 0,
      sponsor: 'You'
    })
    setAuthed(true)
    setError('')
  } else {
    setError('Wrong password. Check email after purchase 🥺')
  }
}