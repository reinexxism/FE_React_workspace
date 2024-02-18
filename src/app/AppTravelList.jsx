import React, { useEffect, useState } from "react";
import TravelList from "../components/TravelList";

export default function AppTravelList() {
  const [nickname, setNickname] = useState("");
  const [travelLists, setTravelLists] = useState([]);

  // user nickname -> when window is first loaded
  window.onload = () => {
    const userNickname = prompt("환영합니다! 사용자님의 닉네임을 알려주세요.");
    setNickname(userNickname);
  };

  // handleAddBtn function when user clicked ADD button
  const handleAddBtn = () => {
    const travelCity = prompt(`${nickname}님이 가고 싶은 여행지는 어디인가요?`);
    const travelDate = prompt(
      `${travelCity}는(은) 언제 방문하면 좋을까요?(0000-00-00 형식으로 입력해주세요.)`
    );
    const travelTask = prompt(
      `${nickname}님은 ${travelCity}에 가서 어떤 활동을 하고 싶으신가요?`
    );
    setTravelLists([
      ...travelLists,
      {
        city: travelCity,
        date: travelDate,
        task: travelTask,
      },
    ]);
  };

  // handleEditBtn function when user clicked Edit button
  const handleEditBtn = (e) => {
    const city = prompt(
      `${travelLists[e].city}를(을) 어떤 여행지로 바꾸고 싶으신가요?`
    );
    const date = prompt(
      `${city}는(은) 언제 방문하면 좋을까요?(0000-00-00 형식으로 입력해주세요.)`
    );
    const task = prompt(`${city}에 가서 어떤 활동을 하고 싶으신가요?`);
    setTravelLists((prev) => {
      return [
        ...prev.slice(0, e),
        { ...prev[e], city, date, task },
        ...prev.slice(e + 1),
      ];
    });
    console.log("수정을 원하는 객체 데이터 정보 : ", travelLists[e]);
  };

  // handleDeleteBtn function when user clicked Delete button
  const handleDeleteBtn = (e) => {
    console.log("삭제를 원하는 객체 데이터 정보 : ", travelLists[e]);
  };

  return (
    <>
      <button onClick={handleAddBtn}>ADD</button>
      <p>Welcome, {nickname}</p>
      {travelLists.map((travelList, index) => {
        return (
          <TravelList
            data={travelList}
            key={index}
            Index={index}
            functions={{
              handleEdit: handleEditBtn,
              handleDelete: handleDeleteBtn,
            }}
          />
        );
      })}
    </>
  );
}
