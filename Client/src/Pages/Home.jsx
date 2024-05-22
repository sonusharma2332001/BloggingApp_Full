import React, { useState, useEffect } from 'react';
import { Button, Table, Modal } from "flowbite-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import PostCard from '../Components/PostCard';

const Home = () => {
  const { currentUser } = useSelector((state) => state.User);
  const [posts, setPosts] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [pageError, setPageError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/post/getposts?`);
        const data = await res.json();
        if (res.ok) {
          if (data.posts.length < 9) {
            setLoadMore(false);
          }
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setPageError("Error fetching data");
      }
    };


      fetchData();

  }, [currentUser]);

  const loadMoreHandler = async () => {
    const startIndex = posts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?startIndex=${startIndex}`
      );
      const data = await res.json();
      if (res.ok) {
        if (data.posts.length < 9) {
          setLoadMore(false);
        }
        setPosts((prev) => [...prev, ...data.posts]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setPageError("Error fetching more posts");
    }
  };

  return (
    
    <div className='min-h-80 '>
      {pageError && <p className="text-red-500">{pageError}</p>}
      <div className='flex flex-wrap gap-5 m-4 ' >
        {posts.map((post) => (
          
          <PostCard key={post._id} post={post}/>
        ))}
      </div>
      {loadMore && (
        <Button className="mx-auto my-5 " onClick={loadMoreHandler}>
          Load more
        </Button>
      )}
    </div>
  );
}

export default Home;
