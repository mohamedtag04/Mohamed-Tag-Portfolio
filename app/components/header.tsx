"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Code, Database, Brain } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden py-16 px-4 sm:px-6"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/pattern.svg" alt="Background pattern" layout="fill" objectFit="cover" quality={100} />
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Mohamed Tag</h1>
            <h2 className="text-xl sm:text-2xl mb-6">Data Scientist & Software Developer</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
              Transforming data into insights and ideas into code. Fast learner, problem-solver, and tech enthusiast
              ready to tackle your next big project.
            </p>
            <Link
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 text-sm sm:text-base"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hdfQ1duS9z24dMpXXKW2oEKgH2oqL7.png"
                alt="Mohamed Tag"
                layout="fill"
                className="rounded-full border-4 border-white shadow-lg object-cover"
              />
              <motion.div
                className="absolute -top-4 -left-4 bg-blue-500 rounded-full p-2 sm:p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <Code className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 bg-green-500 rounded-full p-2 sm:p-3"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
              >
                <Database className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-4 bg-purple-500 rounded-full p-2 sm:p-3"
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 1 }}
              >
                <Brain className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Data Science & AI</h3>
            <p className="text-sm sm:text-base">
              TensorFlow, Computer Vision, Deep Learning, Machine Learning, NumPy, Pandas, OpenCV
            </p>
          </div>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Full Stack Development</h3>
            <p className="text-sm sm:text-base">React.js, Next.js, Flask, ASP.NET, PostgreSQL, REST APIs</p>
          </div>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Tools & Technologies</h3>
            <p className="text-sm sm:text-base">Python, JavaScript, C++, SQL, Tableau, Git, Docker</p>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

