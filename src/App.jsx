import { useState } from 'react'
import EventCard from './components/EventCard'
import { Calendar } from 'lucide-react'

const eventos = [
  {
    id: 1,
    titulo: 'Festival de Música',
    categoria: 'Música',
    data: '24 de outubro de 2026',
    horario: '16h às 21h',
    local: 'Praça Prudente de Moraes',
    descricao: 'Apresentações musicais de artistas locais em uma tarde aberta à comunidade.',
    imagem: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
    alt: 'Público assistindo a uma apresentação musical.',
    informacoes: 'https://example.com/festival',
    inscricao: 'https://example.com/inscricao-festival',
  },
  {
    id: 2,
    titulo: 'Feira de Arte',
    categoria: 'Artes visuais',
    data: '25 de outubro de 2026',
    horario: '10h às 17h',
    local: 'Parque Ecológico',
    descricao: 'Uma feira com trabalhos artísticos, artesanato e produções de artistas locais.',
    imagem: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800',
    alt: 'Materiais de arte e trabalhos criativos organizados sobre uma mesa.',
    informacoes: 'https://example.com/feira',
    inscricao: 'https://example.com/inscricao-feira',
  },
  {
    id: 3,
    titulo: 'Cinema ao Ar Livre',
    categoria: 'Cinema',
    data: '31 de outubro de 2026',
    horario: '19h às 21h',
    local: 'Parque Ecológico',
    descricao: 'Uma sessão de cinema ao ar livre para reunir amigos e familiares.',
    imagem: 'https://s2-oglobo.glbimg.com/tjWA3PLDCDVZumDaR7FYm8yAZlQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/N/H/tyo2CxQGCHBTkFMMJGXg/imagem-do-whatsapp-de-2025-01-16-a-s-15.11.54-6eca4679.jpg',
    alt: 'Um cinema ao ar livre à noite com fileiras de cadeiras voltadas para uma tela gigante.',
    informacoes: 'https://example.com/cinema',
    inscricao: 'https://example.com/inscricao-cinema',
  },
]

export default function App() {
  const [modoEscuro, setModoEscuro] = useState(false)

  return (
    <div className={modoEscuro ? 'dark min-h-screen' : 'min-h-screen'}>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header className="border-b border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <a
            href="#inicio"
            className="text-2xl flex flex-row justify-center items-center gap-2 font-bold tracking-tight text-blue-700 dark:text-blue-300"
          >
            <Calendar/>
            TubaCity
          </a>

          <nav aria-label="Navegação principal" className="flex flex-wrap items-center gap-3">
            <a
              href="#eventos"
              className="inline-flex min-h-11 items-center rounded-lg px-4 font-semibold underline hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              Eventos
            </a>

            <button
              type="button"
              onClick={() => setModoEscuro(!modoEscuro)}
              aria-pressed={modoEscuro}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-700 px-4 py-2 font-semibold text-blue-700 hover:bg-blue-50 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-gray-800"
            >
              {modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
            </button>
          </nav>
        </div>
      </header>

      <main
        id="conteudo"
        tabIndex="-1"
        className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100"
      >
        <section
          id="inicio"
          aria-labelledby="titulo-principal"
          className="border-b border-gray-200 dark:border-gray-800"
        >
          <div className="mx-auto max-w-6xl px-5 py-14">
            <p className="font-semibold text-blue-700 dark:text-blue-300">
              Cultura, arte e comunidade
            </p>

            <h1
              id="titulo-principal"
              className="mt-3 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Descubra o que acontece na sua cidade.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Encontre eventos culturais, confira os detalhes e participe
              das atividades da comunidade.
            </p>

            <a
              href="#eventos"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white underline hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Explorar eventos
            </a>
          </div>
        </section>

        <section
          id="eventos"
          aria-labelledby="titulo-eventos"
          className="mx-auto max-w-6xl px-5 py-12"
        >
          <h2 id="titulo-eventos" className="text-3xl font-bold">
            Próximos eventos
          </h2>

          <p className="mt-3 mb-8 text-gray-700 dark:text-gray-300">
            Confira datas, horários, locais e informações para participar.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventos.map((evento) => (
              <EventCard key={evento.id} evento={evento} />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
        <div className="mx-auto max-w-6xl px-5 py-6">
          <p className="font-semibold">TubaCity</p>
          <p className="mt-1 text-sm">
            Projeto acadêmico de acessibilidade digital.
          </p>
          <p className="mt-1 text-sm">
            Eventos e links demonstrativos.
          </p>
        </div>
      </footer>
    </div>
  )
}