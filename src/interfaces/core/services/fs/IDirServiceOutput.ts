import {
  IHelperGetPath,
  IHelperValidate,
} from '@app/interfaces/core/services/fs/helpers';

export interface IDirServiceOutput {
  getPath: IHelperGetPath;
  validate: IHelperValidate;
}
