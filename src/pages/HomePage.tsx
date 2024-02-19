import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export interface Blog {
  id?: number;
  published_at?: string;
  summary?: string;
  title?: string;
  url?: string;
}

const HomePage = () => {
  const [fetchedBlog, setFetchedBlog] = useState<Blog[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=6&offset=${page}`
      );
      setFetchedBlog((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  const pageHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  return (
    <div className="p-12 flex flex-col justify-center items-center gap-8">
      <div>
        <h2 className="text-2xl font-bold">Lorem, ipsum dolor.</h2>
        <p className="text-lg font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolorem
          ducimus, quaerat, perferendis minima sunt excepturi possimus sint
          atque praesentium rem aut! Nam aliquid, minima accusamus voluptatibus,
          omnis laudantium asperiores quia nobis modi commodi excepturi
          molestiae aliquam! Saepe iure, quisquam dolorem minus natus voluptate
          et.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  gap-4">
        {!!fetchedBlog?.length &&
          fetchedBlog?.map((blog, index) => {
            return <Card key={index} blog={blog} />;
          })}
      </div>
      {!!fetchedBlog?.length && (
        <button
          onClick={pageHandler}
          className="w-full md:w-48 h-10 border-2 border-black bg-white"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default HomePage;
