import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AllWidth, Flex } from "../../styles/admin/AdminStyle";

import Layout from "../../layouts/Layout";
import AdminCategory from "../../components/admin/AdminCategoty";

const AdminPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeBtn, setActiveBtn] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");
  const adminCate = [
    {
      title: "가맹점페이지",
      name: [
        "order_management",
        "order_search",
        "schedule",
        "soldout",
        "review",
        "sales",
        "notice_list",
      ],
      list: [
        "주문 관리",
        "주문 조회",
        "일정 관리",
        "메뉴 품절",
        "리뷰 관리",
        "매출 관리",
        "공지 관리",
      ],
    },
  ];

  // AdminCate 상태 변경
  useEffect(() => {
    const storedItem = sessionStorage.getItem("selectedItem");
    const pathName = location.pathname.split("/").pop();
    const categoryMatch = adminCate[0].name.find(name => name === pathName);

    if (categoryMatch) {
      const listItem = adminCate[0].list[adminCate[0].name.indexOf(categoryMatch)];
      setSelectedItem(listItem);
      setActiveBtn(listItem);
    } else {
      const params = new URLSearchParams(location.search);
      const item = params.get("item") || "주문 관리";
      setSelectedItem(item);
      setActiveBtn(item);
    }
  }, [location.pathname, location.search, selectedItem]);

  const handleSubItemClick = subItem => {
    setSelectedItem(subItem);
    setActiveBtn(subItem);
    const selectedCategory = adminCate.find(category =>
      category.list.includes(subItem),
    );

    if (selectedCategory) {
      const selectedName = selectedCategory.name.find(name => {
        return (
          (name === "order_management" && subItem === "주문 관리") ||
          (name === "order_search" && subItem === "주문 조회") ||
          (name === "schedule" && subItem === "일정 관리") ||
          (name === "soldout" && subItem === "메뉴 품절") ||
          (name === "review" && subItem === "리뷰 관리") ||
          (name === "sales" && subItem === "매출 관리") ||
          (name === "notice_list" && subItem === "공지 관리")
        );
      });

      if (selectedName) {
        navigate(`/admin/${selectedName}`, {
          state: { selectedItem: subItem },
        });
        sessionStorage.setItem("selectedItem", subItem);
      }
    }
  };

  return (
    <Layout>
      <AllWidth>
        <div>
          <Flex>
            <AdminCategory
              AdminCate={adminCate}
              selectedItem={selectedItem}
              onSubItemClick={handleSubItemClick}
            />
            <div style={{ paddingTop: "10px" }}>
              <Outlet />
            </div>
          </Flex>
        </div>
      </AllWidth>
    </Layout>
  );
};

export default AdminPage;
