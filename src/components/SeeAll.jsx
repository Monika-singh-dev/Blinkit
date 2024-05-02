import React, { useEffect } from "react";
// import { getCategoryByName } from "../sanity";
import { useParams } from "react-router-dom";

const SeeAll = () => {
  const { name } = useParams();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const categories = await getCategoryByName(name);
  //     console.log(categories);
  //   };
  //   fetchData();
  // }, []);
  return <div></div>;
};

export default SeeAll;
