import { IHelperCommonInputPath } from './IHelperCommonInputPath';
import { IHelperGetPathTypeOutput } from './IHelperGetPathTypeOutput';

export interface IHelperGetPathType {
  (args: IHelperCommonInputPath): IHelperGetPathTypeOutput;
}
