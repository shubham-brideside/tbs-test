import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Modern React",
      description: "Built with the latest React 18 features and best practices.",
      icon: "⚛️"
    },
    {
      title: "Tailwind CSS",
      description: "Beautiful, responsive designs with utility-first CSS framework.",
      icon: "🎨"
    },
    {
      title: "Fast Development",
      description: "Vite-powered development server for lightning-fast builds.",
      icon: "⚡"
    },
    {
      title: "Mobile First",
      description: "Responsive design that works perfectly on all devices.",
      icon: "📱"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build modern, scalable web applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
