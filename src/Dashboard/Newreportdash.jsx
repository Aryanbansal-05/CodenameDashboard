import Card from "./Components/Card";
import KpiCard from "./Components/Kpicard";
import ExpandableTable from "./Components/ExpandableTable";
import PlatformSection from "./Components/PlatformSection";

const Newreportdash = () => {
  return (
    <div className="space-y-8 py-10">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-300">
          New report
        </h1>

        <div className="px-4 py-1 rounded-full bg-gray-100 text-sm">
          Sep 1 – Nov 30, 2023
        </div>
      </div>

      <div className="flex justify-between gap-6">
       <div className="space-y-1">
  <p className="text-sm text-gray-500">Revenue</p>

  <div className="flex items-center gap-3">
    <h2 className="text-4xl font-semibold">
      $528,976<span className="text-gray-300">.82</span>
    </h2>

    <span className="px-2 py-1 rounded-full bg-red-500 text-white text-xs font-medium">
      ↑ 7.9%
    </span>

    <span className="px-2 py-1 rounded-full bg-red-100 text-red-500 text-xs font-medium">
      $27,335.09
    </span>
  </div>

  <p className="text-sm text-gray-400">
    vs prev. $501,641.73 &nbsp; Jun 1 – Aug 31, 2023
  </p>
</div>


        <div className="flex gap-4">
          <KpiCard title="Top sales" value="72" subtitle="Mikasa" />
          <KpiCard dark title="Best deal" value="$4,300" subtitle="Rolf Inc." />
          <KpiCard title="Deals" value="256" />
          <KpiCard title="Value" value="528k" />
          <KpiCard title="Win rate" value="44%" />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

        <div className="xl:col-span-6">
          <PlatformSection />
        </div>

        <div className="xl:col-span-6">
          <Card title="Sales">
            <ExpandableTable />
          </Card>
        </div>

      </div>

    </div>
  );
};

export default Newreportdash;
