import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function TravelList({ data, Index, functions }) {
  const { city, date, task } = data;
  const { handleEdit, handleDelete } = functions;
  return (
    <div className="w-[100%] h-[70px] flex bg-extreme-light-light-black rounded-[20px] mt-2 mb-[13px] pt-2 pb-2 justify-between">
      <div className="ml-[25px]">
        <div className="flex mb-[5px]">
          <p className="text-[18px] mr-[8px]">
            <span className="text-main-green">{city}</span>
          </p>
          <p className="text-[10px] mt-[10px] text-text-white">{date}</p>
        </div>
        <div>
          <p className="text-[11px] text-text-white">{task}</p>
        </div>
      </div>
      <div className="w-[130px] h-[100%] flex justify-evenly items-center">
        <button
          className="w-[45px] h-[45px] bg-light-green rounded-[10px]"
          onClick={() => handleEdit(Index)}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          className="w-[45px] h-[45px] bg-dark-green rounded-[10px]"
          onClick={() => handleDelete(Index)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}
