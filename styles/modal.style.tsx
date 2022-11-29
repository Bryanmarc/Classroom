import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  z-index: 700;
  width: 100%;
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 500;
`;

export const StyledModal = styled.div`
  z-index: 100;
  outline-style: solid;
  outline-color: #0094ff;
  outline-width: 5px;
  padding: 20px 20px 20px 20px;
  background: white;
  position: absolute;
  width: '500px',
  height: '300px',
  top: '200px',
  left: '500px',
  right: '500px'
  border-radius: 8px;
`;

export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`;

export const HeaderText = styled.div`
  font-color: rgba(0, 0, 0, 0);
  font-weight: bold; 
  font-size: 20px;
  position: center;
`;

export const CloseButton = styled.button`
  font-size: 0.8rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;
  :hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
`;
