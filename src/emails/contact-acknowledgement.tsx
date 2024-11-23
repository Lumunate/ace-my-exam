import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from '@react-email/components';
import React from 'react';
import { IContact } from 'types/contact';

export interface ContactAcknowledgmentProps extends IContact {
  referenceNumber?: string;
}

const baseUrl = process.env.VERCEL_URL ? process.env.VERCEL_URL : '';

const ContactAcknowledgmentTemplate = ({
  name,
  lastName,
  email,
  phone,
  message,
  referenceNumber
}: ContactAcknowledgmentProps) => {
  const accentColor = '#da9694';
  const fullName = `${name} ${lastName}`;

  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting Ace My Exams</Preview>
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
          <Heading style={{ ...heading, color: accentColor }}>Thank You for Contacting Us</Heading>
          <Text style={paragraph}>Dear {fullName},</Text>
          <Text style={paragraph}>
            Thank you for reaching out to Ace My Exams. We have received your message and will get back to you as soon as possible.
          </Text>

          <Section style={detailsSection}>
            <Heading as="h3" style={subheading}>Your Contact Details:</Heading>
            <div style={detailsContainer}>
              <Text style={detailItem}>
                <strong>Name:</strong> {fullName}
              </Text>
              <Text style={detailItem}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={detailItem}>
                <strong>Phone:</strong> {phone}
              </Text>
              {referenceNumber && (
                <Text style={detailItem}>
                  <strong>Reference Number:</strong> {referenceNumber}
                </Text>
              )}
            </div>
          </Section>

          <Section style={messageSection}>
            <Heading as="h3" style={subheading}>Your Message:</Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Text style={paragraph}>
            Our team typically responds within 24-48 business hours. If you have any urgent concerns, please don't hesitate to call us directly.
          </Text>

          <Section style={actionSection}>
            <Button style={actionButton} href={`${baseUrl}/contact`}>
              Visit Our Contact Page
            </Button>
          </Section>

          <Text style={footer}>
            This is an automated acknowledgment from Ace My Exams. Please do not reply to this email.
            If you need immediate assistance, please contact our support team directly.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactAcknowledgmentTemplate;

const main = {
  backgroundColor: '#f4f6f8',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '20px',
};

const imgSection = {
  marginTop: 32,
  marginBottom: 10,
  textAlign: 'center' as const,
};

const img = {
  margin: '0 auto',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  textAlign: 'center' as const,
  marginBottom: '20px',
};

const subheading = {
  fontSize: '18px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#333333',
  marginBottom: '15px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  color: '#555',
  marginBottom: '20px',
};

const detailsSection = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '24px',
};

const detailsContainer = {
  marginTop: '10px',
};

const detailItem = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#555',
  marginBottom: '8px',
};

const messageSection = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '24px',
};

const messageText = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#555',
  marginBottom: '0',
  whiteSpace: 'pre-wrap',
};

const actionSection = {
  textAlign: 'center' as const,
  marginTop: '32px',
  marginBottom: '32px',
};

const actionButton = {
  backgroundColor: '#da9694',
  borderRadius: '5px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  padding: '12px 30px',
  display: 'inline-block',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginTop: '24px',
  textAlign: 'center' as const,
};