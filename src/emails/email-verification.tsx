import React from "react";
import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components";

interface EmailVerificationProps {
  userName: string;
  verificationLink: string;
  expiryTime?: string; // Optional expiry time for the verification link
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

const EmailVerificationTemplate = ({ userName, verificationLink, expiryTime }: EmailVerificationProps) => {
  const accentColor = "#da9694";

  return (
    <Html>
      <Head />
      <Preview>Verify your email address for Ace My Exams</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={imgSection}>
            <Img
              src={`https://res.cloudinary.com/diiafjy31/image/upload/v1732335659/logo_olrpci.svg`}
              width="200"
              height="90"
              alt="Ace My Exams"
              style={img}
            />
          </Section>
          <Heading style={{ ...heading, color: accentColor }}>Verify Your Email Address</Heading>
          <Text style={paragraph}>Hi {userName},</Text>
          <Text style={paragraph}>
            Thank you for signing up with Ace My Exams. To complete your registration and access our services, please verify your email address by clicking the button below:
          </Text>
          <Section style={actionSection}>
            <Button style={actionButton} href={verificationLink}>
              Verify Email Address
            </Button>
          </Section>
          {expiryTime && (
            <Text style={warningText}>
              This verification link will expire in {expiryTime}. Please verify your email before then.
            </Text>
          )}
          <Text style={paragraph}>
            If you didn't create an account with Ace My Exams, you can safely ignore this email.
          </Text>
          <Text style={paragraph}>
            If you're having trouble clicking the button, copy and paste this URL into your browser:
            <br />
            <span style={linkText}>{verificationLink}</span>
          </Text>
          <Text style={footer}>
            This is an automated message from Ace My Exams. Please do not reply to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailVerificationTemplate;

const main = {
  backgroundColor: "#f4f6f8",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: "20px",
};

const imgSection = {
  marginTop: 32,
  marginBottom: 10,
  textAlign: "center" as const,
};

const img = {
  margin: "0 auto",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  textAlign: "center" as const,
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#555",
  marginBottom: "20px",
};

const actionSection = {
  textAlign: "center" as const,
  marginTop: "32px",
  marginBottom: "32px",
};

const actionButton = {
  backgroundColor: "#da9694",
  borderRadius: "5px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 30px",
  display: "inline-block",
};

const warningText = {
  fontSize: "14px",
  color: "#f5a623",
  textAlign: "center" as const,
  marginTop: "16px",
  marginBottom: "24px",
};

const linkText = {
  color: "#da9694",
  fontSize: "14px",
  // wordBreak: "break-all",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "24px",
  textAlign: "center" as const,
};