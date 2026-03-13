import founders from "../assets/images/founders.jpeg";
function Hero() {
  return (
    <section className="w-full min-h-[90vh] flex items-center justify-between px-16 bg-pink-50 dark:bg-gray-950">

      {/* Left Content */}
      <div className="max-w-xl">

        <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
          Crafting Beautiful Digital Experiences
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          We are Ilma and Priya, founders of PetalsStudio. We design modern
          websites, creative digital products, and automation solutions for
          startups and businesses.
        </p>

        <div className="flex gap-4">

          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            View Our Work
          </button>

          <button className="border border-pink-500 text-pink-500 px-6 py-3 rounded-lg hover:bg-pink-100 transition">
            Start a Project
          </button>

        </div>

      </div>

      {/* Right Image */}

      <div className="flex justify-center items-center">

        <img
          src={founders}
          alt="Founders"
          className="w-105 rounded-2xl shadow-lg"
        />

      </div>

    </section>
  )
}

export default Hero;
