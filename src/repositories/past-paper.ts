import { PastPaper } from "@/entities/past-paper";
import { PastPaperResource, PastPaperResourceType } from "@/entities/past-paper-resource";
import { Resource } from "@/entities/resource";
import AppDataSource from "@/utils/typeorm";

export const PastPaperRepository = AppDataSource.getRepository(PastPaper).extend({
  async createWithResources(data: {
    title: string;
    year: number;
    resources: {
      questionPaper?: string;
      markingScheme?: string;
      solutionBooklet?: string;
    };
  }) {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Create past paper
      const pastPaper = await queryRunner.manager.save(PastPaper, {
        title: data.title,
        year: data.year,
      });

      const resources: PastPaperResource[] = [];

      // Create resources
      if (data.resources.questionPaper) {
        const resource = await queryRunner.manager.save(Resource, {
          url: data.resources.questionPaper,
          type: "pdf",
        });
        resources.push(
          queryRunner.manager.create(PastPaperResource, {
            pastPaper,
            resource,
            resource_type: PastPaperResourceType.QUESTION_PAPER,
          })
        );
      }

      if (data.resources.markingScheme) {
        const resource = await queryRunner.manager.save(Resource, {
          url: data.resources.markingScheme,
          type: "pdf",
        });
        resources.push(
          queryRunner.manager.create(PastPaperResource, {
            pastPaper,
            resource,
            resource_type: PastPaperResourceType.MARKING_SCHEME,
          })
        );
      }

      if (data.resources.solutionBooklet) {
        const resource = await queryRunner.manager.save(Resource, {
          url: data.resources.solutionBooklet,
          type: "pdf",
        });
        resources.push(
          queryRunner.manager.create(PastPaperResource, {
            pastPaper,
            resource,
            resource_type: PastPaperResourceType.SOLUTION_BOOKLET,
          })
        );
      }

      await queryRunner.manager.save(resources);
      await queryRunner.commitTransaction();

      return this.findOne({
        where: { id: pastPaper.id },
        relations: ["resources", "resources.resource"],
      });
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  },

  async findWithResources(id: number) {
    return this.findOne({
      where: { id },
      relations: ["resources", "resources.resource"],
    });
  },
});
