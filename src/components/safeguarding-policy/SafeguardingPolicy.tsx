'use client';

import { Theme, useTheme } from '@emotion/react';
import { Link, Typography } from '@mui/material';
import React from 'react';

import {
  Heading,
  SafeguardingPolicyContainer,
  SubHeading,
} from './SafeguardingPolicy.style';

const SafeguardingPolicy = () => {

  const theme = useTheme() as Theme & { palette: { accent: { main: string } } };

  return (
    <SafeguardingPolicyContainer>
      <Heading variant='h1' gutterBottom>
        <span style={{ color: theme.palette.accent.main }}>Acemyexam</span>
        <br />
        Safeguarding Policy
      </Heading>

      <SubHeading variant='h3' gutterBottom>
        Child Protection and Safeguarding Policy
      </SubHeading>

      <SubHeading variant='h3' gutterBottom>
        INTRODUCTION
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        Acemyexam exists to provide an introductory service between
        self-employed private tutors and prospective students, and to assist in
        sourcing experienced and reputable tutors for companies and
        institutions.
      </Typography>
      <Typography variant='body1' gutterBottom>
        We do not maintain educational premises, and we do not hold or arrange
        events at which children are likely to be present. Many of the tutors we
        work with are self-employed, and are responsible for the conduct of
        their own tuition. The majority of the students using our services are
        in full-time education, and the majority of tuition arranged through our
        company takes place online.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        DEFINITIONS
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        “Child” is defined as a person who has not yet reached their 18th
        birthday (i.e. is under 18).
      </Typography>
      <Typography variant='body1' gutterBottom>
        “Adult at risk” is defined by the{' '}
        <Link
          href='https://www.legislation.gov.uk/ukpga/2014/23/contents'
          sx={{
            color: theme.palette.accent.main,
            textDecoration: 'none',
            fontWeight: 'boldF',
          }}
        >
          Care Act 2014
        </Link>{' '}
        as an adult aged 18 or over who (a) has needs for care and support
        (whether or not the authority is meeting any of those needs), (b) is
        experiencing, or is at risk of, abuse or neglect, and (c) as a result of
        those needs is unable to protect himself or herself against the abuse or
        neglect or the risk of it.
      </Typography>
      <Typography variant='body1' gutterBottom>
        The term “young person” is occasionally used as an additional term when
        describing children, in recognition that this is a widely used term to
        describe those aged under 18 but over 16.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        SCOPE
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        This policy is intended to promote the welfare of children and adults at
        risk. It is also intended to act as a guide for the self-employed tutors
        we represent, introduce or work with in any other legitimate manner, to
        help them follow our approach to safeguarding.
      </Typography>
      <Typography variant='body1' gutterBottom>
        This policy applies to anyone working with or on behalf of our company,
        including senior managers, directors, employees, contractors,
        volunteers, and tutors. We expect any tutor, mentor, coach, or other
        individuals who we introduce (including where we act as an employment
        agency) to comply with this policy, wherever possible and appropriate,
        and to take prompt and effective action in the event of a safeguarding
        concern arising.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        LEGAL FRAMEWORK
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        This policy has been drawn up on the basis of legislation, policy, and
        guidance that seeks to protect children in the United Kingdom. However,
        it is understood and intended that this policy will apply to our
        employees, agents, contractors, and other connected parties wherever
        they work across the world. In this event, we expect the policy to be
        followed to the fullest extent permissible in any given jurisdiction,
        with the intention of safeguarding children and young people. Where we
        operate outside of the UK, we undertake to:
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Comply with local laws, regulations, instructions from law enforcement
        agencies, rulings by any legitimate judicial authority or similar.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Refer any matters of criminal conduct, especially in relation to
        safeguarding, (as applicable in the local jurisdiction) to the local
        authorities responsible for policing and law enforcement.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Wherever local legislation permits, or is ambiguous or indifferent
        (for example, but not limited to, activity in disputed territories,
        activities ongoing during a change of government or political structure,
        and activities taking place when local legislation is amended, added to,
        or repealed), we undertake to follow this guidance to the fullest extent
        possible in order to safeguard children and adults at risk (according to
        the broadest definition applied by either local or UK legislation).
      </Typography>
      <Typography variant='body1' gutterBottom>
        A summary of the key UK legislation and guidance is available from the{' '}
        <Link
          href='https://learning.nspcc.org.uk/safeguarding-child-protection'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          NSPCC Website
        </Link>
        .
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        SUPPORTING DOCUMENTS
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        This policy statement should be read alongside our Terms and Conditions
        and Privacy Policy, and the following policy documents, included as
        appendices:
      </Typography>
      <Typography variant='body1' gutterBottom>
        •{' '}
        <Link
          href='https://www.gov.uk/government/publications/keeping-children-safe-in-out-of-school-settings-code-of-practice'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          After-school clubs, community activities, and tuition: safeguarding
          guidance for providers – GOV.UK{' '}
        </Link>{' '}
        (England only)
      </Typography>
      <Typography variant='body1' gutterBottom>
        •{' '}
        <Link
          href='https://www.gov.uk/government/publications/what-to-do-if-youre-worried-a-child-is-being-abused--2'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          What to do if you’re worried a child is being abused?: advice for
          practitioners (HM Gov)
        </Link>
      </Typography>
      <Typography variant='body1' gutterBottom>
        •{' '}
        <Link
          href='https://www.gov.uk/government/publications/keeping-children-safe-in-education--2'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Keeping Children Safe in Education
        </Link>{' '}
        (England only)
      </Typography>
      <Typography variant='body1' gutterBottom>
        •{' '}
        <Link
          href='https://www.gov.uk/government/publications/working-together-to-safeguard-children--2'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Working Together to Safeguard Children
        </Link>{' '}
        (England only)
      </Typography>
      <Typography variant='body1' gutterBottom>
        •
        <Link
          href='https://www.legislation.gov.uk/ukpga/2014/23/contents/enacted/data.htm'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          {' '}
          Care Act 2014
        </Link>{' '}
        (England and Wales only)
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Role description for the designated safeguarding lead
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Recruiting the right people to volunteer or work with children
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Responding to concerns about a child’s welfare
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Storing child protection records
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Code of conduct for all staff and volunteers
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Managing concerns about or allegations made against staff or tutors
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Managing concerns about or allegations made against a child or young
        person
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Keeping children safe online
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Whistleblowing and complaints
      </Typography>
      <Typography variant='body1' gutterBottom>
        We recognise that:
      </Typography>
      <Typography variant='body1' gutterBottom>
        • The welfare of children is paramount in all the work we do and in all
        the decisions we take.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Working in partnership with children, young people, their parents,
        carers, and other agencies is essential in promoting young people’s
        welfare.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • All children, regardless of age, disability, gender reassignment,
        race, religion or belief, sex, or sexual orientation have an equal right
        to protection from all types of harm or abuse.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Some children are additionally vulnerable because of the impact of
        previous experiences, their level of dependency, communication needs, or
        other issues.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Extra safeguards may be needed to keep children who are additionally
        vulnerable safe from abuse.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Adults may also be at risk, for a variety of reasons including (but
        not limited to) age and disability, and are deserving of the same care,
        attention, and protection.
      </Typography>
      <Typography variant='body1' gutterBottom>
        We will seek to keep children and young people safe by:
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Valuing, listening to, and respecting them.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Appointing a designated child protection lead for children and young
        people.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Adopting child protection and safeguarding best practice through our
        policies, procedures, and code of conduct for staff and volunteers.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Developing and implementing an effective online safety policy and
        related procedures.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Providing effective management for staff and volunteers through
        supervision, support, training, and quality assurance measures so that
        all staff and tutors know about and follow our policies, procedures, and
        behavior codes confidently and competently.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        Contact details
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        Designated safeguarding lead:
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Name: Asma Chaudhri
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Role: Owner and Lead Tutor
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Phone: 0737 9065363
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Email:
        <Link
          href='mailto:help@nspcc.org.uk'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          {' '}
          asma@acemyexam.co.uk
        </Link>
      </Typography>
      <Typography variant='body1' gutterBottom>
        NSPCC Helpline
      </Typography>
      <Typography variant='body1' gutterBottom>
        0808 800 5000 – Open 10am-4pm Monday to Friday
      </Typography>
      <Typography variant='body1' gutterBottom>
        <Link
          href='mailto:help@nspcc.org.uk'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          {' '}
          help@nspcc.org.uk
        </Link>{' '}
        – email 24 hours a day
      </Typography>
      <Typography variant='body1' gutterBottom>
        If a child, young person, or any person is in immediate danger, call 999
        (for a person in the UK).
      </Typography>

      <Typography variant='body1' gutterBottom>
        This policy, and our good practice, will be reviewed annually.
      </Typography>
      <Typography variant='body1' gutterBottom>
        This policy was last reviewed on: 20th February 2025
      </Typography>
      <Typography variant='body1' gutterBottom>
        Signed: Asma Chaudhri
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        Appendices
      </SubHeading>
      <SubHeading variant='h3' gutterBottom>
        ROLE DESCRIPTION FOR THE DESIGNATED SAFEGUARDING LEAD
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        Purpose of the Role
      </Typography>
      <Typography variant='body1' gutterBottom>
        • To take the lead in ensuring that appropriate arrangements for keeping
        children and young people safe are in place at the company.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • To promote the safety and welfare of children and young people
        involved in the company’s activities at all times.
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }} variant='body1' gutterBottom>
        Duties and responsibilities
      </Typography>
      <Typography variant='body1' gutterBottom>
        1. Take a lead role in developing and reviewing the company’s
        safeguarding and child protection policies and procedures.
      </Typography>
      <Typography variant='body1' gutterBottom>
        2. Take a lead role in implementing Acemyexam’s safeguarding and child
        protection policies and procedures: ensuring all safeguarding and child
        protection issues concerning children and young people who take part in
        Acemyexam’s activities are responded to appropriately.
      </Typography>
      <Typography variant='body1' gutterBottom>
        3. Make sure that everyone working with or for children and young people
        at Acemyexam, including the board of directors, understands the
        safeguarding and child protection policy and procedures and knows what
        to do if they have concerns about a child’s welfare.
      </Typography>
      <Typography variant='body1' gutterBottom>
        4. Make sure children and young people who use the company’s services,
        and their parents, know who they can talk to if they have a welfare
        concern and understand what action the organisation will take in
        response.
      </Typography>
      <Typography variant='body1' gutterBottom>
        5. Receive and record information from anyone who has concerns about a
        child who uses the company’s services, and ensure reports are stored
        securely.
      </Typography>
      <Typography variant='body1' gutterBottom>
        6. Take the lead on responding to information that may constitute a
        child protection concern, including a concern that an adult involved
        with Acemyexam may present a risk to children or young people. This
        includes:
      </Typography>
      <Typography variant='body1' gutterBottom>
        1. assessing and clarifying the information – not investigating
      </Typography>
      <Typography variant='body1' gutterBottom>
        2. making referrals to statutory organisations as appropriate
      </Typography>
      <Typography variant='body1' gutterBottom>
        3. consulting with and informing the relevant members of the
        organisation’s management
      </Typography>
      <Typography variant='body1' gutterBottom>
        4. following the organisation’s safeguarding policy and procedures.
      </Typography>
      <Typography variant='body1' gutterBottom>
        5. Liaise with, pass on information to and receive information from
        statutory child protection agencies such as:
      </Typography>
      <Typography variant='body1' gutterBottom>
        6. the Local Children’s Safeguarding Partnership (LSCP)
      </Typography>
      <Typography variant='body1' gutterBottom>
        7. the Local Authority Designated Officer (LADO)
      </Typography>
      <Typography variant='body1' gutterBottom>
        8. the police.
      </Typography>
      <Typography variant='body1' gutterBottom>
        This includes making formal referrals to agencies when necessary.
      </Typography>
      <Typography variant='body1' gutterBottom>
        8. Consult the NSPCC Helpline when support is needed, by calling 0808
        800 5000 (10am-4pm, Mon-Fri) or emailing help@nspcc.org.uk.
      </Typography>
      <Typography variant='body1' gutterBottom>
        9. Store and retain child protection records according to legal
        requirements and the organisation’s safeguarding and child protection
        policy and procedures.
      </Typography>
      <Typography variant='body1' gutterBottom>
        10. Work closely with the company directors to ensure they are kept up
        to date with safeguarding issues and are fully informed of any concerns
        about organisational safeguarding and child protection practice.
      </Typography>
      <Typography variant='body1' gutterBottom>
        11. Report regularly to the company directors on issues relating to
        safeguarding and child protection, to ensure that child protection is
        seen as an ongoing priority issue and that safeguarding and child
        protection requirements are being followed at all levels of the
        organisation.
      </Typography>
      <Typography variant='body1' gutterBottom>
        12. Be familiar with and work within inter-agency child protection
        procedures developed by the local child protection agencies.
      </Typography>
      <Typography variant='body1' gutterBottom>
        13. Be familiar with and work within inter-agency child protection
        procedures developed by any educational settings we work in (e.g.
        schools) and share these with Acemyexam staff working in those places –
        seeking the name and contact details of the safeguarding lead in the
        setting and how to report any concerns, then sharing this with Acemyexam
        staff before they start work. Make the setting aware that Acemyexam also
        have safeguarding policies and part of working together means that as
        well as reporting concerns to them, staff may make reports to Acemyexam
        as well, and these may be passed on to other authorities. Share DBS
        status of staff/volunteers with any settings they may go to work in –
        this should be made clear to all staff/volunteers when working for
        Acemyexam.
      </Typography>
      <Typography variant='body1' gutterBottom>
        14. Be familiar with issues relating to child protection and abuse, and
        keep up to date with new developments in this area.
      </Typography>
      <Typography variant='body1' gutterBottom>
        15. Attend training in issues relevant to child protection and share
        knowledge from that training with everyone who works or volunteers with
        or for children and young people at Acemyexam.
      </Typography>
      <Typography variant='body1' gutterBottom>
        16. Attend team meetings, supervision sessions, and management meetings
        as arranged.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        RESPONDING TO CONCERNS ABOUT THE WELFARE OF A CHILD OR ADULT AT RISK
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        Acemyexam takes safeguarding seriously and staff will be trained to
        notice signs where the welfare of a child or adult at risk may be at
        risk. Staff and volunteers for Acemyexam should report their concerns
        directly to the safeguarding lead asma@acemyexam.co.uk.
      </Typography>
      <Typography variant='body1' gutterBottom>
        It is important to remember that perpetrators can be adults but they can
        also be other young people – there is no specific identity of a
        perpetrator.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Any concerns should be reported without delay to allow those reporting
        to make the most accurate report of what raised the concern – delaying
        making a report can lead to forgotten or altered details.
      </Typography>
      <Typography variant='body1' gutterBottom>
        All concerns should include only the facts of what raised the concern.
        Assumptions or interpretations should not be included. For example, if a
        person was crying the report should state that they were crying, not
        that they were sad or upset as this is an interpretation of the
        situation.
      </Typography>
      <Typography variant='body1' gutterBottom>
        If there are concerns about a child or an adult considered to be at risk
        or a disclosure is made by them, it should be taken seriously and
        listened to. It is important not to ask leading questions, any questions
        should be very open and not suggestive of anything. For example, if they
        say “ [name] hurt me yesterday”, responding “did they hit you?” would
        not be appropriate, but repeating back “how did they hurt you?” would
        allow the person to respond openly in their own words.
      </Typography>
      <Typography variant='body1' gutterBottom>
        It is very important to never promise to keep things secret, or not to
        tell others. Instead, we should be open with children and adults at risk
        so that they can talk to us, but if we have concerns for their welfare,
        we might have to talk to others. It should be made clear that this will
        only be done with a view to keeping them safe and getting them support.
      </Typography>
      <Typography variant='body1' gutterBottom>
        It is rare that we can be 100% sure that something is or is not taking
        place, but it is not our place to investigate. The role of those working
        with children is to be aware of the signs that welfare may be at risk
        and to report those concerns to those with the authority and experience
        in doing so – such as the Local Children’s Safeguarding Partnership or
        the police. In this way, we safeguard children and allow any
        investigations to be done through the proper channels.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        Who to report to
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        Who to report concerns to will depend on the situation.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Reports about concerns raised whilst working in the capacity of staff or
        volunteering with Acemyexam can be made directly to the safeguarding
        lead. This should be done by completing the form and sending it securely
        to the safeguarding email address (or handed directly to the
        safeguarding lead/deputy lead if seeing them in person).
      </Typography>
      <Typography variant='body1' gutterBottom>
        If working through Acemyexam, but in a school, college, or other
        educational settings, their internal safeguarding procedures should be
        followed and a report to Acemyexam should be made as normal. This should
        be shared with the safeguarding lead at the setting so that they are
        aware.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Tutors who work with children or adults at risk – online or in person
        (including in a family-based residential setting) – are encouraged to
        report directly to the Local Children’s Safeguarding Partnership (LCSP)
        or Adult Safeguarding Board as appropriate where the child or adult at
        risk lives, and/or report to the{' '}
        <Link
          href='https://www.nspcc.org.uk/about-us/contact-us/'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          NSPCC helpline
        </Link>{' '}
        on 0808 800 5000 (Mon-Fri, 10am-4pm). If the person they are concerned
        about lives abroad, they should try to contact the local authorities
        where that person lives as this is where the concern will need to be
        dealt with.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Note that there are some occasions where the police should be contacted,
        as well as reports being made. If there is reason to believe the child
        or adult at risk is in immediate danger, the police can be contacted. A
        report should be made in the usual way to safeguarding leads/bodies, but
        the police can be contacted in order to protect that person from harm.
      </Typography>
      <Typography variant='body1' gutterBottom>
        If it is ever unclear about who to report to, or how, instead of leaving
        the concern unreported, it is important to check. For staff/volunteers
        of Acemyexam, this can be the safeguarding lead or deputy lead. For
        those who work for themselves, this can be checked with the NSPCC
        helpline.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        STORING CHILD PROTECTION RECORDS
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        GDPR does not change the way child protection records should be stored.
        Acemyexam team will follow the guidance for storing data –{' '}
        <Link
          href='https://learning.nspcc.org.uk/research-resources/briefings/child-protection-records-retention-storage-guidance'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          outlined by the NSPCC
        </Link>
        .
      </Typography>
      <Typography variant='body1' gutterBottom>
        When Acemyexam works with others (including children and adults at risk,
        and their carers), Acemyexam may collect and store data about these
        people in order to reasonably provide services.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Additionally, some data may be collected for the purposes of child
        protection – this is to protect the children concerned. It should be
        noted that in these cases, data may be shared with appropriate agencies
        or authorities such as the Local Children’s Safeguarding Partnership
        (LCSP), or the police. This will only ever be shared for the purpose of
        safeguarding.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Personally identifiable data may be kept by Acemyexam for as long as is
        necessary and appropriate to carry out business and provide a service.
        After this time, as per GDPR, users can request their data be deleted.
        However, data relating to child protection may be kept for longer.
      </Typography>
      <Typography variant='body1' gutterBottom>
        In such cases, Acemyexam will keep data for as long as is appropriate to
        retain the data. Generally, educational settings keep records until any
        person turns 25.
      </Typography>
      <Typography variant='body1' gutterBottom>
        All physical records will be securely stored – locked away in a secure
        space that only the safeguarding team can access. And digital records
        will be stored in password-protected folders on computers with password
        protection and software to prevent hacking and viruses.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        PREVENTING AND RESPONDING TO BULLYING
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        We recognise that bullying can take many forms. Anyone can engage in
        bullying behaviour, and anyone can be bullied. It is important to
        remember that perpetrators can be adults, but they can also be other
        children – there is no specific identity of a perpetrator.
      </Typography>
      <Typography variant='body1' gutterBottom>
        When trying to prevent bullying, it is important to make it clear to
        others that we treat them equally and without judgement and to teach
        them that this is how everyone should be treated. Acemyexam staff and
        volunteers will always treat others with respect – regardless of their
        identity.
      </Typography>
      <Typography variant='body1' gutterBottom>
        If bullying is seen or disclosed, it will be reported as a safeguarding
        concern to the relevant person. For example, the safeguarding lead at
        Acemyexam, or for the educational setting they are in.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        KEEPING CHILDREN SAFE ONLINE
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        We recognise some of the work we do with children takes place online,
        and that keeping them safe online is equally as important as keeping
        them safe in person.
      </Typography>
      <Typography variant='body1' gutterBottom>
        One of the key things Acemyexam does is to only ever interact with
        children using their services through agreed means and times – arranged
        through a responsible adult – for example, a parent or carer, or through
        a school representative. Note that an adult may have vulnerabilities but
        still be able to arrange their own tuition – this should be considered
        when booking.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Staff and volunteers of Acemyexam will not contact children using their
        services through social media platforms or through their own personal
        profiles. The only time staff or volunteers will talk to children
        through social media if they contact Acemyexam company profiles in order
        to seek support or ask about their services.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Acemyexam will also advise tutors connecting to families through
        Acemyexam to follow this guidance.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Acemyexam staff and volunteers will check all resources shared with or
        sent to children to ensure they are appropriate. Content should not
        include anything which could harm children or expose them to harm. For
        example, anything depicting illegal activity, violence, or extreme
        views.
      </Typography>
      <Typography variant='body1' gutterBottom>
        If sensitive topics arise in educational content, resources will be
        carefully chosen and will be checked by other staff to ensure they are
        appropriate for purpose.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        RECRUITING THE RIGHT PEOPLE TO VOLUNTEER OR WORK WITH CHILDREN
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        All staff and volunteers working with Acemyexam will be considered for
        recruitment without discrimination to their identity (race, sex, gender,
        age, disability, pregnancy/maternity, religious belief, or sexual
        orientation).
      </Typography>
      <Typography variant='body1' gutterBottom>
        Acemyexam engages in work with children – an enhanced DBS check is
        required by all employees and volunteers. This will be indicated in any
        advertisements.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Tutors connected to families through Acemyexam are directed to seek DBS
        checks.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Prior to the checks, applicants are required to provide at least two
        references who can be contacts. If the role is working directly with
        children, at least one referee should be for a role where the applicant
        has worked or volunteered with children.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Applicants will be given an opportunity to declare any prior convictions
        including any child protection investigations – regardless of their
        outcome. This can be written and delivered in a confidential way – for
        this to be reviewed by the safeguarding team at Acemyexam.
      </Typography>
      <Typography variant='body1' gutterBottom>
        ID will be required from applicants to confirm identity – these should
        be viewed in person wherever possible as this helps to check the
        authenticity of the documents. Copies and prints outs will not be
        accepted – e.g. a printed online bank statement. If an in-person check
        is not possible, under the{' '}
        <Link
          href='https://www.gov.uk/government/publications/dbs-identity-checking-guidelines/id-checking-guidelines-for-standardenhanced-dbs-check-applications-from-1-july-2021'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          guidance in place since July 2021
        </Link>{' '}
        this can be done via a video call. In both cases, the person checking
        the ID should be in physical possession of the original documents.
      </Typography>
      <Typography variant='body1' gutterBottom>
        The criminal background checks required for staff and volunteers
        include:
      </Typography>
      <Typography variant='body1' gutterBottom>
        • A DBS check – note that an enhanced check is required for anyone who
        will or may have direct contact with children. These checks should be
        put on the update service so that Acemyexam can check their status
        periodically – if a check is not on the update service, a new one will
        be required every year.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • An overseas police check for any staff of volunteers who have lived
        abroad in the past 5 years.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Please note that a DBS check is not used to{' '}
        <Link
          href='https://www.gov.uk/legal-right-work-uk'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          check the right to work in the UK{' '}
        </Link>{' '}
        – this is done separately.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        CODES OF CONDUCT FOR ALL STAFF AND VOLUNTEERS IN RELATION TO
        SAFEGUARDING
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        All staff and volunteers working with Acemyexam are expected to follow
        the general code of conduct laid out by company policy.
      </Typography>
      <Typography variant='body1' gutterBottom>
        With regards to safeguarding this includes:
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Engaging with safeguarding policies laid out by Acemyexam – including
        attending training when it is offered.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Complete an enhanced DBS check as laid out in Acemyexam’ safeguarding
        policy.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Treating all service users (regardless of age or other identifiers)
        with equal respect.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Not contact children from personal accounts – including online
        communication (e.g. emails and social media), or in person.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • If staff or volunteers have an existing personal relationship with any
        children or their families/carers, this should be declared to management
        and safeguarding staff as soon as is possible. We understand that not
        having contact with existing friends or family would not be possible,
        but by declaring any connections, we can be aware that communication may
        occur.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Staff and volunteers with Acemyexam must not have a sexual or romantic
        relationship with any child under the age of 18. They should also not
        start such a relationship with a service user when the user turns 18
        after contact with them prior to their birthday. This could be
        considered an offence under the Sexual Offences Act 2003.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Not being left completely alone with children. If there are occasions
        where staff/volunteers may be alone with a child, it is important that
        others should be notified (for example, other staff at Acemyexam,
        teachers/staff at an educational institution, or the parents/carers of
        the child). If there are other people in a building but not in the same
        room, the door should be left open where possible; where not possible
        (e.g. fire doors) the door should remain unlocked.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • When tutoring children in their homes (online or in-person), the
        tutorials should ideally take place in a communal space (for example, a
        living room, kitchen or office) – this should ideally be a quiet and
        calm space, but one which others could access if they wanted to
        check-in.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • When tutoring children online, this should be arranged through a
        responsible adult such as their parent, carer or teacher. That adult
        should have the time and date of the tutorial, and a link to join. They
        do not need to join for the length of the tutorial but this allows them
        to check in on the tutor and student should they wish to. Adults
        responsible for the welfare of a child should never be prevented from
        being able to access a tutorial if they wish to do so.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • The contents of a tutorial should be kept confidential from others
        (other than where there is a lawful reason for the contents to be
        shared, e.g. if the tutor genuinely believes that one or more persons is
        at risk, or may be at risk, of harm).
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Live online tutorials may be recorded (in whole or in part) unless
        there is a specific request from the client not to do this. Students and
        clients should always be made aware of when a tutorial is, or is not,
        being recorded. Any recordings will be securely stored and provided to
        those requesting them, and a record that the tuition is being recorded
        would be made for transparency. Recordings will always be made available
        to the client on request, other than where doing so is reasonably
        believed to increase the risk of harm to any person (in which case,
        Acemyexam will take appropriate action, in line with this policy).
      </Typography>
      <Typography variant='body1' gutterBottom>
        • The person providing an online tutorial should be in a secure space
        and should be alone – not caring for or joined by others. If part of the
        tutorial includes another person being with them or joining the call,
        this must be communicated ahead of time to the client taking the call.
        For example, a colleague who joins the tutorial to provide specific
        information about a topic.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Staff and volunteers are encouraged to speak to management and the
        safeguarding team at Acemyexam if they are ever unclear about matters of
        conduct. It is better to have a conversation ahead of time and
        clarifying anything they are unclear about.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Any and all devices used by staff and volunteers of Acemyexam which
        are used to carry out business on behalf of the company may be recalled
        or checked. Company devices can be recalled and checked at any time.
        Personal devices used for business purposes may be requested as part of
        an investigation by an independent authority, e.g. police. Where tutors
        use their own devices when delivering tuition through, or via an
        introduction from, Acemyexam, they consent for those devices to be
        investigated as part of any necessary safeguarding investigation by
        relevant authorities or agencies.
      </Typography>
      <Typography variant='body1' gutterBottom>
        • Any devices used to carry out online tutorials should have antivirus
        software and anti-malware software installed.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        WHISTLEBLOWING POLICY FOR ALL STAFF AND VOLUNTEERS IN RELATION TO
        SAFEGUARDING
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        When reporting safeguarding concerns it is important to follow the
        proper procedures.
      </Typography>
      <Typography variant='body1' gutterBottom>
        When working with Acemyexam, this means that reports should be made by
        any responsible adult through the reporting procedure laid out in this
        policy – reporting to the safeguarding lead and/or deputy lead. Staff
        and volunteers are welcome to ask the safeguarding team for updates on
        what they have done. The team are not obliged to share specific details
        of actions taken but can share whether the report has been acted upon or
        referred internally or to external authorities/agencies. If a report has
        not been acted on or referred to relevant authorities and the staff
        member/volunteer feels it should have been, another report can be made,
        and a discussion should be held with the safeguarding team. Staff and
        volunteers are encouraged to have discussions with the team as they may
        be aware of more information than the staff member/volunteer. Again, the
        team will not necessarily share specifics as these may be confidential
        but will aim to have a discussion around the concern raised and explain
        the actions taken.
      </Typography>
      <Typography variant='body1' gutterBottom>
        If the staff member or volunteer still has concerns, the child
        protection report should be made to the Local Children’s Safeguarding
        Partnership (LCSP) where the child lives (or the relevant board if the
        concern is about an adult at risk (in other jurisdictions the relevant
        authority will vary). At this time, the staff or volunteer may tell the
        board that they did make a report to Acemyexam but they feel it hasn’t
        been passed along appropriately. This will help to ensure the report is
        passed along securely to the appropriate authorities.
      </Typography>
      <Typography variant='body1' gutterBottom>
        It is not appropriate to go directly to the media or to post on social
        media. This will be treated as whistleblowing, in line with Acemyexam’s
        general company whistleblowing policy and may result in disciplinary
        action and/or dismissal.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        MANAGING CONCERNS ABOUT OR ALLEGATIONS MADE AGAINST STAFF OR VOLUNTEERS
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        Allegations made against staff and/or volunteers at Acemyexam will be
        taken seriously.
      </Typography>
      <Typography variant='body1' gutterBottom>
        All allegations against staff and or volunteers will be passed along to
        independent authorities to investigate – for example, the LADO via the
        Local Children’s Safeguarding Partnership (LCSP) – and the person the
        allegation has been made against may be suspended from their duties
        whilst the authorities investigate. Advice on this will be taken from
        the LCSP or other authorities who have been notified.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Whilst any investigations are taking place (by the relevant independent
        authorities) other staff and volunteers will not be informed of the
        nature of why the person is not working – this is to maintain
        confidentiality and allow the proper investigations to take place. If
        the authorities need to talk to other staff or volunteers, this should
        be kept confidential.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Any allegations proven to be truthful will lead to disciplinary action
        or dismissal – dependant on the nature of the allegation and any
        historical incidents. Again, advice will be sought from the relevant
        authorities. Any truthful allegations may be passed on to future
        employers seeking a reference.
      </Typography>
      <Typography variant='body1' gutterBottom>
        Any allegations proven to be false will remain on a record but the
        outcome of any and all independent investigations will be included with
        it.
      </Typography>
      <Typography variant='body1' gutterBottom>
        It is important that any and all allegations are taken seriously and
        investigated fully by the appropriate authorities. This ensures that we
        uphold our duty to safeguard children. It also helps to ensure that any
        false allegations are investigated and the truth can come out – clearing
        the name of the person concerned.
      </Typography>

      <SubHeading variant='h3' gutterBottom>
        MANAGING CONCERNS ABOUT OR ALLEGATIONS MADE AGAINST OTHER CHILDREN –
        CHILD ON CHILD ABUSE
      </SubHeading>
      <Typography variant='body1' gutterBottom>
        We recognise that perpetrators can be adults but they can also be other
        children – there is no specific identity of a perpetrator.
      </Typography>
      <Typography variant='body1' gutterBottom>
        If an allegation is made against a child it will be reported as a
        safeguarding concern to the relevant person. For example, the
        safeguarding lead at Acemyexam, or for the educational setting they are
        in. In some cases, it will be necessary to refer the matter to external
        authorities or agencies, such as social workers, the police or
        international authorities.
      </Typography>
      <Typography variant='body1' gutterBottom>
        It is important that any and all allegations are taken seriously and
        investigated fully by the appropriate authorities. This ensures that we
        uphold our duty to safeguard children. This guidance follows{' '}
        <Link
          href='https://www.gov.uk/government/publications/keeping-children-safe-in-education--2'
          sx={{ color: theme.palette.accent.main, textDecoration: 'none' }}
        >
          Keeping children safe in education
        </Link>{' '}
        – GOV.UK.
      </Typography>

      <Typography sx={{ fontWeight: 'bold' }} variant='body1' gutterBottom>
        Contact us
      </Typography>
      <Typography variant='body1' gutterBottom>
        contact@acemyexam.co.uk
      </Typography>
      <Typography variant='body1' gutterBottom>
        +44 737 906 5363
      </Typography>
    </SafeguardingPolicyContainer>
  );
};

export default SafeguardingPolicy;
