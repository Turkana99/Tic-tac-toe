import React, { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleIsEditing() {
    setIsEditing(!isEditing);
  }

  function handleNameChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption ="Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        style={{ display: isEditing ? "block" : "none" }}
        value={playerName}
        onChange={handleNameChange}
      />
    );
    // let btnCaption ="Save";
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
