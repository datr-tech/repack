import { isFile } from '@app/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('isFile', () => {
        describe('negative: should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = '';

            // Act
            const handler = () => {
              isFile({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' only contains a one char space", () => {
            // Arrange
            const expected = 'path is empty';
            const path = ' ';

            // Act
            const handler = () => {
              isFile({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
          test("when 'path' is an invalid string", () => {
            // Arrange
            const expected = 'path is invalid';
            const path = 'abc';

            // Act
            const handler = () => {
              isFile({ path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
        describe('negative: should return false', () => {
          test("when 'path' represents a dir", () => {
            // Arrange
            const expected = false;
            const path = process.env.REPACK_ROOT_DIR as string;

            // Act
            const found = isFile({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
