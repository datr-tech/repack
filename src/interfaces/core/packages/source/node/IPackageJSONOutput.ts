import { IFuncDerivePackageJSONPath } from './IFuncDerivePackageJSONPath';
import { IFuncGetPropValue } from './IFuncGetPropValue';
import { IFuncLoad } from './IFuncLoad';

export interface IPackageJSONOutput {
  derivePackageJSONPath: IFuncDerivePackageJSONPath;
  getPropValue: IFuncGetPropValue;
  load: IFuncLoad;
}
