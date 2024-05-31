import React, { useEffect, useState } from "react";
import {
  CateSelect,
  SoldOutMenuItem,
  SoldOutMenuWrap,
  SoldOutstyle,
} from "../../styles/menu/MenuSoldOutStyle";
import SoldOutModal from "../../components/soldout/SoldOutModal";
import { ModalBackground } from "../../styles/schedule/ScheduleModalStyle.tsx";
import { getMenu } from "../../api/menu/menu_api.js";

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
    soldOutStatus: "y",
  },
  {
    id: 2,
    menuImage: "/images/chicken.jpg",
    menuName: "제로콜라",
    price: "18,000원",
    menuCategory: "DRINK",
    soldOutStatus: "y",
  },
  {
    id: 3,
    menuImage: "/images/chicken.jpg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
    soldOutStatus: "y",
  },
  {
    id: 4,
    menuImage: "/images/chicken.jpg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
    soldOutStatus: "n",
  },
  {
    id: 5,
    menuImage: "/images/chicken.jpg",
    menuName: "양념소스",
    price: "18,000원",
    menuCategory: "SAUCE",
    soldOutStatus: "y",
  },
  {
    id: 6,
    menuImage: "/images/chicken.jpg",
    menuName: "원조 후라이드",
    price: "18,000원",
    menuCategory: "CHICKEN",
    soldOutStatus: "y",
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
    soldOutStatus: "y",
  },
  {
    id: 9,
    menuImage: "/images/chicken.jpg",
    menuName: "감자튀김",
    price: "18,000원",
    menuCategory: "SIDE",
    soldOutStatus: "n",
  },
];

const MenuSoldOutPage = () => {
  const [data, setData] = useState(null);
  const [menu_id, setMenu_id] = useState<number>(0)
  const [menu_name, setMenu_name] = useState<string>("")
  const [menu_image, setMenu_image] = useState<string>("")
  const [sold_out_yn, setSold_out_yn] = useState<string>("")
  // store_id 값
  const store_id = 1; // 로그인 연동 후 수정하기

  // 데이터 연동(메뉴 조회)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getMenu(store_id);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log("data:", data)

  // useEffect(() => {
  //   if (data) {
  //     setMenu_id(data.menu_id);
  //     setMenu_name(data.menu_name);
  //     setMenu_image(data.menu_image);
  //     setSold_out_yn(data.sold_out_yn);
  //   }
  // }, [data]);
  // 카테고리 선택
  const [type, setType] = useState<number>(0);

  // 품절버튼 클릭
  const [soldOutModal, setSoldOutModal] = useState<boolean>(false);
  const handleSoldOutModal = () => {
    setSoldOutModal(true);
  };
  const closeSoldOutModal = () => {
    setSoldOutModal(false);
  };

  return (
    <>
      {soldOutModal && (
        <>
          <SoldOutModal soldOutStatus={menuData[0].soldOutStatus} onCloseModal={closeSoldOutModal}/>
          <ModalBackground/>
        </>
      )}
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
          {data && data.map(item => (
            <SoldOutMenuItem key={item.menu_id}>
              <img src={item.menu_image} />
              <p>{item.menu_name}</p>
              {item.sold_out_yn === "N" ? (
                <button onClick={handleSoldOutModal}>판매 중</button>
              ) : (
                <button onClick={handleSoldOutModal} className="soldout">
                  품절
                </button>
              )}
            </SoldOutMenuItem>
          ))}
        </SoldOutMenuWrap>
      </SoldOutstyle>
    </>
  );
};

export default MenuSoldOutPage;
