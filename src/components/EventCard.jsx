export default function EventCard({ evento }) {
    return (
        <article
            aria-labelledby={`evento-${evento.id}-titulo`}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
        >
            <img
                src={evento.imagem}
                alt={evento.alt}
                loading="lazy"
                className="h-52 w-full object-cover"
            />

            <div className="p-5">
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {evento.categoria}
                </p>

                <h3 id={`evento-${evento.id}-titulo`} className="mt-2 text-xl font-bold">
                    {evento.titulo}
                </h3>

                <dl className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    <div>
                        <dt className="inline font-bold">Data: </dt>
                        <dd className="inline">{evento.data}</dd>
                    </div>

                    <div>
                        <dt className="inline font-bold">Horário: </dt>
                        <dd className="inline">{evento.horario}</dd>
                    </div>

                    <div>
                        <dt className="inline font-bold">Local: </dt>
                        <dd className="inline">{evento.local}</dd>
                    </div>
                </dl>

                <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    {evento.descricao}
                </p>

                <div className="mt-5 flex flex-col items-start gap-3">
                    <a
                        href={evento.informacoes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white underline hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                        Mais informações: {evento.titulo} (abre em nova aba)
                    </a>

                    <a
                        href={evento.inscricao}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center rounded-lg border border-blue-700 px-4 py-2 font-semibold text-blue-700 underline hover:bg-blue-50 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-gray-800"
                    >
                        Inscrição: {evento.titulo} (abre em nova aba)
                    </a>
                </div>
            </div>
        </article>
    )
}