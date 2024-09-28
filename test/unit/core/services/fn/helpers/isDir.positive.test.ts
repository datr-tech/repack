import { isDir } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isDir', () => {
        describe("positive: should return 'true'", () => {
          test("when 'path' represents a valid dir", () => {
            // Arrange
            const expected = true;
            const path = global.JEST_APP_MOCKS_DIR;

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
