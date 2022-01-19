// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
// import Divider from "@mui/material/Divider";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
// import * as S from "./style";

// import Toolbar from "@mui/material/Toolbar";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>
//       {new Date().getFullYear()}
//     </Typography>
//   );
// }

// function Presenter(props) {
//   const { description, title, sections, social } = props;

//   return (
//     <S.Div>
//       {/* <Toolbar
//         component="nav"
//         variant="dense"
//         sx={{
//           justifyContent: "space-between",
//           overflowX: "auto",
//           backgroundColor: "grey.300",
//           color: "black",
//           boxShadow: 4,
//         }}
//       > */}
//       <Box component="footer" sx={{ py: 6, backgroundColor: "grey.200" }}>
//         <Container maxWidth="lg">
//           <Stack
//             direction="row"
//             divider={<Divider orientation="vertical" flexItem />}
//             spacing={2}
//           >
//             <Typography variant="h2" align="left" gutterBottom>
//               <Link href="/" sx={{ textDecoration: "none", color: "black" }}>
//                 Confluxus
//               </Link>
//             </Typography>
//             <Typography variant="subtitle1" align="center">
//               {sections.map((section) => (
//                 <Link
//                   color="inherit"
//                   noWrap
//                   key={section.title}
//                   variant="body1"
//                   href={section.url}
//                   sx={{ p: 1, textDecoration: "none" }}
//                 >
//                   {section.title}
//                 </Link>
//               ))}
//             </Typography>
//             <Typography variant="subtitle1">
//               {social.map((network) => (
//                 <Link
//                   display="block"
//                   variant="body1"
//                   href="#"
//                   key={network.name}
//                   sx={{ mb: 0.5, color: "black" }}
//                 >
//                   <Stack direction="row" spacing={1} alignItems="center">
//                     <network.icon />
//                     <span>{network.name}</span>
//                   </Stack>
//                 </Link>
//               ))}
//             </Typography>
//           </Stack>
//           <Copyright />
//         </Container>
//       </Box>
//       {/* </Toolbar> */}
//     </S.Div>
//   );
// }

// Presenter.propTypes = {
//   description: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Presenter;

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Title,
  Image,
} from "./style";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Title>
              <Image src="https://lh3.googleusercontent.com/UuvN9Fz7Imkvkzr_pNryiMhGUozeok0P8mx9dbwW3Un86nSEUjfBZD2EezS4Y-eDd7drnQ=w16383" />
            </Title>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>

          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Copyright />
    </Box>
  );
};
export default Footer;
