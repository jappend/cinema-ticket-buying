import React, { useState, useEffect } from "react";
import { FREE, OCCUPIED, RoomList, Seat, SELECTED } from "../data/roomInfo";

interface SeatSelectorProperties {
  room: string;
}

function SeatSelector({ room }: SeatSelectorProperties): React.ReactElement | null {
  const [roomInfo, setRoomInfo] = useState<any>(null);
  const [roomSeats, setRoomSeats] = useState<Seat[][]>([]);
  const [selectedSeat, setSelectedSeat] = useState<string>('none');

  useEffect(() => {
    const roomFound = RoomList.find((roomFind) => room === roomFind.roomName);

    if (roomFound) {
      setRoomSeats(roomFound.seats);
      setRoomInfo(roomFound); 
    }
  }, [room]);

  function toggleSeat(row: number, col: number) {
    setRoomSeats((prevSeats) => {
      return prevSeats.map((linha, rIdx) =>
        linha.map((seat, cIdx) => {
          if (seat.state === OCCUPIED) return seat;

          if (rIdx === row && cIdx === col) {
            setSelectedSeat(seat.seatId)
            return {
              ...seat,
              state: seat.state === SELECTED ? FREE : SELECTED,
            };
          } else {
            return { ...seat, state: FREE };
          }
        })
      );
    });
  }

  function getSeatStyle(seat: Seat) {
    switch (seat.state) {
      case FREE:
        return 'bg-gray-400 hover:bg-gray-400 cursor-pointer';
      case SELECTED:
        return 'bg-cyan-700 text-white';
      case OCCUPIED:
        return 'bg-red-900 cursor-not-allowed';
      default:
        return '';
    }
  }

  if (!roomInfo) {
    return null
  }

  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col items-center justify-center gap-6 text-white mt-5">
      <h1 className="text-white">{roomInfo?.roomName}</h1>

      <div className="bg-zinc-800 text-center text-sm text-gray-400 px-6 py-2 rounded-md shadow-inner w-60">
        Screen 
      </div>

      {roomSeats.map((row, rowIndex) => (

        <div key={rowIndex} className="flex">
          {row.map((seat, colIndex) => (
            <div
              key={colIndex}
              className={`w-8 h-8 m-1 rounded ${getSeatStyle(seat)}`}
              onClick={() => toggleSeat(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}

      <p id="seatSelected"><span className="font-bold">Seat Selected:</span> {selectedSeat}</p>
    </div>
  );
}

export default SeatSelector;
