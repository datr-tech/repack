import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IFileServiceOutput } from './IFileServiceOutput';

export interface IFileService {
  (args: IFuncCommonInputPath): IFileServiceOutput;
}
