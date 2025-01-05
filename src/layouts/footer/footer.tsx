import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo1 from "../../../public/Images/Funiro..png";
import Logo2 from "../../../public/Images/Meubel House_Logos-05.svg";
// import FBIcon from "../../../public/Footer/🦆 icon _facebook_.svg";
// import InstaIcon from "../../../public/Footer/🦆 icon _instagram_.svg";
// import TwitterIcon from "../../../public/Footer/🦆 icon _twitter_.svg";
// import YoutubeIcon from "../../../public/Footer/🦆 icon _youtube_.svg";
import CRIcon from "../../../public/Footer/fi-rr-copyright.svg";
import {
  CopyRightStack,
  FBImage,
  FIStack,
  FLogoBox,
  IStack,
  InstaImage,
  LHTypography,
  LImage1,
  LImage2,
  LTypography,
  LiListItemButton,
  SBButton,
  SBInput,
  SMTypography,
  TwitterImage,
  YoutubeImage,
} from "./styled";
import Link from "next/link";

const Footer = () => {
  return (
    <Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xl={4} lg={5} md={5} sm={6} xs={12}>
            <Stack sx={{ padding: "4% 6%" }}>
              <Stack direction="row">
                <FLogoBox>
                  <LImage1 src={Logo1} alt="" />
                </FLogoBox>
                {/* <LImage2 src={Logo2} alt="" /> */}
              </Stack>
              <Box>
                <SMTypography  sx={{ pt: "15px",color:"#9F9F9F",fontSize:"16px" }}>
                400 University Drive Suite 200 Coral Gables,{" "}
                  <br /> FL 33134 USA
                </SMTypography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem
                  sx={{
                    ml: 2,
                  }}
                >
                  <LHTypography variant="h6"> Links</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Home</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Shop</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">About</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Contact</LTypography>
                  </LiListItemButton>
                </ListItem>
             
              </List>
            </Stack>
          </Grid>

          <Grid xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem>
                  <LHTypography variant="h6">Help</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Payment Options</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Returns</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Privacy Policy</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Blog</LTypography>
                  </LiListItemButton>
                  {/* <LiListItemButton>
                    <LTypography variant="subtitle1">Help Center</LTypography>
                  </LiListItemButton> */}
                </ListItem>
              </List>
            </Stack>
          </Grid>

          <Grid xl={3} lg={3} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem>
                  <LHTypography variant="h6">Newsletter</LHTypography>
                </ListItem>
                <IStack>
              <SBInput
              fullWidth
                placeholder="Enter your email"
                type="email"
                name="email"
                endAdornment={
                  <SBButton>Subscribe</SBButton>
                }
              />
            </IStack>

              </List>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={0} justifyContent="flex-start">
  <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
    <CopyRightStack flex={4} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
        Copyright <Image src={CRIcon} width={17} height={17} alt="" />{" "}
        2023 Dscode | All rights reserved
        
      </Typography>
    </CopyRightStack>
  </Grid>
  <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
    <Stack flex={1}></Stack>
  </Grid>
</Grid>

      </Box>
    </Box>
  );
};

export default Footer;
