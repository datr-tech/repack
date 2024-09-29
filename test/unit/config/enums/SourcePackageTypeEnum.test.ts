import { SourcePackageTypeEnum } from '@app/config/enums';

describe('config', () => {
  describe('enums', () => {
    test('SourcePackageTypeEnum', () => {
      expect(SourcePackageTypeEnum.NODE).toBe('NODE');
      expect(SourcePackageTypeEnum.UNK).toBe('UNK');
    });
  });
});
