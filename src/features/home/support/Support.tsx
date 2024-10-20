'use client';

import Image from 'next/image';

import { AppContentWrapper } from '@/components/common/Global.style';
import {
  SupportWrapper,
  SupportHeading,
  SupportContentHead,
  SupportPara,
  SupportImageContainer,
  SupportImage,
  SupportImageOverlay,
  SupportCard,
  SupportButton,
  SupportCardInnerHead,
  SupportCardBtnHead,
  SupportCardPara,
  SupportCardDivider,
} from '@/features/home/support/Support.style';

const Support: React.FC = () => {
  return (
    <SupportWrapper>
      <SupportImageContainer>
        <SupportImage
          src='/home/support.webp'
          width={0}
          height={0}
          sizes='100vw'
          alt='Support background'
        />
        <SupportImageOverlay />
      </SupportImageContainer>
      <AppContentWrapper>
        <SupportContentHead>
          <SupportHeading variant='h2'>
            Achieve Academic Excellence Today with Tailored Support!
          </SupportHeading>
          <SupportPara>
            From GCSEs and A-Levels to independent school entrance exams and
            scholarships, AceMyExam’s expert tutors provide the personalized,
            one-on-one support you need.
          </SupportPara>
        </SupportContentHead>
        <SupportCard>
          <SupportCardInnerHead>
            <SupportCardPara variant='body1'>
              Whether you&apos;re building a strong academic foundation or striving
              for top-tier results, we are here to guide you every step of the
              way.
            </SupportCardPara>
          </SupportCardInnerHead>
          <SupportCardDivider
            orientation='vertical'
            variant='middle'
            flexItem
          />
          <SupportCardInnerHead>
            <SupportCardPara variant='body1'>
              Choose between individual lessons or small group sessions to suit
              your learning style.
            </SupportCardPara>
          </SupportCardInnerHead>
          <SupportCardBtnHead>
            <SupportButton href="/pricing" passHref>
              Get Started Now
              <Image
                src='/icons/arrow-right-w.svg'
                width={56}
                height={20}
                alt='icon'
                style={{ marginLeft: '15px' }}
              />
            </SupportButton>
          </SupportCardBtnHead>

        </SupportCard>
      </AppContentWrapper>
    </SupportWrapper>
  );
};

export default Support;
