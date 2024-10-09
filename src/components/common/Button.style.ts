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
  border: special ? "none" : "1px solid rgba(179, 179, 179, 1)",
  borderRadius: "8px",

  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "gray",
  },
}));
