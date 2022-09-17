import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { API } from "../../useAPI";

const DetailPage = () => {
  const [post, setPost] = useState();
  const params = useParams();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(`${API}/${params?.id}`);
        setPost(data);
      } catch (e) {
        
      }
    };
    getPosts();
  });
  return (
    <Container>
      <h2 className="m-5">Post Detail</h2>
      <Card>
        <Card.Body className="text-start">
          <Card.Text>Title : {post?.title}</Card.Text>
          <Card.Text className="text-center">
            Body : {post?.body}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetailPage;