import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import FacebookConfirm from "./routes/FacebookComfirm";
import Home from "./routes/Home";
import KakaoConfirm from "./routes/KakaoComfirm";
import NotFound from "./routes/NotFound";
import PostDetail from "./routes/PostDetail";
import UploadPhotos from "./routes/UploadPhotos";
import UploadPost from "./routes/UploadPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "posts/:postPk",
        element: <PostDetail />,
      },
      {
        path: "posts/:postPk/photos",
        element: <UploadPhotos />,
      },
      {
        path: "posts/upload",
        element: <UploadPost />,
      },
      {
        path: "social",
        children: [
          {
            path: "Facebook",
            element: <FacebookConfirm />,
          },
          {
            path: "kakao",
            element: <KakaoConfirm />,
          },
        ],
      },
    ],
  },
]);

export default router;
