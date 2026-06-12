import { useEffect, useState } from "react";
import API from "../apiInstance/axios";
import Loading from "../components/Loading";
import { Users, UserCheck, Mail } from "lucide-react";
import Dashboard from "../components/DashBox";

const MainDashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await API.get("/admin/stats");
        setData(res.data.success);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDashboard();
  }, []);

  if (!data) return <Loading/>;

  return <Dashboard data={data} />;
};

export default MainDashboard;