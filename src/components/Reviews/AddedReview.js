import React, { useEffect } from "react";

const AddedReview = () => {
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div></div>;
};

export default AddedReview;
