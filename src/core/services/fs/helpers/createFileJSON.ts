import { IHelperCreateFileJSON } from '@app/interfaces/core/services/fs/helpers';
import { createFile } from './createFile';
import { hasJSONExtension } from './hasJSONExtension';

export const createFileJSON: IHelperCreateFileJSON = ({ path }) => {
  if (!hasJSONExtension({ path })) {
    throw new Error('invalid extension');
  }

  return createFile({ path });
};
