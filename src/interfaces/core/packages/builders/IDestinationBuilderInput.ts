import { DestinationPackageTypeEnum } from '@app/config/enums';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

export interface IDestinationBuilderInput {
  destinationType: DestinationPackageTypeEnum;
  source: ISourceOutput;
}
