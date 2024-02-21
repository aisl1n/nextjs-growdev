import DefaultLayout from '@/layout/defaultLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Testimony() {
  const router = useRouter();
  const { id } = router.query;
  const { author, quote } = router.query;

  return (
    <>
      <div className='max-w-3xl p-2 mx-auto mt-8 bg-white shadow-md rounded-md overflow-hidden'>
        <div className='p-4'>
          <p className='text-gray-600'>Depoimento número: {id}</p>
          <p className='text-gray-700'>{`"${quote}"`} 🍷🗿</p>
          <p className='text-emerald-800 font-bold'>Autor: {author}</p>
        </div>
        <div className='bg-gray-100 px-4 rounded-lg py-2 flex justify-end'>
          <Link
            className='text-emerald-800 hover:text-emerald-400'
            href='/testimony'
          >
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
}

Testimony.getLayout = DefaultLayout;
