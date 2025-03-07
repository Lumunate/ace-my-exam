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
          padding: '0 20px',
        },
      }}
    >
      <Typography variant='h1' gutterBottom>
        Acemyexam Rescheduling and Attendance Policy
      </Typography>

      <Typography variant='h3' gutterBottom>
        (1) Rescheduling Policy:
      </Typography>
      <Typography variant='body1' gutterBottom>
        (a) From time to time, a Tutor may need to cancel, rearrange a session,
        or arrange for the session to be taken by another Tutor, and neither we
        nor the Tutor are responsible for any consequences because of this.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) <strong>One-to-one Sessions</strong>:
      </Typography>
      <List component="ol" sx={{ listStyleType: 'lower-roman', pl: 2 }}>
        <ListItem sx={{ display: 'list-item', padding: '0' }}>
          <ListItemText>
            (a) Clients can rearrange sessions by emailing their Tutor directly
            using the information in the <strong>Tuition Confirmation</strong>.
            As an Employment Business, you can also contact us directly by
            emailing{' '}
            <StyledLink href='mailto:contact@acemyexam.co.uk'>
              contact@acemyexam.co.uk
            </StyledLink>{' '}
            or calling 07379065363.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: '0' }}>
          <ListItemText>
            A Client must give the Tutor <strong>at least 24 hours’ notice</strong> so
            they are not charged for that session.{' '}
            <strong>Prepaid sessions will be rescheduled.</strong>
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: '0' }}>
          <ListItemText>
            If a Client gives less than 24 hours, then the Client must pay for
            the full rate for that session and, if prepaid, will not be rescheduled.
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: '0' }}>
          <ListItemText>
            A Client will always be responsible for payment of any
            non-refundable expenses associated if they reschedule or cancel any
            session.
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant='body1' gutterBottom>
        (c) <strong>Group Sessions</strong> – Group Sessions can’t usually be
        rescheduled, but if a Client misses a session, they may be able to
        participate in a substituted session, but we are unable to guarantee this.
        Please email{' '}
        <StyledLink href='mailto:contact@acemyexam.co.uk'>
          contact@acemyexam.co.uk
        </StyledLink>{' '}
        in advance if you need to reschedule a group session.
      </Typography>

      <Typography variant='h3' gutterBottom>
        (2) Being Late:
      </Typography>
      <Typography variant='body1' gutterBottom>
        (a) Students are expected to attend a tutoring session (whether it is an
        individual session or as part of a Group session){' '}
        <strong>no later than 5 minutes</strong> after the agreed start time. For
        example, if the session is scheduled for 3 pm, the student is expected
        to attend no later than 3.05 pm. If the student does not attend within
        10 minutes of the agreed start time, the tutor reserves the right to:
      </Typography>
      <List component="ol" sx={{ listStyleType: 'lower-roman', pl: 2, padding:'0 auto' }}>
        <ListItem sx={{ display: 'list-item', padding: '0' }}>
          <ListItemText sx={{padding:'0'}}>
            Terminate the session where the student is the only scheduled attendee, or
          </ListItemText>
        </ListItem>
        <ListItem sx={{ display: 'list-item', padding: '0' }}>
          <ListItemText sx={{padding:'0'}}>
            Continue a Group Session with the other students,
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant='body1' gutterBottom>
        and in either case, in so far as the student is concerned, regard it as
        a completed session, and the full fee is payable, and a prepaid session
        cannot be rescheduled.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) If a Tutor is late to a session, then they will make the time up or
        reschedule it, as will be agreed with the Client.
      </Typography>

      <Typography variant='body1' gutterBottom>
        Last updated: 20th February 2025
      </Typography>
    </Box>
  );
};

export default page;
