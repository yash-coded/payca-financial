import { Container } from "../Container";
import { ResponsiveDataCard } from "../DataCard";
import SecondaryEmail from "./AddSecondEmail";
import EditPhone from "./EditPhone";
import { useSelector } from "react-redux";
import EditAddress from "./EditAddress";
function PersonalDetails() {
  document.title = "Personal Details";
  const { phoneNumber, address } = useSelector((state) => state.auth);

  const personalData = [
    {
      first: "Name",
      second: "John Doe",
      third: null,
    },
    {
      first: "Primary Email",
      second: "pay@paycafinancial.com",
      third: null,
    },
    {
      first: "Secondary Email",
      second: <SecondaryEmail />,
      third: null,
    },
    {
      first: "Phone Number",
      second: phoneNumber,
      third: <EditPhone />,
    },
    {
      first: "Home Address",
      second: address,
      third: <EditAddress />,
    },
  ];
  return (
    <Container>
      {personalData.map((item, i) => (
        <ResponsiveDataCard
          key={i}
          first={item.first}
          second={item.second}
          third={item.third}
        />
      ))}
    </Container>
  );
}

export default PersonalDetails;
