import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BookMarks from "../pages/BookMarks";
import MainLayout from "../layout/MainLayout";
import BlogDetails from "../pages/BlogDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/blogs",
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
        element: <Blogs></Blogs>,
      },
      {
        path: "/bookmarks",
        element: <BookMarks></BookMarks>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs/:id",
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        element: <BlogDetails></BlogDetails>,
      },
    ],
  },
]);

export default router;
