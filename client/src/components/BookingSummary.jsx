"use client";

function BookingSummary({ selectedSeats, totalPrice, onBooking, movieTitle }) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-medium mb-4">Booking Summary</h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Movie</span>
          <span>{movieTitle}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Date & Time</span>
          <span>Today, 7:30 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Screen</span>
          <span>Screen 3</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Seats</span>
          <span>{selectedSeats.length > 0 ? selectedSeats.sort().join(", ") : "None selected"}</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 mb-6">
        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <button
        className={`w-full py-3 rounded-md font-medium transition-colors
          ${
            selectedSeats.length > 0
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        onClick={onBooking}
        disabled={selectedSeats.length === 0}
      >
        {selectedSeats.length > 0
          ? `Book ${selectedSeats.length} Seat${selectedSeats.length !== 1 ? "s" : ""}`
          : "Select Seats to Continue"}
      </button>
    </div>
  );
}

export default BookingSummary;