import { memo } from "react";

import { Box, Typography } from "@mui/material";

export const ProcesseHome = memo((props) => {
  const { processes } = props;

  const compare = (a, b) => {
    const orderA = a.order;
    const orderB = b.order;

    let comparison = 0;
    if (orderA > orderB) {
      comparison = 1;
    } else if (orderA < orderB) {
      comparison = -1;
    }
    return comparison;
  };

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
          手順
        </Typography>
        <Box display="flex" justifyContent="center" flexDirection="column">
          {processes &&
            processes.sort(compare).map((process, index) => {
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
