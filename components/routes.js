import dynamic from 'next/dynamic';
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import { LocalFireDepartment, PrecisionManufacturing } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";


export const routes = [
    {
        path: "/",
        name: "Hazard",
        longName: "Hazard indicators",
        icon: LocalFireDepartment,
        component: (visible) => <HazardViewer visible={visible} />,
        layout: "/standard",
        category: "primary",
    },
    {
        path: "/AssetViewer",
        name: "Assets",
        longName: "Asset-level analysis",
        icon: PrecisionManufacturing,
        component: (visible) => <AssetViewer visible={visible} />,
        layout: "/standard",
        category: "primary",
    },
    {
        path: "/RiskViewer",
        name: "Risk",
        longName: "Risk",
        icon: BarChartIcon,
        component: () => <RiskViewer />,
        layout: "/standard",
        category: "primary",
    },
    {
        path: "/AboutPage",
        name: "About",
        longName: "About",
        icon: DashboardIcon,
        component: () => <AboutPage />,
        layout: "/standard",
        category: "primary",
    },
    {
        path: "/Settings",
        name: "Settings",
        icon: SettingsIcon,
        component: () => <Settings />,
        layout: "/standard",
        category: "secondary",
    },
];

