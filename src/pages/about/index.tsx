import DefaultLayout from '@/layout/defaultLayout';
import Head from 'next/head';

export default function SobreMim() {
  return (
    <div className='flex flex-col items-center justify-center mt-8 mb-28'>
      <div className='max-w-screen-md px-4 mx-auto'>
        <h1 className='text-3xl font-bold mb-4'>Sobre Mim ✍️</h1>
        <p className='mb-4'>
          Olá! Sou a Dra. Fulana Silva, psicóloga clínica com foco em terapia
          cognitivo-comportamental e especialização em psicologia positiva. Meu
          objetivo é ajudar meus pacientes a alcançar um equilíbrio emocional e
          uma vida mais plena.
        </p>

        <h2 className='text-xl font-bold mb-2'>Informações Pessoais</h2>
        <ul className='mb-4'>
          <li>
            <strong>Nome:</strong> Fulana Silva
          </li>
          <li>
            <strong>Idade:</strong> 34 anos
          </li>
          <li>
            <strong>Localização:</strong> São Paulo, Brasil
          </li>
          <li>
            <strong>Interesses:</strong> Leitura, meditação, caminhadas ao ar
            livre
          </li>
        </ul>

        <h2 className='text-xl font-bold mb-2'>Informações de Trabalho</h2>
        <ul className='mb-4'>
          <li>
            <strong>Especialização:</strong> Terapia cognitivo-comportamental
          </li>
          <li>
            <strong>Experiência Profissional:</strong> 8 anos de prática clínica
          </li>
          <li>
            <strong>Áreas de Interesse:</strong> Ansiedade, depressão,
            autoestima
          </li>
        </ul>

        <h2 className='text-xl font-bold mb-2'>Informações Acadêmicas</h2>
        <ul className='mb-4'>
          <li>
            <strong>Formação:</strong> Graduação em Psicologia pela Universidade
            de São Paulo
          </li>
          <li>
            <strong>Pós-Graduação:</strong> Especialização em Psicologia
            Positiva pela Universidade Federal de Minas Gerais
          </li>
          <li>
            <strong>Cursos Adicionais:</strong> Treinamento em Terapia
            Cognitivo-Comportamental
          </li>
        </ul>

        <p>
          Estou comprometida em fornecer um ambiente seguro e acolhedor para
          meus pacientes, onde possam explorar seus pensamentos e sentimentos de
          forma significativa. Se você está buscando apoio emocional e deseja
          melhorar sua qualidade de vida, estou aqui para ajudar. Agende uma
          consulta e vamos começar essa jornada juntos!
        </p>
      </div>
    </div>
  );
}

SobreMim.getLayout = DefaultLayout;
