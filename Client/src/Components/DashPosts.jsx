import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Table,Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.User);
  const [posts, setPosts] = useState([]);
  const [LoadMore, setLoadMore] = useState(true);
  const [showModel, setShowModel] = useState(false);
  const [postId, setPostId] = useState(null);
  const [pageError,setPageError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          if (data.posts.length < 9) {
            setLoadMore(false);
          }
          setPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (currentUser.isAdmin) {
      fetchData();
    }
  }, [currentUser]);

  const LoadMoreHandler = async () => {
    const startIndex = posts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
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
    }
  };

  const HandleDelete = async () => {
    setShowModel(false);
  
    try {
      const res = await fetch(`/api/post/deletepost/${postId}/${currentUser._id}`, {
        method: "DELETE",
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setPosts((prevPosts) => prevPosts.filter(post => post._id !== postId));
        setPageError(data);
      } else {
        setPageError(data.message);
      }
    } catch (error) {
      setPageError(error.message || 'An unexpected error occurred');
    } finally {
      setTimeout(() => {
        setPageError(null);
      }, 1000);
    }
  };
  

  return (
    <div className="overflow-x-auto md:mx-auto mt-2">
      {currentUser.isAdmin && posts.length > 0 ? (
        <>
          <Table hoverable className="shadow-md ">
            <Table.Head>
              <Table.HeadCell>Date Updated</Table.HeadCell>
              <Table.HeadCell>Post Image</Table.HeadCell>
              <Table.HeadCell>Post Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Delete</Table.HeadCell>
              <Table.HeadCell>
                <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body>
              {posts.map((post) => (
              
                <Table.Row key={post._id}>
                  <Table.Cell>
                    {new Date(post.updatedAt).toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-20 h-10 object-cover bg-gray-500"
                      />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>{post.title}</Link>
                  </Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>
                    <span className="text-red-700 hover:underline cursor-pointer" onClick={()=>{
                      setPostId(post._id)
                      setShowModel(true)
                    }}>
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/update-post/${post._id}`}>
                      <span className="text-cyan-500 hover:underline">
                        Edit
                      </span>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {LoadMore && (
            <Button className=" mx-auto my-5" onClick={LoadMoreHandler}>
              Load more
            </Button>
          )}
        </>
      ) : (
        <p>You don't have any posts yet</p>
      )}
      <Modal
        show={showModel}
        onClose={() => setShowModel(false)}
        popup
        size="md"
      >
        <Modal.Header>Delete Account</Modal.Header>
        <Modal.Body>
          <div className="text-center text-gray-400">
            <p className="flex items-center gap-2 mb-6">
              {" "}
              <AiOutlineExclamationCircle /> Are you sure want to delete this Blog post
            </p>
            <div className="flex justify-center gap-5">
              <Button color="failure" onClick={HandleDelete}>
                Delete
              </Button>
              <Button color="green" onClick={() => setShowModel(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={pageError}
        size="md"
      >
        <Modal.Body>
          <div className="text-center text-gray-400">
            <p className="flex items-center gap-2 mb-6 text-red-500" >{pageError}</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashPosts;
