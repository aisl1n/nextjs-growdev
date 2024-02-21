import DefaultLayout from '@/layout/defaultLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Post = {
  author: string;
  id: number;
  quote: string;
};

export default function Testimony() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.quotes.slice(5, 20));
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className='text-center text-4xl p-5 font-bold'>Carregando...</div>
    );
  }

  return (
    <>
      <h1 className='text-3xl px-4 font-bold mt-8 mb-10'>Depoimentos ❇️</h1>
      <div className='mx-auto sm:mx-20 mb-10'>
        <ul className='m-2'>
          {posts.map((post) => (
            <li
              key={post.id}
              className='bg-emerald-500 rounded-lg shadow-lg p-2 m-3'
            >
              <div className='px-4 py-3'>
                <Link
                  className=' hover:text-emerald-700'
                  href={{
                    pathname: `/testimony/${encodeURIComponent(post.id)}`,
                    query: { author: post.author, quote: post.quote },
                  }}
                >
                  <h1 className='text-xl font-bold text-center'>
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

Testimony.getLayout = DefaultLayout;
