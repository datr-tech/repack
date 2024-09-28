import { doesFileObjectExist } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('doesFileObjectExist', () => {
        describe("positive: should return 'false'", () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = false;
            const path = '';

            // Act
            const found = doesFileObjectExist({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' is a one char string", () => {
            // Arrange
            const expected = false;
            const path = '';

            // Act
            const found = doesFileObjectExist({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' is a non-empty, invalid string", () => {
            // Arrange
            const expected = false;
            const path = 'abc';

            // Act
            const found = doesFileObjectExist({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' is a non-empty, valid string, but one that does not represent a file", () => {
            // Arrange
            const expected = false;
            const path = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}.csv`;

            // Act
            const found = doesFileObjectExist({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
