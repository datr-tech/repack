import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IPathServiceOutput } from './IPathServiceOutput';

export interface IPathService {
  (args: IFuncCommonInputPath): IPathServiceOutput;
}
