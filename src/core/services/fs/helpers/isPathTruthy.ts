import { IHelperIsPathTruthy } from '@app/interfaces/core/services/fs/helpers';

export const isPathTruthy: IHelperIsPathTruthy = ({ path }) =>
  path.length !== 0 && path !== ' ';
