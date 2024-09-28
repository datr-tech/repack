import { IHelperGetExtensionInput } from './IHelperGetExtensionInput';
import { IHelperCommonOutputString } from './IHelperCommonOutputString';

export interface IHelperGetExtension {
  (args: IHelperGetExtensionInput): IHelperCommonOutputString;
}
