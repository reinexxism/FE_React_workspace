import React, { useState } from "react";
import TravelList from "../components/TravelList";

export default function AppTravelList() {
  const [nickname, setNickname] = useState("");
  const [travelLists, setTravelLists] = useState([]);

  window.onload = () => {
    const userNickname = prompt("환영합니다! 사용자님의 닉네임을 알려주세요.");
    setNickname(userNickname);
  };

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

  const handleDeleteBtn = (e) => {
    if (window.confirm("정말 이 여행지를 삭제하실건가요?")) {
      setTravelLists((prev) => {
        return [...prev.slice(0, e), ...prev.slice(e + 1)];
      });
    }
    console.log("삭제를 원하는 객체 데이터 정보 : ", travelLists[e]);
  };

  return (
    <div class=" bg-main-black w-[450px] h-[85%] rounded-[25px] flex flex-col items-center relative">
      <div className="w-[100%] h-[5%] bg-light-black rounded-t-[25px] flex items-center">
        <div className=" w-3 h-3 rounded-full bg-pale-red ml-4"></div>
        <div className="w-3 h-3 rounded-full bg-pale-yellow ml-2"></div>
        <div className="w-3 h-3 rounded-full bg-pale-green ml-2"></div>
      </div>
      <div className="w-[88%] h-[22%] mt-[5%] bg-extreme-light-black rounded-[25px] pt-3 pr-6 pl-6 ">
        <h2 className=" text-xl font-semibold text-text-white">
          Welcome, <span className=" text-main-green">{nickname}</span>
        </h2>
        <p className="text-sm text-text-white mb-[40px]">
          Let's make your own
          <span className="text-main-green font-semibold">TRAVEL</span>
          wishlist!
        </p>
        <p className="text-[11px] text-text-white">
          Where do you want to go today?
        </p>
        <p className="text-[11px] text-text-white">
          <span className="text-main-green">New York</span>,
          <span className="text-main-green">Paris</span>,
          <span className="text-main-green">Milano</span>,
          <span className="text-main-green">Tokyo</span>,
          <span className="text-main-green">London</span>,
          <span className="text-main-green">Seoul</span>
          ..anywhere is fine!
        </p>
      </div>
      <div className=" w-[88%] h-[400px] mt-[20px] overflow-scroll scrollbar-hide">
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
      </div>
      <div className=" w-[100%] bg-light-black h-[12%] absolute bottom-0 rounded-b-[25px] flex flex-row-reverse items-center">
        <button
          onClick={handleAddBtn}
          className=" w-[60px] h-[60px] rounded-full bg-extreme-dark-black mr-[20px]"
        >
          <p className="text-[50px] text-text-white translate-y-[-11px] font-extralight">
            +
          </p>
        </button>
      </div>
    </div>
  );
}
