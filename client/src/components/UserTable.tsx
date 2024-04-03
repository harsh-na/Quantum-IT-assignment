// src/components/UserTable.tsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import authService from "../services/authService";
import "bootstrap/dist/css/bootstrap.min.css";

interface User {
  _id: string;
  name: string;
  dob: string;
  email: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.removeToken();
    navigate("/");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users", {
          headers: {
            Authorization: `${authService.getToken()}`,
          },
        });

        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);

        if (!authService.isAuthenticated()) {
          navigate("/register");
        }
      }
    };

    fetchUsers();
  }, [navigate]);

  return (
    <div className="d-flex flex-column p-5 h-100">
      <h1 className="sign mx-auto bg-info d-flex flex-column p-2 bd-highlight h-25 w-25 align-items-center">USER Table</h1>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button variant="primary" type="button" className="mx-auto d-flex p-2"onClick={handleLogout}>
          logout
        </Button>
    </div>
  );
};

export default UserTable;
