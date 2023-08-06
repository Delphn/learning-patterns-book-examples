type Repository = {
  id: number;
  name: string;
  full_name: string;
};

export default async function Page() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const data: Repository = await res.json();
  return <div>{data.full_name}</div>
}
