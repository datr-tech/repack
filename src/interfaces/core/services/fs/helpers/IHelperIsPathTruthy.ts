import { IHelperCommonInputPath } from './IHelperCommonInputPath';
import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';

export interface IHelperIsPathTruthy {
  (args: IHelperCommonInputPath): IHelperCommonOutputBool;
}
