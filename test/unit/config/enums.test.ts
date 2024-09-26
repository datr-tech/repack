import {
    FromPackageTypeEnum,
    PathTypeEnum,
    ToPackageTypeEnum
} from '../../../src/config/enums';
  
describe('config', () => {
    describe('enums', () => {
        test('FromPackageTypeEnum', () => {
            expect(FromPackageTypeEnum.NPM).toBe('NPM');
        });
        test('PathTypeEnum', () => {
            expect(PathTypeEnum.FILE).toBe(1);
            expect(PathTypeEnum.JSON).toBe(2);
            expect(PathTypeEnum.DIR).toBe(3);
            expect(PathTypeEnum.UNK).toBe(4);
            expect(PathTypeEnum.NF).toBe(5);
        });
        test('ToPackageTypeEnum', () => {
            expect(ToPackageTypeEnum.BREW).toBe("BREW");
        });
    });
});