import { IFuncGetType } from '@app/interfaces/core/packages/common/';
import { IFuncGetData } from './IFuncGetData';

export interface ISourceOutput {
  getData: IFuncGetData;
  getType: IFuncGetType;
}
