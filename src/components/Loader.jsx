import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(t);
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader-screen`}>
      <div className="flex flex-col items-center gap-6">
        <img src="/logo512.png" alt="DRUN" className="h-20 w-auto animate-pulse" />
        <div className="loader-ring" />
      </div>
    </div>
  );
}
