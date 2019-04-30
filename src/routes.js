import Dashboard from "./views/Dashboard.jsx";
import StreetMap from "./views/Map.jsx";
import Guidelines from "./views/guidelines.jsx";
import Typography from "./views/Typography.jsx";
import lang from './views/language'
import ChildCPR from "./views/Child.jsx";


var routes = [
  {
    path: "/typography",
    name: "Infant < 1 Yr Old",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin"
  },

  {
    path: "/icons",
    name: "Child CPR",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: ChildCPR,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "AED Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: StreetMap,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Outcomes",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/notifications",
    name: "Latest Guidelines",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Guidelines,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Language Support",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: lang,
    layout: "/admin"
  }

];
export default routes;
