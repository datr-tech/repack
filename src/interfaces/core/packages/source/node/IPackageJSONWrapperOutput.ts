import { IFuncGetPropValueOutput } from './IFuncGetPropValueOutput';
import { IFuncLoad } from './IFuncLoad';

export interface IPackageJSONWrapperOutput {
  getDescription(): IFuncGetPropValueOutput;
  getEntryPoint(): IFuncGetPropValueOutput;
  getMan(): IFuncGetPropValueOutput;
  getName(): IFuncGetPropValueOutput;
  getType(): IFuncGetPropValueOutput;
  getVersion(): IFuncGetPropValueOutput;
  load: IFuncLoad;
}
