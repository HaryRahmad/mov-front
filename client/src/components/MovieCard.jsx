import { Link } from "react-router-dom"

function MovieCard() {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Link to="#" className="absolute inset-0 z-10">
        <span className="sr-only">View movie</span>
      </Link>
      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg">
        <img
          src="https://via.placeholder.com/300x450"
          alt="Movie poster"
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="font-medium text-sm truncate">Movie Title</h3>
        <p className="text-xs text-muted-foreground">2025 • Action</p>
      </div>
    </div>
  )
}

export default MovieCard

