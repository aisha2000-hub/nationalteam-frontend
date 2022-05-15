import axios from "axios";
import React, { useEffect, useState } from "react";

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_HOST}/players`
        );
        setPlayers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h1>PlayerList</h1>
      {JSON.stringify(players)}
    </div>
  );
}