import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1> All Category</h1>{" "}
      <div className="p-4  ">
        {categories.map((category) => (
          <p key={category.id}>
            {" "}
            <Link
              to={`${category.id}`}
              className="text-decoration-none text-black fw-bold"
            >
              {" "}
              {category.name}{" "}
            </Link>{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
