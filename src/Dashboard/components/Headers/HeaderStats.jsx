import React from "react";
import {
  FaChartBar,
  FaChartPie,
  FaShoppingBag,
  FaPercent,
} from "react-icons/fa";
import CardStats from "../Cards/CardStats";

// components

export default function HeaderStats() {
  const statsData = [
    {
      statsId: 1,
      statSubtitle: "TRAFFIC",
      statsTitle: "50,000",
      statsArrow: "up",
      statsPercent: "4.3",
      statsPercentColor: "text-emerald-500",
      statsDescription: "Since last month",
      statsIconName: <FaChartBar />,
      statsIconColor: "bg-red-500",
    },
    {
      statsId: 2,
      statSubtitle: "New Users",
      statsTitle: "2,000",
      statsArrow: "down",
      statsPercent: "4.4",
      statsPercentColor: "text-red-500",
      statsDescription: "Since last month",
      statsIconName: <FaChartPie />,
      statsIconColor: "bg-orange-500",
    },
    {
      statsId: 3,
      statSubtitle: "Sales",
      statsTitle: "1,000+",
      statsArrow: "down",
      statsPercent: "3.2",
      statsPercentColor: "text-orange-500",
      statsDescription: "Since last month",
      statsIconName: <FaShoppingBag />,
      statsIconColor: "bg-pink-500",
    },
    {
      statsId: 4,
      statSubtitle: "PERFORMANCE",
      statsTitle: "66,66%",
      statsArrow: "up",
      statsPercent: "12",
      statsPercentColor: "text-emerald-500",
      statsDescription: "Since last month",
      statsIconName: <FaPercent />,
      statsIconColor: "bg-blue-500",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="relative bg-blue-400 md:pt-24 pb-32 pt-10">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {statsData?.map((stats) => (
                <div
                  key={stats?.id}
                  className="w-full lg:w-6/12 xl:w-3/12 px-4"
                >
                  <CardStats stats={stats} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
