import React, { useState } from "react";
import {
  CateSelect,
  SoldOutMenuItem,
  SoldOutMenuWrap,
  SoldOutstyle,
} from "../../styles/menu/MenuSoldOutStyle";

// 카테고리
const menuCate = [
  {
    id: 0,
    title: "ALL",
  },
  {
    id: 1,
    title: "SET",
  },
  {
    id: 2,
    title: "CHICKEN",
  },
  {
    id: 3,
    title: "SIDE",
  },
  {
    id: 4,
    title: "SAUCE",
  },
  {
    id: 5,
    title: "DRINK",
  },
];
// 더미데이터
const menuData = [
  {
    id: 1,
    menuImage: "/images/chicken.jpg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "ALL",
  },
  {
    id: 2,
    menuImage: "/images/chicken.jpg",
    menuName: "제로콜라",
    price: "18,000원",
    menuCategory: "DRINK",
  },
  {
    id: 3,
    menuImage: "/images/chicken.jpg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
  },
  {
    id: 4,
    menuImage: "/images/chicken.jpg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
  },
  {
    id: 5,
    menuImage: "/images/chicken.jpg",
    menuName: "양념소스",
    price: "18,000원",
    menuCategory: "SAUCE",
  },
  {
    id: 6,
    menuImage: "/images/chicken.jpg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
  },
  {
    id: 7,
    menuImage: "/images/chicken.jpg",
    menuName: "양념소스",
    price: "18,000원",
    menuCategory: "SAUCE",
  },
  {
    id: 8,
    menuImage: "/images/chicken.jpg",
    menuName: "감자튀김",
    price: "18,000원",
    menuCategory: "SIDE",
  },
  {
    id: 9,
    menuImage: "/images/chicken.jpg",
    menuName: "감자튀김",
    price: "18,000원",
    menuCategory: "SIDE",
  },
];

const MenuSoldOutPage = () => {
  const [type, setType] = useState<number>(0);
  return (
    <>
      <SoldOutstyle>
        <h1>&nbsp;&nbsp;메뉴 품절</h1>
        <CateSelect>
          <select onChange={e => setType(Number(e.target.value))}>
            {menuCate.map(item => {
              return (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </CateSelect>
        <SoldOutMenuWrap>
          {menuData.map(item => (
            <SoldOutMenuItem key={item.id}>
              <img src={item.menuImage} />
              <p>{item.menuName}</p>
              <button>품절</button>
            </SoldOutMenuItem>
          ))}
        </SoldOutMenuWrap>
      </SoldOutstyle>
    </>
  );
};

export default MenuSoldOutPage;
