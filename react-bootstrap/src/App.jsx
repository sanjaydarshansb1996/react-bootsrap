import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Row
          className="justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Col className="text-center">
            <Card>
              <Card.Img src="https://picsum.photos/200/300"></Card.Img>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  {" "}
                  This is an example of react bootstrap card
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
              <Breadcrumb.Item active>User</Breadcrumb.Item>
            </Breadcrumb>
            <Alert variant="success">This is a button</Alert>
            <Button class="">Click Me!</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
