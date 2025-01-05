// import React from 'react'

// const ImageSection = () => {
//   return (
//     <div>ImageSection</div>
//   )
// }

// export default ImageSection
"use client";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Image from "next/image";
import React from "react";
import image1 from "../../../../public/Products images/image 3.png";
import image2 from "../../../../public/Products images/image 2.png";
import image3 from "../../../../public/Products images/image5.png";
import image4 from "../../../../public/Products images/image8.png";
import removeIcon from "../../../../public/Products images/removeicon.svg";


const ImageSection = () => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(Math.max(1, quantity - 1));

  return (
    <div>
      {/* First Parent Box */}
      <Box
        sx={{
          backgroundColor: "#F9F1E7",
          width: "780px",
          height: "55px",
          display: "flex",
          paddingRight:"45px",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {["Product", "Price", "Quantity", "SubTotal"].map((text, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "17px",
              flex: 1,
            }}
          >
            <Typography>{text}</Typography>
          </Box>
        ))}
      </Box>

      {/* Second Parent Box */}
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "10px",
        }}
      >
        {/* Box 1 */}
        <Box
          sx={{
            backgroundColor: "#F9F1E7",
            width: "118px",
            height: "115px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingX:"8px"
          }}
        >
         <Image
            src={image1}
            alt="Pics"
            style={{ maxWidth: "95px", maxHeight: "85px" }}
          />
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            marginLeft:"5px",
            flex: 1,
          }}
        >
          <Typography>Lolito</Typography>
        </Box>

        {/* Box 3 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>7.000.000</Typography>
        </Box>

        {/* Box 4 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            flex: 1,
          }}
        >
          <IconButton onClick={handleDecrease} size="small">
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            size="small"
            inputProps={{ readOnly: true, style: { textAlign: "center" } }}
            sx={{ width: "50px" }}
          />
          <IconButton onClick={handleIncrease} size="small">
            <AddIcon />
          </IconButton>
        </Box>

        {/* Box 5 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>7.000.000</Typography>
        </Box>

        {/* Box 6 */}
        <Box
  component={ButtonBase}
  sx={{
    width: "108px",
    height: "105px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer", 
    transition: "background-color 0.3s ease", 
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)", 
    },
  }}
  onClick={() => {
    console.log("Box clicked!");
  }}
>
  <Image
    src={removeIcon} 
    alt="remove"
    style={{ maxWidth: "22px", maxHeight: "22px" }}
  />
</Box>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "10px",
        }}
      >
        {/* Box 1 */}
        <Box
          sx={{
            backgroundColor: "#F9F1E7",
            width: "118px",
            height: "115px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingX:"8px"
          }}
        >
         <Image
            src={image2}
            alt="Pics"
            style={{ maxWidth: "95px", maxHeight: "85px" }}
          />
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flex: 1,
          }}
        >
          <Typography>Muggo</Typography>
        </Box>

        {/* Box 3 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>2.500.000</Typography>
        </Box>

        {/* Box 4 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            flex: 1,
          }}
        >
          <IconButton onClick={handleDecrease} size="small">
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            size="small"
            inputProps={{ readOnly: true, style: { textAlign: "center" } }}
            sx={{ width: "50px" }}
          />
          <IconButton onClick={handleIncrease} size="small">
            <AddIcon />
          </IconButton>
        </Box>

        {/* Box 5 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>2.500.000</Typography>
        </Box>

        {/* Box 6 */}
        <Box
  component={ButtonBase}
  sx={{
    width: "108px",
    height: "105px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer", 
    transition: "background-color 0.3s ease", 
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)", 
    },
  }}
  onClick={() => {
    console.log("Box clicked!");
  }}
>
  <Image
    src={removeIcon} 
    alt="remove"
    style={{ maxWidth: "22px", maxHeight: "22px" }}
  />
</Box>
      </Box>

 <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "10px",
        }}
      >
        {/* Box 1 */}
        <Box
          sx={{
            backgroundColor: "#F9F1E7",
            width: "118px",
            height: "115px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingX:"8px"
          }}
        >
         <Image
            src={image3}
            alt="Pics"
            style={{ maxWidth: "95px", maxHeight: "85px" }}
          />
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flex: 1,
          }}
        >
          <Typography>Leviosa</Typography>
        </Box>

        {/* Box 3 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>4.500.000</Typography>
        </Box>

        {/* Box 4 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            flex: 1,
          }}
        >
          <IconButton onClick={handleDecrease} size="small">
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            size="small"
            inputProps={{ readOnly: true, style: { textAlign: "center" } }}
            sx={{ width: "50px" }}
          />
          <IconButton onClick={handleIncrease} size="small">
            <AddIcon />
          </IconButton>
        </Box>

        {/* Box 5 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>4.500.000</Typography>
        </Box>

        {/* Box 6 */}
        <Box
  component={ButtonBase}
  sx={{
    width: "108px",
    height: "105px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer", 
    transition: "background-color 0.3s ease", 
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)", 
    },
  }}
  onClick={() => {
    console.log("Box clicked!");
  }}
>
  <Image
    src={removeIcon} 
    alt="remove"
    style={{ maxWidth: "22px", maxHeight: "22px" }}
  />
</Box>
      </Box>


      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: "10px",
        }}
      >
        {/* Box 1 */}
        <Box
          sx={{
            backgroundColor: "#F9F1E7",
            width: "118px",
            height: "115px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingX:"8px"
          }}
        >
         <Image
            src={image4}
            alt="Pics"
            style={{ maxWidth: "95px", maxHeight: "85px" }}
          />
        </Box>

        {/* Box 2 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            flex: 1,
          }}
        >
          <Typography>Poretty,</Typography>
        </Box>

        {/* Box 3 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>5000.000</Typography>
        </Box>

        {/* Box 4 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            flex: 1,
          }}
        >
          <IconButton onClick={handleDecrease} size="small">
            <RemoveIcon />
          </IconButton>
          <TextField
            value={quantity}
            size="small"
            inputProps={{ readOnly: true, style: { textAlign: "center" } }}
            sx={{ width: "50px" }}
          />
          <IconButton onClick={handleIncrease} size="small">
            <AddIcon />
          </IconButton>
        </Box>

        {/* Box 5 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Typography>5000.000</Typography>
        </Box>

        {/* Box 6 */}
        <Box
  component={ButtonBase}
  sx={{
    width: "108px",
    height: "105px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer", 
    transition: "background-color 0.3s ease", 
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)", 
    },
  }}
  onClick={() => {
    console.log("Box clicked!");
  }}
>
  <Image
    src={removeIcon} 
    alt="remove"
    style={{ maxWidth: "22px", maxHeight: "22px" }}
  />
</Box>
      </Box>




    </div>
  );
};

export default ImageSection;
