import { ButtonBase, ButtonBaseProps, styled } from "@mui/material";

interface ButtonProps extends ButtonBaseProps {
  special?: boolean;
}

export const Button = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== "special",
})<ButtonProps>(({ special = false, theme }) => ({
  padding: "5px 0",
  width: "96px",
  fontWeight: 400,
  fontFamily: "var(--font-poppins)",
  fontSize: "12px",
  color: special ? "white" : "black",
  backgroundColor: special ? "rgba(0, 184, 201, 1)" : "white",
  textAlign: "center",
  border: special ? "none" : "1px solid rgba(158, 189, 170, 1)",
  borderRadius: "8px",
  boxShadow: special ? "0 4px 14px 0 rgba(0,0,0,0.17)" : "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "gray",
  },
}));
