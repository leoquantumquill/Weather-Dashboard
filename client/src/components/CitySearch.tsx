import React, { useState } from 'react';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function CitySearch({ value, onChange }: Props) {
  const [local, setLocal] = useState<string>(value);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onChange(local.trim() || value);
  }

  return (
    <form onSubmit={submit} style={{ display: 'flex', gap: '0.5rem' }}>
      <input
        aria-label="City search"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Search city (e.g., London)"
        style={{
          padding: '0.75rem 1rem',
          borderRadius: 8,
          border: '1px solid #ccc',
          minWidth: 200,
        }}
      />
      <button type="submit" style={{ padding: '0.75rem 1rem', borderRadius: 8 }}>
        Search
      </button>
    </form>
  );
}
