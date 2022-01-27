import styled from "styled-components";


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
  width: 300px;
`;

export const Anchor = styled.a`
  position: relative;
  display: block;
  height: 100%;
  overflow: hidden;
  text-decoration: none;
  border-radius: 50px;

  :hover {
    transform: translateY(0);
  }
`;

export const Image = styled.img`
  width: 500px;
  height: auto;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
  :hover {
    transform: translateY(0);
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  background-color: #efe2ba;

  transform: translateY(-100%);
  transition: 0.2s ease-in-out;
  :hover {
    transform: translateY(0);
  }
`;

export const Title = styled.h3`
  font-size: 1em;
  margin: 0 0 0.3em;
`;

export const Status = styled.span`
  font-size: 0.8em;
`;

export const Description = styled.p`
  padding: 0 2em 2em;
  margin: 0;
  font-family: "MockFlowFont";
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;
