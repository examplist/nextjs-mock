import { useRouter } from 'next/router';

export default function ({ data }: { data: number[] }) {
  const router = useRouter();

  const click$add = async () => {
    await fetch('/api/next', {
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
  const res = await fetch('http://localhost:3000/api/next');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
