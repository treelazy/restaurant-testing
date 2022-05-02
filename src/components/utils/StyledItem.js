import styled, { keyframes } from "styled-components";
const ListWrapper = styled.div`
  width: 800px;
  height: 600px;
  margin: auto;
  background: #fff;
  border-radius: 4px;
`;
const SearchWrapper = styled.div`
  display: flex;
  margin: 20px 50px;
  justify-content: space-between;
`;
const TableWrapper = styled.div`
  width: 700px;
  height: 500px;
  overflow-y: scroll;
  overflow-x: scroll;
  margin: 10px auto;
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    border: 1px solid #e8e8e8;
    border-right: 0;
    border-bottom: 0;
    thead tr {
      height: 40px;
      background-color: #c2c2c2;
      th {
        padding: 5px;
        border-right: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        font-size: 16px;
      }
    }
    tbody tr {
      height: 50px;
      font-size: 14px;
      :hover {
        background-color: #3d3a411c;
      }
      td {
        padding: 5px;
        border-right: 1px solid #e8e8e8;
        border-bottom: 1px solid #e8e8e8;
        button:first-child {
          margin-right: 10px;
        }
      }
    }
  }
`;
const ButtonWrapper = styled.button`
  min-width: 55px;
  min-height: 30px;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  height: calc(100% - 160px);
  overflow-y: scroll;
`;
const ButtonContainer = styled.div`
  height: 70px;
  border-top: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  button:first-child {
    margin-right: 10px;
  }
`;
const FormItem = styled.div`
  min-height: 40px;
  margin-bottom: 20px;
`;
const FormItemInput = styled.div`
  display: flex;
  align-items: center;
  span {
    max-width: 30%;
    min-width: 30%;
    text-align: right;
  }
  input,
  textarea,
  select {
    margin-left: 10px;
    width: 100%;
  }
  input,
  select {
    height: 30px;
  }
`;
const FormItemError = styled.div`
  margin-left: 232px;
  padding: 5px;
  color: red;
`;
const LoadingAnimation = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
const LoadingWrapper = styled.div`
  width: 700px;
  height: 500px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoadingContent = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${LoadingAnimation} 2s linear infinite;
`;

export {
  ListWrapper,
  SearchWrapper,
  TableWrapper,
  ButtonWrapper,
  HeaderWrapper,
  ContentWrapper,
  ButtonContainer,
  FormItem,
  LoadingContent,
  LoadingWrapper,
  FormItemInput,
  FormItemError,
};
