import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function () {
  const router = useRouter();
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    (async () => {
      const { worker } = await import('msw-mock/client');
      worker.start();

      const res = await fetch('/handle-data');
      const result = await res.json();
      setData(result);
    })();
  }, []);

  const click$add = async () => {
    await fetch('/handle-data', {
      method: 'POST',
    });

    router.push('/temp');
  };

  return (
    <div>
      <button onClick={click$add}>add a number</button>
      {data.map((num, index) => (
        <div key={index}>{num}</div>
      ))}
    </div>
  );
}
