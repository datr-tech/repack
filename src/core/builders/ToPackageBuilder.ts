import { ToPackageTypeEnum } from '@repack/config';
import { ToPackageBrew } from '@repack/core/toPackages';

export class ToPackageBuilder {
  /**
   *
   * @param type
   * @returns {ToPackageBrew}
   */
  static build(type: ToPackageTypeEnum): ToPackageBrew {
    let toPackage: ToPackageBrew;

    switch (type) {
      case ToPackageTypeEnum.BREW.toString():
        toPackage = new ToPackageBrew();
    }

    return toPackage;
  }
}
