import React from "react";
import { useNavigate } from "react-router-dom";

const FooterContact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
      <div className="flex flex-row justify-evenly rounded-t-[33px] items-stretch bg-[#006191] h-[14vh]">
        <div className="relative flex flex-col justify-center items-center">
          <div className="fixed absolute top-0 left-1/2 -translate-x-1/2 w-[20vw] flex justiy-center h-[5px] bg-[#64CD98]" />
          <button onClick={handleClick} type="button" className="w-[30px] mt-[0px] text-right flex flex-col justify-between items-center">
            <img
              className="w-[22px]"
              src="https://cdn-icons-png.flaticon.com/512/8143/8143259.png"
              alt="footer_contact"
            />
            <span className="text-white text-[13px]">Contactos</span>
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <button className="w-[30px] ml-[0px] text-right flex flex-col justify-center items-center">
            <img
              className="w-[20px]"
              src="https://cdn-icons-png.flaticon.com/512/839/839860.png"
              alt="footer_tasks"
            />
            <span className="text-white text-[13px]">Tareas</span>
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <button className="w-[30px] ml-[0px] text-right flex flex-col justify-center items-center">
            <img
              className="w-[22px]"
              src="https://cdn-icons-png.flaticon.com/512/2497/2497827.png"
              alt="footer_comments"
            />
            <span className="text-white text-[13px]">Comentarios</span>
          </button>
        </div>
      </div>
  );
};

export default FooterContact;