'use client';

import { useTheme, Theme } from '@emotion/react';
import { Link, Typography } from '@mui/material';
import React from 'react';

import {
  Heading,
  SubHeading,
  TutorTermConditionContainer,
} from './TutorTermCondition.style';

const TutorTermCondition = () => {

  const theme = useTheme() as Theme & { palette: { accent: { main: string } } };

  return (
    <TutorTermConditionContainer>
      <Heading variant='h1'>Acemyexam – Tutor Terms and Conditions</Heading>

      {/* Updated Date */}
      <Typography
        variant='body1'
        sx={{ marginBottom: '1rem', fontStyle: 'italic' }}
      >
        These terms were updated on the 17th January 2025
      </Typography>

      {/* Section 1 */}
      <SubHeading
        variant='h3'
        sx={{ marginBottom: '1rem', paddingTop: '24px' }}
      >
        1. About Us and Our Agreement
      </SubHeading>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (a) We are Acemyexam, whose Trading address is at 109 Rampton road,
        Cottenham, Cambridge, CB24 8TJ, UK. Main E-mail address is
        contact@acemyexam.co.uk
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) These Tutor Terms supersede anything else and always apply unless
        we’ve agreed something else with you in writing. Together with the
        policies referred to in them the Key Information Document and our Tutor
        Assignment(s), they form our Agreement with you, the Tutor providing
        tuition services.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (2) You are the Tutor, operating as a business, whose details appear in
        the Key Information Document and in each accepted Tutor Assignment.
        These documents, together with our Tutor Terms, forms our Agreement with
        you.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (3) <span style={{ fontWeight: 'bold' }}>Contact:</span> We will each
        use the contact details provided in the Key Information Document.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (4) (a) We operate as an Employment Business according to mandatory
        regulations and legislation (Legislation) which applies to our business,
        including The Conduct of Employment Agencies and Employment Businesses
        Regulations 2003, as amended.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) You must read our Working Together Policy which forms part of these,
        our Tutor Terms. This policy explains what information we collect and
        provide and explains how we, as a business, work to comply with our
        legal obligations.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (c) If you have any queries whatsoever relating to us, this agreement or
        any aspect of our business, including how we operate please email
        contact@acemyexam.co.uk.
      </Typography>

      {/* Section 2 */}
      <SubHeading variant='h3' sx={{ marginBottom: '1rem' }}>
        2. How It Works
      </SubHeading>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        1(a) We organise for Tutors operating as independent businesses, to
        ultimately provide tuition to Clients, based on the Client’s
        requirements and information we collect (see our Working Together
        Policy). A Client is a person or organisation who requires tuition
        services either for themselves or for someone they are responsible for.
        As an Employment Business we arrange Tutors and provide a support
        service.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) When a Client wants a Tutor to provide tuition services, the
        approved Tutor matching the Client’s requirements is offered a Tutor
        Assignment. The Tutor then decides whether or not they wish to accept
        that Tutor Assignment. The Client pays fees which include our Tutor
        Agency fees (for arranging tuition) and the Tutor’s fees (for providing
        tuition). Please also see{' '}
        <Link
          href='#clause22'
          sx={{
            color: theme.palette.accent.main,
            textDecoration: 'none',
            '&:hover': { color: 'black' },
          }}
        >
          section 2(2)
        </Link>
        .
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (c) We operate using the Tutor Cruncher platform which provides a
        mechanism for Tutors to schedule sessions and Clients to access them
        online, using the integrated Zoom platform.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (d){' '}
        <span style={{ fontWeight: 'bold' }}>No mutuality of obligation</span> –
        We are not obliged to offer, and you are not obliged to accept, any
        Tutor Assignment. For the avoidance of doubt, we both agree and intend
        that we do not create any mutuality of obligation at any time.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (2) (a) As an Employment Business we provide both you and the Client
        with the relevant information. We help organise tuition sessions and
        assist you both you with sharing additional information, such as
        progress reports and rescheduling (see our Rescheduling and Attendance
        Policy)
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) As an Employment Business we will deal with collection of payments
        of fees from Clients and we will pay you directly -please see section
        3(1) for details of this.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (3)<span style={{ fontWeight: 'bold' }}> Providing Training</span> (a)
        Online Sessions – You will be provided with an account on Tutor
        Cruncher. This will enable you to schedule sessions
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (d) Other than us providing you with a Tutor Cruncher account you are
        responsible for all and any costs relating to attendance at tutoring
        sessions.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (4) (a) You confirm that you are a Tutor operating as an independent
        properly registered business{' '}
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          within the United Kingdom
        </span>{' '}
        and as such are responsible for any registration, completion of any
        forms and documentation and the payment of any tax, national insurance
        contributions and any similar Government or properly imposed taxes or
        liabilities for you or anyone who works for or with you (your
        representative), which may be payable as a result of any Fees or
        payments made to you under any Tutor Assignment. You agree to provide,
        as applicable, evidence of limited company incorporation or of trading
        as a business to us as we require and may request to meet our own
        obligations as a business.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) You understand that as an independent business, neither you, nor any
        representative, will be our worker/employee and will not be held out
        such, and will never be entitled to any rights or benefits whatsoever
        that workers/employees may have and that at all times you will keep us
        fully indemnified against all actions, claims, demands, assessments,
        liability, costs and expenses arising in respect of any allegation of
        your employment or, as applicable, those whom you employ or provide
        services to you.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (c) If you accept a Tutor Assignment (whether by signing or starting to
        provide the services), as an Employment Business, a contract for the
        tuition services detailed in that Tutor Assignment will be formed
        between us, subject to these Terms. You understand that there is no
        contract or agreement between us when you are not providing your
        services under an accepted Tutor Assignment.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (d) Neither these Terms nor any Tutor Assignment form a contract between
        us and any individual person (whether or not they are your
        representative) and any obligations and liabilities as an employer will
        always be yours.
      </Typography>

      {/* Section 3 */}
      <SubHeading variant='h3' sx={{ marginBottom: '1rem' }}>
        3. Invoices/Payments
      </SubHeading>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        Unless we agree something different in writing, as an Employment
        Business:
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (1) Payment for services you provide under an accepted Tutor Assignment
        will be paid in arrears for the Fees agreed within the relevant
        individual Tutor Assignment.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (2) You will send your invoice before or on the last working day of each
        calendar month for tuition services you have provided under a Tutor
        Assignment. A Working Day means any Monday to Friday inclusive, from 9am
        to 6pm and Saturday 12pm to 4pm, but excluding all public holidays in
        England, unless we agree otherwise. If you are providing services for
        less than one month, you must provide the invoice on the last working
        day you provide tuition.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (3) To receive payment from us, the invoice must detail dates, lesson
        times and prices.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (a) Include any claim for expenses agreed on a Tutor Assignment.
        Expenses must be Included on an invoice within 30 days of the expense
        being incurred and for any expenses other than an agreed mileage rate
        incurred for travelling, be accompanied by a valid receipt.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (4) Where we disagree with the amount due to you in respect of a
        submitted completed lesson, we will raise queries directly with you
        within 7 days of the receipt of that invoice. In so far as the
        Legislation allows, we reserve the right to withhold payment of any
        amount in dispute until that dispute has been resolved to our
        satisfaction.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (5) We will usually pay each accepted invoice within 14 days of the date
        of the invoice{' '}
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          by Bank Transfer
        </span>
        . In accordance with the Legislation you will be paid for tuition
        services you have provided, irrespective of whether the Client has paid
        us.
      </Typography>

      {/* Section 4 */}
      <SubHeading variant='h3' sx={{ marginBottom: '1rem' }}>
        4. Your Responsibilities
      </SubHeading>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (1) You agree to provide tuition services in a professional and proper
        manner with reasonable care and skill. You confirm that you:
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (a) Hold the relevant qualifications and expertise to provide the
        Tuition services and that you
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (i) will provide us with a current and valid Enhanced Disclosure and
        Barring Services, and, where relevant, an Overseas Record Certificate
        (relating to any periods where you have worked outside the UK) and all
        the additional the information required in section 2 and 3 of our
        Working Together Policy or as required by Legislation and
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (ii) will hold a current and valid Enhanced Disclosure and Barring
        Services at any time you are providing tuition services under a Tutor
        assignment and
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) Will not accept a Tutor Assignment if you cannot provide the
        services it requires and
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (c) Will abide by any legislation, regulations and best practice which
        apply to tuition services you provide. In particular, you agree to
        adhere to the professional{' '}
        <Link
          href='https://thetutorsassociation.org.uk/membership/code-of-practice/'
          sx={{
            color: theme.palette.accent.main,
            textDecoration: 'none',
            '&:hover': { color: 'black' },
          }}
        >
          Code of Ethics
        </Link>{' '}
        as outlined by The Tutors’ Association to ensure that safeguarding is of
        paramount importance and
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (d) Will not engage in any conduct which may be detrimental to our
        interests or that of any Client.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (2) Unless otherwise agreed in writing, you must provide any equipment
        required to perform the services at your own expense and maintain it
        accordingly.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (3) You agree to co-operate with any reasonable request made within the
        scope of tuition but you decide how best tuition is provided and will
        have autonomy over your teaching. We will not attempt to exercise
        direction, control or supervision over you.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (4) You agree to
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (a) make initial contact with a Client within 24 hours of accepting a
        Tutor Assignment.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) keep us informed about when tuition sessions take place and other
        relevant details by the Tutor Cruncher platform and completing all the
        relevant details required.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (c) You agree to adhere to our{' '}
        <Link
          href='/rescheduling-and-attendance-policy'
          sx={{
            color: theme.palette.accent.main,
            textDecoration: 'none',
            '&:hover': { color: 'black' },
          }}
        >
          Rescheduling and Attendance Policy.
        </Link>
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (d) To adhere to the Tutor Responsibilities in Section 3 of the{' '}
        <Link
          href='/tuition-terms-conditions'
          sx={{
            color: theme.palette.accent.main,
            textDecoration: 'none',
            '&:hover': { color: 'black' },
          }}
        >
          Client Terms
        </Link>{' '}
        – Tutor Responsibilities
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (5) You will keep reasonable, proper and sufficiently detailed records
        relating to the tuition services and will promptly and reasonably
        provide them to both us and any relevant Client.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (6) As an independent business you agree to keep us indemnified and hold
        us harmless against all actions, claims, demands, settlements, liability
        costs and expenses arising out of or in connection with any breach of
        our agreement or any Tutor Assignment by you.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (7)(a) Once you accept a Tutor Assignment, in consideration of us paying
        you the Fees, you will provide the services detailed in each accepted
        Tutor Assignment. As an independent business you can provide a
        substitute tutor but should consider your student’s requirements.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) You agree that you will always be solely liable for any services you
        provide (including, but not limited to, services provided by your
        representative or substitute) and will fully indemnify us – see section
        . Please see section 4(6).
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (c) You understand HMRC off-payroll working rules (IR35) including the
        HMRC guidance, Income Tax (Earnings and Pensions) Act 2003, and the
        Social Security Contributions (Intermediaries) Regulations 2000, and
        agree, where applicable, you will work with us to comply with the law.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (8) You understand that we have contracts with Clients to whom you may
        be providing services, and we assist you with any contractual dealings,
        such as rescheduling sessions.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (9) Complaints (a) You agree to always co-operate with us to deal with
        any complaints and will provide information and documents to us as and
        when reasonably required.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) Where any incident occurs which, you reasonably anticipate is likely
        to be the subject of a complaint or any Client raises any complaint
        directly with you, then you agree to email us at with full details
        within{' '}
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          1 working day
        </span>{' '}
        of you becoming aware of the issue/complaint.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (c) We will deal with all and any complaints in a reasonable and fair
        way. Our decision will be a final decision. We advise you of any
        complaints which affect you no later than 7 days from the date we become
        aware of that complaint.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (10){' '}
        <span style={{ fontWeight: 'bold' }}>
          Confidentiality and Data Protection
        </span>{' '}
        – (a) Unless required to by law you agree to keep all information
        relating to any Client and/or Tutor Assignment confidential and only use
        it to provide tuition services to that relevant Client.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) You will at all times comply with the Data Protection law which is
        current and valid in the UK at the time you provide your services. This
        includes but is not limited to your obligations regarding any individual
        who assists and represents you to provide your services, use, sharing,
        storage, assessment, audit and monitoring, data breaches, data
        protection, removal and return of data.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (11) Unless we agree otherwise on a Tutor Assignment, during the term of
        each and every Tutor Assignment, you will, at your own expense, maintain
        current and valid Indemnity Insurance, Public Liability Insurance and
        any other such insurances, including those as required by any applicable
        law and as appropriate in respect of your obligations under any Tutor
        Assignment, with an insurance company of repute. Such insurances will
        include, but not be limited to, loss or damage as a result of the
        services, loss or damage to person, property, equipment or plant and
        materials and third party liability. The indemnity limit for each and
        every claim shall be not less than one million pounds and you agree to
        provide us with evidence of such insurance if we reasonably request it.
      </Typography>

      {/* Section 5 */}
      <SubHeading variant='h3' sx={{ marginBottom: '1rem' }}>
        5. Rescheduling and Attendance
      </SubHeading>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        As a Tutor you agree to our{' '}
        <Link
          href='/rescheduling-and-attendance-policy'
          sx={{
            color: theme.palette.accent.main,
            textDecoration: 'none',
            fontStyle: 'italic',
            fontWeight: 'bold',
            '&:hover': { color: 'black' },
          }}
        >
          Rescheduling and Attendance Policy
        </Link>{' '}
        on the basis that it makes it easier for you, the Client and for us to
        all be clear about rescheduling and attendance.
      </Typography>

      {/* Section 6 */}
      <SubHeading variant='h3' sx={{ marginBottom: '1rem' }}>
        6. Ending Our Agreement or A Tutor Assignment
      </SubHeading>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        Without prejudice to any other rights,
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (1) You can end our agreement by giving us two weeks written notice.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (2) We can end a Tutor Assignment by giving you 14 days written notice.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (3) We both agree to work together to ensure a smooth transition to any
        Tutor Assignment.
      </Typography>

      {/* Section 7 */}
      <SubHeading variant='h3' sx={{ marginBottom: '1rem' }}>
        7. Generally
      </SubHeading>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (1) Any rights in this agreement are for your sole benefit and can’t be
        shared or transferred in any way.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (2) <span style={{ fontWeight: 'bold' }}>No partnership</span> – You
        agree that nothing in our Agreement will be deemed to create any
        partnership, joint venture or other agency relationship between us.
        Neither of us will
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (3) <span style={{ fontWeight: 'bold' }}>Notices</span>: Notices must be
        sent to the email and/or postal addresses provided in the{' '}
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          Tuition Assignment
        </span>{' '}
        unless we write to with a change, or you email us to
        contact@acemyexam.co.uk. Notices are deemed to be received when sent by
        :-
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (a) Email – on the Working Day any Monday To Friday from 9am to 5pm GMT
        but excluding any public holiday in England) on which they were sent,
        provided the sender has a valid successful delivery receipt.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (b) Post -using any tracked service – on the date that the relevant
        postal service obtains a record of receipt from or on behalf of the
        addressee.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (4) <span style={{ fontWeight: 'bold' }}>Force Majeure</span> – Neither
        of us will be liable for any delay or failure to perform any of our
        obligations if the delay or failure results from events or circumstances
        outside our reasonable control including, but not limited to, acts of
        God, pandemic, accidents, war, fire, strikes, communications failure
        (including telecommunications or computer), breakdown of plant or
        machinery or shortage or unavailability of raw materials from a natural
        source of supply, and are entitled to a reasonable extension of our
        obligations.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (5) <span style={{ fontWeight: 'bold' }}>Waiver</span>: Nothing in our
        Agreement will stop us from enforcing any of our rights in the future.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (6) <span style={{ fontWeight: 'bold' }}>Invalidity</span>: Each section
        (clause) or any part at all of our Agreement is to be regarded as
        independent of the others. This means that if any clause or any part at
        all of our Agreement is found to be unenforceable or invalid, it will be
        treated as being cut out (severed) and will not affect the
        enforceability or validity of the rest of our Agreement.
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        (7) <span style={{ fontWeight: 'bold' }}>Governing Law</span>: Our
        Agreement will be interpreted, construed and enforced in accordance with
        English law and will be subject to the exclusive power (jurisdiction) of
        the English Courts.
      </Typography>

      {/* Contact Information */}
      <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
        Contact us
      </Typography>
      <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
        contact@acemyexam.co.uk
      </Typography>
    </TutorTermConditionContainer>
  );
};

export default TutorTermCondition;
