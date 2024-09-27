import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  async function login() {
    const userInputUsername = username
    const userInputPassword = password

    try {
      // Replace with your actual API endpoint
      const response = await fetch("http://localhost:5000/login", {
        method: "POST", // Use POST method for login
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify({
          username: userInputUsername,
          password: userInputPassword,
        }),
      });

      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      console.log(jsonData);

      authContext?.setToken('1234'); // Set the token in context
      navigate("/"); // Navigate to the desired route

      return true; // Return true to indicate success
    } catch (error) {
      console.error("Login failed:", error);
      return false; // Return false if an error occurred
    }
  }

  async function register() {
    navigate('/register')
  }

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="my-3 text-dark text-center">Login to your account</h1>
      <Form className="w-100" onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            placeholder="name@example.com"
            required
          />
          <Form.Text id="passwordHelpBlock" muted>
            We never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" onClick={login} type="button">
          Login
        </Button>

        <Button variant="warning" onClick={register} type="button" className="ms-3">
          Register
        </Button>
      </Form>
    </Container>
  );
}
