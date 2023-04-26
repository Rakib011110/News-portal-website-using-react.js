import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const categoryNews = useLoaderData();
  console.log(categoryNews);

  const { id } = useParams();

  return (
    <div>
      <h1>Catorgy news are {categoryNews.length} </h1>
    </div>
  );
};

export default Category;
