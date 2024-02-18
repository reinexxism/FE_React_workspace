import React from "react";

export default function TravelList({ data }) {
  const { city, date, task } = data;
  return (
    <div>
      <ul>
        <li>여행 희망 도시 : {city}</li>
        <li>여행 희망 날짜 : {date}</li>
        <li>여행 희망 활동 : {task}</li>
      </ul>
    </div>
  );
}
