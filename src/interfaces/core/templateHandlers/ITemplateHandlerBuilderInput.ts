import { DestinationPackageTypeEnum } from '@app/config/enums';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

export interface ITemplateHandlerBuilderInput {
  destinationType: DestinationPackageTypeEnum;
  source: ISourceOutput;
}
