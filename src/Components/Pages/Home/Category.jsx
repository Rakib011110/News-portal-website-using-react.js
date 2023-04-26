import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const Category = () => {
  const categoryNews = useLoaderData();
  console.log(categoryNews);

  const { id } = useParams();

  return (
    <div>
      <h1>Catorgy news are {categoryNews.length} </h1>

      <div>
        {categoryNews.map((news) => (
          <NewsCard news={news} key={news._id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
