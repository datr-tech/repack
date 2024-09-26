import { isPath } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isPath', () => {
        describe("negative: should return 'false'", () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = false;
            const path = '';

            // Act
            const found = isPath({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' only contains a one char space", () => {
            // Arrange
            const expected = false;
            const path = ' ';

            // Act
            const found = isPath({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
