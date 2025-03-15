import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronRight } from "lucide-react";
import MovieCard from "../components/MovieCard";

const dummyMovies = [
    { id: 1, title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
    { id: 2, title: "The Batman", year: 2022, genre: "Action", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg" },
    { id: 3, title: "Spider-Man: No Way Home", year: 2021, genre: "Adventure", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg" },
    { id: 4, title: "Inception", year: 2010, genre: "Sci-Fi", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg" },
    { id: 5, title: "Interstellar", year: 2014, genre: "Sci-Fi", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
    { id: 6, title: "The Dark Knight", year: 2008, genre: "Action", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
    { id: 7, title: "Avengers: Endgame", year: 2019, genre: "Action", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg" },
    { id: 8, title: "Joker", year: 2019, genre: "Crime", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg" },
    { id: 9, title: "The Matrix", year: 1999, genre: "Sci-Fi", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg" },
    { id: 10, title: "Gladiator", year: 2000, genre: "Action", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg" },
    { id: 11, title: "The Lord of the Rings: The Return of the King", year: 2003, genre: "Adventure", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg" },
    { id: 12, title: "Titanic", year: 1997, genre: "Romance", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyMzI5NDc5Nl5BMl5BanBnXkFtZTgwMjM0MTI2MDE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg" },
    { id: 13, title: "The Social Network", year: 2010, genre: "Drama", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3ODc1ODI5Ml5BMl5BanBnXkFtZTgwODMzMDY3OTE@._V1_.jpg" },
    { id: 14, title: "The Revenant", year: 2015, genre: "Adventure", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3MzA4Nzk3NV5BMl5BanBnXkFtZTgwNjAxMTc1ODE@._V1_SX1777_CR0,0,1777,744_AL_.jpg" },
    { id: 15, title: "Mad Max: Fury Road", year: 2015, genre: "Action", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyYzgyOWEtNTY2NS00NjRjLWJiNDYtMWViMjg5MWZjYjgzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg" },
    { id: 16, title: "The Grand Budapest Hotel", year: 2014, genre: "Comedy", image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjc1NjI0NV5BMl5BanBnXkFtZTgwNzA0NzY0ODE@._V1_SY1000_CR0,0,1497,1000_AL_.jpg" },
    { id: 17, title: "The Wolf of Wall Street", year: 2013, genre: "Biography", image: "https://via.placeholder.com/300x450" }
  ];


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
              {dummyMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Home;