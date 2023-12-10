import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function FundCard({ src, alt }) {
  return (
    <Box
      sx={{
        width: "186px",
        height: "231px",
        borderRadius: "8.82px 8.82px 8.82px 0px",
        backgroundColor: "#E3F8F5",
        padding: "12px 12px 4px 12px",
      }}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <img src={src} alt={alt} height={"16px"} width={"16px"} />
        <Typography>{alt}</Typography>
      </Stack>
    </Box>
  );
}

export default FundCard;
