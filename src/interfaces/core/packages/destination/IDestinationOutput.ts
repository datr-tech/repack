import { IFuncGetType } from '@app/interfaces/core/packages/common/';
import { IFuncGenerate } from './IFuncGenerate';
import { IFuncRequired } from './IFuncRequired';
import { IFuncValidate } from './IFuncValidate';

export interface IDestinationOutput {
  generate: IFuncGenerate;
  getType: IFuncGetType;
  required: IFuncRequired;
  validate: IFuncValidate;
}
