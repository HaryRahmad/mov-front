"use client";

import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Info } from "lucide-react";
import SeatMap from "../components/SeatMap";
import BookingSummary from "../components/BookingSummary";

const dummyMovies = [
  { id: 1, title: "Dune: Part Two", year: 2024, genre: "Sci-Fi", image: "https://via.placeholder.com/300x450" },
  { id: 2, title: "The Batman", year: 2022, genre: "Action", image: "https://via.placeholder.com/300x450" },
  { id: 3, title: "Spider-Man: No Way Home", year: 2021, genre: "Adventure", image: "https://via.placeholder.com/300x450" },
  { id: 4, title: "Inception", year: 2010, genre: "Sci-Fi", image: "https://via.placeholder.com/300x450" },
  { id: 5, title: "Interstellar", year: 2014, genre: "Sci-Fi", image: "https://via.placeholder.com/300x450" },
];

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = dummyMovies.find((m) => m.id === parseInt(id));
    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  if (!movie) return null;

  const pricePerSeat = 10; // Harga standar untuk semua kursi

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];

  const unavailableSeats = ["A3", "A4", "B5", "C7", "C8", "D1", "E10", "F4", "G7", "H2", "H3"];

  const handleSeatClick = (seat) => {
    if (unavailableSeats.includes(seat)) return; // Cegah pemilihan kursi yang tidak tersedia

    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat)
        ? prevSeats.filter((s) => s !== seat) // Hapus jika sudah dipilih
        : [...prevSeats, seat] // Tambahkan jika belum dipilih
    );
  };

  const totalPrice = selectedSeats.length * pricePerSeat;

  const handleBooking = () => {
    if (selectedSeats.length === 0) return;
    alert(`Booking confirmed! You've booked ${selectedSeats.length} seats for $${totalPrice}.`);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-50 w-full bg-gray-800 shadow-md py-4">
        <div className="max-w-4xl mx-auto flex items-center px-6">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white">
            <ArrowLeft className="size-5" />
            <span>Back</span>
          </Link>
          <h1 className="text-xl font-bold mx-auto">Select Your Seats</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p className="text-gray-400">Today, 7:30 PM • Screen 3</p>
        </div>

        <div className="relative mb-8">
          <div className="h-8 bg-blue-600 rounded-t-lg mx-auto max-w-md"></div>
          <p className="text-center text-sm text-gray-400">SCREEN</p>
        </div>

        <SeatMap
          rows={rows}
          selectedSeats={selectedSeats}
          unavailableSeats={unavailableSeats}
          onSeatClick={handleSeatClick}
        />

        <BookingSummary
          selectedSeats={selectedSeats}
          totalPrice={totalPrice}
          onBooking={handleBooking}
          movieTitle={movie.title}
        />

        <div className="flex items-start gap-2 text-sm text-gray-400">
          <Info className="size-4 mt-0.5" />
          <p>
            Seats are automatically released after 5 minutes if payment is not completed.
          </p>
        </div>
      </main>
    </div>
  );
}

export default BookingPage;