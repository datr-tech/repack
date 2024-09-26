import { IFuncGetPath } from './IFuncGetPath';
import { IFuncRead } from './IFuncRead';
import { IFuncValidate } from './IFuncValidate';

export interface IFileServiceOutput {
  getPath: IFuncGetPath;
  read: IFuncRead;
  validate: IFuncValidate;
}
