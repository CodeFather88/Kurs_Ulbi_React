import React from "react";
function Post(props) {
  return (
    <>
      <div className="Posts">
        <div className="Posts_Content">
          <strong>{props.post.id + "." + props.post.name}</strong>
          <div>{props.post.post}</div>
        </div>
        <div className="Posts_btn">
          <button>редактировать</button>
        </div>
      </div>
    </>
  );
}

export default Post;
