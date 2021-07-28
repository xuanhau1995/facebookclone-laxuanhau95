import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import PostCard from "./PostCard";
function Posts({ posts }) {
  const [realtimePosts] = useCollection(
    db.collection("post").orderBy("timestamp", "desc")
  );
  console.log(realtimePosts);
  return (
    <div className="space-y-4">
      {/* Only show the real time posts we get basically  map to firebase if we have them and ortherview show the one that we pre-fetched   */}
      {realtimePosts
        ? realtimePosts?.docs.map((post) => (
            <PostCard
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              email={post.data().email}
              image={post.data().image}
              timestamp={post.data().timestamp}
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <PostCard
              key={post.id}
              name={post.name}
              message={post.message}
              email={post.email}
              image={post.image}
              timestamp={post.timestamp}
              postImage={post.postImage}
            />
          ))}
    </div>
  );
}

export default Posts;
