import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/loading/Loading";

// 주문 관리
const LazyOrderManagementPage = lazy(() =>
  import("../pages/order/OrderManagementPage"),
);
// 주문 조회
const LazyOrderSearchPage = lazy(() =>
  import("../pages/order/OrderSearchPage"),
);
// 일정 관리
const LazySchedulePage = lazy(() =>
  import("../pages/schedule/SchedulePage.tsx"),
);
// 메뉴 품절
const LazyMenuSoldOutPage = lazy(() => import("../pages/menu/MenuSoldOutPage.tsx"));
// 리뷰관리
const LazyReviewPage = lazy(() => import("../pages/review/ReviewPage.tsx"));
// 매출 관리
const LazySalesPage = lazy(() => import("../pages/sales/SalesPage.tsx"));
// 공지 등록
const LazyNoticePage = lazy(() =>
  import("../pages/notice/NoticePage.js"),
);
// 메뉴 등록
// const LazyMenuRegisterPage = lazy(() =>
//   import("../pages/menu/MenuRegisterPage"),
// );

const adminRouter = () => {
  return [
    { path: "", element: <Navigate to="order_management" /> },
    {
      path: "order_management",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyOrderManagementPage />
        </Suspense>
      ),
    },
    {
      path: "order_search",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyOrderSearchPage />
        </Suspense>
      ),
    },
    {
      path: "schedule",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySchedulePage />
        </Suspense>
      ),
    },
    {
      path: "soldout",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMenuSoldOutPage />
        </Suspense>
      ),
    },
    {
      path: "review",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyReviewPage />
        </Suspense>
      ),
    },
    {
      path: "sales",
      element: (
        <Suspense fallback={<Loading />}>
          <LazySalesPage />
        </Suspense>
      ),
    },
    {
      path: "notice",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyNoticePage />
        </Suspense>
      ),
    },
    // {
    //   path: "/menu/register",
    //   element: (
    //     <Suspense fallback={<Loading />}>
    //       <LazyMenuRegisterPage />
    //     </Suspense>
    //   ),
    // },
  ];
};

export default adminRouter;
