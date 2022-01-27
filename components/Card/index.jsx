import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../../styles/Home.module.css";
import * as S from "./style";

export default function Cards(props) {
  const { Posts, isLoading } = props;

  return isLoading ? (
    <LinearProgress />
  ) : (
    <S.Container>
      <S.Anchor href="">
        <S.Image src={Posts.image} class="card__image" alt={Posts.name} />
        <S.Overlay>
          <S.Header>
            <div class="card__header-text" style={{ color: "#f13c20" }}>
              <S.Title>{Posts.name}</S.Title>
              <S.Status>{Posts.price}</S.Status>
            </div>
          </S.Header>
          <S.Description
            style={{ color: "#d79922", backgroundColor: "#f13c20" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            blanditiis?
          </S.Description>
        </S.Overlay>
      </S.Anchor>
    </S.Container>
  );
}
