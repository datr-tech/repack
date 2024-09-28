import { IHelperCommonInputPath } from './IHelperCommonInputPath';
import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';

export interface IHelperCreateFile {
  (args: IHelperCommonInputPath): IHelperCommonOutputBool;
}
