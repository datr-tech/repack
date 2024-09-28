import {
  IHelperGetPathServiceByTypeInputSingle,
  IHelperGetPathServiceByTypeOutput,
  IHelperGetPathTypeOutput,
} from '@app/interfaces/core/services/fs/helpers';

export interface IPathServiceOutput {
  getPathServiceByType: (
    args: IHelperGetPathServiceByTypeInputSingle,
  ) => IHelperGetPathServiceByTypeOutput;
  getPathType: () => IHelperGetPathTypeOutput;
}
