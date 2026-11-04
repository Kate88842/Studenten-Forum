import postTexts from '../postTexts.js';

function PostList({ posts, loading, error }) {
  return (
    <>
      <section className="mb-10 rounded-3xl border border-pink-300/10 bg-gradient-to-br from-[#211426] via-[#18111f] to-[#14101a] px-6 py-8 sm:mb-12 sm:px-10 sm:py-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300">Developer community</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Samen bouwen we <span className="text-pink-300">verder.</span></h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[#b8a9c9] sm:text-base">
          Bespreek code, frameworks en tools met andere developers.
        </p>
      </section>

      <section id="discussies">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-pink-300">Praat mee</p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Recente discussies</h2>
          </div>
          {!loading && !error && (
            <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#b8a9c9]">
              {posts.length} {posts.length === 1 ? 'gesprek' : 'gesprekken'}
            </span>
          )}
        </div>

        {loading ? (
          <p className="sr-only" role="status">
            Discussies laden...
          </p>
        ) : error ? (
          <p className="rounded-2xl border border-red-300/20 bg-[#16101d] px-5 py-8 text-sm text-red-300" role="alert">
            {error}
          </p>
        ) : (
          <div className="grid gap-3">
            {posts.map((post) => {
              const text = postTexts[post.id] || post;
              return (
              <a
                href={`/posts/${post.id}`}
                className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                key={post.id}
              >
                <article className="flex min-w-0 items-start gap-4 rounded-2xl border border-white/10 bg-[#16101d] p-4 shadow-lg shadow-black/10 transition duration-200 hover:border-pink-300/40 sm:items-center sm:gap-5 sm:p-5">
                  <div aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pink-400/10 text-sm font-semibold text-pink-300">
                    {post.userId}
                  </div>
                  <div className="w-0 min-w-0 flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-x-2 text-xs text-[#9c8da8]">
                      <span className="font-medium text-[#d9c9e0]">Developer {post.userId}</span>
                      <span aria-hidden="true">·</span>
                      <span>Discussie #{post.id}</span>
                    </div>
                    <h3 className="truncate text-base font-semibold text-[#f3e8f6] sm:text-lg">{text.title}</h3>
                    <p className="mt-1 truncate text-sm leading-6 text-[#b8a9c9]">{text.body}</p>
                  </div>
                  <span aria-hidden="true" className="hidden shrink-0 text-lg text-pink-300 sm:block">↗</span>
                </article>
              </a>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

export default PostList;
