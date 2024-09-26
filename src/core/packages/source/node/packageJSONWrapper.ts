import { CONSTS_EMPTY_STRING } from '@app/config/consts';
import { FromPackageTypeEnum } from '@app/config/enums';
import {
  IFuncGetPropValueInputDefaultValue,
  IFuncGetPropValueInputPropName,
  IPackageJSONOutput,
  IPackageJSONWrapper,
} from '@app/interfaces/core/packages/source/node';
import { packageJSON } from './packageJSON';

export const packageJSONWrapper: IPackageJSONWrapper = ({ packageDirPath }) => {
  const getDescription = () => getPropValue('description', CONSTS_EMPTY_STRING);
  const getEntryPoint = () => getPropValue('main', CONSTS_EMPTY_STRING);
  const getMan = () => getPropValue('man', CONSTS_EMPTY_STRING);
  const getName = () => getPropValue('name', CONSTS_EMPTY_STRING);
  const getType = () => FromPackageTypeEnum.NPM;
  const getVersion = () => getPropValue('version', CONSTS_EMPTY_STRING);

  const getPropValue = (
    propName: IFuncGetPropValueInputPropName,
    defaultValue: IFuncGetPropValueInputDefaultValue,
  ) => packageJSONObj.getPropValue({ propName, defaultValue });

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
