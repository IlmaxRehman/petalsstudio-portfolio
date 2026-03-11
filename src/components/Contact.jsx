function Contact() {
  return (
    <section className="w-full py-20 px-16 bg-white dark:bg-black">

      {/* Heading */}
      <div className="text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Let's Build Something Beautiful
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? We'd love to hear about it. Reach out and
          let's create something amazing together.
        </p>

      </div>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto">

        <form className="flex flex-col gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
          />

          <textarea
            placeholder="Tell us about your project..."
            rows="5"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
          ></textarea>

          <button
            type="submit"
            className="bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition"
          >
            Send Message
          </button>

        </form>

        {/* Quick Links */}
        <div className="flex justify-center gap-6 mt-10 text-pink-500 font-medium">

          <a href="#" className="hover:underline">
            Email
          </a>

          <a href="#" className="hover:underline">
            GitHub
          </a>

          <a href="#" className="hover:underline">
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact