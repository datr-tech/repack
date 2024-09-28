import { writeContents } from '@app/core/services/fs/helpers';

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('writeContents', () => {
        describe('negative: should throw an error', () => {
          test("when 'path' is an empty string", () => {
            // Arrange
            const contents = '1234';
            const errorExpected = 'write error';
            const path = '';

            // Act
            const handler = () => {
              writeContents({
                contents: contents,
                path,
              });
            };

            expect(handler).toThrow(errorExpected);
          });
          test("when 'path' is a one char string", () => {
            // Arrange
            const contents = '1234';
            const errorExpected = 'write error';
            const path = ' ';

            // Act
            const handler = () => {
              writeContents({
                contents,
                path,
              });
            };

            expect(handler).toThrow(errorExpected);
          });
        });
        describe('negative: should return false', () => {
          test("when 'path' is a valid file object, but not a file", () => {
            // Arrange
            const contents = '1234';
            const hasWrittenExpected = false;
            const path = global.JEST_APP_MOCKS_DIR;

            // Act
            const hasWrittenFound = writeContents({
              contents,
              path,
            });

            expect(hasWrittenFound).toBe(hasWrittenExpected);
          });
        });
      });
    });
  });
});
