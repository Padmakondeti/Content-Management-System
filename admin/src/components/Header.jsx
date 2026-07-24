function Header() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="bg-white shadow flex justify-between items-center px-8 py-4">

      <h1 className="text-2xl font-bold">
        CMS Dashboard
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </header>
  );
}

export default Header;