import React, { useEffect, useState } from 'react';
import fetchHello from '../../api/hello';

export default function Home() {
  const [apiMessage, setApiMessage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    fetchHello()
      .then((data) => {
        if (!mounted) return;
        setApiMessage(data?.message || null);
      })
      .catch(() => {
        if (!mounted) return;
        setError('Не удалось получить сообщение API');
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="home" data-easytag="id2-src/components/Home/index.jsx">
      <h1 className="home__title" data-easytag="id3-src/components/Home/index.jsx">Hello, world!</h1>
      {apiMessage && (
        <p className="home__subtitle" data-easytag="id4-src/components/Home/index.jsx">{apiMessage}</p>
      )}
      {error && (
        <p className="home__error" data-easytag="id5-src/components/Home/index.jsx">{error}</p>
      )}
    </main>
  );
}
