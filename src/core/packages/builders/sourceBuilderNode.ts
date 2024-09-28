import { ISourceBuilder } from '@app/interfaces/core/packages/builders';
import { packageJSONWrapper, sourceNode } from '@app/core/packages/source/node';

export const sourceBuilderNode: ISourceBuilder = ({ path }) => {
  const build = () => {
    const packageDirPath = path;
    const packageJSONWrapperObj = packageJSONWrapper({
      packageDirPath,
    });

    return sourceNode({ packageJSONWrapperObj });
  };

  return { build };
};
