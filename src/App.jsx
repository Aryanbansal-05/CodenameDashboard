import { BrowserRouter,Route,Routes, Navigate } from "react-router";

import Sidebar from "./Dashboard/Sidebar";
import Navbar from "./Dashboard/Navbar";
import Newreportdash from "./Dashboard/Newreportdash";
import ComingSoon from "./Dashboard/Components/ComingSoon";
import SiteNotice from "./Dashboard/Components/SiteNotice";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />

      <main className="pt-20 pl-[420px] pr-6">
        <Routes>
          <Route path="/" element={<Navigate to="/reports/new-report" replace />} />

          <Route path="/reports/new-report" element={<Newreportdash />} />

          <Route path="/coming-soon" element={<ComingSoon />} />

          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <SiteNotice />
    </BrowserRouter>
  );
}

export default App;
