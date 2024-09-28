import {
  IHelperGetPath,
  IHelperRead,
  IHelperValidate,
  IHelperWrite,
} from '@app/interfaces/core/services/fs/helpers';
import { IFileServiceCreate } from './IFileServiceCreate';

export interface IFileServiceOutput {
  create: IFileServiceCreate;
  getPath: IHelperGetPath;
  read: IHelperRead;
  validate: IHelperValidate;
  write: IHelperWrite;
}
