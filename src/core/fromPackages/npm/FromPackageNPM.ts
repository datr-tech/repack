import {
  IFilePackageManagerConfig,
  IFromPackage,
} from '@repack/core/interfaces';

export class FromPackageNPM implements IFromPackage {
  private _packageJson: IFilePackageManagerConfig;

  constructor(packageJson: IFilePackageManagerConfig) {
    this._packageJson = packageJson;
  }

  public getDescription(): string {
    return this._packageJson.getDescription();
  }

  public getMan(): string {
    return this._packageJson.getMan();
  }

  public getName(): string {
    return this._packageJson.getName();
  }

  public getEntryPoint(): string {
    return this._packageJson.getEntryPoint();
  }

  public getType(): string {
    return this._packageJson.getType();
  }

  public getVersion(): string {
    return this._packageJson.getVersion();
  }
}
