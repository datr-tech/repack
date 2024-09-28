import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';
import { IHelperWriteInput } from './IHelperWriteInput';

export interface IHelperWrite {
  (args: IHelperWriteInput): IHelperCommonOutputBool;
}
