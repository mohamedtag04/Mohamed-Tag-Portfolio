export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-2">Zewail City of Science, Technology, and Innovation</h3>
          <p className="text-xl mb-2">Bachelor's in Computer Science</p>
          <p className="text-lg text-gray-300 mb-4">Major: Data Science and Artificial Intelligence</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400">October 2022 - July 2026</span>
            <span className="text-blue-400 font-semibold">GPA: 3.49</span>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
            <p className="text-gray-300">
              Machine Learning, Deep Learning, Data Structures and Algorithms, Data Analysis and Visualization, Database
              Management Systems (DBMS), Software Engineering, Data Mining, Text Mining and Information Retrieval,
              Statistical Inference, Linear and Nonlinear Optimization
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

