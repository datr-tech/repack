import { isJSON } from '../../../../../src/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isFile', () => {
        describe("positive: should return 'true'", () => {
          test("when 'path' represents a valid file", () => {
            // Arrange
            const expected = true;
            const rootDir = process.env.REPACK_ROOT_DIR as string;
            const path = `${rootDir}/package.json`;

            // Act
            const found = isJSON({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
