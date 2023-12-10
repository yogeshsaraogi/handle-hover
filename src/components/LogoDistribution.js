import React, { useState } from "react";
import { LOGO } from "../data/logo";
import { Box } from "@mui/material";
import FundCard from "./FundCard";

function LogoDistribution() {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const handleLogoHover = (logo) => {
    setHoveredLogo(logo);
  };

  const handleLogoLeave = () => {
    setHoveredLogo(null);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: "16px",
        backgroundColor: "#005050",
      }}
      p={3}
      height={"300px"}
    >
      {LOGO.map((logo, idx) => (
        <div
          key={idx}
          onMouseEnter={() => handleLogoHover(logo)}
          onMouseLeave={handleLogoLeave}
          style={{
            position: "relative",
            height: "fit-content",
            overflow: "visible",
          }}
        >
          <img src={logo.src} alt={logo.alt} style={{ cursor: "pointer" }} />
          {hoveredLogo === logo && (
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: "2",
              }}
            >
              <FundCard src={logo.src} alt={logo.alt} />
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
}

export default LogoDistribution;
