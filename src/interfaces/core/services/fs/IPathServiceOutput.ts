import { IFuncGetPathServiceByTypeInputSingle } from "./IFuncGetPathServiceByTypeInputSingle";
import { IFuncGetPathServiceByTypeOutput } from './IFuncGetPathServiceByTypeOutput';
import { IFuncGetPathTypeOutput } from './IFuncGetPathTypeOutput';

export interface IPathServiceOutput {
  getPathServiceByType: (args: IFuncGetPathServiceByTypeInputSingle) => IFuncGetPathServiceByTypeOutput;
  getPathType: () => IFuncGetPathTypeOutput;
}
