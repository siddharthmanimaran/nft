import styled from "styled-components";

export const Carousel = styled.div`
  overflow: hidden;
  margin-top: 65px;
`;

export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;

export const Items = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: green;
  color: #fff;
`;
