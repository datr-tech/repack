import { IFuncGenerateInput } from './IFuncGenerateInput';
import { IFuncGenerateOutput } from './IFuncGenerateOutput';

export interface IFuncGenerate {
  (args: IFuncGenerateInput): IFuncGenerateOutput;
}
