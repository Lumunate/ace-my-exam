import { Contact } from '@prisma/client';
import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from '@react-email/components';
import React from 'react';

export type NewContactNotificationProps = Contact;

const NewContactNotificationTemplate = ({
  name,
  lastName,
  email,
  phone,
  message,
  id,
  createdAt,
}: NewContactNotificationProps) => {
  const fullName = `${name} ${lastName}`;

  const formattedDate = new Date(createdAt).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {fullName}</Preview>
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

          <Section style={alertSection}>
            <Text style={alertText}>New Contact Form Submission</Text>
          </Section>

          <Text style={paragraph}>You have received a new contact form submission from your website.</Text>

          <Section style={detailsSection}>
            <Heading as="h3" style={subheading}>
              Contact Details:
            </Heading>
            <div style={detailsContainer}>
              <Text style={detailItem}>
                <strong>Full Name:</strong> {fullName}
              </Text>
              <Text style={detailItem}>
                <strong>Email:</strong> {email}
              </Text>
              <Text style={detailItem}>
                <strong>Phone:</strong> {phone}
              </Text>
              <Text style={detailItem}>
                <strong>Submission Time:</strong> {formattedDate}
              </Text>
              <Text style={detailItem}>
                <strong>Reference ID:</strong> {id}
              </Text>
            </div>
          </Section>

          <Section style={messageSection}>
            <Heading as="h3" style={subheading}>
              Message Content:
            </Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Section style={reminderSection}>
            <Text style={reminderText}>Remember to respond within 24 hours to maintain our service standards.</Text>
          </Section>

          <Text style={footer}>This is an automated notification from Ace My Exams contact form system. Submission ID: {id}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NewContactNotificationTemplate;

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

const alertSection = {
  backgroundColor: '#da9694',
  padding: '12px',
  borderRadius: '5px',
  marginBottom: '24px',
  textAlign: 'center' as const,
};

const alertText = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
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
  border: '1px solid #e1e4e8',
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
  border: '1px solid #e1e4e8',
};

const messageText = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#555',
  marginBottom: '0',
  whiteSpace: 'pre-wrap',
};

const reminderSection = {
  backgroundColor: '#fff8e6',
  padding: '12px',
  borderRadius: '5px',
  marginBottom: '24px',
  border: '1px solid #ffd77a',
};

const reminderText = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#b25d00',
  margin: '0',
  textAlign: 'center' as const,
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginTop: '24px',
  textAlign: 'center' as const,
};
