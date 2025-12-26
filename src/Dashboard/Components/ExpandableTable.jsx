import { useState } from "react";

const DATA = [
  {
    id: 1,
    name: "Armin A.",
    revenue: "$209,633",
    leads: "41 / 118",
    kpi: "0.84",
    wl: "31% 12 / 29",
    details: {
      tags: ["Top sales 💪", "Sales streak 🔥", "Top review 👍"],
      platforms: [
        { label: "Dribbble", percent: 45.3, value: "$71,048" },
        { label: "Instagram", percent: 28.1, value: "$44,072" },
        { label: "Google", percent: 14.1, value: "$22,116" },
        { label: "Other", percent: 7.1, value: "$11,135" },
      ],
    },
  },
  {
    id: 2,
    name: "Mikasa A.",
    revenue: "$156,841",
    leads: "54 / 103",
    kpi: "0.89",
    wl: "39% 21 / 33",
    details: {
      tags: ["Top sales 💪", "Sales streak 🔥", "Top review 👍"],
      platforms: [
        { label: "Dribbble", percent: 39.6, value: "$62,113" },
        { label: "Instagram", percent: 31.4, value: "$49,262" },
        { label: "Google", percent: 18.5, value: "$29,044" },
        { label: "Other", percent: 5.4, value: "$8,469" },
      ],
    },
  },
];

const ExpandableTable = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-4">

      <div className="grid grid-cols-6 text-xs text-gray-400 px-3">
        <span>Sales</span>
        <span>Revenue</span>
        <span>Leads</span>
        <span>KPI</span>
        <span>W/L</span>
        <span />
      </div>

      {DATA.map((row) => {
        const isOpen = openId === row.id;

        return (
          <div key={row.id} className="bg-white rounded-2xl overflow-hidden">

            {/* ROW */}
            <div
              onClick={() => setOpenId(isOpen ? null : row.id)}
              className={`grid grid-cols-6 items-center px-4 py-4 text-sm cursor-pointer
                transition
                ${isOpen ? "bg-red-50" : "hover:bg-gray-50"}
              `}
            >
              <span className="font-medium">{row.name}</span>
              <span>{row.revenue}</span>
              <span>{row.leads}</span>
              <span>{row.kpi}</span>
              <span>{row.wl}</span>
              <span className="text-right">{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
              <div className="px-6 pb-6 pt-2 bg-gradient-to-r from-red-50/40 to-transparent">

                {/* TAGS */}
                <div className="flex gap-2 mb-6">
                  {row.details.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white rounded-full text-xs shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium mb-3">
                    Work with platforms
                  </p>

                  <div className="grid grid-cols-4 gap-4">
                    {row.details.platforms.map((p) => (
                      <div
                        key={p.label}
                        className="bg-white rounded-xl p-4 text-sm shadow-sm"
                      >
                        <p className="text-gray-500">{p.label}</p>
                        <p className="text-lg font-semibold">{p.percent}%</p>
                        <p className="text-xs text-gray-400">{p.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">
                    Sales dynamic
                  </p>

                  <div className="h-40 bg-white rounded-xl p-4 flex items-end gap-3">
                    {row.details.platforms.map((p) => (
                      <div
                        key={p.label}
                        className="flex-1 flex flex-col items-center"
                      >
                        <div
                          className="w-full rounded-lg bg-red-400/80"
                          style={{ height: `${p.percent * 1.8}px` }}
                        />
                        <span className="text-xs text-gray-400 mt-2">
                          {p.label[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExpandableTable;
