import styled from "styled-components";


export const MovieContainer = styled.div`
  width: 250px;
  color: white;
  height: 470px;
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: #373b69;
  border-radius: 5px;
`;
export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 40px;
  justify-content: center;
`;

export const MovieImg = styled.img`
  width: 100%;
`;
export const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
export const Modal = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  position: absolute;
  width: 190px;
  height: 410px;
  padding: 30px;
  overflow: auto;
  text-overflow: ellipsis;
`;
export const MovieTitle = styled.div`
  .title {
    margin-bottom: 20px;
  }
`;
