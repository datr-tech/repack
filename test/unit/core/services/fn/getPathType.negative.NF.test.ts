import { PathTypeEnum } from '@app/config/enums';
import { getPathType } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathType', () => {
        describe("negative: should return 'PathTypeEnum.NF'", () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = PathTypeEnum.NF;
            const path = '';

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' only contains a one char space", () => {
            // Arrange
            const expected = PathTypeEnum.NF;
            const path = ' ';

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
