import { IHelperCommonInputPath } from '@app/interfaces/core/services/fs/helpers';
import { IDirServiceOutput } from './IDirServiceOutput';

export interface IDirService {
  (args: IHelperCommonInputPath): IDirServiceOutput;
}
