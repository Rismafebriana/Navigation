import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { API } from "../../useAPI";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`${API}`);
        console.log(data);
        setPosts(data);
      } catch (e) {
        
      }
    };
    getPosts();
  }, []);
  return (
    <Container>
      <h1 className="m-4">Simple Route</h1>
      {posts?.map((post) => (
        <Card className="m-2">
          <Card.Header>{post.id}</Card.Header>
          <Card.Body>
            <Card.Text>Title : {post.title}</Card.Text>
            <Button variant="primary" onClick={() => navigate(`${post.id}`)}>
              Show 
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default HomePage;
