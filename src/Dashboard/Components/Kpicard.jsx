const KpiCard = ({ title, value, subtitle, dark, active }) => (
  <div
    className={`w-36 p-4 rounded-2xl text-sm
      transition-all duration-200 ease-out
      transform hover:scale-105
      hover:border-2 hover:border-red-400 hover:shadow-lg

      ${dark ? "bg-black text-white" : "bg-white"}
      ${active ? "border-2 border-red-400" : "border border-transparent"}
    `}
  >
    <p className="text-gray-400">{title}</p>
    <h4 className="text-xl font-semibold">{value}</h4>
    {subtitle && <p className="text-xs mt-1">{subtitle}</p>}
  </div>
);

export default KpiCard;
