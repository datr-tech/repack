import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IDirServiceOutput } from './IDirServiceOutput';

export interface IDirService {
  (args: IFuncCommonInputPath): IDirServiceOutput;
}
