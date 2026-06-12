import { useEffect, useState } from "react";
import API from "../apiInstance/axios";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";


const AllUsers = () => {

  const [users , setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const getUsers = async () => {
    try {
      const res = await API.get("/admin/users/recent");
      setUsers(res.data.success);
    } catch (error) {
      console.error("Error fetching users:", error);
    
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  
  if (loading) return <Loading/>
  return <UserCard user={users} />;
};

export default AllUsers;
