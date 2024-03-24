
import { useLoaderData } from 'react-router-dom';
const BlogDetails = () => {
    const blog=useLoaderData()
    return (
        <div>
            <h2>Blog Details of {blog.title}</h2>
        </div>
    );
};

export default BlogDetails;