import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, LinearProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "../../styles/Home.module.css";
import * as S from "./style";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     border: "1px solid",
//     padding: "10px",
//     boxShadow: "5px 10px red",
//   },
//   //other styles and classes//
// });
// const useStyles = makeStyles((theme) => ({
//   root: {
//     // marginLeft: 250,
//     // marginRight: 10,
//     boxShadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset,
//   },
// }));
export default function Cards(props) {
  const { Posts, isLoading } = props;

  return isLoading ? (
    <LinearProgress />
  ) : (
    // <Card sx={{ maxWidth: 345, boxShadow: "4" }}>
    //   <CardActionArea>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       width="150"
    //       image={Posts.image}
    //       alt={Posts.name}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {Posts.name}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {Posts.price}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>

    <S.Container>
      <S.Anchor href="">
        <S.Image src={Posts.image} class="card__image" alt={Posts.name} />
        <S.Overlay>
          <S.Header>
            {/* <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              class="card__thumb"
              src="https://i.imgur.com/7D7I6dI.png"
              alt=""
            /> */}
            <div class="card__header-text">
              <S.Title>{Posts.name}</S.Title>
              <S.Status>{Posts.price}</S.Status>
            </div>
          </S.Header>
          <S.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            blanditiis?
          </S.Description>
        </S.Overlay>
      </S.Anchor>
    </S.Container>
  );
}
