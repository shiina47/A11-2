import { memo } from "react";

import { Box, Typography } from "@mui/material";

export const Processes = memo((props) => {
  const { processes } = props;

  return (
    <>
      <Box width="100%" marginTop="5px">
        <Typography m={2} fontWeight="bold" variant="h6">
          手順
        </Typography>
        <Box display="flex" justifyContent="center" flexDirection="column">
          {processes &&
            processes.map((process, index) => {
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
                    {process.order}.{process.how_to}
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Box>
    </>
  );
});
