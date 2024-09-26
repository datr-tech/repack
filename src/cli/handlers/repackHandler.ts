import { logger } from '@repack/utils';

export const repackHandler = ({ ...args }) => {
  const path = args?.path;
  const options = args?.options;

  logger.info({ path, options });
};
