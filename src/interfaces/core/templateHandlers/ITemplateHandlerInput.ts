import { DestinationPackageTypeEnum } from '@app/config/enums';
import { ISourceOutput } from '@app/interfaces/core/packages/source';

export interface ITemplateHandlerInput {
  destinationType?: DestinationPackageTypeEnum;
  source: ISourceOutput;
  templatePath?: string;
}
