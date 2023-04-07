// import { BsFillHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";

export const LikeButton = ({ onLikeSubmit, isLiked }) => {
  
  return (
    <button className="like-btn" onClick={onLikeSubmit}>
        Like
      {/* {isLiked ? <BsFillHandThumbsUpFill /> : <BsHandThumbsUp />}
      <p style={{ color: isLiked ? "#304261" : "#525252" }}>
        {isLiked ? "Liked" : "Like"}
      </p> */}
    </button>
  );
};
