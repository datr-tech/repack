import { IFuncGetExtensionInput } from './IFuncGetExtensionInput';
import { IFuncCommonOutputString } from './IFuncCommonOutputString';

export interface IFuncGetExtension {
  (args: IFuncGetExtensionInput): IFuncCommonOutputString;
}
