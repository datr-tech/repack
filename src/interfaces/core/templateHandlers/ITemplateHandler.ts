import { ITemplateHandlerInput } from './ITemplateHandlerInput';
import { ITemplateHandlerOutput } from './ITemplateHandlerOutput';

export interface ITemplateHandler {
  (args: ITemplateHandlerInput): ITemplateHandlerOutput;
}
