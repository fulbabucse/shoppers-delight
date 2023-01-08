import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SmallTimer = () => {
  const [flashDays, setFlashDays] = useState();
  const [flashHours, setFlashHours] = useState();
  const [flashMinutes, setFlashMinutes] = useState();
  const [flashSeconds, setFlashSeconds] = useState();

  let timeInterVal;

  const startFlashSaleTime = () => {
    const countDownDate = new Date("Jan 28,2023").getTime();
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
      <h1 className="flex items-center gap-2">
        <p className="text-center text-gray-800 font-semibold text-sm">
          {flashDays < 10 ? `0${flashDays}` : `${flashDays}`}
        </p>
        <p className="text-center text-gray-800 font-semibold text-sm">
          {flashHours < 10 ? `0${flashHours}` : `${flashHours}`}
        </p>
        <p className="text-center text-gray-800 font-semibold text-sm">
          {flashMinutes < 10 ? `0${flashMinutes}` : `${flashMinutes}`}
        </p>
        <p className="text-center text-red-500 font-semibold text-sm">
          {flashSeconds < 10 ? `0${flashSeconds}` : `${flashSeconds}`}
        </p>
      </h1>
    </div>
  );
};

export default SmallTimer;
