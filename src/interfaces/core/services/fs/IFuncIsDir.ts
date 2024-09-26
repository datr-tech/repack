import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IFuncCommonOutputBool } from './IFuncCommonOutputBool';

export interface IFuncIsDir {
  (args: IFuncCommonInputPath): IFuncCommonOutputBool;
}
