function Testimonials() {
  return (
    <section className="w-full py-20 px-16 bg-pink-50 dark:bg-gray-950">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          What Clients Say
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Businesses and creators trust PetalsStudio to build beautiful and
          functional digital experiences.
        </p>

      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md">

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            PetalsStudio built an amazing website for our startup. The design
            and user experience exceeded our expectations.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            Alex Morgan
          </h4>

          <span className="text-sm text-gray-500">
            Startup Founder
          </span>

        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md">

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Professional, creative, and very responsive. Highly recommended for
            modern web development projects.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            Sarah Lee
          </h4>

          <span className="text-sm text-gray-500">
            Business Owner
          </span>

        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md">

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            They delivered a beautiful portfolio website that perfectly
            represents my personal brand.
          </p>

          <h4 className="font-semibold text-gray-800 dark:text-white">
            David Chen
          </h4>

          <span className="text-sm text-gray-500">
            Creative Professional
          </span>

        </div>

      </div>

    </section>
  )
}

export default Testimonials