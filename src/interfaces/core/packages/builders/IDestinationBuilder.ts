import { IDestinationBuilderInput } from './IDestinationBuilderInput';
import { IDestinationBuilderOutput } from './IDestinationBuilderOutput';

export interface IDestinationBuilder {
  (args: IDestinationBuilderInput): IDestinationBuilderOutput;
}
