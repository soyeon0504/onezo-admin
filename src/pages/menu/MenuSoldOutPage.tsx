import React, { useEffect, useState } from "react";
import {
  CateSelect,
  SoldOutMenuItem,
  SoldOutMenuWrap,
  SoldOutstyle,
} from "../../styles/menu/MenuSoldOutStyle";
import SoldOutModal from "../../components/soldout/SoldOutModal";
import { ModalBackground } from "../../styles/schedule/ScheduleModalStyle.tsx";
import { getMenu, soldOutMenu } from "../../api/menu/menu_api.js";

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
  const [menu_id, setMenu_id] = useState<number>(0);
  const [menu_name, setMenu_name] = useState<string>("");
  const [menu_image, setMenu_image] = useState<string>("");
  const [sold_out_yn, setSold_out_yn] = useState<string>("");

  // 데이터 연동(메뉴 조회)
  const [menu_category, setMenu_category] = useState<string>("ALL");
  const SoldOutListData = async () => {
    const res = await getMenu(menu_category);
    setData(res);
  };
  useEffect(() => {
    SoldOutListData();
  }, [menu_category]);

  // 품절버튼 클릭
  const [soldOutModal, setSoldOutModal] = useState<boolean>(false);
  const [soldOutStatus, setSoldOutStatus] = useState<string>("");
  const handleSoldOutModal = (id, status) => {
    setMenu_id(id);
    setSoldOutStatus(status);
    setSoldOutModal(true);
  };
  const closeSoldOutModal = () => {
    setSoldOutModal(false);
  };
  // 데이터 연동(메뉴 품절상태 변경)
  const handleChangeStatus = () => {
    soldOutStatus == "Y" ? setSold_out_yn("N") : setSold_out_yn("Y");
    setSoldOutModal(false);
  };

  useEffect(() => {
    const stateData = async () => {
      await soldOutMenu({ menu_id, sold_out_yn });
      await SoldOutListData();
      setMenu_id(0);
      setSold_out_yn("");
    };
    if (menu_id !== 0 && sold_out_yn !== "") {
      stateData();
    }
  }, [menu_id, sold_out_yn]);

  return (
    <>
      {soldOutModal && (
        <>
          <SoldOutModal
            soldOutStatus={soldOutStatus}
            onCloseModal={closeSoldOutModal}
            onChangeStatus={handleChangeStatus}
          />
          <ModalBackground />
        </>
      )}
      <SoldOutstyle>
        <h1>&nbsp;&nbsp;메뉴 품절</h1>
        <CateSelect>
          <select onChange={e => setMenu_category(String(e.target.value))}>
            {menuCate.map(item => {
              return (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              );
            })}
          </select>
        </CateSelect>
        <SoldOutMenuWrap>
          {data &&
            data.map(item => (
              <SoldOutMenuItem key={item.menu_id}>
                <img src={item.menu_image} />
                <p>{item.menu_name}</p>
                {item.sold_out_yn === "N" ? (
                  <button
                    onClick={() =>
                      handleSoldOutModal(item.menu_id, item.sold_out_yn)
                    }
                  >
                    판매 중
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      handleSoldOutModal(item.menu_id, item.sold_out_yn)
                    }
                    className="soldout"
                  >
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
