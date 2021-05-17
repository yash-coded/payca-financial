import React, { useState } from "react";
import { InputBox } from "../components/Input";
import { Text } from "../components/Text";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { LinkText } from "../components/Link";
import { Spinner } from "../components/Spinner";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../redux/auth";
import { useHistory, Link } from "react-router-dom";
function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    diffPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setErrors({ ...errors, email: "" });
    } else if (e.target.name === "password") {
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, diffPassword: "" });
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.email) {
      setErrors({ ...errors, email: "Please enter your email" });
      return false;
    } else if (!formData.password) {
      setErrors({ ...errors, password: "Please enter your password" });
      return false;
    } else if (formData.password !== formData.cPassword) {
      setErrors({ ...errors, diffPassword: "Passwords do not match" });
      return false;
    } else return true;
  };

  const handleRegister = () => {
    if (validate()) {
      setLoading(true);
      auth
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((user) => {
          if (user) {
            console.log(user);
            setLoading(false);
            dispatch(setCurrentUser(user));
            history.push("/accounts");
          }
        });
    }
  };

  const handleBlur = (e) => {
    if (formData.email === "" && e.target.name === "email") {
      setErrors({ ...errors, email: "Please enter your email" });
    } else if (formData.password === "" && e.target.name === "password") {
      setErrors({ ...errors, password: "Please enter your password" });
    } else if (formData.cPassword === "" && e.target.name === "cPassword") {
      setErrors({ ...errors, diffPassword: "Passwords do not match" });
    }
  };
  return (
    <Container
      // width={["100%", ""]}
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Text
          fontFamily="Abril Fatface"
          mb="2rem"
          fontSize="2rem"
          color="#051c2c"
          letterSpacing="0.1rem"
        >
          PayCA
        </Text>
        <Text
          fontSize="1.3rem"
          fontWeight="bold"
          fontFamily="Arial"
          color="#051C2C"
        >
          Welcome to PayCA
        </Text>
        <InputBox
          py="1.1rem"
          fontSize="1rem"
          px="1rem"
          width={["16rem", "380px"]}
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
          width={["16rem", "380px"]}
          placeholder={errors.password ? "Enter Password" : "Password"}
          my="1.5rem"
          onChange={handleChange}
          name="password"
          type="password"
          onBlur={handleBlur}
          error={errors.password ? true : false}
        />
        <InputBox
          py="1.1rem"
          fontSize="1rem"
          px="1rem"
          width={["16rem", "380px"]}
          placeholder={
            errors.diffPassword ? "Passwords do not match" : "Confirm Password"
          }
          my="1.5rem"
          onChange={handleChange}
          name="cPassword"
          type="password"
          onBlur={handleBlur}
          error={errors.diffPassword ? true : false}
        />

        <Button
          width="100%"
          py="0.8rem"
          px="1rem"
          borderRadius="0.9rem"
          mb="1.5rem"
          fontSize="1rem"
          onClick={handleRegister}
        >
          {loading ? <Spinner /> : <Text>Sign Up</Text>}
        </Button>
        <Text fontSize="0.8rem" textAlign="center">
          Already a PayCA member?{" "}
          <Link to="/signin">
            {" "}
            <LinkText> Sign In </LinkText>
          </Link>
        </Text>
      </Container>
    </Container>
  );
}

export default Signup;
