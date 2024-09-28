import { ITemplateHandlerBuilderInput } from './ITemplateHandlerBuilderInput';
import { ITemplateHandlerBuilderOutput } from './ITemplateHandlerBuilderOutput';

export interface ITemplateHandlerBuilder {
  (args: ITemplateHandlerBuilderInput): ITemplateHandlerBuilderOutput;
}
