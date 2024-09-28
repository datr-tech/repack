import { IHelperCommonInputPath } from './IHelperCommonInputPath';
import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';

export interface IHelperIsFile {
  (args: IHelperCommonInputPath): IHelperCommonOutputBool;
}
