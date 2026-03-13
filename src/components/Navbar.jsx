import { useState , useEffect} from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("dark")
  }, []);

  const toggleDarkMode = () => {
  const newMode = !darkMode
  setDarkMode(newMode)

  if (newMode) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
   }
  };

  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-white dark:bg-black shadow-md">

      <h1 className="text-2xl font-bold text-pink-500">
        PetalsStudio
      </h1>

      <ul className="flex gap-8 text-gray-700 dark:text-gray-200 font-medium">

        <li className="hover:text-pink-500 cursor-pointer transition">Home</li>
        <li className="hover:text-pink-500 cursor-pointer transition">About</li>
        <li className="hover:text-pink-500 cursor-pointer transition">Services</li>
        <li className="hover:text-pink-500 cursor-pointer transition">Projects</li>
        <li className="hover:text-pink-500 cursor-pointer transition">Contact</li>

      </ul>

      <button
        onClick={toggleDarkMode}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </nav>
  );
}

export default Navbar;