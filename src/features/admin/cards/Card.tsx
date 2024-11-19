'use client';
import React from "react";
import { Card, CardContent, styled, Typography } from "@mui/material";

const StyledCard = styled(Card)({
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "32px",
});

const AdminHead = styled(Typography)({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "8px",
});

const CardSubText = styled(Typography)({
  fontSize: "48px",
  fontWeight: "bold",
  color: "#0077b6",
  marginBottom: "16px",
});

const PercentageChange = styled(Typography)({
  fontSize: "18px",
  color: "#4caf50",
});

const AdminCard = () => {
  return (
    <StyledCard>
      <StyledCardContent>
        <AdminHead>Today's Admin</AdminHead>
        <CardSubText>$53,000</CardSubText>
        <PercentageChange>+55%</PercentageChange>
      </StyledCardContent>
    </StyledCard>
  );
};

export default AdminCard;
