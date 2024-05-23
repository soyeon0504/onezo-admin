import React from 'react'
import { Outlet } from 'react-router'
import { InnerWrap, SideCate, Wrap } from '../../styles/admin/AdminStyle'
import { Link } from 'react-router-dom'
// import Layout from '../../layouts/Layout'

const LinkStyle = {
  textDecoration: 'none', // 밑줄 제거
  color: 'inherit'
}

const AdminPage = () => {
  return (
    <div>
      {/* <Layout /> */}
      <Wrap>
        <InnerWrap>
          <SideCate>
            <Link to={'admin/order/management'} style={LinkStyle}>
            <li><span>주문 관리</span></li>
            </Link>
            <Link to={'/admin/order/search'} style={LinkStyle}>
            <li><span>주문 조회</span></li>
            </Link>
            <li><span>일정 관리</span></li>
            <li><span>메뉴 품절</span></li>
            <li><span>리뷰 관리</span></li>
            <li><span>매출 관리</span></li>
            <li><span>공지 등록</span></li>
          </SideCate>
        </InnerWrap>
      <Outlet />
      </Wrap>
    </div>
  )
}

export default AdminPage