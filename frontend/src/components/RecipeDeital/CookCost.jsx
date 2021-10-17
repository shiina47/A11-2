import { memo } from "react";

import { Box, Typography } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";

export const CookCost = memo((props) => {
  const { cost } = props;
  return (
    <>
      <Box marginX="auto">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <PaymentIcon />
            <Typography fontWeight="bold">費用目安</Typography>
          </Box>
          <Typography variant="h6" fontWeight="bold" alignSelf="center">
            {cost && cost}円
          </Typography>
        </Box>
      </Box>
    </>
  );
});
