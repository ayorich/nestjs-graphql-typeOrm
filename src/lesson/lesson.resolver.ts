import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'sssss',
      name: 'desd yam',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
