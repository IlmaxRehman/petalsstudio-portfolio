function Automation() {
  return (
    <section className="w-full py-20 px-16 bg-white dark:bg-black">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Automation Solutions
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We help businesses automate repetitive tasks and workflows so they
          can focus on growth. Our automation tools save time, reduce manual
          work, and improve efficiency.
        </p>

      </div>

      {/* Automation Cards */}
      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-pink-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Workflow Automation
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Automate repetitive tasks and internal workflows to improve
            productivity and reduce manual work.
          </p>

        </div>

        <div className="bg-pink-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            Lead Management Systems
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Tools that capture, organize, and manage leads automatically for
            businesses and startups.
          </p>

        </div>

        <div className="bg-pink-50 dark:bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition">

          <h3 className="text-xl font-semibold text-pink-500 mb-4">
            AI Integrations
          </h3>

          <p className="text-gray-600 dark:text-gray-300">
            Integrate AI tools and automation systems into websites and
            business workflows.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Automation