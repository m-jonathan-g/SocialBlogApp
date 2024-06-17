import Post from "../components/post"
import {useEffect, useState} from "react";
import Banner from '../components/Banner'

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4001/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
    <Banner />
      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}