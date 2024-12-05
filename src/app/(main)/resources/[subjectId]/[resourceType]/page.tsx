'use client';
import { Box, Skeleton } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { AppContentWrapper } from '../../../../../components/common/Global.style';
import PastPapersTable from '../../../../../features/resources/resources-tables/PastPapersTable';
import RevisionNotesTable from '../../../../../features/resources/resources-tables/RevisionNotesTable';
import TopicQuestionsTable from '../../../../../features/resources/resources-tables/TopicQuestionsTable';
import ResourcesLayout from '../../../../../features/resources/ResourcesLayout';
import { useGetResources } from '../../../../../hooks/resources/useResources';
import { ResourceType } from '../../../../../types/resources';
import { ResourcesContainer, Resourceswrapper } from '../../Resources.style';

interface DynamicPageProps {
  params: {
    subjectId: string;
    resourceType: ResourceType;
  };
}

const DownloadMaterial = ({ params }: DynamicPageProps) => {
  const { subjectId, resourceType } = params;
  const searchParams = useSearchParams();
  const breadcrumbs = searchParams.get('breadcrumbs')?.split(';') || [];

  const { data, isLoading } = useGetResources(parseInt(subjectId));

  return (
    <Resourceswrapper>
      <AppContentWrapper>
        <ResourcesContainer>
          <ResourcesLayout
            permanentHeading={'Study Material'}
            permanentBreadcrumbs={breadcrumbs.map((b, i) => ({ key: i, title: b }))}
          >
            {isLoading ? (
              <Box>
                <Skeleton variant="text" width="30%" height={60} />
                <Skeleton
                  variant="text"
                  width="30%"
                  height={40}
                  sx={{
                    mb: 2,
                  }}
                />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[...Array(5)].map((_, index) => (
                    <Skeleton variant="text" key={index} width="100%" height={40} />
                  ))}
                </Box>
              </Box>
            ) : (
              <>
                {resourceType === ResourceType.REVISION_NOTES && (
                  <RevisionNotesTable isLoading={isLoading} data={data?.chapters || []} />
                )}
                {resourceType === ResourceType.TOPIC_QUESTIONS && (
                  <TopicQuestionsTable isLoading={isLoading} data={data?.chapters || []} />
                )}
                {resourceType === ResourceType.PAST_PAPER && (
                  <PastPapersTable isLoading={isLoading} data={data?.pastPapers || []} />
                )}
              </>
            )}
          </ResourcesLayout>
        </ResourcesContainer>
      </AppContentWrapper>
    </Resourceswrapper>
  );
};

export default DownloadMaterial;
