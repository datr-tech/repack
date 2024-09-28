import { IHelperCommonInputPath } from './IHelperCommonInputPath';
import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';

export interface IHelperIsDir {
  (args: IHelperCommonInputPath): IHelperCommonOutputBool;
}
