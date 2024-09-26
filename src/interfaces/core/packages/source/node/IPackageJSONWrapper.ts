import { IPackageJSONWrapperInput } from './IPackageJSONWrapperInput';
import { IPackageJSONWrapperOutput } from './IPackageJSONWrapperOutput';

export interface IPackageJSONWrapper {
  (args: IPackageJSONWrapperInput): IPackageJSONWrapperOutput;
}
