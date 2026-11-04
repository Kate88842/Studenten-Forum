function PostDetails({
  post,
  author,
  comments,
  commentName,
  commentBody,
  commentError,
  sendingComment,
  onNameChange,
  onBodyChange,
  onSubmit,
}) {
  return (
    <section className="mx-auto max-w-3xl">
      <a href="/" className="mb-8 inline-flex text-sm text-pink-300 transition hover:text-pink-200">
        ← Terug naar discussies
      </a>
      <article className="rounded-2xl border border-white/10 bg-[#16101d] p-5 sm:p-8">
        <p className="mb-3 text-sm text-pink-300">{author?.name || 'Student'} · Discussie #{post.id}</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{post.title}</h1>
        <p className="mt-5 break-words text-sm leading-7 text-[#b8a9c9] sm:text-base">{post.body}</p>
      </article>

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Reacties ({comments.length})</h2>
        <div className="space-y-3">
          {comments.map((comment) => (
            <article key={comment.id} className="rounded-2xl border border-white/10 bg-[#16101d] p-4">
              <h3 className="text-sm font-semibold">{comment.name}</h3>
              <p className="mt-2 break-words text-sm leading-6 text-[#b8a9c9]">{comment.body}</p>
            </article>
          ))}
        </div>
      </section>

      <form onSubmit={onSubmit} className="mt-8 space-y-3 rounded-2xl border border-white/10 bg-[#16101d] p-5">
        <h2 className="text-lg font-semibold">Plaats een reactie</h2>
        <input
          className="w-full rounded-lg border border-white/10 bg-[#0b070e] px-3 py-2 text-sm text-white outline-none focus:border-pink-300"
          placeholder="Je naam"
          value={commentName}
          onChange={(event) => onNameChange(event.target.value)}
          required
        />
        <textarea
          className="w-full rounded-lg border border-white/10 bg-[#0b070e] px-3 py-2 text-sm text-white outline-none focus:border-pink-300"
          placeholder="Schrijf je reactie..."
          rows="4"
          value={commentBody}
          onChange={(event) => onBodyChange(event.target.value)}
          required
        />
        {commentError && <p className="text-sm text-red-300" role="alert">{commentError}</p>}
        <button
          className="rounded-lg bg-pink-400 px-4 py-2 text-sm font-semibold text-[#0b070e] transition hover:bg-pink-300 disabled:opacity-50"
          type="submit"
          disabled={sendingComment}
        >
          {sendingComment ? 'Versturen...' : 'Reactie plaatsen'}
        </button>
      </form>
    </section>
  );
}

export default PostDetails;
