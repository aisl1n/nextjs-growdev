import DefaultLayout from '@/layout/defaultLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Depoimentos() {
  const router = useRouter();
  const { id } = router.query;
  const { author, quote } = router.query;

  return (
    <>
      <div className='max-w-3xl mx-auto p-2 m-5 bg-white shadow-md rounded-md overflow-hidden'>
        <div className='p-4'>
          <p className='text-gray-600'>Depoimento número: {id}</p>
          <p className='text-gray-700'>{`"${quote}"`} 🍷🗿</p>
          <p className='text-emerald-800 font-bold'>Autor: {author}</p>
        </div>
        <div className='bg-gray-100 px-4 py-2 flex justify-end'>
          <Link
            className='text-emerald-800 hover:text-emerald-100'
            href='/depoimentos'
          >
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
}

Depoimentos.getLayout = DefaultLayout;
