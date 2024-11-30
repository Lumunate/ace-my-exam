import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from '@react-email/components';
import React from 'react';

import { IFeedback } from 'types/feedback';

export type FeedbackAcknowledgmentProps = IFeedback;

const baseUrl = process.env.VERCEL_URL ? process.env.VERCEL_URL : '';

const FeedbackAcknowledgmentTemplate = ({
  name,
  lastName,
  course,
  sessionDate,
  experience,
  feedback,
}: FeedbackAcknowledgmentProps) => {
  const accentColor = '#da9694';
  const fullName = `${name} ${lastName}`;

  // Format the date if it exists
  const formattedDate = sessionDate
    ? new Date(sessionDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    : 'Not specified';

  return (
    <Html>
      <Head />
      <Preview>Thank you for your feedback - Acemyexam</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={imgSection}>
            <Img
              src={`https://res.cloudinary.com/diiafjy31/image/upload/v1732335659/logo_olrpci.svg`}
              width="200"
              height="90"
              alt="Acemyexam"
              style={img}
            />
          </Section>
          <Heading style={{ ...heading, color: accentColor }}>Thanks for Your Feedback!</Heading>
          <Text style={paragraph}>Dear {fullName},</Text>
          <Text style={paragraph}>
            Thank you for taking the time to share your feedback about your experience with Acemyexam. Your insights are
            invaluable in helping us improve our services and provide better support to our students.
          </Text>

          <Section style={detailsSection}>
            <Heading as="h3" style={subheading}>
              Session Details:
            </Heading>
            <div style={detailsContainer}>
              <Text style={detailItem}>
                <strong>Course:</strong> {course}
              </Text>
              <Text style={detailItem}>
                <strong>Session Date:</strong> {formattedDate}
              </Text>
              <Text style={detailItem}>
                <strong>Overall Experience:</strong> {experience}
              </Text>
            </div>
          </Section>

          <Section style={feedbackSection}>
            <Heading as="h3" style={subheading}>
              Your Feedback:
            </Heading>
            <Text style={feedbackText}>{feedback}</Text>
          </Section>

          <Text style={paragraph}>
            We greatly appreciate your honest feedback and will use it to enhance our educational services. If you have any
            additional thoughts or suggestions in the future, please don&apos;t hesitate to reach out to us.
          </Text>

          <Section style={actionSection}>
            <Button style={actionButton} href={`${baseUrl}/courses/${encodeURIComponent(course)}`}>
              View More Courses
            </Button>
          </Section>

          <Section style={rewardSection}>
            <Text style={rewardText}>
              As a token of our appreciation, we&apos;ve added reward points to your account which you can use towards future sessions.
            </Text>
          </Section>

          <Text style={footer}>
            This is an automated message from Acemyexam. Your feedback has been recorded and will be reviewed by our team. If
            you have any questions, please contact our support team.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default FeedbackAcknowledgmentTemplate;

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
  border: `1px solid ${lightenColor('#da9694', 0.8)}`,
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

const feedbackSection = {
  backgroundColor: '#f9f9f9',
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '24px',
  border: `1px solid ${lightenColor('#da9694', 0.8)}`,
};

const feedbackText = {
  fontSize: '15px',
  lineHeight: '24px',
  color: '#555',
  marginBottom: '0',
  whiteSpace: 'pre-wrap',
  fontStyle: 'italic',
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

const rewardSection = {
  backgroundColor: lightenColor('#da9694', 0.9),
  padding: '15px',
  borderRadius: '8px',
  marginBottom: '24px',
  border: `1px solid ${lightenColor('#da9694', 0.8)}`,
};

const rewardText = {
  fontSize: '14px',
  lineHeight: '22px',
  color: '#555',
  marginBottom: '0',
  textAlign: 'center' as const,
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginTop: '24px',
  textAlign: 'center' as const,
};

// Helper function to lighten a color
function lightenColor(hex: string, factor: number): string {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Lighten
  const lightenChannel = (channel: number) => Math.round(channel + (255 - channel) * factor);

  // Convert back to hex
  const toHex = (channel: number) => channel.toString(16).padStart(2, '0');

  return `#${toHex(lightenChannel(r))}${toHex(lightenChannel(g))}${toHex(lightenChannel(b))}`;
}
