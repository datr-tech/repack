import { getExtension } from '../../../../../src/core/services/fs';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getExtension', () => {
        describe('negative: should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const expected = 'path is empty';
            const path = '';

            // Act
            const handler = () => {
              getExtension({ pathStr: path });
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
              getExtension({ pathStr: path });
            };

            // Assert
            expect(handler).toThrow(expected);
          });
        });
        describe('negative: should return an empty string', () => {
          test("when 'path' is an invalid string", () => {
            // Arrange
            const expected = '';
            const path = 'abc';

            // Act
            const found = getExtension({ pathStr: path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
