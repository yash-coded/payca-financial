import { useState, useEffect } from "react";
import { InputBox } from "../components/Input";
import { Text } from "../components/Text";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { LinkText } from "../components/Link";
import { auth } from "../firebase";
import { Spinner } from "../components/Spinner";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/auth";
import { useHistory, Link } from "react-router-dom";
function Signin() {
  const dispatch = useDispatch();

  const history = useHistory();

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
      setErrors({ ...errors, email: "Enter Email" });
      return false;
    } else if (!formData.password) {
      setErrors({ ...errors, password: "Enter Password" });
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
            dispatch(setCurrentUser(user));
            history.push("/accounts");
            setLoading(false);
          }
        })
        .catch((err) => {
          switch (err.code) {
            case "auth/wrong-password":
              setFormData({ ...formData, password: "", email: "" });
              setErrors({ ...errors, password: "Incorrect Password" });
              setLoading(false);
              break;
            case "auth/invalid-email":
              setFormData({ ...formData, password: "", email: "" });
              setErrors({ ...errors, email: "Incorrect Email" });
              setLoading(false);
              break;
            default:
              return null;
          }
        });
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
          Welcome back
        </Text>
        <InputBox
          py="1.1rem"
          fontSize="1rem"
          px="1rem"
          value={formData.email}
          width={["16rem", "380px"]}
          placeholder={errors.email ? errors.email : "Email"}
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
          value={formData.password}
          placeholder={errors.password ? errors.password : "Password"}
          my="1.5rem"
          onChange={handleChange}
          name="password"
          type="password"
          onBlur={handleBlur}
          error={errors.password ? true : false}
        />

        <LinkText display="block" my="2rem">
          Forgot Password?
        </LinkText>

        <Button
          width="100%"
          py="0.8rem"
          px="1rem"
          borderRadius="0.9rem"
          fontSize="1rem"
          mb="1.5rem"
          onClick={handleLogin}
        >
          {loading ? <Spinner /> : <Text>Sign In</Text>}
        </Button>
        <Text fontSize="0.8rem" textAlign="center">
          Don't have a PayCA account?{" "}
          <Link to="/signup">
            <LinkText> Sign Up</LinkText>
          </Link>
        </Text>
      </Container>
    </Container>
  );
}

export default Signin;
