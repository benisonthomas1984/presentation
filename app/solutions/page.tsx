import {
  Truck,
  ShoppingCart,
  Brain,
  UserCheck,
  Zap,
  CheckCircle,
  Headphones,
  RefreshCw,
  LinkIcon,
  CloudCog,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

const products = [
  {
    title: "White-Label Transport & Logistics Platform",
    icon: Truck,
    features: [
      "Launch your Uber-like platform in 7 days",
      "Powers 500+ transport businesses globally",
      "Custom solutions for taxis, deliveries, and fleet management",
      "Real-time tracking, automated dispatch, and AI-powered optimization",
    ],
    gradient: "from-purple-600 to-blue-500",
  },
  {
    title: "E-commerce Solutions",
    icon: ShoppingCart,
    features: [
      "Full-scale e-commerce launch in 48 hours",
      "Zero client churn over 5 years",
      "AI-powered inventory and sales management",
      "Seamless integration with existing systems",
      "Camera search and personalized recommendations",
    ],
    gradient: "from-green-400 to-cyan-500",
  },
  {
    title: "Enterprise AI Solutions",
    icon: Brain,
    features: [
      "AI Sales Agents: Automated lead generation to conversion",
      "AI Content Creator: Intelligent content creation system",
      "Marketing Automation: Self-learning campaign management",
      "Custom Enterprise AI: Industry-specific automation solutions",
    ],
    gradient: "from-pink-500 to-orange-400",
    highlight: "Latest Innovation",
  },
  {
    title: "Lead Generation Software",
    icon: UserCheck,
    features: [
      "Automated prospect identification",
      "Intelligent lead qualification",
      "Real-time behavior analysis",
      "Personalized communication automation",
      "Web signals monitoring and response",
    ],
    gradient: "from-yellow-400 to-red-500",
  },
]

const commonFeatures = [
  { text: "24/7 support", icon: Headphones },
  { text: "Regular updates", icon: RefreshCw },
  { text: "Custom integration options", icon: LinkIcon },
  { text: "AI-enhanced features", icon: Zap },
  { text: "Cloud-based deployment", icon: CloudCog },
]

export default function ProductShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/team"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Team</span>
          </Link>
        </div>
        <h1 className="text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-16">
          Solutions that Define Tomorrow
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${product.gradient} rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 group`}
            >
              <div className="bg-gray-900 bg-opacity-90 p-8 h-full transition-all duration-300 group-hover:bg-opacity-75">
                <div className="flex items-center mb-6">
                  <product.icon className="h-12 w-12 text-white mr-4" />
                  <h2 className="text-3xl font-bold text-white">{product.title}</h2>
                </div>
                {product.highlight && (
                  <span className="inline-block bg-yellow-400 text-gray-900 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {product.highlight}
                  </span>
                )}
                <ul className="space-y-4">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-white mr-3 mt-1 flex-shrink-0" />
                      <span className="text-white text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="p-10">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Each product comes with:</h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {commonFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-700 rounded-xl p-6 transition-all duration-300 hover:bg-gray-600 hover:scale-105 text-center h-full"
                >
                  <feature.icon className="h-10 w-10 text-blue-400 mb-4" />
                  <span className="text-white text-lg font-medium">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link href="/global-reach" className="inline-block">
            <button className="group relative px-8 py-3 overflow-hidden font-medium rounded-md bg-transparent text-cyan-300 border border-cyan-300 shadow-md transition-all duration-300 ease-out hover:text-black">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 group-hover:translate-x-0"></span>
              <span className="relative flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:text-black">
                Next
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

