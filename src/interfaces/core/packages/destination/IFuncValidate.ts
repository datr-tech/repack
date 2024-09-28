import { IFuncValidateInput } from './IFuncValidateInput';
import { IFuncValidateOutput } from './IFuncValidateOutput';

export interface IFuncValidate {
  (args: IFuncValidateInput): IFuncValidateOutput;
}
