import styled from "styled-components";

export const StyledListItem = styled.div`
  width: 272px;
  height: 285px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 4px;
  border-radius: 6px;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, 0.3);

  cursor: pointer;
  background-color: white;
`;

export const StyledListItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
`;
export const StyledListItemImage = styled.img`
  height: 50%;
  object-fit: cover;
`;

export const StyledListItemHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 25%;
`;

export const StyledListItemFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0 20px;
  height: 25%;
`;

export const StyledListItemProfileWrapper = styled.div`
  width: 20%;
  height: 40px;
`;

export const StyledListItemProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  object-fit: cover;
  margin-right: 10px;
`;
