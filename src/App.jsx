import { useState, useEffect } from "react";
import { Card } from "./components/Card/Card";
import { Box } from "./components/commons/Box";
import initialUsersData from "./usersData.json";

export const App = () => {
  const [usersData, setUsersData] = useState(initialUsersData);
  const [following, setFollowing] = useState(
    JSON.parse(localStorage.getItem("following")) || []
  );

  useEffect(() => {
    const usersData = localStorage.getItem("usersData");
    const parsedUsersData = JSON.parse(usersData);

    setUsersData(parsedUsersData ? parsedUsersData : initialUsersData);
  }, []);

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(following));
  }, [following]);

  const handleFollow = (id) => {
    setFollowing((prevState) =>
      !following.includes(id)
        ? [...prevState, id]
        : prevState.filter((el) => el !== id)
    );
  };

  return (
    <Box
      display="flex"
      gridGap={4}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      p={3}
      as="ul"
    >
      {usersData.map((user) => (
        <Card
          key={user.id}
          user={user}
          handleFollow={handleFollow}
          isFollowing={following.includes(user.id)}
        />
      ))}
    </Box>
  );
};

export default App;
