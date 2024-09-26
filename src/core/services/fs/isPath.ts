import { IFuncIsPath } from '@repack/interfaces/core/services/fs';

export const isPath: IFuncIsPath = ({ path }) =>
  path.length !== 0 && path !== ' ';
