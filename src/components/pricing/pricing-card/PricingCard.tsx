import Image from 'next/image';

import { Button } from '../../buttons/Button.style';
import { PricingCardContentWrapper, PricingCardImageWrapper, PricingCardList, PricingCardListItem, PricingCardListItemText, PricingCardListItemTextPricing, PricingCardTextHead, PricingCardTitle, PricingCardWrapper } from '../../pricing/pricing-card/PricingCard.style';

interface CardProps {
  imageSrc: string;
  title: string;
  prices: { level: string; price: string }[];
}

const PricingCard: React.FC<CardProps> = ({ imageSrc, title, prices }) => {
  return (
    <PricingCardWrapper>
      <PricingCardImageWrapper>
        <Image src={imageSrc} alt={title} layout='fill' objectFit='cover' />
      </PricingCardImageWrapper>
      <PricingCardContentWrapper>
        <PricingCardTitle>{title}</PricingCardTitle>
        <PricingCardList>
          {prices.map((price, index) => (
            <PricingCardListItem key={index}>
              <PricingCardTextHead>
                <Image
                  key={index}
                  src='/icons/check.svg'
                  width={23}
                  height={23}
                  alt='Checked-icon'
                  style={{ marginRight: '9px' }}
                />
                <PricingCardListItemText>
                  {`${price.level}`}
                </PricingCardListItemText>
              </PricingCardTextHead>

              <PricingCardListItemTextPricing>
                {`${price.price}`}
              </PricingCardListItemTextPricing>
            </PricingCardListItem>
          ))}
        </PricingCardList>
        <Button
          special
          fontSize='16px'
          borderRadius='50px'
          width='162px'
          height='46px'
        >
          Get Started
        </Button>
      </PricingCardContentWrapper>
    </PricingCardWrapper>
  );
};

export default PricingCard;
