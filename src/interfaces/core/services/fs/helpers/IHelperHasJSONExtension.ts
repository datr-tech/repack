import { IHelperCommonInputPath } from './IHelperCommonInputPath';
import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';

export interface IHelperHasJSONExtension {
  (args: IHelperCommonInputPath): IHelperCommonOutputBool;
}
