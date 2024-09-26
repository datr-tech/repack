import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IFuncCommonOutputBool } from './IFuncCommonOutputBool';

export interface IFuncIsPath {
  (args: IFuncCommonInputPath): IFuncCommonOutputBool;
}
