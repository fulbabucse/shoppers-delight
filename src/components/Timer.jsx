import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [flashDays, setFlashDays] = useState();
  const [flashHours, setFlashHours] = useState();
  const [flashMinutes, setFlashMinutes] = useState();
  const [flashSeconds, setFlashSeconds] = useState();

  let timeInterVal;

  const startFlashSaleTime = () => {
    const countDownDate = new Date("Oct 28,2023").getTime();
    timeInterVal = setInterval(() => {
      const nowTime = new Date().getTime();
      const timeDistance = countDownDate - nowTime;

      const days = Math.floor(timeDistance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (timeDistance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDistance % (60 * 60 * 1000)) / (1000 * 60)
      );

      const seconds = Math.floor((timeDistance % (60 * 1000)) / 1000);

      if (timeDistance < 0) {
        clearInterval(timeInterVal.current);
      } else {
        setFlashDays(days);
        setFlashHours(hours);
        setFlashMinutes(minutes);
        setFlashSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startFlashSaleTime();
  });

  return (
    <div>
      <h1 className="flex items-center justify-center gap-1">
        <p className="text-center py-2 px-3 text-gray-800 font-medium text-4xl">
          {flashDays < 10 ? `0${flashDays}` : `${flashDays}`}
          <span className="text-sm text-gray-700">Day</span>
        </p>
        <p className="text-center py-2 px-3 text-gray-800 font-medium text-4xl">
          {flashHours < 10 ? `0${flashHours}` : `${flashHours}`}
          <span className="text-sm text-gray-700">Hours</span>
        </p>
        <p className="text-center py-2 px-3 text-gray-800 font-medium text-4xl">
          {flashMinutes < 10 ? `0${flashMinutes}` : `${flashMinutes}`}
          <span className="text-sm text-gray-700">Minutes</span>
        </p>
        <p className="text-center py-2 px-3 text-gray-800 font-medium text-4xl">
          {flashSeconds < 10 ? `0${flashSeconds}` : `${flashSeconds}`}
          <span className="text-sm text-gray-700">Seconds</span>
        </p>
      </h1>
    </div>
  );
};

export default Timer;
