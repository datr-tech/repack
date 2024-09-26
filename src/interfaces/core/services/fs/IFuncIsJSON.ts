import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IFuncCommonOutputBool } from './IFuncCommonOutputBool';

export interface IFuncIsJSON {
  (args: IFuncCommonInputPath): IFuncCommonOutputBool;
}
