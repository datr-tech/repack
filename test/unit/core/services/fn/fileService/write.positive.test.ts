import { fileService } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

let pathToBeCreated: string;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileService', () => {
        describe('write', () => {
          beforeAll(() => {
            pathToBeCreated = `${global.JEST_APP_MOCKS_DIR}/temp.txt`;
            global.jestTouchFileSync(pathToBeCreated);
          });
          afterAll(() => {
            global.jestRemoveFileSync(pathToBeCreated);
          });
          describe('positive: should write the contents', () => {
            test("when 'path' represents a existing file", () => {
              // Arrange
              const contentsExpected = '1234';
              const hasWrittenExpected = true;
              const path = pathToBeCreated;

              // Act
              const foundService = fileService({ path }) as IFileServiceOutput;
              const hasWrittenFound = foundService.write({
                contents: contentsExpected,
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
});
