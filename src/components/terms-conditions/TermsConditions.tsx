'use client';

import { useTheme, Theme } from '@emotion/react';
import { Link, Typography } from '@mui/material';
import React from 'react';

import {
  Heading,
  SubHeading,
  TermsConditionsContainer,
} from './TermsConditions.style';

const TermsConditions = () => {

  const theme = useTheme() as Theme & { palette: { accent: { main: string } } };

  return (
    <TermsConditionsContainer>
      <Heading variant='h1' gutterBottom>
        <span style={{ color: theme.palette.accent.main }}>Acemyexam</span>
        <br />
        Terms & Conditions
      </Heading>

      <SubHeading variant='h3' gutterBottom>
        1. ABOUT US AND OUR AGREEMENT
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        (1) (a) We are Acemyexam, whose Trading address is at 109 Rampton road,
        Cottenham, Cambridge, UK. We operate the website at www.acemyexam.co.uk.
        Main E-mail address is contact@acemyexam.co.uk. We are not registered
        for VAT.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) These Business Terms supersede anything else and always apply unless
        we’ve agreed something else with you in writing. Together with the
        policies referred to in them and our Tuition Requirement Email(s), they
        form our Agreement with you, the student (person receiving the tuition),
        or with the student’s parent or legal guardian where the student is aged
        under 18. Please email us at contact@acemyexam.co.uk if you have any
        queries about our Agreement.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (2) (a) We operate as an Employment Business. We run our business
        according to mandatory regulations and legislation which applies to how
        we operate our business, including The Conduct of Employment Agencies
        and Employment Businesses Regulations 2003 (as amended).
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) We will confirm how we are working with you in your Tuition
        Requirement Email. You should also read our Working Together Policy
        which forms part of these, our Business Terms. This policy explains what
        information we collect and provide and how we, as a business, work to
        comply with our legal obligations. Please email asma@acemyexam.co.uk if
        you have any queries.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        2. HOW WE WORK TOGETHER
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        (1) We work with you to collect the information we need so that we
        understand each student’s requirements. We then use our knowledge and
        experience to carefully select and match students to Tutors who can
        match those requirements and can provide tutoring and support to help
        each student to achieve the best results that they can. However, we do
        not guarantee nor are responsible for any results from any tuition. If
        you have any queries or concerns regarding our services, please email
        asma@acemyexam.co.uk.
      </Typography>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(2) Accessing Tutoring:</span>(a)
        One-to-one online Sessions – Most of our training is online using Zoom.
        You will need a Zoom account which allows the student to have a
        continuous meeting with the Tutor which lasts at least 1 hour. You can
        access online training by accessing a link in the email your Tutor will
        send to you.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) Group Sessions, which include masterclasses and workshops, are held
        in a group with other students. As applicable, please refer to the
        relevant details for your Group Session on our website or in your
        Tuition Requirement Email. This will also explain whether your sessions
        are online and how to access them, or where they will be held.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (c) You are responsible for all and any costs relating to attendance at
        tutoring sessions.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (3) As an Employment Business, we provide you with all the information
        that you need about relevant tutor(s) and are here to deal with any
        queries you may have. Once you decide to work with a Tutor (Your Tutor),
        we’ll send a Tuition Requirement Email to confirm what’s agreed. We will
        then help you organise sessions. We can also provide additional
        information, such as progress reports. If you want to reschedule a
        session, you can contact the Tutor directly or we will also assist with
        Rescheduling – please{' '}
        <Link
          href='#resch'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          see section 5.
        </Link>
      </Typography>
      <Typography variant='body1' gutterBottom>
        (4) Subject to Third Party rights (for example, Third Parties own the
        Platforms we use), we own the logo, techniques, information, documents,
        and all materials and content, including Digital Content, and any rights
        (such as copyright and other intellectual property rights in the fullest
        sense). You have a licence to use anything we supply for the duration of
        our Agreement with you. However, you can’t share with any other person
        or organisation or allow them to access or use all or any part of for
        any reason, nor can you copy, modify or publish in (such as on social
        media) any way.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (5) Your Information, Data Protection and Confidentiality:
      </Typography>
      <Typography variant='body1' gutterBottom>
        (a) For details about the information (data) that we collect from both
        Tutors, you and the student, please see our{' '}
        <Link
          href='/working-together-policy'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Working Together Policy
        </Link>
        . We rely on all the information and documents that you give us so
        please check that it is complete, accurate and valid.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) We use (process) your data in accordance with our{' '}
        <Link
          href='/privacy-policy'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Privacy Notice
        </Link>
        . Please email us at contact@acemyexam.co.uk. However, please remember
        that anything which you share in a Group Session is not confidential but
        please see{' '}
        <Link
          href='#Group'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          section 4(3)
        </Link>{' '}
        following.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        3. TUTOR RESPONSIBILITIES – WHAT YOU CAN EXPECT FROM YOUR TUTOR
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        All of the carefully selected Tutors we introduce and/or work with have
        agreed the following unless they tell you otherwise:
      </Typography>
      <Typography variant='body1' gutterBottom>
        (1) Your Tutor will agree and confirm the time, location, frequency and
        duration of the tuition sessions with you. Your Tutor has also agreed to
        our{' '}
        <Link
          href='/rescheduling-and-attendance-policy'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Rescheduling and Attendance Policy.
        </Link>
      </Typography>
      <Typography variant='body1' gutterBottom>
        (2) Your Tutor will discuss the structure of sessions with you.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (3) The Tutor will update you about the Student’s progress.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (4) Your Tutor will adhere to a strict professional{' '}
        <Link
          href='https://thetutorsassociation.org.uk/membership/code-of-practice'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Code of Ethics as outlined by The Tutors’ Association.
        </Link>
      </Typography>
      <Typography variant='body1' gutterBottom>
        (5) From time to time, your tutor may provide you with a substituted
        tutor.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        4. YOU AND THE STUDENT’S RESPONSIBILITIES
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        You and, as applicable, the student agree the following:
      </Typography>
      <Typography variant='body1' gutterBottom>
        (1) You understand your obligations to keep students safe and will
        comply with our{' '}
        <Link
          href='/safeguarding-policy'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          {' '}
          Safeguarding Policy.
        </Link>
      </Typography>
      <Typography variant='body1' gutterBottom>
        (2) You will work with the Tutor(s) to identify what specific support
        and guidance that the student needs.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (3) If you/the student is taking part in a Group Session, other students
        may decide to share confidential information, and we would ask you do
        not disclose that information to anyone else.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        5. RESCHEDULING AND ATTENDANCE POLICY
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        If you need to reschedule a session, please refer to our{' '}
        <Link
          href='/rescheduling-and-attendance-policy'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Rescheduling and Attendance Policy.
        </Link>
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        6. CANCELLATIONS
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(1) Cancellations</span> – Subject
        to any tuition packages, such as block booking package where the Client
        has a discount for 10 sessions, which are for fixed or minimum terms,
        you can cancel tuition by giving us one week’s written notice.
      </Typography>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(2) Consumer Cancellations</span>:
        The law gives consumers who buy by email or phone or from a website
        (this is called at a distance) a legal right to change their mind and
        cancel some orders when the consumer is buying from a business. This
        would, for example, include orders for training. The law says that
        someone is a consumer for these purposes when they are buying something
        which isn’t for their “trade, business, craft or profession”. If you
        have this legal right (i.e. you are a consumer and you are buying at a
        distance), then you usually have 14 days from the date after you place
        your order to cancel the order. However, if you use any services, then
        you will have to pay for what you’ve received.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (3) We or a Tutor can cancel tuition by giving you 7 days written notice
        by email.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        7. PAYMENTS
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        (1) We’ll invoice you every month for the fees agreed on the Tuition
        Requirement Email, and you must make payment to us within 5 days.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (2) <span style={{ fontWeight: 'bold' }}>Paying</span>: Payment must be
        made within 5 days of the date of the invoice, in GBP, using Stripe, or
        any other methods detailed on the invoice and inclusive of any
        applicable VAT.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (3) <span style={{ fontWeight: 'bold' }}>Minimum term</span> – Sometimes
        sessions are scheduled for a minimum or fixed term (such as workshops),
        which is the minimum time we will provide services to you. This will be
        detailed on the Website or in your Tuition Requirement Email.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (4)<span style={{ fontWeight: 'bold' }}> Offers</span>: Any offers which
        we may make available (such as Early bird, coupon codes, exclusive
        discounts, promotions or free to access resources) are not
        retrospective, not transferable, can’t be exchanged for cash, and are
        subject to availability and the terms and conditions of that offer. You
        can only use one offer per order.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (5)<span style={{ fontWeight: 'bold' }}> Extras</span>: You will have to
        pay extra if you ask for any Additional Services (such as additional
        tuition) which are not included on the Tuition Requirement Email. We
        will agree a price and payment terms with you before giving any
        additional support.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (6)<span style={{ fontWeight: 'bold' }}> Payment Problems</span>: If
        there’s a problem with payment, such as paying late, we reserve the
        right to:
      </Typography>
      <Typography variant='body1' gutterBottom>
        (a) Immediately, and without liability, either stop or suspend your
        access to any services until we receive full cleared payment. You won’t
        be able to use or access services until we have received full cleared
        payment for all money outstanding to us.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) We charge interest at the rate of 15% per annum from the date that
        your payment is due until we get full cleared payment of the outstanding
        amount, together with any interest or other statutory late payment
        penalty. We may also recover reasonable costs including, but not limited
        to, legal costs and expenses incurred in obtaining payment.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        8. GENERALLY
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(1) Limitation of liability</span>:
        In so far as the law allows, we will never be liable for any indirect,
        incidental or consequential loss or damage, including any economic loss
        or loss of profit or business whatsoever suffered by you or anyone else,
        however it was caused. If we are found liable in any way, then your
        claim would be limited to damages which will not exceed the amount you
        paid for, as applicable, the invoice to which your complaint relates.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (2) Any rights in this agreement are for your sole benefit and can’t be
        shared or transferred in any way.
      </Typography>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(3) Notices</span>: Notices must be
        sent to the email and/or postal addresses provided in the Tuition
        Requirement Email unless we write to with a change, or you email us to
        contact@acemyexam.co.uk. Notices are deemed to be received when sent by:
      </Typography>
      <Typography variant='body1' gutterBottom>
        (a) Email – on the Working Day (any Monday to Friday from 9am to 5pm GMT
        but excluding any public holiday in England) on which they were sent,
        provided the sender has a valid successful delivery receipt.
      </Typography>
      <Typography variant='body1' gutterBottom>
        (b) Post - using any tracked service – on the date that the relevant
        postal service obtains a record of receipt from or on behalf of the
        addressee.
      </Typography>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(4) Waiver</span>: Nothing in our
        Agreement will stop us from enforcing any of our rights in the future.
      </Typography>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(5) Invalidity</span>: Each section
        (clause) or any part at all of our Agreement is to be regarded as
        independent of the others. This means that if any clause or any part at
        all of our Agreement is found to be unenforceable or invalid, it will be
        treated as being cut out (severed) and will not affect the
        enforceability or validity of the rest of our Agreement.
      </Typography>
      <Typography variant='body1' gutterBottom>
        <span style={{ fontWeight: 'bold' }}>(6) Governing Law</span>: Our
        Agreement will be interpreted, construed and enforced in accordance with
        English law and will be subject to the exclusive power (jurisdiction) of
        the English Courts.
      </Typography>
    </TermsConditionsContainer>
  );
};

export default TermsConditions;
