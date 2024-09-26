import { isDir } from '../../../../../src/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isDir', () => {
        describe("positive: should return 'true'", () => {
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const expected = true;
            const path = process.env.REPACK_ROOT_DIR as string;

            // Act
            const found = isDir({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
