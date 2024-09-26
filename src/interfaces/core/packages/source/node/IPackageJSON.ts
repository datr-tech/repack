import { IPackageJSONInput } from './IPackageJSONInput';
import { IPackageJSONOutput } from './IPackageJSONOutput';

export interface IPackageJSON {
  (args: IPackageJSONInput): IPackageJSONOutput;
}
