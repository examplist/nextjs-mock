import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ({ data }: { data: number[] }) {
  const router = useRouter();

  useEffect(() => {
    import('msw-mock/client') //
      .then(({ worker }) => {
        worker.start();
      });
  });

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

export async function getServerSideProps() {
  const { server } = await import('msw-mock/server');
  server.listen();

  const res = await fetch('http://localhost:3000/handle-data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
