'use client';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';

import { AccentSpan } from 'components/common/LegalPages.style';

const PrivacyPolicyPage = () => {
  return (
    <Box
      sx={{
        paddingTop: '240px',
        width: '1200px',
        maxWidth: 'calc(100% - 60px)',
        margin: '0 auto',
        '@media (max-width: 600px)': {
          maxWidth: '100%',
          padding: '140px 20px 0',
        },
      }}
    >
      <Typography variant='h1' gutterBottom sx={{ marginBottom: '32px', color: 'black' }}>
        <AccentSpan>Acemyexam</AccentSpan> <br />
        Privacy Policy
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '16px', color: 'grey' }}>
        This Privacy Policy explains how Acemyexam (“we,” “us,” or “our”)
        collects, uses, shares, and protects personal data in accordance with
        applicable data protection laws, including the General Data Protection
        Regulation (GDPR). We are committed to safeguarding the privacy and
        security of personal information provided to us in the course of our
        tuition services.
      </Typography>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        1. Data Controller
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            Acemyexam is the data controller responsible for the processing of
            personal data collected through our tuition services and any
            employment agency activities. If you have any questions or concerns
            regarding the processing of your personal data, please contact us
            using the details provided at the end of this policy.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        2. Legal Basis for Processing
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We process personal data based on one or more of the following legal
            bases:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Performance of a Contract: Processing is necessary for the
                performance of a contract to which you are a party or in order
                to take steps at your request prior to entering into a contract.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Legitimate Interests: Processing is necessary for our legitimate
                interests or the legitimate interests of a third party, provided
                that such interests are not overridden by your interests or
                fundamental rights and freedoms.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Compliance with Legal Obligations: Processing is necessary for
                compliance with a legal obligation to which we are subject.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Consent: Processing is based on your consent, which you may
                withdraw at any time.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        3. Information We Collect
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We collect and process various types of information, including
            personal data, for the following purposes:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Contact information (such as name, address, email address, and
                telephone number) to communicate with you regarding our tuition
                services, employment agency activities, and schedule sessions.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Student information (such as name, age, grade level, and
                academic performance) to tailor tuition sessions to individual
                student needs and monitor progress.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Tutor information (such as qualifications, experience, and
                feedback) to assess suitability, allocate appropriate tutors for
                tuition sessions, and facilitate employment agency
                introductions.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        4. Use of Information
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We use the information we collect for the following purposes:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                To provide tuition services and fulfil our contractual
                obligations towards students, parents/guardians, schools/local
                authorities and/or other organisations to whom we deliver
                tuition services.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                To communicate with students, parents/guardians, tutors,
                teachers (where applicable) and clients regarding tuition
                sessions, scheduling, updates, feedback, and employment agency
                introductions (where applicable).
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                To monitor student progress and academic performance, and
                provide feedback and support as necessary.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                To comply with legal and regulatory requirements, including
                record-keeping, reporting, safeguarding obligations, and
                employment agency regulations.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                To improve our tuition services, develop new programs, enhance
                the overall learning experience, and facilitate successful
                tutor-client introductions, where applicable.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        5. Sharing of Information
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We may share personal information with the following categories of
            recipients:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Tutors: We may share student information with tutors engaged,
                subcontracted or introduced by us to deliver tuition services
                and/or facilitate introductions where we act as an employment
                agency.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Parents/Guardians: We may share student information with
                parents/guardians to provide updates, feedback, progress
                reports, and employment agency introductions.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Clients: We may share tutor information with clients for
                employment agency introductions, subject to consent and
                agreement between parties. We will never share client
                information with another client without the written consent of
                the data subject.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Schools: We may share information relating to students with
                schools and their employees (e.g. teachers) either where the
                school is our client and has contracted for us to deliver
                tuition services to one or more of their students, or where a
                Parent/Guardian for the student has given us their consent, in
                writing, to share information with the student’s school.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Service Providers: We may engage third-party service providers
                to assist us in providing tuition services or introductions to
                tutors, such as IT service providers, payment processors, and
                administrative support.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Regulatory Authorities: We may disclose information to
                regulatory authorities or law enforcement agencies as required
                by law or to protect our legal rights.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We do not sell or rent personal information to third parties for
            marketing purposes.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        6. Data Retention
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We retain personal information for as long as necessary to fulfil
            the purposes for which it was collected, including any legal,
            accounting, or reporting requirements. The specific retention period
            for personal data may vary depending on the nature of the data and
            the purposes for which it is processed.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        7. Data Subject Rights
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            Under applicable data protection laws, you have certain rights
            regarding your personal data, including:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Right of Access: You have the right to request access to your
                personal data and information about how it is processed.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Right to Rectification: You have the right to request the
                correction of inaccurate or incomplete personal data.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Right to Erasure: You have the right to request the deletion of
                your personal data under certain circumstances.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Right to Restriction of Processing: You have the right to
                request the restriction of processing of your personal data
                under certain circumstances.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Right to Data Portability: You have the right to receive your
                personal data in a structured, commonly used, and
                machine-readable format and to transmit it to another data
                controller.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Right to Object: You have the right to object to the processing
                of your personal data under certain circumstances, including
                processing for direct marketing purposes.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Right to Withdraw Consent: If processing is based on your
                consent, you have the right to withdraw your consent at any
                time.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            To exercise any of these rights, or if you have any questions or
            concerns about the processing of your personal data, please contact
            us using the details provided at the end of this policy.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        8. Data Security
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We implement appropriate technical measures and adopt relevant
            policies and processes, as an organisation, in order to protect the
            security and confidentiality of personal information. These measures
            include access controls (e.g. secure passwords), encryption,
            2-factor authentication, and regular security assessments. However,
            please note that no method of transmission over the internet or
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            Special category data and data relating to children (under the age
            of 18) and vulnerable adults (“Sensitive Data”) that is collected
            and processed in accordance with this policy shall be stored subject
            to additional reviews by our internal team to ensure that we are
            satisfied that the storage and processing of that data is
            appropriate. In particular, Sensitive Data shall be subject to the
            following additional safeguards:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                We shall review where Sensitive Data is stored periodically and
                at least every three (3) months to ensure that it is
                appropriately secured and protected.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                We shall maintain robust processes that govern the access to and
                retrieval of Sensitive Data, which shall include:
              </ListItemText>
              <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
                <ListItem sx={{ padding: '0', display: 'list-item' }}>
                  <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                    Who can access Sensitive Data, and how much access they will
                    need at any given point in time in order to discharge our
                    duties to you or to any lawful authority;
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ padding: '0', display: 'list-item' }}>
                  <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                    What Sensitive Data is permitted to be used for (which shall
                    be restricted only to that use which is reasonably necessary
                    for us to discharge our contractual and/or statutory
                    duties);
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ padding: '0', display: 'list-item' }}>
                  <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                    What processing takes place when Sensitive Data is
                    retrieved, including guidelines about what copies might be
                    made, what they will be used for and where they will be
                    stored.
                  </ListItemText>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            In the event that there was to be any data breach of any kind
            (either suspected or known), we will undertake to:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Immediately take action to assess and mitigate the extent of any
                such breach.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Take steps to promptly assess what data has been, or may have
                been, compromised.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Inform data subjects of the data breach, using clear and
                jargon-free language.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Take any measures that may be necessary in order to prevent
                compromised data being used by an unauthorised third party (e.g.
                recommending to data subjects that they change passwords that
                may have been compromised).
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
                Where appropriate, we will keep data subjects informed of any
                change to the level of risk we assess exists as a result of any
                such breach.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        9. Changes to this Privacy Policy
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            We reserve the right to update or modify this Privacy Policy at any
            time. Any changes will be effective immediately upon posting the
            updated Privacy Policy on our website. We encourage you to review
            this Privacy Policy periodically for any changes.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h3' sx={{ my: '16px', color: 'black', fontWeight: 'bold' }}>
        10. Contact Us
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'decimal', pl: 4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, or if you wish to exercise your data subject
            rights, please contact us at:
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant='body1' sx={{ marginBottom: '16px', color: 'grey' }}>
        Acemyexam
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '16px', color: 'grey' }}>
        Asma Chaudhri (owner and lead tutor)
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '16px', color: 'grey' }}>
        asma@acemyexam.co.uk
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '16px', color: 'grey' }}>
        0737 906 5363
      </Typography>
      <Typography variant='body1' sx={{ margin: '3rem 0', color: 'grey' }}>
        Last updated: 20th February 2025
      </Typography>
    </Box>
  );
};

export default PrivacyPolicyPage;