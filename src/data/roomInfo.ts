export const FREE = 1, SELECTED = 2, OCCUPIED = 3 

export interface Seat {
  seatId: string;
  state: number;
}

export interface Room {
  roomId: number;
  roomName: string;
  seats: Seat[][];
  capacity: number;
}

export const RoomList: Room[] = [
  {
    roomId: 1,
    roomName: "Screen 1",
    seats: [
      [
        { seatId: "A1", state: FREE }, { seatId: "A2", state: FREE }, { seatId: "A3", state: OCCUPIED },
        { seatId: "A4", state: FREE }, { seatId: "A5", state: OCCUPIED }, { seatId: "A6", state: OCCUPIED },
        { seatId: "A7", state: OCCUPIED }, { seatId: "A8", state: FREE }, { seatId: "A9", state: FREE },
        { seatId: "A10", state: FREE }, { seatId: "A11", state: FREE }, { seatId: "A12", state: OCCUPIED }
      ],
      [
        { seatId: "B1", state: FREE }, { seatId: "B2", state: FREE }, { seatId: "B3", state: FREE },
        { seatId: "B4", state: FREE }, { seatId: "B5", state: FREE }, { seatId: "B6", state: FREE },
        { seatId: "B7", state: FREE }, { seatId: "B8", state: OCCUPIED }, { seatId: "B9", state: OCCUPIED },
        { seatId: "B10", state: OCCUPIED }
      ],
      [
        { seatId: "C1", state: FREE }, { seatId: "C2", state: OCCUPIED }, { seatId: "C3", state: FREE },
        { seatId: "C4", state: FREE }, { seatId: "C5", state: OCCUPIED }, { seatId: "C6", state: OCCUPIED },
        { seatId: "C7", state: FREE }, { seatId: "C8", state: FREE }, { seatId: "C9", state: FREE }
      ],
      [
        { seatId: "D1", state: FREE }, { seatId: "D2", state: FREE }, { seatId: "D3", state: FREE },
        { seatId: "D4", state: FREE }, { seatId: "D5", state: FREE }, { seatId: "D6", state: FREE }
      ]
    ],
    capacity: 30
  },
  {
    roomId: 2,
    roomName: "Screen 2",
    seats: [
      [
        { seatId: "A1", state: FREE }, { seatId: "A2", state: FREE }, { seatId: "A3", state: FREE },
        { seatId: "A4", state: OCCUPIED }, { seatId: "A5", state: FREE }, { seatId: "A6", state: FREE },
        { seatId: "A7", state: FREE }, { seatId: "A8", state: FREE }
      ],
      [
        { seatId: "B1", state: OCCUPIED }, { seatId: "B2", state: OCCUPIED }, { seatId: "B3", state: FREE },
        { seatId: "B4", state: FREE }, { seatId: "B5", state: FREE }, { seatId: "B6", state: FREE },
        { seatId: "B7", state: FREE }, { seatId: "B8", state: FREE }
      ],
      [
        { seatId: "C1", state: FREE }, { seatId: "C2", state: OCCUPIED }, { seatId: "C3", state: FREE },
        { seatId: "C4", state: FREE }, { seatId: "C5", state: FREE }, { seatId: "C6", state: FREE },
        { seatId: "C7", state: FREE }
      ],
      [
        { seatId: "D1", state: FREE }, { seatId: "D2", state: FREE }, { seatId: "D3", state: FREE },
        { seatId: "D4", state: FREE }, { seatId: "D5", state: FREE }
      ]
    ],
    capacity: 30
  },
  {
    roomId: 3,
    roomName: "Screen 3",
    seats: [
      [
        {seatId: "A1", state: FREE},
        {seatId: "A2", state: FREE},
        {seatId: "A3", state: OCCUPIED},
        {seatId: "A4", state: FREE},
      ],
      [
        {seatId: "B1", state: FREE},
        {seatId: "B2", state: FREE},
        {seatId: "B3", state: FREE},
        {seatId: "B4", state: OCCUPIED},
      ],
      [
        {seatId: "C1", state: FREE},
        {seatId: "C2", state: OCCUPIED},
        {seatId: "C3", state: FREE},
        {seatId: "C4", state: FREE},
      ],
    ], 
    capacity: 12
  },
]

