"use client";
import React from "react";

import RevisionNotesTable from "@/features/resources/resources-tables/RevisionNotesTable";
import TopicQuestionsTable from "@/features/resources/resources-tables/TopicQuestionsTable";
import PastPapersTable from "@/features/resources/resources-tables/PastPapersTable";
import { Box } from "@mui/material";
import { ResourceType } from "@/types/resources";
import ResourcesLayout from "@/features/resources/ResourcesLayout";
import { ResourcesContainer, Resourceswrapper } from "../../Resources.style";
import { AppContentWrapper } from "@/components/common/Global.style";
import { usePathname, useSearchParams } from "next/navigation";

interface DynamicPageProps {
  params: {
    subjectId: string;
    resourceType: ResourceType;
  };
}

const DownloadMaterial = ({ params }: DynamicPageProps) => {
  const { subjectId, resourceType } = params;
  const searchParams = useSearchParams();
  const breadcrumbs = searchParams.get("breadcrumbs")?.split(";") || [];

  return (
    <Resourceswrapper>
      <AppContentWrapper>
        <ResourcesContainer>
          <ResourcesLayout
            permanentHeading={"Study Material"}
            permanentBreadcrumbs={breadcrumbs.map((b, i) => ({ key: i, title: b }))}
          >
            {resourceType === ResourceType.REVISION_NOTES && <RevisionNotesTable />}
            {resourceType === ResourceType.TOPIC_QUESTIONS && <TopicQuestionsTable />}
            {resourceType === ResourceType.PAST_PAPER && <PastPapersTable />}
          </ResourcesLayout>
        </ResourcesContainer>
      </AppContentWrapper>
    </Resourceswrapper>
  );
};

export default DownloadMaterial;
