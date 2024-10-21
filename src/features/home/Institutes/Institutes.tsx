'use client';

import { FC } from 'react';

import {
  InstituteWrapper,
  InstituteTrack,
  InstituteImage,
} from './Institutes.style';

const instituteImages = [
  '/home/pearson.svg',
  '/home/warwick.svg',
  '/home/UOC.svg',
  '/home/aqa.svg',
  '/home/UWM.svg',
  '/home/UCL.svg',
  '/home/imperial.svg',
  '/home/SPC.svg',
];

const duplicateImages = (images: string[], times: number): string[] => {
  let duplicatedImages: string[] = [];

  for (let i = 0; i < times; i++) {
    duplicatedImages = [...duplicatedImages, ...images];
  }

  return duplicatedImages;
};

const Institutes: FC = () => {
  const allImages = duplicateImages(instituteImages, 2);

  return (
    <InstituteWrapper>
      <InstituteTrack>
        {allImages.map((src, index) => (
          <InstituteImage
            key={index}
            src={src}
            alt={`Institute ${index + 1}`}
          />
        ))}
        {allImages.map((src, index) => (
          <InstituteImage
            key={`dup-${index}`}
            src={src}
            alt={`Institute duplicate ${index + 1}`}
          />
        ))}
      </InstituteTrack>
    </InstituteWrapper>
  );
};

export default Institutes;
