import { useState } from "react";
import {
  FaDribbble,
  FaInstagram,
  FaBehance,
  FaGoogle,
} from "react-icons/fa";

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState("Revenue");

  return (
    <div className="space-y-6 py-10 ">

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#f3f3f3] rounded-2xl p-4">
          <Header title="Platforms" />

          <PlatformRow
            icon={<FaDribbble className="text-pink-500" />}
            label="Dribbble"
            value="$227,459"
            pct="43%"
          />
          <PlatformRow
            icon={<FaInstagram className="text-pink-400" />}
            label="Instagram"
            value="$142,823"
            pct="27%"
          />
          <PlatformRow
            icon={<FaBehance className="text-blue-500" />}
            label="Behance"
            value="$89,935"
            pct="11%"
          />
          <PlatformRow
            icon={<FaGoogle className="text-blue-600" />}
            label="Google"
            value="$37,028"
            pct="7%"
          />
        </div>

        <div className="bg-[#f3f3f3] rounded-2xl p-4">
  <div className="flex justify-between items-center mb-6">
    <h3 className="font-medium">
      Deals amount by referrer category
    </h3>
    <span className="text-gray-400 text-sm">Filters</span>
  </div>

  <div className="flex items-end justify-center gap-6 h-44 px-4">
    <div
      className="w-12 rounded-xl flex items-center justify-center
        bg-white "
      style={{ height: "55%" }}
    >
      <FaBehance className="text-blue-600 text-xl" />
    </div>

    <div
      className="w-12 rounded-xl flex items-center justify-center bg-white"
      style={{ height: "90%" }}
    >
      <FaDribbble className="text-pink-500 text-xl" />
    </div>

    <div
      className="w-12 rounded-xl flex items-center justify-center bg-white"
      style={{ height: "65%" }}
    >
      <FaGoogle className="text-xl" />
    </div>

    <div
      className="w-12 rounded-xl flex items-center justify-center bg-white"
      style={{ height: "50%" }}
    >
      <FaInstagram className="text-pink-400 text-xl" />
    </div>

    <div
      className="w-12 rounded-xl flex items-center justify-center
        bg-white "
      style={{ height: "80%" }}
    >
      <span className="text-gray-500 text-xl">📁</span>
    </div>
  </div>
</div>

      </div>

      <div className="bg-[#f3f3f3] rounded-2xl p-4 max-w-[610px]">

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <FaDribbble className="text-pink-500" />
            <span className="font-medium">Platform value</span>
            <span className="text-gray-400">Dribbble</span>
          </div>

          <div className="flex bg-white rounded-full p-1 text-sm">
            {["Revenue", "Leads", "W/L"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full transition
                  ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "text-gray-500"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-[160px_1fr] gap-10">

          <div className="bg-[#c63b58] rounded-2xl p-4 text-white">
            <p className="text-sm opacity-80">Average monthly</p>

            <div className="mt-4 space-y-2 text-sm">
              <Stat label="Revenue" value="$18,552" />
              <Stat label="Leads" value="373  97/276" />
              <Stat label="Win/lose" value="16%  51/318" />
            </div>
          </div>

          <div className="flex items-end gap-10 h-48">
            <MonthBar month="Sep" value="$6,901" />
            <MonthBar month="Oct" value="$11,035" />
            <MonthBar month="Nov" value="$9,288" />
          </div>
        </div>
      </div>
    </div>
  );
};


const Header = ({ title }) => (
  <div className="flex justify-between mb-4 text-sm font-medium">
    <span>{title}</span>
    <span className="text-gray-400">Filters</span>
  </div>
);

const PlatformRow = ({ icon, label, value, pct }) => (
  <div className="flex justify-between items-center bg-white rounded-xl px-3 py-2 mb-2 text-sm">
    <div className="flex items-center gap-3">
      {icon}
      <span>{label}</span>
    </div>
    <div className="flex gap-4 text-gray-500">
      <span className="font-medium text-gray-800">{value}</span>
      <span>{pct}</span>
    </div>
  </div>
);

const Bar = ({ h, icon }) => (
  <div className="flex flex-col items-center gap-2">
    <div
      className="w-10 bg-white rounded-xl"
      style={{ height: h }}
    />
    {icon}
  </div>
);

const MonthBar = ({ month, value }) => (
  <div className="flex flex-col items-center gap-2">
    <span className="bg-[#c63b58] text-white text-xs px-2 py-1 rounded-full">
      {value}
    </span>
    <div className="w-12 bg-gray-300 rounded-xl h-32" />
    <span className="text-xs text-gray-500">{month}</span>
  </div>
);

const Stat = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="opacity-80">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default PlatformSection;
