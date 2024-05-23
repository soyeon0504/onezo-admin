import React, { useState } from 'react';
import { InnerWrap, OrderTop, OrderTopButton, OrderTopInner, Wrap } from '../../styles/order/OrderAboutStyle'
import WaitComponent from '../../components/order/WaitComponent'
import CookingComponent from '../../components/order/CookingComponent'
import CompletedComponent from '../../components/order/CompletedComponent'

const OrderAbout = () => {
  const [activeComponent, setActiveComponent] = useState('wait');

  const handleButtonClick = (component) => {
    
    setActiveComponent(component);
    console.log('Button clicked:', component);
  };

  let componentToRender;
  switch (activeComponent) {
    case 'wait':
      componentToRender = <WaitComponent/>;
      break;
    case 'cooking':
      componentToRender = <CookingComponent />;
      break;
    case 'completed':
      componentToRender = <CompletedComponent />;
      break;
    default:
      componentToRender = <WaitComponent/>;
      console.log('componentToRender:', componentToRender)
  }

  return (
    <div>
      <Wrap>
        <InnerWrap>
          <OrderTop>
            <OrderTopInner>
            <OrderTopButton key={`wait`} onClick={() => handleButtonClick("wait")}><span>주문 대기 3건</span></OrderTopButton>
            <OrderTopButton key={`cooking`} onClick={() => handleButtonClick("cooking")}><span>조리 중 4건</span></OrderTopButton>
            <OrderTopButton key={`completed`} onClick={() => handleButtonClick("completed")}><span>조리 완료</span></OrderTopButton>
            </OrderTopInner>
          </OrderTop>
        </InnerWrap>
      </Wrap>

    </div>
  )
}

export default OrderAbout