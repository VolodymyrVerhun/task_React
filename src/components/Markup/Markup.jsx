import React from 'react';
import { AiOutlineSchedule } from 'react-icons/ai';
import { SlClose } from 'react-icons/sl';
import style from './Markup.module.css';
export default function Markup() {
  const time = new Date();
  let day = time.toUTCString().slice(5, 11);
  let hour = time.toLocaleString().slice(12, 17);
  const hours = time.getHours();
  const period = hours < 12 ? 'am' : 'pm';
  let year = time.toUTCString().slice(12, 16);
  const name = 'Daniel Hamilton';
  return (
    <div className={style.notice}>
      <div className={style.notice_main_block}>
        <span className={style.icon}>
          <AiOutlineSchedule size={45} />
        </span>
        <div className={style.notice_inner_block}>
          <h2 className={style.notice_inner_block_title}>
            Reguest for the lesson
          </h2>
          <p className={style.notice_inner_block_p}>
            {`${name} wants to start a lesson, please confirm or deny the
            request`}
          </p>
          <span
            className={style.date}
          >{`${day}, ${hour}${period}, ${year}`}</span>
        </div>
        <button className={style.btn_close}>
          <SlClose size={30} />
        </button>
      </div>
      <div className={style.btn_block}>
        <button className={style.btn}>View details</button>
        <button className={style.btn}>Submit</button>
      </div>
    </div>
  );
}
