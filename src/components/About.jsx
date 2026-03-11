import ilma from "../assets/images/founders.jpeg"

function About() {
  return (
    <section className="w-full py-20 px-16 bg-white dark:bg-black">

      {/* Section Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Meet the Founders
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          PetalsStudio was founded by Ilma and Priya with the vision of building
          beautiful digital experiences that combine creativity, thoughtful
          design, and clean code.
        </p>

      </div>

      {/* Founder Cards */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* Ilma Card */}
        <div className="bg-pink-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">

          <img
            src={ilma}
            alt="Ilma"
            className="w-40 h-40 mx-auto rounded-full mb-6 object-cover"
          />

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Ilma
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Developer and creative thinker passionate about building modern web
            applications and solving real problems with technology.
          </p>

        </div>

        {/* Priya Card */}
        <div className="bg-pink-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition">

          <img
            src={ilma}
            alt="Priya"
            className="w-40 h-40 mx-auto rounded-full mb-6 object-cover"
          />

          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Priya
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mt-4">
            Designer and developer focused on creating elegant interfaces and
            intuitive digital experiences for modern businesses.
          </p>

        </div>

      </div>

    </section>
  )
}

export default About