import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
function List() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/posts/");
      if (!response.ok) {
        throw new Error("Connection error");
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => {
          return (
            <li key={post._id}>
              <PostSection>
                <PostTitle>{post.title}</PostTitle>
                <PostDetails>
                  {post.formattedDate} @ {post.author.username}
                </PostDetails>
                <PostText>{post.text}</PostText>
                <Link to={post._id}>
                  <PostButton>Read more</PostButton>
                </Link>
              </PostSection>
            </li>
          );
        })
      )}
    </>
  );
}
const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  max-width: 640px;
  border: 1px solid #e3caa5;
  border-radius: 20px;
  gap: 5px;
`;
const PostTitle = styled.h1`
  font-size: 1.5rem;
`;
const PostDetails = styled.p`
  font-style: italic;
  font-weight: 100;
  font-family: Cormorant, serif;
  font-size: 1.1rem;
`;
const PostText = styled.p`
  text-align: justify;
  text-justify: inter-word;
  font-size: 1rem;
  margin: 10px;
  word-wrap: break-word;
  width: 20vw;
  min-height: 60px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
`;
const PostButton = styled.button`
  background: transparent;
  border: 1px solid #ad8b73;
  outline: none;
  font-size: 1rem;
  padding: 10px;
  font-family: Cormorant, serif;
  cursor: pointer;
  &:hover {
    background: #e6dfba;
  }
`;
export default List;
