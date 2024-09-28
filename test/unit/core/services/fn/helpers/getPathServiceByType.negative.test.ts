import { PathTypeEnum } from '@app/config/enums';
import { getPathServiceByType } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathServiceByType', () => {
        describe('negative: should throw an error', () => {
          test("when 'pathType' is 'PathTypeEnum.NF'", () => {
            // Arrange
            const expected = 'unknown pathType';
            const path = global.JEST_APP_MOCKS_DIR;
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
            const path = global.JEST_APP_MOCKS_DIR;
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
