import { IHelperCommonInputPath } from '@app/interfaces/core/services/fs/helpers';
import { IPathServiceOutput } from './IPathServiceOutput';

export interface IPathService {
  (args: IHelperCommonInputPath): IPathServiceOutput;
}
