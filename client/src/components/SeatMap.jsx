"use client";

function SeatMap({ rows, selectedSeats, unavailableSeats, onSeatClick }) {
  return (
    <div>
      {rows.map((row) => (
        <div key={row} className="flex justify-center gap-2 mb-2">
          <div className="w-6 flex items-center justify-center text-sm text-gray-400">{row}</div>
          {[...Array(10)].map((_, i) => {
            const seatNumber = i + 1;
            const seat = `${row}${seatNumber}`;
            const isUnavailable = unavailableSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);

            return (
              <button
                key={seat}
                className={`
                  size-8 rounded-t-lg flex items-center justify-center text-xs
                  ${
                    isUnavailable
                      ? "bg-gray-700 border-gray-700 cursor-not-allowed"
                      : isSelected
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-gray-800 border-gray-700 hover:bg-gray-700"
                  }
                `}
                onClick={() => onSeatClick(seat)}
                disabled={isUnavailable}
              >
                {seatNumber}
              </button>
            );
          })}
          <div className="w-6"></div>
        </div>
      ))}
    </div>
  );
}

export default SeatMap;