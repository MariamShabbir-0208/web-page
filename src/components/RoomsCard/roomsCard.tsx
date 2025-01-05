// import { SBTypography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { ICNBox, ICNImage, SBTypography, SECard, TTypography, TitleBox } from "./styled";

interface RoomsCardProps {
  image?: any;
  title?: string;
  subtitle?: string;
}

const RoomsCard = ({ image, title, subtitle }: RoomsCardProps) => {
  return (
    <SECard image={image}>
      <CardContent sx={{ padding: "50px 25px" }}>
        {/* <ICNBox>
          <ICNImage src={image}  alt="" />
        </ICNBox> */}
        <TitleBox>
          <TTypography variant="h4">
            {" "}
            {title}
          </TTypography>
          <SBTypography variant="h6">
            {subtitle}
          </SBTypography>
        </TitleBox>
      </CardContent>
    </SECard>
  );
};

export default RoomsCard;
