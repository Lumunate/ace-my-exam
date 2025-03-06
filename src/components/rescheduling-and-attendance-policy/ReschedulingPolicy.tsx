import React from 'react'
import { Heading, ReschedulingPolicyContainer, SubHeading } from './ReschedulingPolicy.style'
import { Typography } from '@mui/material'

const ReschedulingPolicy = () => {
  return (
    <ReschedulingPolicyContainer>
        <Heading variant="h1" gutterBottom>
        Acemyexam Rescheduling and Attendance Policy
      </Heading>

      <SubHeading variant="h3" gutterBottom>
        (1) Rescheduling Policy:
      </SubHeading>
      <Typography variant="body1" gutterBottom>
        (a) From time to time, a Tutor may need to cancel, rearrange a session, or arrange for the session to be taken by another Tutor, and neither we nor the Tutor are responsible for any consequences because of this.
      </Typography>
      <Typography variant="body1" gutterBottom>
        (b) One-to-one Sessions:
      </Typography>
      <Typography variant="body1" gutterBottom>
        (i) Clients can rearrange sessions by emailing their Tutor directly using the information in the Tuition Confirmation. As an Employment Business, you can also contact us directly by emailing contact@acemyexam.co.uk or calling 07379065363.
      </Typography>
      <Typography variant="body1" gutterBottom>
        (ii) A Client must give the Tutor at least 24 hours’ notice so they are not charged for that session. Prepaid sessions will be rescheduled.
      </Typography>
      <Typography variant="body1" gutterBottom>
        (iii) If a Client gives less than 24 hours, then the Client must pay for the full rate for that session and, if prepaid, will not be rescheduled.
      </Typography>
      <Typography variant="body1" gutterBottom>
        (iv) A Client will always be responsible for payment of any non-refundable expenses associated if they reschedule or cancel any session.
      </Typography>
      <Typography variant="body1" gutterBottom>
        (c) Group Sessions – Group Sessions can’t usually be rescheduled, but if a Client misses a session, they may be able to participate in a substituted session, but we are unable to guarantee this. Please email contact@acemyexam.co.uk in advance if you need to reschedule a group session.
      </Typography>

      <SubHeading variant="h3" gutterBottom>
        (2) Being Late:
      </SubHeading>
      <Typography variant="body1" gutterBottom>
        (a) Students are expected to attend a tutoring session (whether it is an individual session or as part of a Group session) no later than 5 minutes after the agreed start time. For example, if the session is scheduled for 3 pm, the student is expected to attend no later than 3.05 pm. If the student does not attend within 10 minutes of the agreed start time, the tutor reserves the right to:
      </Typography>
      <Typography variant="body1" gutterBottom>
        (i) Terminate the session where the student is the only scheduled attendee, or
      </Typography>
      <Typography variant="body1" gutterBottom>
        (ii) Continue a Group Session with the other students,
      </Typography>
      <Typography variant="body1" gutterBottom>
        and in either case, in so far as the student is concerned, regard it as a completed session, and the full fee is payable, and a prepaid session cannot be rescheduled.
      </Typography>
      <Typography variant="body1" gutterBottom>
        (b) If a Tutor is late to a session, then they will make the time up or reschedule it, as will be agreed with the Client.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Last updated: 20th February 2025
      </Typography>
    </ReschedulingPolicyContainer>
  )
}

export default ReschedulingPolicy
