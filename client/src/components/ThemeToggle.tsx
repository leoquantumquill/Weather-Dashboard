import React from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return (
    <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme" style={{ padding: '0.6rem 1rem', borderRadius: 8 }}>
      {dark ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
}
