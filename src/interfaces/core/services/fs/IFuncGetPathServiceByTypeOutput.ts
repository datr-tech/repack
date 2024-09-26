import { IDirServiceOutput } from './IDirServiceOutput';
import { IFileServiceOutput } from './IFileServiceOutput';

export type IFuncGetPathServiceByTypeOutput =
  | IDirServiceOutput
  | IFileServiceOutput;
