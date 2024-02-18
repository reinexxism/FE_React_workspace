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
      `${travelCity}는 언제 가면 좋을까요?(0000-00-00 형식으로 입력해주세요.)`
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

  useEffect(() => {
    console.log("사용자가 입력한 데이터 : ", travelLists);
  }, [travelLists]);

  return (
    <>
      <button onClick={handleAddBtn}>ADD</button>
      <p>Welcome, {nickname}</p>
      {travelLists.map((travelList, index) => {
        return <TravelList data={travelList} key={index} />;
      })}
    </>
  );
}
