import { isPathTruthy } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isPathTruthy', () => {
        describe("positive: should return 'true'", () => {
          test("when 'path' is a non-empty string", () => {
            // Arrange
            const expected = true;
            const path = global.JEST_APP_MOCKS_DIR;

            // Act
            const found = isPathTruthy({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
