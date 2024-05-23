import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AllWidth, Flex } from '../../styles/admin/AdminStyle'

import Layout from '../../layouts/Layout'
import AdminCategory from '../../components/admin/AdminCategoty';


const AdminPage = () => {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState<string>("주문 내역");
  const [selectedItem, setSelectedItem] = useState<string>("주문 내역");
  const adminCate = [
    {
      title: "가맹점페이지",
      name: ["order_management", "order_search", "schedule", "soldout", "review", "sales", "notice"],
      list: [
        "주문 관리",
        "주문 조회",
        "일정 관리",
        "메뉴 품절",
        "리뷰 관리",
        "매출 관리",
        "공지 등록"
      ],
    },
  ];

// AdminCate 상태 변경
useEffect(() => {
  const storedItem = sessionStorage.getItem("selectedItem");
  if (storedItem && storedItem !== selectedItem) {
    setSelectedItem(storedItem);
    setActiveBtn(storedItem);
  } else {
    const params = new URLSearchParams(location.search);
    const item = params.get("item") || selectedItem;
    setSelectedItem(item);
    setActiveBtn(item);
  }
}, [location.search, selectedItem]);

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
        (name === "notice" && subItem === "공지 등록")
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
  )
}

export default AdminPage