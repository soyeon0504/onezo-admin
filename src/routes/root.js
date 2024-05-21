import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/loading/Loading";

const LazyLoginPage = lazy(() => import("../pages/login/LoginPage"));
const LazyJoinPage = lazy(() => import("../pages/join/JoinPage"));
const LazyMainPage = lazy(() => import("../pages/main/MainPage"));
const LazyMenuSoldOutPage = lazy(() => import("../pages/menu/MenuSoldOutPage"));
const LazyMenuRegisterPage = lazy(() => import("../pages/menu/MenuRegisterPage"));
const LazyOrderManagementPage = lazy(() => import("../pages/order/OrderManagementPage"));
const LazyOrderSearchPage = lazy(() => import("../pages/order/OrderSearchPage"));
const LazyReviewPage = lazy(() => import("../pages/review/ReviewPage"));
const LazySalesPage = lazy(() => import("../pages/sales/SalesPage"));
const LazyStoreManagementPage = lazy(() => import("../pages/store/StoreManagementPage"));

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyLoginPage />
      </Suspense>
    ),
  },
  {
    path: "/join",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyJoinPage />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMainPage />
      </Suspense>
    ),
  },
  {
    path: "/menu/soldout",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMenuSoldOutPage />
      </Suspense>
    ),
  },
  {
    path: "/menu/register",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyMenuRegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/order/management",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyOrderManagementPage />
      </Suspense>
    ),
  },
  {
    path: "/order/search",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyOrderSearchPage />
      </Suspense>
    ),
  },
  {
    path: "/review",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyReviewPage />
      </Suspense>
    ),
  },
  {
    path: "/sales",
    element: (
      <Suspense fallback={<Loading />}>
        <LazySalesPage />
      </Suspense>
    ),
  },
  {
    path: "/store/management",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyStoreManagementPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <h1>.</h1>,
  },
]);

export default router;
