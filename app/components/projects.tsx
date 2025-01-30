import Image from "next/image"
import Link from "next/link"

const aiProjects = [
  {
    title: "Galaxy Morphology Classification with CNN",
    description:
      "Implemented a galaxy morphology classification system using deep learning models (EfficientNet, ResNet50) trained on Galaxy DECaLS and SDSS datasets. Achieved 83% accuracy using ensemble learning with a voting classifier.",
    link: "https://docs.google.com/document/d/1_MPhPQ1e8ldIlCtARvQTPTH6XmyA5XoiLYQem-EeQOA/edit?usp=sharing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V8vPtMdXGkOMvCesxD5OMbGt01r2AY.png",
  },
  {
    title: "Quora Questions Search Engine",
    description:
      "Developed a search engine using Pyterrier and Elmo embeddings for semantic similarity. Implemented RM3 query expansion for improved search relevance.",
    link: "#", // Placeholder link since project is private
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e8G75wrjDEDTjTbU6yTt1x04GAjgy7.png",
  },
  {
    title: "Products Image Classifier for Slash",
    description:
      "Designed an image classifier achieving 89% validation accuracy using ResNet50 transfer learning. Extracted and preprocessed images via OpenCV.",
    link: "https://github.com/mohamedtag04/slash-products-image-classifier",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Av1APHBGPpGPwB2yDJkJmKqcwxeZ0e.png",
  },
]

const softwareProjects = [
  {
    title: "Rozenverse Solar System Simulation",
    description:
      "Created an interactive 3D solar system simulation for NASA Space Apps Hackathon using Three.js. Implemented realistic planet materials, orbits, and animations using NASA data in just 48 hours.",
    link: "https://rozenverse.netlify.app/",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wt58xXrZmsya4iOKqDZH8m3k9xEUyg.png",
  },
  {
    title: "TaskQuest Productivity Platform",
    description:
      "Full-stack web application with task scheduling, habit tracking, Pomodoro timer, and expense management. Built with React.js, Flask, and PostgreSQL.",
    link: "#", // Placeholder link since project is private
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZfTsIdN3AMIcT6iIJPa7fOAxWAXFj.png",
  },
  {
    title: "X Hotel Website and Management System",
    description:
      "Hotel management system using ASP.NET Razor Pages and SQL Server for streamlining reservations and check-ins/outs. Features include room booking, staff management, and billing.",
    link: "https://drive.google.com/file/d/1UwCG7OZuurcG5k9PEJbkZSWTZADHNYMj/view",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tgZBebzxHKJq2rIpCdGorCVIk2yOzt.png",
  },
]

const dataAnalysisProjects = [
  {
    title: "University Dashboard Analytics",
    description:
      "Comprehensive dashboard for visualizing student performance metrics, course statistics, and educational analytics using modern data visualization techniques.",
    link: "https://github.com/mohamedtag04/University-Dashboard-Project",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vECOm6PzPwimM5elPYRwJh7QIEdjxQ.png",
  },
  {
    title: "Egyptian Real Estate Price Prediction",
    description:
      "Built a Linear Regression model (R² = 0.8) for real estate pricing predictions in El Sheikh Zayed City. Created and published a dataset on Kaggle.",
    link: "https://www.kaggle.com/datasets/mohamedtag04/sheikh-zayed-properties",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zqYWk3nqVzeBkMdH4vBYOMbkfBw8rn.png",
  },
  {
    title: "Egyptian Internet Landscape Analysis",
    description:
      "Integrated WorldCities dataset and Ookla Q4 2023 data for comprehensive internet landscape analysis using Python and GIS tools.",
    link: "https://www.kaggle.com/datasets/mohamedtag04/egypt-network-performance-data-q4-2023",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LgpIT89XWWHd5wdkkFE5grKDWTKWnS.png",
  },
]

function ProjectCard({ project }) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        {project.link !== "#" ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            {project.link.includes("docs.google.com")
              ? "View Documentation"
              : project.link.includes("drive.google.com")
                ? "Watch Demo"
                : "View Project"}
          </Link>
        ) : (
          <span className="text-gray-400">Private Project</span>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">AI & ML Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Software Development Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-8">Data Analysis Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataAnalysisProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

