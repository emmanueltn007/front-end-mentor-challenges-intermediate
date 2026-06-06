function SearchSection ({ setSearchInput, searchInput, handleUserSearch }) {
  

  return (
    <section className="flex flex-col text-center items-center gap-8 px-4 md:px-8">
      <h1 className="text-[hsl(0,0%,100%)] text-4xl font-['Bricolage Grotesque',sans-serif] font-semibold">
        How's the sky looking today?
      </h1>
      <div className="flex flex-col justify-center md:flex-row gap-2 w-full">
        <input onChange={(e) => setSearchInput(e.target.value)} className="bg-[hsl(243,23%,30%)] outline-none rounded-md placeholder:text-[hsl(240,6%,70%)] px-2 py-1" value={searchInput} type="text" placeholder="Search for a place..." />
        <button onClick={handleUserSearch} className="bg-[hsl(233,67%,56%)] text-[hsl(0,0%,100%)] cursor-pointer px-2 py-1 rounded-md">Search</button>
      </div>
    </section>
  );
}

export default SearchSection