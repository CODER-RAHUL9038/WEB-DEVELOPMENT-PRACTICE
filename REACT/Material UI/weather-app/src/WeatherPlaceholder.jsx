import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import CardMedia from "@mui/material/CardMedia";
import Credit from "./Credit";

export default function WeatherPlaceholder() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
          minHeight: {
            xs: 500, // 📱 taller on mobile
            sm: 240, // 💻 normal on desktop
          },

          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "20px",
          border: "1px solid rgba(255, 255, 255, 0.25)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        }}
      >
        {/* Image placeholder */}
        {/* <Skeleton variant="rectangular" height={190} /> */}
        <CardMedia
          component="img"
          sx={{
            height: {
              xs:"450px",
              sm:"300px"
            },
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            
          }}
          src="earth.jpg"
        />

        <Typography
          align="center"
          sx={{
            mt: 1,
            fontSize: "1.25rem"
              
          }}
        >
          Check the weather anywhere 🌍
        </Typography>

        

        <Typography
          variant="caption"
          sx={{
            display: "block",
            p:1,
            mt: {
              xs: 1,
              sm: 1,
            },
            opacity: 0.8,
            fontSize: "0.9rem",
          }}
        >
          Start by searching a city above
        </Typography>
      </Card>
      <Credit></Credit>
    </Box>
  );
}
