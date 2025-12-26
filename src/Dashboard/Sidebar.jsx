import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import {
    LayoutGrid,
    FileText,
    Settings,
    Share2,
    Command,
} from "lucide-react";


const SIDEBAR_DATA = {
    dashboard: {
        links: [
            {
                group: "Dashboard",
                items: [
                    { id: "codename", label: "Codename" },
                    { id: "shared", label: "Shared with me" },
                    { id: "cargo2go", label: "Cargo2go" },
                    { id: "cloudz3r", label: "Cloudz3r" },
                    { id: "idioma", label: "Idioma" },
                    { id: "syllables", label: "Syllables" },
                    { id: "x-0b", label: "x-0b" },
                ],
            },
        ],
    },

    reports: {
        links: [
            {
                group: "My reports",
                items: [
                    { id: "emails", label: "Emails received" },
                    { id: "deal-duration", label: "Deal duration" },
                    { id: "new-report", label: "New report" },
                    { id: "analytics", label: "Analytics" },
                ],
            },
        ],
    },

    settings: {
        links: [
            {
                group: "Preferences",
                items: [
                    { id: "profile", label: "Profile" },
                    { id: "team", label: "Team" },
                    { id: "billing", label: "Billing" },
                    { id: "security", label: "Security" },
                ],
            },
        ],
    },
};

const ICONS = [
    { id: "dashboard", icon: LayoutGrid },
    { id: "reports", icon: FileText },
    { id: "settings", icon: Settings },
];


const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activeIcon, setActiveIcon] = useState("reports");

    const activeLink =
        location.pathname === "/reports/new-report" ? "new-report" : "";

    const section = SIDEBAR_DATA[activeIcon];

    const handleIconClick = (id) => {
        setActiveIcon(id);
    };

    const handleLinkClick = (item) => {
        if (item.id === "new-report") {
            navigate("/reports/new-report");
        } else {
            navigate("/coming-soon");
        }
    };

    return (
        <>
            <aside className="fixed h-[100vh] w-20 bg-[#f7f4f2]
                        flex flex-col items-center py-6 gap-5">

                <div className="w-9 h-9 rounded-full bg-black text-white
                        flex items-center justify-center font-semibold">
                    C
                </div>

                {ICONS.map(({ id, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => handleIconClick(id)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center
              ${activeIcon === id
                                ? "bg-red-500 text-white"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                            }`}
                    >
                        <Icon size={18} />
                    </button>
                ))}

                <div className="flex-1" />

                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Command size={18} />
                </button>

                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <Share2 size={18} />
                </button>
            </aside>

            <aside className="fixed left-20 h-[100vh] w-72 bg-[#f7f4f2]
                        p-6 overflow-y-auto">


                <span
                    onClick={() => navigate("/")}
                    className="font-medium text-gray-800 text-3xl cursor-pointer hover:opacity-80"
                >
                    Codename.com
                </span>


                <div className="space-y-10 text-lg py-5">
                    {section.links.map((group, idx) => (
                        <div key={idx}>
                            <div className="font-medium text-gray-700 mb-2">
                                {group.group}
                            </div>

                            <div className="ml-4 space-y-4 border-l pl-4">
                                {group.items.map((item) => {
                                    const isActive = activeLink === item.id;

                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => handleLinkClick(item)}
                                            className={`cursor-pointer
                        ${isActive
                                                    ? "text-red-500 font-medium"
                                                    : "text-gray-600 hover:text-gray-800"
                                                }`}
                                        >
                                            {item.label}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
