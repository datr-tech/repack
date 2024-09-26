import { IFuncGetPath } from './IFuncGetPath';
import { IFuncValidate } from './IFuncValidate';

export interface IDirServiceOutput {
  getPath: IFuncGetPath;
  validate: IFuncValidate;
}
