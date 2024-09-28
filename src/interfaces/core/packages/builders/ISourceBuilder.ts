import { ISourceBuilderInput } from './ISourceBuilderInput';
import { ISourceBuilderOutput } from './ISourceBuilderOutput';

export interface ISourceBuilder {
  (args: ISourceBuilderInput): ISourceBuilderOutput;
}
