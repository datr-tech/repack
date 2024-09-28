import { IHelperCommonInputPath } from '@app/interfaces/core/services/fs/helpers';
import { IFileServiceOutput } from './IFileServiceOutput';

export interface IFileService {
  (args: IHelperCommonInputPath): IFileServiceOutput;
}
