import DefaultLayout from '@/layout/defaultLayout';

export default function Contato() {
  return (
    <div className='w-full max-w-md px-4 mx-auto mt-8 mb-28'>
      <h1 className='text-3xl font-bold mb-4'>Contato ☎️</h1>
      <p className='mb-4'>
        Para agendar uma consulta ou obter mais informações, entre em contato
        pelo telefone ou e-mail abaixo. Estou disponível para ajudar no que for
        preciso!
      </p>

      <h2 className='text-xl font-bold mb-2'>Telefone</h2>
      <p className='mb-4'>(11) 1234-5678</p>

      <h2 className='text-xl font-bold mb-2'>E-mail</h2>
      <p className='mb-4'>fulanasilva@psicologa.com</p>
    </div>
  );
}

Contato.getLayout = DefaultLayout;
