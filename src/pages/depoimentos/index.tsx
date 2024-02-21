import DefaultLayout from '@/layout/defaultLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Post = {
  author: string;
  id: number;
  quote: string;
};

export default function Depoimentos() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.quotes.slice(5, 20));
        setLoading(false); // Marca o carregamento como completo
      });
  }, []);

  if (loading) {
    return (
      <div className='text-center text-4xl p-5 font-bold'>Carregando...</div>
    );
  }

  return (
    <>
      <h1 className='text-3xl font-bold text-center p-2'>Depoimentos</h1>
      <div className='mx-auto sm:mx-20'>
        <ul className='rounded-lg overflow-hidden m-2'>
          {posts.map((post) => (
            <li key={post.id} className='rounded-lg bg-emerald-400 p-2 m-3'>
              <div className='px-4 py-3'>
                <Link
                  className='text-emerald-800 hover:text-emerald-100'
                  href={{
                    pathname: `/depoimentos/${encodeURIComponent(post.id)}`,
                    query: { author: post.author, quote: post.quote },
                  }}
                >
                  <h1 className='text-2xl font-bold text-center'>
                    {post.author} ➡️
                  </h1>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

Depoimentos.getLayout = DefaultLayout;
