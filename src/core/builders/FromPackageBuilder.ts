import { FromPackageTypeEnum } from '@repack/config';
import { PackageJson, FromPackageNPM } from '@repack/core/fromPackages';
import {
  IFromPackage,
  IFilePackageManagerConfig,
} from '@repack/core/interfaces';

export class FromPackageBuilder {
  static build(dirPath: string, type: FromPackageTypeEnum): IFromPackage {
    let fromPackage: IFromPackage;
    let packageJson: IFilePackageManagerConfig;

    switch (type) {
      case FromPackageTypeEnum.NPM.toString():
        packageJson = new PackageJson(dirPath);
        packageJson.load();
        fromPackage = new FromPackageNPM(packageJson);
    }

    return fromPackage;
  }
}
