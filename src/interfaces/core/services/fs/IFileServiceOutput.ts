import { IFuncGetPath } from './IFuncGetPath';
import { IFuncRead } from './IFuncRead';
import { IFuncValidate } from './IFuncValidate';
import { IFuncWrite } from './IFuncWrite';

export interface IFileServiceOutput {
  getPath: IFuncGetPath;
  read: IFuncRead;
  validate: IFuncValidate;
  write: IFuncWrite;
}
