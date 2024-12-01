import { PastPaperResourceType } from '@prisma/client';

import { IPastPaperData, IPastPaperResourcesData, IPastPaperUpdateData } from '../types/past-paper';
import prisma from '../utils/prisma';

// ============================== DEPRECATED ==============================
// export async function createWithResources(data: IPastPaperData) {
//   return prisma.$transaction(async (tx) => {
//     const pastPaper = await tx.pastPaper.create({
//       data: {
//         subject_id: data.subjectId,
//         title: data.title,
//         year: data.year,
//       },
//     });

//     const resources = [];

//     if (data.resources.questionPaper) {
//       resources.push(
//         tx.resource.create({
//           data: {
//             url: data.resources.questionPaper,
//             type: 'pdf',
//             pastPaperResources: {
//               create: {
//                 pastPaper: { connect: { id: pastPaper.id } },
//                 resource_type: PastPaperResourceType.QUESTION_PAPER,
//               },
//             },
//           },
//         })
//       );
//     }

//     if (data.resources.markingScheme) {
//       resources.push(
//         tx.resource.create({
//           data: {
//             url: data.resources.markingScheme,
//             type: 'pdf',
//             pastPaperResources: {
//               create: {
//                 pastPaper: { connect: { id: pastPaper.id } },
//                 resource_type: PastPaperResourceType.MARKING_SCHEME,
//               },
//             },
//           },
//         })
//       );
//     }

//     if (data.resources.solutionBooklet) {
//       resources.push(
//         tx.resource.create({
//           data: {
//             url: data.resources.solutionBooklet,
//             type: 'pdf',
//             pastPaperResources: {
//               create: {
//                 pastPaper: { connect: { id: pastPaper.id } },
//                 resource_type: PastPaperResourceType.SOLUTION_BOOKLET,
//               },
//             },
//           },
//         })
//       );
//     }

//     await Promise.all(resources);

//     return tx.pastPaper.findUnique({
//       where: { id: pastPaper.id },
//       include: {
//         resources: {
//           include: {
//             resource: true,
//           },
//         },
//       },
//     });
//   }, {
//     timeout: 10000, 
//   });
// }

export async function createPastPaper(data: IPastPaperData) {
  const pastPaper = await prisma.pastPaper.create({
    data: {
      subject_id: data.subjectId,
      title: data.title,
      year: data.year,
    },
  });
  
  return pastPaper;
}

export async function updatePastPaper(data: IPastPaperUpdateData) {
  const pastPaper = await prisma.pastPaper.update({
    where: { id: data.pastPaperId },
    data: {
      subject_id: data.subjectId,
      title: data.title,
      year: data.year,
    },
  });

  return pastPaper;
}

export async function createResources(data: IPastPaperResourcesData) {
  return prisma.$transaction(async (tx) => {
    const pastPaper = await tx.pastPaper.findUnique({ 
      where: { id: data.pastPaperId },
    });

    if(!pastPaper) throw new Error('Past Paper not found');

    const resources = [];

    if (data.resources.questionPaper) {
      resources.push(
        tx.resource.create({
          data: {
            url: data.resources.questionPaper,
            type: 'pdf',
            pastPaperResources: {
              create: {
                pastPaper: { connect: { id: pastPaper.id } },
                resource_type: PastPaperResourceType.QUESTION_PAPER,
              },
            },
          },
        })
      );
    }

    if (data.resources.markingScheme) {
      resources.push(
        tx.resource.create({
          data: {
            url: data.resources.markingScheme,
            type: 'pdf',
            pastPaperResources: {
              create: {
                pastPaper: { connect: { id: pastPaper.id } },
                resource_type: PastPaperResourceType.MARKING_SCHEME,
              },
            },
          },
        })
      );
    }

    if (data.resources.solutionBooklet) {
      resources.push(
        tx.resource.create({
          data: {
            url: data.resources.solutionBooklet,
            type: 'pdf',
            pastPaperResources: {
              create: {
                pastPaper: { connect: { id: pastPaper.id } },
                resource_type: PastPaperResourceType.SOLUTION_BOOKLET,
              },
            },
          },
        })
      );
    }

    await Promise.all(resources);

    return tx.pastPaper.findUnique({
      where: { id: pastPaper.id },
      include: {
        resources: {
          include: {
            resource: true,
          },
        },
      },
    });
  }, {
    timeout: 10000, 
  });
}

export async function getResourceCount() {
  return prisma.pastPaper.findFirst({
    select: {
      _count: {
        select: {
          resources: true,
        },
      },
    },
  });
}

export async function findPastPapers(subjectId: number) {
  return prisma.pastPaper.findMany({
    where: { subject_id: subjectId },
    include: {
      resources: {
        include: {
          resource: true,
        },
      },
    },
  });
}
