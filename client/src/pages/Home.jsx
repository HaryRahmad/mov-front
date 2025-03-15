import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronRight } from "lucide-react";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-50 w-full bg-gray-800/90 backdrop-blur-lg border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-red-500">
              MOVIEFLIX
            </Link>
            <nav className="hidden md:flex gap-6">
              {["Home", "Movies", "TV Shows", "New & Popular", "My List"].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-sm font-medium hover:text-red-500 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            {[Search, Bell, User].map((Icon, index) => (
              <button key={index} className="rounded-full p-2 hover:bg-gray-700 transition-colors">
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <section className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Featured movie"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <h1 className="text-3xl font-bold mb-2">Dune: Part Two</h1>
            <p className="text-sm text-gray-300 mb-4 max-w-lg">
              Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who
              destroyed his family.
            </p>
            <div className="flex gap-3">
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Watch Now
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md font-medium transition-colors">
                Add to List
              </button>
            </div>
          </div>
        </section>

        {["Trending Now", "Popular Movies", "New Releases", "Community Favorites"].map((category, index) => (
          <section key={index} className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">{category}</h2>
              <Link to="#" className="text-sm font-medium text-gray-400 flex items-center hover:text-red-500">
                See All <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <MovieCard key={i} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Home;