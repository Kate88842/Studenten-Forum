function UserDetails({ user }) {
  return (
    <section className="mx-auto max-w-3xl">
      <a href="/users" className="mb-8 inline-flex text-sm text-pink-300 transition hover:text-pink-200">
        ← Terug naar gebruikers
      </a>
      <article className="rounded-2xl border border-white/10 bg-[#16101d] p-5 sm:p-8">
        <p className="mb-2 text-sm text-pink-300">@{user.username}</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{user.name}</h1>
        <div className="mt-6 space-y-4 text-sm">
          <p className="break-all sm:break-normal"><span className="text-[#9c8da8]">Email:</span> {user.email}</p>
          <p className="break-words"><span className="text-[#9c8da8]">Telefoon:</span> {user.phone}</p>
          <p className="break-all sm:break-normal"><span className="text-[#9c8da8]">Website:</span> {user.website}</p>
          <p className="break-words"><span className="text-[#9c8da8]">Bedrijf:</span> {user.company.name}</p>
        </div>
      </article>
    </section>
  );
}

export default UserDetails;
