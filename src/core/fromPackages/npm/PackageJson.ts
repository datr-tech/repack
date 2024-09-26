import { CONSTS_EMPTY_STRING, FromPackageTypeEnum } from '@repack/config';
import { IFilePackageManagerConfig } from '@repack/core/interfaces';
import { JsonFileService } from '@repack/core/services';

export class PackageJson
  extends JsonFileService
  implements IFilePackageManagerConfig
{
  private _json: JSON;

  constructor(packageDirPath: string) {
    const packageJsonPath = `${packageDirPath}/package.json`;
    super(packageJsonPath);
  }

  public getDescription(): string {
    return this.getProp('description') || CONSTS_EMPTY_STRING;
  }

  public getMan(): string {
    return this.getProp('man') || CONSTS_EMPTY_STRING;
  }

  public getName(): string {
    return this.getProp('name') || CONSTS_EMPTY_STRING;
  }

  public getEntryPoint(): string {
    return this.getProp('main') || CONSTS_EMPTY_STRING;
  }

  public getType(): string {
    return FromPackageTypeEnum.NPM;
  }

  public getVersion(): string {
    return this.getProp('version') || CONSTS_EMPTY_STRING;
  }

  public load(): boolean {
    let loaded: boolean = false;

    try {
      if (this.validate()) {
        this._json = this.read();
        loaded = true;
      }

      return loaded;
    } catch (error) {
      const { message } = error;
      throw new Error(message);
    }
  }

  private assertJSON(): void {
    if (!this.hasJson()) {
      throw new Error('JSON not loaded');
    }
  }

  private hasJson(): boolean {
    return typeof this._json !== 'undefined';
  }

  private hasProp(name: string): boolean {
    this.assertJSON();

    return typeof this._json[name] !== 'undefined';
  }

  private getProp(name: string): string | undefined {
    return this.hasProp(name) ? this._json[name] : undefined;
  }
}
