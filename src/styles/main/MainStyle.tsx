import styled from "@emotion/styled";

export const MainPageStyle = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
export const MainInfo = styled.div`
  width: 350px;
  height: 500px;
  border: 1px solid #000;
  padding: 20px;
  img {
    width: 80px;
  }
`;
export const InfoHeader = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
  img {
    width: 80px;
  }
  P {
    color: #000;
    font-size: 25px;
    font-weight: 600;
  }
`;
export const InfoMain = styled.div`
  p {
    color: #000;
    font-size: 24px;
    font-weight: 400;

    margin-bottom: 15px;
  }
`;

export const MainLink = styled.div`
  /* width: 845px; */
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 200px;
  button{
    border: none;
    background: transparent;
    cursor: pointer;
  }
  img {
    width: 120px;
    height: 120px;
    margin-bottom: 15px;
  }
  p {
    color: #000;
    font-size: 24px;
    font-weight: 600;
  }
`;
