function Header () {
  return (
    <header className="flex justify-between items-center p-4 md:p-8">
      <img src="./assets/images/logo.svg" alt="app logo" />
      <button className="bg-[hsl(243,23%,30%)] text-white flex items-center gap-2 cursor-pointer px-2 py-1 rounded-md">
        <img src="./assets/images/icon-units.svg" alt="units icon" />
        Units
        <img src="./assets/images/icon-dropdown.svg" alt="dropdown icon" />
      </button>
    </header>
  );
}

export default Header