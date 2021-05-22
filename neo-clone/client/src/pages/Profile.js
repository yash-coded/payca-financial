import ProfileDetails from "../components/Profile/Profile";
import { Container } from "../components/Container";
import { Text } from "../components/Text";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Container
      ml={["0", "0", "2rem", "6rem"]}
      mr={["0", "0", "1rem", "2rem"]}
      mt={["1rem", "1rem", "1rem", "5rem"]}
      mb="8rem"
    >
      <Text
        color="#051C2C"
        fontSize="1.5rem"
        ml="0.7rem"
        fontWeight="bold"
        mb="2rem"
      >
        {user.email}
      </Text>
      <ProfileDetails />
    </Container>
  );
}

export default Profile;
