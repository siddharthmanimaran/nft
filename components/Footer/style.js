// import styled from "styled-components";

// // export const Button = styled.div`
// //     position: absolute;
// //   top: 50%;
// //     left: 30%;
// //     margin-top: 20px;
// //     background-color: red;
// //     transform: translate(-50%, -50%);
// //     border-radius: 50%;
// // `;

// export const Div = styled.div`
//   position: relative;
//   left: 0;
//   bottom: 0;
//   width: 100%;
//   //   background-color: ;
//   color: black;
//   text-align: center;
// `;

import styled from "styled-components";

export const Box = styled.div`
  // padding: 80px 60px;
  background: Gainsboro;
  position: relative;
  bottom: 0;
  width: 100%;
  margin-top: 70px;
  // box-shadow: 1px 1px 25px 10px;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  color: black;

  &:hover {
    color: gray;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  color: black;
`;
export const Title = styled.h1`
  margin-top: 100px;
  margin-left: -120px;
`;

export const Image = styled.img`
  // display: inline-block;
  max-height: 300px;
  max-width: 300px;
`;
