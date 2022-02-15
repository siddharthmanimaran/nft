import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  width: 20%;
  margin: 5% auto;
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  padding: 1em;
  line-height: 1.5em;
  background: hsla(67, 95%, 95%, 1);
  border: solid 5px hsla(0, 95%, 35%, 1);
`;
