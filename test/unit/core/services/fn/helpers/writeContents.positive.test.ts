import {} from 'node:fs';
import { writeContents } from '@app/core/services/fs/helpers';

let path: string;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('writeContents', () => {
        describe('positive: should write the file contents: ', () => {
          beforeAll(() => {
            path = `${global.JEST_APP_MOCKS_DIR}/temp.txt`;
            global.jestTouchFileSync(path);
          });
          afterAll(() => {
            global.jestRemoveFileSync(path);
          });
          test("when 'path' represents an existing file", () => {
            // Arrange
            const contentsExpected = '1234';
            const hasWrittenExpected = true;

            // Act
            const hasWrittenFound = writeContents({
              contents: contentsExpected,
              path,
            });
            const contentsFound = global.jestReadFileSync(path);

            expect(hasWrittenFound).toBe(hasWrittenExpected);
            expect(contentsFound).toEqual(contentsExpected);
          });
        });
      });
    });
  });
});
