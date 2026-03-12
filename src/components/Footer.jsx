function Footer() {
  return (
    <footer className="w-full bg-pink-50 dark:bg-gray-950 py-10 px-16 ">

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Brand */}
        <h2 className="text-2xl font-bold text-pink-500">
          PetalsStudio
        </h2>

        {/* Links */}
        <div className="flex gap-6 text-gray-600 dark:text-gray-300">

          <a href="#" className="hover:text-pink-500 transition">
            GitHub
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            LinkedIn
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            Email
          </a>

        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center mt-6 text-gray-500 text-sm">

        © {new Date().getFullYear()} PetalsStudio.  
        Built with ❤️ by Ilma & Priya.

      </div>

    </footer>
  )
}

export default Footer