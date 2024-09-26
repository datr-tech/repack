import { PathTypeEnum } from '../../../../../src/config/enums';
import { getPathServiceByType } from '../../../../../src/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathServiceByType', () => {
        describe('negative: should throw an error', () => {
          test("when 'pathType' is 'PathTypeEnum.NF'", () => {
            // Arrange
            const expected = 'unknown pathType';
            const path = process.env.REPACK_ROOT_DIR as string;
            const pathType = PathTypeEnum.NF;

            // Act
            const handler = () => {
              getPathServiceByType({ path, pathType });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'pathType' is 'PathTypeEnum.UNK'", () => {
            // Arrange
            const expected = 'unknown pathType';
            const path = process.env.REPACK_ROOT_DIR as string;
            const pathType = PathTypeEnum.UNK;

            // Act
            const handler = () => {
              getPathServiceByType({ path, pathType });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
      });
    });
  });
});
