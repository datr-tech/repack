import { SourcePackageTypeEnum } from '@app/config/enums';

export interface ISourceBuilderInput {
  path: string;
  sourceType?: SourcePackageTypeEnum;
}
