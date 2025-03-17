'use client';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
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
      <Typography variant='h1'>
        Acemyexam – Our Working Together Policy
      </Typography>

      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        We are an Employment Business, as defined by law. The law sets out some
        rules and guidelines which we must follow.
      </Typography>

      {/* Section 1: Information from a parent/client */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        1. Information from a parent/client
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        To provide you with our best service and to comply with our obligations,
        we will get the following information from each parent/client (the
        person organising tuition for the student) before introducing them to
        tutors:
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item' }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Information about the parent/client and, if applicable (such as
                when we are working with a school), information about their
                organisation or business.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                The date that the parent/client would like the tutoring (we may
                also refer to this as the engagement or assignment) to start,
                and how long it will last (the duration or likely duration).
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Information about the tutoring and what the parent/client
                requires, including experience, training or qualifications,
                where it will take place, the hours required, payment and any
                relevant expenses or benefits information (such as if a tutor is
                travelling), what notice is needed to end the tutoring, and,
                where relevant, any known health and safety risks (such as steep
                stairs for face-to-face tutoring venues).
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Information about what experience, training, qualifications, and
                any authorisation that the parent/client considers necessary, or
                which are required by law or any professional body, to carry out
                that tutoring. Of course, there are some things that we will
                always have in place, such as working with children (vulnerable
                people).
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Section 2: Information from a tutor */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        2. Information from a tutor
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        To provide you with our best service and to comply with our obligations,
        we will get the following information from each Tutor before introducing
        them to a parent/client:
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Confirmation of the tutor’s identity and right to work.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Confirmation that the tutor considers they have the experience,
                training, qualifications, and any authorisation the
                parent/client considers necessary, or which is required by any
                professional body or by law to carry out the tutoring – this is
                usually in the form of a CV and teaching qualification.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Confirmation that the tutor is willing to accept the tutoring,
                if offered.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Section 3: Tutor’s extra information */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        3. Tutor’s extra information
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Where applicable, we will make sure that both a tutor and
                parents/clients are aware of any legal requirements relating to
                the tutoring.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                In particular, since most of the tutoring we offer requires
                references and/or professional qualifications and involves
                working with children (vulnerable people), we will take
                reasonable steps and offer to provide parents/clients with the
                following extra information about a tutor:
              </Typography>
            }
          />
        </ListItem>
        <List sx={{ padding: '0 auto', listStyleType: 'lower-alpha', pl: 2 }}>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Copies of any relevant qualifications and DBS and/or other
                  relevant authorisations (including DBS and/or other relevant
                  certificates) required, and/or
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Two references from people unrelated to the tutor who have
                  agreed that their references can be disclosed both to the
                  tutor and relevant parents/clients.
                </Typography>
              }
            />
          </ListItem>
        </List>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                If we are unable to provide the extra information, then we let
                parents/clients know.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Section 4: Information about unsuitability of a tutor */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        4. Information about unsuitability of a tutor
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Safeguarding is important to us.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                If we receive any information that, in our opinion, gives
                reasonable grounds (a realistic degree of certainty) to believe
                that any tutor working with a parent/client is or may be
                unsuitable for that tutoring, we will:
              </Typography>
            }
          />
        </ListItem>
        <List sx={{ padding: '0 auto', listStyleType: 'lower-alpha', pl: 2 }}>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Let the parent/client know as soon as is possible (usually on
                  the same day or on the next business day where that is not
                  reasonably practicable), and
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Carry out reasonable enquiries and let the parent/client know
                  the results of those enquiries in so far as the law will
                  allow.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </List>

      {/* Section 5: Choosing the right tutor */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        5. Choosing the right tutor
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                We provide each tutor’s information on a confidential basis.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Choosing the right tutor for a child is important, and we
                carefully consider the parent/client’s requirements and a
                tutor’s skills, experience, training, qualifications, and any
                relevant authorisation. Please also see section 2(2).
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Based on information that is available to us at the relevant
                time, we will not introduce a tutor to a parent/client unless
                we:
              </Typography>
            }
          />
        </ListItem>
        <List sx={{ padding: '0 auto', listStyleType: 'lower-alpha', pl: 2 }}>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Feel that either the parent/client’s or tutor’s requirements
                  for the tutoring are met, and
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Consider that it would not be detrimental to the interests of
                  either the parent/client or the tutor if the tutoring took
                  place, and
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Have not received any information that, in our opinion, gives
                  reasonable grounds (a realistic degree of certainty) to
                  believe a tutor is unsuitable for the tutoring, and
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Have taken reasonable steps to consider any professional body
                  requirements required for the tutoring and informed both the
                  parent/client and tutor to be introduced about these.
                </Typography>
              }
            />
          </ListItem>
        </List>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                We use the information that we have obtained from the
                parent/client (see section 1) to make sure that the tutor has
                the information they require so that they can freely agree
                (consent) to do the tutoring, if offered. We always ask the
                tutor to confirm their agreement to do the tutoring.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Section 6: How we work */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        6. How we work
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                We believe in open and transparent working relationships and are
                committed to complying with our obligations. This means that we
                abide by any rules and guidance relating to fees.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                We will always provide full details about the charges involved
                in tutoring. In particular, we will never pressurise tutors to
                agree to pay for our additional services.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                We take our obligations regarding taxation issues very
                seriously. We will always use our best endeavours to comply with
                HMRC requirements.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Safeguarding:
              </Typography>
            }
          />
        </ListItem>
        <List sx={{ padding: '0 auto', listStyleType: 'lower-alpha', pl: 2 }}>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  We are committed to providing a safe environment for students
                  to engage with tutoring.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  We, tutors, and parents/clients all have obligations and
                  responsibilities when it comes to safeguarding, in particular
                  risks with online tutoring as well as a child’s mental health.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  We have a{' '}
                  <StyledLink
                    href='/safeguarding-policy'
                    sx={{ fontWeight: 'bold' }}
                  >
                    Safeguarding Policy
                  </StyledLink>{' '}
                  which is available from{' '}
                  <StyledLink
                    href='mailto:contact@acemyexam.co.uk'
                    sx={{ fontWeight: 'bold' }}
                  >
                    contact@acemyexam.co.uk.
                  </StyledLink>{' '}
                  We are also members of the Tutors Association and adhere to
                  their Codes of Practice of Ethics, which are contained in our
                  Safeguarding Policy. As professionals, we ask all tutors to
                  abide by the relevant safeguarding legislation, guidance, and
                  policies.
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  We always advise tutors and parents/clients to take advantage
                  of the resources available online from the NSPCC.
                </Typography>
              }
            />
          </ListItem>
        </List>
      </List>

      {/* Section 7: No restrictive terms */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        7. No restrictive terms
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                We will not include anything detrimental in our agreements with
                our parents/clients or tutors which would:
              </Typography>
            }
          />
        </ListItem>
        <List sx={{ padding: '0 auto', listStyleType: 'lower-alpha', pl: 2 }}>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Prevent them from ending their agreement with us, OR
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Prevent them from working for anyone else, including the
                  parent/client directly or through a competing employment
                  business, OR
                </Typography>
              }
            />
          </ListItem>
          <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
            <ListItemText
              sx={{ padding: '0' }}
              primary={
                <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                  Mean that a tutor must let us (or anyone connected with us)
                  know the identity of any future employer.
                </Typography>
              }
            />
          </ListItem>
        </List>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                We do not charge tutors when we help them to find tutoring.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Section 8: Advertisements */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        8. Advertisements
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        Due to our experience, we will use what we consider to be the best and
        relevant advertising. We aim to always advertise in compliance with the
        law which applies to our business.
      </Typography>

      {/* Section 9: Records */}
      <Typography variant='h3' sx={{ marginBottom: '1rem' }}>
        9. Records
      </Typography>
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        We aim to:
      </Typography>
      <List sx={{ padding: '0 auto', listStyleType: 'decimal', pl: 2 }}>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Maintain the relevant records required by the law which applies
                to our business.
              </Typography>
            }
          />
        </ListItem>
        <ListItem sx={{ padding: '0', display: 'list-item', pb: 0 }}>
          <ListItemText
            sx={{ padding: '0' }}
            primary={
              <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
                Process Personal Data in accordance with the relevant data
                protection laws. Please refer to our Privacy Policy.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Updated Date */}
      <Typography variant='body1' sx={{ marginBottom: '1rem' }}>
        Updated 20th February 2025
      </Typography>
    </Box>
  );
};

export default page;
