import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Link to={`/booking/${movie.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View movie</span>
      </Link>
      <div className="aspect-[2/3] w-full overflow-hidden rounded-lg">
        <img
          src={movie.image}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="font-medium text-sm truncate">{movie.title}</h3>
        <p className="text-xs text-muted-foreground">{movie.year} • {movie.genre}</p>
      </div>
    </div>
  );
}

export default MovieCard;