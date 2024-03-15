// Mui Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme, useTheme } from "@mui/material/styles";
// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  const theme: Theme = useTheme();
  const currentDate = new Date().getFullYear();
  const extraSmallDev = useMediaQuery("(max-width:350px)");
  const smallDev = useMediaQuery("(max-width:500px)");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: theme.palette.text.darkPink,
          p: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: extraSmallDev ? "12px" : "14px",
            fontFamily: "Oswald",
            color: "#fff",
            letterSpacing: "1px",
          }}
        >
          {`Copyright © ${currentDate}.`}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: extraSmallDev ? "10px" : smallDev ? "11px" : "14px",
            fontFamily: "Oswald",
            color: "#fff",
            letterSpacing: "1px",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            mt: 0.5,
          }}
        >
          {`created with`}
          <FavoriteIcon
            sx={{
              color: "#fff",
              letterSpacing: "1px",
              fontSize: "17px",
              mx: 0.5,
            }}
          />
          {`by : Rawan | Hala | Amany | zeyad | ahmed`}
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
