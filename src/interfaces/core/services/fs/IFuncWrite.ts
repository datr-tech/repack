import { IFuncCommonOutputBool } from './IFuncCommonOutputBool';
import { IFuncWriteInput } from './IFuncWriteInput';

export interface IFuncWrite {
  (args: IFuncWriteInput): IFuncCommonOutputBool;
}
