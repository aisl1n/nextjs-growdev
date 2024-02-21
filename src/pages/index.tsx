import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='p-5 text-5xl font-black text-emerald-400'>
          Seja bem vindo(a) ao meu espaço!✨
        </h1>
        <button className='bg-emerald-500 hover:bg-emerald-700 text-white font-bold mx-3 py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
          <Link href='/about'>Saiba mais sobre mim 🤗</Link>
        </button>
      </div>
    </>
  );
}
