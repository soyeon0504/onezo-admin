import React, { useState } from "react";
import {
  CancleButton,
  DateInput,
  InnerWrap,
  MainWrap,
  MenuWrap,
  OrderBox,
  OrderBoxInner,
  OrderBoxWrap,
  PriceMenuWrap,
  PriceWrap,
  TimeWrap,
  Top,
  Wrap,
} from "../../styles/order/OrderSearchStyle";
import Calendar from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import OrderCancelModal from "../../components/order/OrderCancelModal";
import { ModalBackground } from "../../styles/schedule/ScheduleModalStyle";
import { useEffect } from "react";
import { getOrderAllList } from "../../api/order/order_api";

const orderData = [
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
  {
    date: "2024.05.20",
    time: "13:33",
    totalCount: "2",
    price: "22000",
    type: "포장",
    menu: "원조바삭후라이드",
    menuCount: "1",
    side: "사이드",
    sideCount: "2",
  },
];

const orderListData = [
  {
    orderId: 1,
    storeId: 1,
    memberId: 1,
    status: "BEFORE_COOKING",
    orderDate: "2024-05-31T14:24:14.000+00:00",
    takeInOut: "TAKEOUT",
    orderItems: [
      {
        orderItemId: 1,
        orderId: 1,
        menuId: 85,
        quantity: 3,
      },
    ],
  },
];

interface IOrderItem {
  orderItemId: number;
  orderId: number;
  menuId: number;
  quantity: number;
}

interface IProps {
  orderId: number;
  storeId: number;
  memberId: number;
  status: string;
  orderDate: string;
  takeInOut: string;
  orderItems: IOrderItem[];
  totalPrice: number
}

const OrderSearchPage = ({ onChange, value }) => {
  // 전달 받을 주문 리스트
  const [orderList, setOrderList] = useState<IProps[]>([]);

  const [orderCancelModal, setOrderCancelModal] = useState(false);

  const [nowDate, setNowDate] = useState("날짜");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchOrderList = async () => {
      try {
        const res = await getOrderAllList();
        console.log("Fetched order list:", res);
        setOrderList(res);
      } catch (error) {
        console.log(
          `Error fetching order list: ${
            error.response?.data?.message || error.message
          }`,
        );
        alert(
          `Error fetching order list: ${
            error.response?.data?.message || error.message
          }`,
        );
      }
    };
    fetchOrderList();
  }, []);

  const handleClickCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsOpen(false);
    setNowDate(moment(selectedDate).format("YYYY년 MM월 DD일"));
  };

  const handleOrderCancel = () => {
    setOrderCancelModal(true);
  };

  const closeModal = () => {
    setOrderCancelModal(false);
  };

  return (
    <>
      {orderCancelModal && (
        <>
          <OrderCancelModal onClose={closeModal} />
          <ModalBackground />
        </>
      )}
      <Wrap>
        <InnerWrap>
          <Top>
            <div className="title">주문 조회</div>
            {/* 날짜 선택 */}
            <DateInput>
              <input placeholder="날짜를 선택하세요"></input>
              <img
                src="../../images/admin/calendar.svg"
                onClick={handleClickCalendar}
              />
              {/* {nowDate} */}
              {isOpen && (
                <>
                  <Calendar
                    // isOpen={isOpen}
                    onChange={handleDateChange}
                    value={value}
                    formatDay={(locale, date) => moment(date).format("DD")}
                    calendarType="gregory"
                    // formatDay={(locale, date) =>
                    // date.toLocaleString('en', { day: 'numeric' })
                    // }
                    // showNeighboringMonth={false}
                  />
                </>
              )}
            </DateInput>
          </Top>
          <MainWrap>
            <OrderBoxWrap>
              {orderList &&
                orderList.map((item, index) => (
                  <OrderBox key={index}>
                    <OrderBoxInner>
                      <TimeWrap>
                        <div className="order-time">
                          {moment(item.orderDate).format("YYYY.MM.DD HH:mm")}
                        </div>
                      </TimeWrap>
                      <PriceMenuWrap>
                        <PriceWrap>
                          <div className="order-count">
                            [메뉴 {item.orderItems.length}개]
                          </div>
                          <div className="order-price">{item.totalPrice.toLocaleString()}원</div>
                          <div className="order-type">({item.takeInOut})</div>
                        </PriceWrap>
                        <MenuWrap>
                          {item.orderItems.map((orderItems, index) => (
                            <div key={index} className="order-menu-1">
                              메뉴 ID: {orderItems.menuId} {orderItems.quantity}
                              개
                            </div>
                          ))}
                        </MenuWrap>
                      </PriceMenuWrap>
                    </OrderBoxInner>
                    <CancleButton onClick={() => handleOrderCancel()}>
                      취소
                    </CancleButton>
                  </OrderBox>
                ))}
            </OrderBoxWrap>
          </MainWrap>
        </InnerWrap>
      </Wrap>
    </>
  );
};

export default OrderSearchPage;
