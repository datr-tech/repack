import { DestinationPackageTypeEnum } from '../../../../src/config/enums';

describe('config', () => {
  describe('enums', () => {
    test('DestinationPackageTypeEnum', () => {
      expect(DestinationPackageTypeEnum.BREW).toBe('BREW');
      expect(DestinationPackageTypeEnum.UNK).toBe('UNK');
    });
  });
});
