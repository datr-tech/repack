import { CONSTS_FILE_EXTENSION_JSON } from '@app/config/consts';
import { fileServiceJSON } from '@app/core/services/fs';
import { IPackageJSON } from '@app/interfaces/core/packages/source/node';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

export const packageJSON: IPackageJSON = ({ packageDirPath }) => {
  let hasPackageJSON: boolean = false;
  let packageJSONRaw: object;

  const derivePackageJSONPath = ({ packageDirPath }) =>
    `${packageDirPath}/package${CONSTS_FILE_EXTENSION_JSON}`;

  const getPropValue = ({ propName, defaultValue }) => {
    if (!hasPackageJSON) {
      return;
    }

    if (typeof packageJSONRaw[propName] === 'undefined') {
      return;
    }

    return packageJSONRaw[propName] || defaultValue;
  };

  const load = () => {
    let hasLoaded = false;

    try {
      if (packageJSONService.validate()) {
        packageJSONRaw = packageJSONService.read() as object;
        hasPackageJSON = true;
        hasLoaded = true;
      }
    } catch {
      hasLoaded = false;
    }

    return hasLoaded;
  };

  const path = derivePackageJSONPath({ packageDirPath });
  const packageJSONService = fileServiceJSON({ path }) as IFileServiceOutput;

  return {
    derivePackageJSONPath,
    getPropValue,
    load,
  };
};
