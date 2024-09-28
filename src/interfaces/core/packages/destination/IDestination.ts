import { IDestinationInput } from './IDestinationInput';
import { IDestinationOutput } from './IDestinationOutput';

export interface IDestination {
  (args: IDestinationInput): IDestinationOutput;
}
