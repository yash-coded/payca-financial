import { useState } from "react";
import { auth } from "../firebase";
import { Container } from "./Container";
import { Button } from "./Button";
import { Text } from "./Text";
import { InputBox } from "./Input";
import { Spinner } from "./Spinner";

export const ShowDetails = ({ handleClose, setShowAccount }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setErrors({ ...errors, email: "" });
    } else if (e.target.name === "password") {
      setErrors({ ...errors, password: "" });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    if (formData.email === "" && e.target.name === "email") {
      setErrors({ ...errors, email: "Please enter your email" });
    } else if (formData.password === "" && e.target.name === "password") {
      setErrors({ ...errors, password: "Please enter your password" });
    }
  };
  const validate = () => {
    if (!formData.email) {
      setErrors({ ...errors, email: "Please enter your email" });
      return false;
    } else if (!formData.password) {
      setErrors({ ...errors, password: "Please enter your password" });
      return false;
    } else return true;
  };
  const handleLogin = () => {
    if (validate()) {
      setLoading(true);
      auth
        .signInWithEmailAndPassword(formData.email, formData.password)
        .then((user) => {
          console.log(user);
          if (user) {
            setShowAccount((val) => !val);
            handleClose();
            setLoading(false);
          }
        });
    }
  };

  return (
    <>
      <Container>
        <Text fontWeight="bold" textAlign="center" color="#051C2C" mt="1rem">
          Show Card Info
        </Text>

        <Container
          display="flex"
          alignItems="center"
          flexDirection="column"
          px="1rem"
          pb="1rem"
        >
          <Text textAlign="center" mt="2rem">
            Enter your account password to view your card information.
          </Text>
          <Container>
            <InputBox
              py="1.1rem"
              fontSize="1rem"
              px="1rem"
              width={["15rem"]}
              mx="auto"
              placeholder={errors.email ? "Enter Email" : "Email"}
              my="1.5rem"
              name="email"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email ? true : false}
            />
            <InputBox
              py="1.1rem"
              fontSize="1rem"
              px="1rem"
              width={["15rem"]}
              mx="auto"
              placeholder={errors.password ? "Enter Password" : "Password"}
              my="1.5rem"
              onChange={handleChange}
              name="password"
              type="password"
              onBlur={handleBlur}
              error={errors.password ? true : false}
            />
          </Container>
          <Button
            width="17rem"
            mx="auto"
            py="0.8rem"
            px="1rem"
            borderRadius="0.9rem"
            fontSize="1rem"
            // mb="1.5rem"
            onClick={handleLogin}
          >
            {loading ? <Spinner /> : <Text>Ok</Text>}
          </Button>
        </Container>
      </Container>
    </>
  );
};
