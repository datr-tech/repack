import { IHelperCommonInputPath } from './IHelperCommonInputPath';
import { IHelperCommonOutputBool } from './IHelperCommonOutputBool';

export interface IHelperDoesFileObjectExist {
  (args: IHelperCommonInputPath): IHelperCommonOutputBool;
}
