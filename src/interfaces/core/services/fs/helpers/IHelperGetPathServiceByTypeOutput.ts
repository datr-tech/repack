import { IDirServiceOutput } from '../IDirServiceOutput';
import { IFileServiceOutput } from '../IFileServiceOutput';

export type IHelperGetPathServiceByTypeOutput =
  | IDirServiceOutput
  | IFileServiceOutput;
