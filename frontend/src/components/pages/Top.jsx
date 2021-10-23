import { memo } from "react";
import { Box, Typography } from "@mui/material";
import { LoginModal } from "../modal/LoginModal";

export const Top = memo(() => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: "300px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              margin: "80px 0 0 0",
            }}
          >
            <Typography
              fontWeight="bold"
              variant="h4"
              color="text.primary"
              // textAlign="center"
              letterSpacing="4px"
            >
              簡単なレシピで
              <br />
              料理を楽しもう
            </Typography>
            <Typography
              fontWeight="bold"
              variant="body1"
              color="text.primary"
              marginTop={8}
              marginX="16px"
            >
              Reciperは簡単な料理だけを共有するサービスです。あなたの料理を投稿してみんなに見てもらおう！
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "32px",
            }}
          >
            <LoginModal />
          </Box>
        </Box>
      </Box>
    </>
  );
});
