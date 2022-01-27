import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 15px 30px 1px grey;
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 350px;
  width: 700px;
`;

export const Details = styled.div`
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 40%;
`;

export const H1 = styled.h1`
  display: inline-block;
  position: relative;
  font-size: 30px;
  color: #344055;
  margin: 0;
`;
export const Image = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  margin: auto;
  width: 60%;
`;

export const Status = styled.div`
  width: 100px;
  background: black;
  color: white;
  padding: 10px;
  text-align: center;
  border-top-left-radius: 70%;
  border-bottom-right-radius: 70%;
`;
