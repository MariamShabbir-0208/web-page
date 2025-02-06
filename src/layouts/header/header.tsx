"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Icon1 from "../../../public/Images/akar-icons_search.svg";
import Icon2 from "../../../public/Images/Heart.svg";
import Icon3 from "../../../public/Images/Vector.svg";
import Logo1 from "../../../public/Images/Meubel House_Logos-05.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import {
  ClickableIcon,
  IconsBox,
  LIBox,
  LImage1,
  MenuBox,
  StyledAppbar,
  StyledIconButton,
  StyledToolbar,
} from "./styled";
import { useShopContext } from "@/context/shopcontext";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { cartItems } = useShopContext();

  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [pagesArr] = React.useState([
    { name: "Home", path:"/" },
    { name: "Shop", path:"/shop" },
    { name: "Contact", path:"/contact" },
    { name: "About", path:"/about" },
  ]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FURNIRO
      </Typography>
      <Divider />
      <List>
        {pagesArr.map((page, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={page.path} passHref>
                <ListItemText primary={page.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Closing the first Box */}
      <Box sx={{ display: "flex", flexDirection: "row", padding: 2 }}>
        <IconsBox sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
          <ClickableIcon>
            <Image src={Icon1} width={33} height={33} alt="Search Icon" />
          </ClickableIcon>
          <ClickableIcon>
            <Image src={Icon2} width={23} height={23} alt="Notification Icon" />
          </ClickableIcon>
          <Badge badgeContent={cartItemCount} color="warning">
            <Link href="/cart" passHref>
              <ClickableIcon style={{ cursor: "pointer" }}>
                <Image src={Icon3} width={23} height={23} alt="Settings Icon" />
              </ClickableIcon>
            </Link>
          </Badge>
        </IconsBox>
      </Box>
    </Box>
  );
  

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <StyledAppbar component="nav">
        <StyledToolbar>
          <MenuBox>
            <StyledIconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </StyledIconButton>
            <Link href="/">
              <LImage1
                src={Logo1}
                alt="logo"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
          </MenuBox>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: "4rem",
            }}
          >
            {pagesArr.map((page, index) => (
              <Link href={page.path} passHref key={index}>
                <Button
                  sx={{
                    marginRight: "8px",
                    "&:hover": {
                      backgroundColor: "#FFF3E3",
                      fontSize: 14,
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 550,
                      color: "black",
                      marginRight: "4px",
                    }}
                  >
                    {page.name}
                  </span>
                </Button>
              </Link>
            ))}
          </Box>

          <IconsBox>
            {showSearch ? (
              <Box component="form" onSubmit={handleSearchSubmit} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  size="small"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  sx={{
                    '& .MuiInputBase-root': {
                      height: '35px',
                      backgroundColor: 'white',
                    }
                  }}
                />
                <IconButton onClick={() => setShowSearch(false)} size="small">
                  <CloseIcon />
                </IconButton>
              </Box>
            ) : (
              <ClickableIcon onClick={() => setShowSearch(true)}>
                <Image src={Icon1} alt="search" />
              </ClickableIcon>
            )}
            <ClickableIcon>
              <Image src={Icon2} width={23} height={23} alt="Notification Icon" />
            </ClickableIcon>
            <Badge badgeContent={cartItemCount} color="warning">
              <Link href="/cart" passHref>
                <ClickableIcon style={{ cursor: "pointer" }}>
                  <Image src={Icon3} width={23} height={23} alt="Cart Icon" />
                </ClickableIcon>
              </Link>
            </Badge>
          </IconsBox>
        </StyledToolbar>
      </StyledAppbar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
