import styled from "@emotion/styled";
import React from "react";

const AdminCateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  width: 150px;
  margin-top: 30px;
`;

const AdminCateLi = styled.li`
  display: block;
  p {
    color: ${props => (props.selected ? "#572A01" : "#000")};
    font-weight: ${props => (props.selected ? "700" : "400")};
    font-size: 24px;
    cursor: pointer;
    list-style: none;
  }
`;

const AdminCategory = ({ selectedItem, AdminCate, onSubItemClick }) => {
  return (
    <AdminCateDiv>
      {AdminCate[0].list.map(subItem => (
        <AdminCateLi
          key={subItem}
          selected={selectedItem === subItem}
          onClick={() => {
            onSubItemClick(subItem);
          }}
        >
          <p>{subItem}</p>
        </AdminCateLi>
      ))}
    </AdminCateDiv>
  );
};

export default AdminCategory;
