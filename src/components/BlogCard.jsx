import errorImage from '../assets/404.jpg'
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  const { cover_image, description, published_at, title,id } = blog;
  return (
    <Link to={`/blogs/${id}`}
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 hover:border-primary border border-secondary border-opacity-30 hover:scale-105 duration-300 p-4 rounded-lg">
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 bg-gray-500"
        src={cover_image || errorImage}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
        <p>
          {description}
        </p>
        <button className="btn btn-primary">Show Details</button>
      </div>
    </Link>
  );
};

export default BlogCard;
