// LikeButton.jsx
"use client";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import useAxiosPublic from "@/app/axios/hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const LikeButton = ({ item }) => {
  const { user } = useAuth(); // user context
  const axiosPublic = useAxiosPublic(); // axios instance

  const [like, setLike] = useState(item?.like || 0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    if (likedItems.includes(item?._id)) {
      setLiked(true);
    }
  }, [item?._id]);

  const handleLike = async (id) => {
    if (!user?.email) {
      toast.error("Please login first");
      return;
    }

    if (liked) {
      toast.error("You already liked this");
      return;
    }

    try {
      const res = await axiosPublic.put(`/update/${id}`, {
        userEmail: user.email,
      });

      setLike(like + 1);
      setLiked(true);

      const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
      localStorage.setItem("likedItems", JSON.stringify([...likedItems, id]));

      toast.success("Like added!");
    } catch (error) {
      toast.error("Like failed");
    }
  };

  return (
    <Button
      onClick={() => handleLike(item._id)}
      variant="gost"
      className="cursor-pointer"
    >
      <p className="mr-1">{like}</p>
      {liked ? (
        <AiFillLike size={20} className="text-blue-600" />
      ) : (
        <BiLike size={20} />
      )}
      <span className="ml-1">Like</span>
    </Button>
  );
};

export default LikeButton;
