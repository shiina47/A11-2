import { memo } from "react";

import { Box, Typography } from "@mui/material";

export const Material = memo((props) => {
  const { materials } = props;

  return (
    <>
      <Box width="100%" marginTop="5px">
        <Typography
          m={2}
          fontWeight="bold"
          variant="h6"
          borderBottom={4}
          borderColor="orange"
        >
          材料(1人前)
        </Typography>
        {materials &&
          materials.map((material, index) => {
            return (
              <Box key={index}>
                <Typography
                  width="80%"
                  marginX="auto"
                  marginY="12px"
                  variant="body1"
                  fontWeight="medium"
                  borderBottom={1}
                  borderColor="grey.500"
                >
                  {material}
                </Typography>
              </Box>
            );
          })}
      </Box>
    </>
  );
});
