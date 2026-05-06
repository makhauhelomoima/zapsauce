@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --zap-black: #000000;
  --zap-green: #00E06D;
  --zap-green-dark: #00A651;
  --zap-glow: rgba(0, 224, 109, 0.4);
}

body {
  background: var(--zap-black);
  color: white;
  font-family: 'Inter', system-ui, sans-serif;
}

.zap-card {
  background: rgba(17, 24, 39, 0.5);
  border: 1px solid rgba(0, 166, 81, 0.3);
  border-radius: 0.75rem;
  transition: all 0.3s;
}

.zap-card:hover {
  border-color: rgba(0, 224, 109, 0.5);
  box-shadow: 0 0 20px var(--zap-glow);
}

.zap-button {
  background: var(--zap-green-dark);
  color: black;
  font-weight: 700;
}

.zap-button:hover {
  background: #00C85F;
}

.zap-text {
  color: var(--zap-green);
}

.zap-border {
  border-color: rgba(0, 166, 81, 0.4);
}