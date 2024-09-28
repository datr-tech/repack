import { ISourceInput } from './ISourceInput';
import { ISourceOutput } from './ISourceOutput';

export interface ISource {
  (args: ISourceInput): ISourceOutput;
}
