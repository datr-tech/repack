import { IFuncCommonInputPath } from './IFuncCommonInputPath';
import { IFuncGetPathTypeOutput } from './IFuncGetPathTypeOutput';

export interface IFuncGetPathType {
  (args: IFuncCommonInputPath): IFuncGetPathTypeOutput;
}
