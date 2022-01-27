import * as S from "./style";

const ActivityCard = (props) => {
  const { post } = props;
  return (
    <>
      <S.Container>
        <S.Details>
          <S.H1>{post.title}</S.H1>

          <p>{post.description} </p>

          <S.Status>{post.status}</S.Status>
        </S.Details>

        <S.Image class="product-image">
          <img src={post.image} alt={post.title} />
        </S.Image>
      </S.Container>
    </>
  );
};

export default ActivityCard;
