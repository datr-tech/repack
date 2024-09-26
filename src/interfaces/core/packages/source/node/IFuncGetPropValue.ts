import { IFuncGetPropValueInput } from './IFuncGetPropValueInput';
import { IFuncGetPropValueOutput } from './IFuncGetPropValueOutput';

export interface IFuncGetPropValue {
  (args: IFuncGetPropValueInput): IFuncGetPropValueOutput;
}
