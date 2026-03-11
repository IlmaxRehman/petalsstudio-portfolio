function Projects() {
  return (
    <section className="w-full py-20 px-16 bg-white dark:bg-black">

      {/* Section Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Selected Work
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A collection of websites and digital products designed and developed
          by PetalsStudio for modern businesses and creators.
        </p>

      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Project Card */}
        <div className="bg-pink-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Startup Landing Page"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Startup Landing Page
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              A modern landing page designed for a tech startup.
            </p>

            <span className="text-pink-500 text-sm font-medium">
              React • Tailwind
            </span>

          </div>

        </div>

        {/* Project Card */}
        <div className="bg-pink-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Cafe Website"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Cafe Website
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Elegant restaurant and cafe website design.
            </p>

            <span className="text-pink-500 text-sm font-medium">
              HTML • CSS • JS
            </span>

          </div>

        </div>

        {/* Project Card */}
        <div className="bg-pink-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="Travel Agency"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Travel Agency Website
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Tour booking platform concept for travel businesses.
            </p>

            <span className="text-pink-500 text-sm font-medium">
              React • Firebase
            </span>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects