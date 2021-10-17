import { memo } from "react";

import { Box, Typography } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";

export const CookMunites = memo((props) => {
  const { minutes } = props;
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
            <AccessAlarm />
            <Typography fontWeight="bold">調理</Typography>
          </Box>
          <Typography variant="h6" fontWeight="bold" alignSelf="center">
            {minutes && minutes}分
          </Typography>
        </Box>
      </Box>
    </>
  );
});
