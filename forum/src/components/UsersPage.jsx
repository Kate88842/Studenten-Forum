function UsersPage({ users }) {
  return (
    <section>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-pink-300">Community</p>
      <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Gebruikers</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <a
            key={user.id}
            href={`/users/${user.id}`}
            className="rounded-2xl border border-white/10 bg-[#16101d] p-5 transition hover:border-pink-300/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
          >
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="mt-1 text-sm text-pink-300">@{user.username}</p>
            <p className="mt-3 break-all text-sm text-[#b8a9c9] sm:break-normal">{user.email}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default UsersPage;
