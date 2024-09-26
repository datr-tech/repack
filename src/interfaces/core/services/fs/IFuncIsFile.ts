import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IFuncCommonOutputBool } from './IFuncCommonOutputBool';

export interface IFuncIsFile {
  (args: IFuncCommonInputPath): IFuncCommonOutputBool;
}
