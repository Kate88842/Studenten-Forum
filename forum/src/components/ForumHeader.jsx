function ForumHeader({ postId, usersPage }) {
  return (
    <header className="border-b border-white/10 bg-[#120d18]">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-4 sm:gap-4 sm:px-8">
        <a href="/" className="shrink-0 text-lg font-bold tracking-tight sm:text-2xl">
          StudentForum<span className="text-pink-400 drop-shadow-[0_0_8px_rgba(255,117,179,0.7)]">.</span>
        </a>
        <nav aria-label="Hoofdnavigatie" className="flex items-center gap-3 text-xs sm:gap-6 sm:text-sm">
          <a href={postId || usersPage ? '/#discussies' : '#discussies'} className={`transition hover:text-pink-200 ${!usersPage ? 'font-medium text-pink-300' : 'text-[#b8a9c9]'}`}>
            Discussies
          </a>
          <a href="/users" className={`transition hover:text-pink-300 ${usersPage ? 'font-medium text-pink-300' : 'text-[#b8a9c9]'}`}>
            Gebruikers
          </a>
        </nav>
      </div>
    </header>
  );
}

export default ForumHeader;
