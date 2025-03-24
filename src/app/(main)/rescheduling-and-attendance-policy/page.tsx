'use client';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';

import { StyledLink } from 'components/common/LegalPages.style';

const page = () => {
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
      <Typography
        variant='h1'
        gutterBottom
        sx={{ marginBottom: '32px', color: 'black' }}
      >
        Acemyexam Rescheduling and Attendance Policy
      </Typography>

      <Typography
        variant='h3'
        gutterBottom
        sx={{ marginBottom: '16px', color: 'black' }}
      >
        1 Rescheduling Policy:
      </Typography>

      <List sx={{ padding: '0', listStyleType: 'lower-alpha', pl:4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText
            sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
          >
            From time to time, a Tutor may need to cancel, rearrange a session,
            or arrange for the session to be taken by another Tutor, and neither
            we nor the Tutor are responsible for any consequences because of
            this.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText
            sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
          >
            <strong style={{ color: 'black' }}>One-to-one Sessions</strong>:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'lower-roman', pl:4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText
                sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
              >
                Performance of a Contract: Processing is necessary for the
                performance of a contract to which you are a party or in order
                to take steps at your request prior to entering into a contract.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText
                sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
              >
                Legitimate Interests: Processing is necessary for our legitimate
                interests or the legitimate interests of a third party, provided
                that such interests are not overridden by your interests or
                fundamental rights and freedoms.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText
                sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
              >
                Compliance with Legal Obligations: Processing is necessary for
                compliance with a legal obligation to which we are subject.
              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText
                sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
              >
                Consent: Processing is based on your consent, which you may
                withdraw at any time.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>

        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText
            sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
          >
            <strong style={{ color: 'black' }}>Group Sessions</strong> – Group
            Sessions can’t usually be rescheduled, but if a Client misses a
            session, they may be able to participate in a substituted session,
            but we are unable to guarantee this. Please email{' '}
            <StyledLink href='mailto:contact@acemyexam.co.uk'>
              contact@acemyexam.co.uk
            </StyledLink>{' '}
            in advance if you need to reschedule a group session.
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant='h3' gutterBottom sx={{ my: '16px', color: 'black' }}>
        2 Being Late:
      </Typography>
      <List sx={{ padding: '0', listStyleType: 'lower-alpha', pl:4 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText
            sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
          >
           Students are expected to attend a tutoring session (whether it is an
        individual session or as part of a Group session){' '}
            <strong style={{ color: 'black' }}>no later than 5 minutes</strong>{' '}
        after the agreed start time. For example, if the session is scheduled
        for 3 pm, the student is expected to attend no later than 3.05 pm. If
        the student does not attend within 10 minutes of the agreed start time,
        the tutor reserves the right to:
          </ListItemText>
          <List sx={{ padding: '0', listStyleType: 'lower-roman', pl:4 }}>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText
                sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
              >
                Terminate the session where the student is the only scheduled attendee, or

              </ListItemText>
            </ListItem>
            <ListItem sx={{ padding: '0', display: 'list-item' }}>
              <ListItemText
                sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
              >
                Continue a Group Session with the other students,
                and in either case, in so far as the student is concerned, regard it as a completed session, and the full fee is payable, and a prepaid session cannot be rescheduled.
              </ListItemText>
            </ListItem>
          </List>
        </ListItem>

        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText
            sx={{ padding: '0', marginBottom: '4px', color: 'grey' }}
          >
           If a Tutor is late to a session, then they will make the time up or reschedule it, as will be agreed with the Client.
          </ListItemText>
        </ListItem>
      </List>

      <Typography
        variant='body1'
        gutterBottom
        sx={{ margin: '16px 0', color: 'grey' }}
      >
        Last updated: 20th February 2025
      </Typography>
    </Box>
  );
};

export default page;
