import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';
import { IHelperWriteContentsInput } from './IHelperWriteContentsInput';

export interface IHelperWriteContents {
  (args: IHelperWriteContentsInput): IHelperCommonOutputBool;
}
