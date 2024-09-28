import { IFuncCommonOutputBool } from './IFuncCommonOutputBool';
import { IFuncWriteContentsInput } from './IFuncWriteContentsInput';

export interface IFuncWriteContents {
  (args: IFuncWriteContentsInput): IFuncCommonOutputBool;
}
