import React, { useState } from "react";
import { RoomList } from "../data/roomInfo";

interface SeatSelectorProperties {
  room: string;
}

function SeatSelector({ room }: SeatSelectorProperties): React.ReactElement {
  const [ roomInfo, setRoomInfo ] = useState<any>(null);

  // fetch room info
  React.useEffect(() => {
    const roomFetched: any = RoomList.find((roomFromList) => room === roomFromList.roomName)

    if (roomFetched) {
      setRoomInfo(roomFetched)
    }
  }, [roomInfo])

  return (
    <div>
    
    </div>
  )
}

export default SeatSelector 
