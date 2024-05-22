import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";

import adminRouter from "./adminRouter";

const LazyLoginPage = lazy(() => import("../pages/login/LoginPage.tsx"));
// const LazyJoinPage = lazy(() => import("../pages/join/JoinPage"));
const LazyMainPage = lazy(() => import("../pages/main/MainPage"));
const LazyAdminPage = lazy(() => import("../pages/admin/AdminPage.tsx"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyLoginPage />
      </Suspense>
    ),
  },
  // {
  //   path: "/join",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <LazyJoinPage />
  //     </Suspense>
  //   ),
  // },
  {
    path: "/main/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "/admin/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyAdminPage />
      </Suspense>
    ),
    children: adminRouter(),
  },
  {
    path: "*",
    element: <h1>.</h1>,
  },
]);

export default router;
