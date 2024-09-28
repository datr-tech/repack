import { writeFileSync } from 'node:fs';
import { IFuncWriteContents } from '@app/interfaces/core/services/fs';
import { isFile } from './isFile';

export const writeContents: IFuncWriteContents = ({ contents, path }) => {
  let hasWritten = false;

  try {
    if (isFile({ path })) {
      writeFileSync(path, contents);
      hasWritten = true;
    }
  } catch (error) {
    const messagePrefix = 'write error';
    const { message } = error;
    throw new Error(`${messagePrefix}:${message}`);
  }

  return hasWritten;
};
