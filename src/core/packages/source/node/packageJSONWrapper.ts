import { SourcePackageTypeEnum } from '@app/config/enums';
import {
  IFuncGetPropValueInputPropName,
  IPackageJSONOutput,
  IPackageJSONWrapper,
} from '@app/interfaces/core/packages/source/node';
import { packageJSON } from './packageJSON';

export const packageJSONWrapper: IPackageJSONWrapper = ({ packageDirPath }) => {
  const getDescription = () => getPropValue('description');
  const getEntryPoint = () => getPropValue('main');
  const getMan = () => getPropValue('man');
  const getName = () => getPropValue('name');
  const getType = () => SourcePackageTypeEnum.NODE;
  const getVersion = () => getPropValue('version');

  const getPropValue = (propName: IFuncGetPropValueInputPropName) =>
    packageJSONObj.getPropValue({ propName });
  const load = () => packageJSONObj.load();

  const packageJSONObj: IPackageJSONOutput = packageJSON({ packageDirPath });

  return {
    getDescription,
    getEntryPoint,
    getMan,
    getName,
    getType,
    getVersion,
    load,
  };
};
