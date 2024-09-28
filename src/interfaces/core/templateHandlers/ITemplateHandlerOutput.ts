import { IFuncCompile } from './IFuncCompile';
import { IFuncGenerate } from './IFuncGenerate';
import { IFuncGetType } from './IFuncGetType';
import { IFuncLoad } from './IFuncLoad';

export interface ITemplateHandlerOutput {
  compile: IFuncCompile;
  generate: IFuncGenerate;
  getType: IFuncGetType;
  load: IFuncLoad;
}
