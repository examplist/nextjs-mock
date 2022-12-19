import { useRouter } from 'next/router';

export default function temp() {
  const router = useRouter();

  return (
    <div>
      <div>This is the temporary page.</div>
      <button onClick={() => router.back()}>go back</button>
    </div>
  );
}
