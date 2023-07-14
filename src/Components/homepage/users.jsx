import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="user-list">
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.login.uuid} className="user-card">
            <img src={user.picture.large} alt="User" className="user-image" />
            <div className="user-details">
              <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
              <p className="user-email">{user.email}</p>
              <p className="user-country">{user.location.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
