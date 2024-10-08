import { PathTypeEnum } from '@app/config/enums';

describe('config', () => {
  describe('enums', () => {
    test('PathTypeEnum', () => {
      expect(PathTypeEnum.FILE).toBe(1);
      expect(PathTypeEnum.JSON).toBe(2);
      expect(PathTypeEnum.DIR).toBe(3);
      expect(PathTypeEnum.UNK).toBe(4);
      expect(PathTypeEnum.NF).toBe(5);
    });
  });
});
