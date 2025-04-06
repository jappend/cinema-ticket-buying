export const FREE = 1, SELECTED = 2, OCCUPIED = 3 

interface seat {
  seatId: string;
  state: number;
}

export interface Room {
  roomId: number;
  roomName: string;
  seats: seat[];
  capacity: number;
}

export const RoomList: Room[] = [
  {
    roomId: 2,
    roomName: "Screen 2",
    seats: [
      {seatId: "A1", state: FREE},
      {seatId: "A2", state: FREE},
      {seatId: "A3", state: FREE},
      {seatId: "A4", state: FREE},
      {seatId: "B1", state: FREE},
      {seatId: "B2", state: FREE},
      {seatId: "B3", state: FREE},
      {seatId: "B4", state: FREE},
      {seatId: "C1", state: FREE},
      {seatId: "C2", state: FREE},
      {seatId: "C3", state: FREE},
      {seatId: "C4", state: FREE},
    ], 
    capacity: 12
  }
]

