function Process() {
  return (
    <section className="w-full py-20 px-16 bg-pink-50 dark:bg-gray-950">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Our Process
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          At PetalsStudio we follow a clear and collaborative process to turn
          ideas into beautiful digital products.
        </p>

      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-4 gap-10 text-center">

        {/* Step 1 */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-3xl font-bold text-pink-500 mb-4">
            01
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Discovery
          </h4>

          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Understanding the client’s goals, audience, and project requirements.
          </p>

        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-3xl font-bold text-pink-500 mb-4">
            02
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Design
          </h4>

          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Creating beautiful layouts and intuitive user experiences.
          </p>

        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-3xl font-bold text-pink-500 mb-4">
            03
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Development
          </h4>

          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Building fast, responsive, and scalable websites.
          </p>

        </div>

        {/* Step 4 */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-3xl font-bold text-pink-500 mb-4">
            04
          </h3>

          <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Launch
          </h4>

          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Delivering the final product and helping clients go live.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Process