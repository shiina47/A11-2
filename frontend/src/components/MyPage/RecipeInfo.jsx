import { memo } from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AccessAlarm } from "@mui/icons-material";
import PaymentIcon from "@mui/icons-material/Payment";

export const RecipeInfo = memo((props) => {
  const { likes_count, minutes, cost } = props;
  return (
    <>
      <Box display="flex">
        <FavoriteIcon color="error" />
        <Typography
          variant="body1"
          fontWeight="500"
          marginLeft="5px"
          marginTop="2px"
        >
          {likes_count}
        </Typography>
        <Box marginLeft="5px" display="flex">
          <AccessAlarm />
          <Typography variant="body1" fontWeight="regular" alignSelf="center">
            {minutes}分
          </Typography>
        </Box>
        <Box marginLeft="5px" display="flex">
          <PaymentIcon />
          <Typography variant="body1" fontWeight="regular" alignSelf="center">
            {cost}円
          </Typography>
        </Box>
      </Box>
    </>
  );
});
