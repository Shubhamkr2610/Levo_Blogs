import { Link } from "react-router-dom";
import { Blog } from "../pages/HomePage";

interface BlogProps {
  blog: Blog;
}

const Card = ({ blog }: BlogProps) => {
  const getFormattedDate = new Date(
    blog.published_at ?? "2024-01-01"
  ).toLocaleDateString("en-GB");

  return (
    <div className="w-full min-h-72 bg-gray-400 p-4 flex flex-col justify-between rounded">
      <div>
        {blog?.published_at && (
          <p className="text-sm font-semibold">{getFormattedDate}</p>
        )}
        {blog?.title && (
          <h3 className="py-4 text-lg font-semibold">{blog.title}</h3>
        )}
        {blog?.summary && (
          <p className="text-base font-normal">{blog.summary}</p>
        )}
      </div>
      {blog?.url && (
        <div>
          <Link to={blog?.url} target="_blank">
            <button className="w-full sm:w-48  h-10 border-2 border-black bg-white rounded">
              Read more
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
