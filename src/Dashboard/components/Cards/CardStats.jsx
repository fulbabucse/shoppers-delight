import React from "react";
import PropTypes from "prop-types";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function CardStats({ stats }) {
  const {
    statSubtitle,
    statsTitle,
    statsArrow,
    statsPercent,
    statsPercentColor,
    statsDescription,
    statsIconName,
    statsIconColor,
  } = stats;
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statsTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statsIconColor
                }
              >
                {statsIconName}
              </div>
            </div>
          </div>
          <div className="text-sm text-blueGray-400 mt-4 flex items-center">
            <span
              className={statsPercentColor + " mr-2 flex items-center gap-1"}
            >
              {statsArrow === "up" ? (
                <>
                  <FaArrowUp />
                </>
              ) : (
                <>
                  <FaArrowDown />
                </>
              )}
              <p>{statsPercent}%</p>
            </span>
            <span className="whitespace-nowrap">{statsDescription}</span>
          </div>
        </div>
      </div>
    </>
  );
}
