import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  padding-top: 4px;
`;

export const FlagBtn = styled.button`
  position: relative;
  width: 44px;
`;

export const Label = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  font-size: 8px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #f0f0f0;
  box-shadow: 0.5px 0.5px 0.5px #0f1101;
`;
