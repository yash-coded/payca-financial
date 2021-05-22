import { useState } from "react";
import { TabNav } from "../TabNav";
import Personal from "./PersonalDetails";
import Notifications from "./Notifications";
import Promotions from "./Promotions";
import { Container } from "../Container";

const links = [
  {
    label: "Personal Details",
    component: <Personal />,
  },
  {
    label: "Notifications",
    component: <Notifications />,
  },
  {
    label: "Promotions",
    component: <Promotions />,
  },
];

function Profile() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <TabNav tabs={links} setIndex={setIndex} />
      <Container mt="1.5rem">{links[index].component}</Container>
    </div>
  );
}

export default Profile;
