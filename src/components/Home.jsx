import { Link } from 'react-router-dom'

export default function Home() {
  const categories = [
    {
      name: 'Chinese Food',
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e',
      path: '/category/chinese'
    },
    {
      name: 'Japanese Food',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
      path: '/category/japanese'
    },
    {
      name: 'Western Food',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697',
      path: '/category/western'
    },
    {
      name: 'Indonesian Food',
      image: 'https://images.unsplash.com/photo-1562607635-4608ff48a859',
      path: '/category/indonesian'
    },
    {
      name: 'Korean Food',
      image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9',
      path: '/category/korean'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Discover Amazing Recipes
        </h1>
        <p className="text-xl text-gray-600">
          Explore delicious recipes from around the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-3xl font-bold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}