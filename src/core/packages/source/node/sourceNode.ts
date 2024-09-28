import { SourcePackageTypeEnum } from '@app/config/enums';
import { ISource } from '@app/interfaces/core/packages/source';

export const sourceNode: ISource = ({ packageJSONWrapperObj }) => {
  const getData = () => {
    const hasLoaded = packageJSONWrapperObj.load();

    if (!hasLoaded) {
      throw new Error('json not loaded');
    }

    return {
      description: packageJSONWrapperObj.getDescription() as string,
      entryPoint: packageJSONWrapperObj.getEntryPoint() as string,
      man: packageJSONWrapperObj.getMan() as string,
      name: packageJSONWrapperObj.getName() as string,
      version: packageJSONWrapperObj.getVersion() as string,
    };
  };

  const getType = () =>
    packageJSONWrapperObj.getType() as SourcePackageTypeEnum;

  return { getData, getType };
};
