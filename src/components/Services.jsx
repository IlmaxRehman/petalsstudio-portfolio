function Services() {
  return (
    <section className="w-full py-20 px-16 bg-pink-50 dark:bg-gray-950">

      {/* Section Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          What We Do
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At PetalsStudio we design and build modern digital experiences for
          startups, creators, and businesses. Our services combine creativity,
          technology, and strategy.
        </p>

      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-10">

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Web Development
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Custom responsive websites built with modern technologies like
            React and modern frameworks.
          </p>

        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Landing Page Design
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            High-converting landing pages designed for startups and product
            launches.
          </p>

        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Portfolio Websites
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Personal branding websites for developers, designers, and
            professionals.
          </p>

        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            UI / UX Design
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Beautiful and intuitive interfaces designed to improve user
            experience and engagement.
          </p>

        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Automation Solutions
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Workflow automation, integrations, and tools that help businesses
            save time and increase efficiency.
          </p>

        </div>

        {/* Service Card */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Website Optimization
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Performance improvements, SEO basics, and speed optimization for
            better user experience.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Services