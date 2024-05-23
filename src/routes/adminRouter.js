import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/loading/Loading";

// 메뉴 품절
const LazyMenuSoldOutPage = lazy(() => import("../pages/menu/MenuSoldOutPage"));
// 메뉴 등록
// const LazyMenuRegisterPage = lazy(() =>
//   import("../pages/menu/MenuRegisterPage"),
// );
// 주문 관리
const LazyOrderManagementPage = lazy(() =>
  import("../pages/order/OrderManagementPage"),
);
// 주문 조회
const LazyOrderSearchPage = lazy(() =>
  import("../pages/order/OrderSearchPage"),
);
// 리뷰관리
const LazyReviewPage = lazy(() => import("../pages/review/ReviewPage.tsx"));
// 매출관리
const LazySalesPage = lazy(() => import("../pages/sales/SalesPage"));
// 매장관리
const LazyStoreManagementPage = lazy(() =>
  import("../pages/store/StoreManagementPage"),
);

const adminRouter = () => {
  return [
    { path: "", element: <Navigate to="order/management" /> },
    {
      path: "menu/soldout",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyMenuSoldOutPage />
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
    {
      path: "order/management",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyOrderManagementPage />
        </Suspense>
      ),
    },
    {
      path: "order/search",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyOrderSearchPage />
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
      path: "store/management",
      element: (
        <Suspense fallback={<Loading />}>
          <LazyStoreManagementPage />
        </Suspense>
      ),
    },
  ];
};

export default adminRouter;
