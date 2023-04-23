import logo from "../../img/Logo.svg";
import { Box } from "./../commons/Box";
import {
  CardContainer,
  CardHeader,
  Logo,
  UserContainer,
  AvatarContainer,
  Avatar,
  CardText,
  CardButton,
} from "./Card.styled";
export const Card = ({ user, handleFollow, isFollowing }) => {
  const { avatar, tweets, followers } = user;
  const actualFollowers = isFollowing ? followers + 1 : followers;
  const actualFormattedFollowers = actualFollowers.toLocaleString("en", {
    useGrouping: true,
  });

  return (
    <CardContainer>
      <CardHeader>
        <Logo src={logo} alt="Logo" />
        {/* <img src={pic} alt="pic" /> */}
      </CardHeader>
      <UserContainer>
        <AvatarContainer>
          <Avatar>
            <img src={avatar} alt="User avatar" />
          </Avatar>
        </AvatarContainer>
        <Box mb={5}>
          <CardText>{tweets} tweets</CardText>
          <CardText>{actualFormattedFollowers} Followers</CardText>
        </Box>
        <CardButton
          type="button"
          isFollowing={isFollowing}
          onClick={() => handleFollow(user.id)}
        >
          {!isFollowing ? `Follow` : `Following`}
        </CardButton>
      </UserContainer>
    </CardContainer>
  );
};
