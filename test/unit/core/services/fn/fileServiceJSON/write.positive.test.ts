import { fileServiceJSON } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

let pathToBeCreated: string;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('fileServiceJSON', () => {
        describe('write', () => {
          beforeAll(() => {
            pathToBeCreated = `${global.JEST_APP_MOCKS_DIR}/temp.json`;
            global.jestTouchFileSync(pathToBeCreated);
          });
          afterAll(() => {
            global.jestRemoveFileSync(pathToBeCreated);
          });
          describe('positive: should write the file contents', () => {
            test("when 'path' represents a existing .json file", () => {
              // Arrange
              const contentsExpected = { name: 'abc ' };
              const hasWrittenExpected = true;
              const path = pathToBeCreated;

              // Act
              const foundService = fileServiceJSON({
                path,
              }) as IFileServiceOutput;
              const hasWrittenFound = foundService.write({
                contents: JSON.stringify(contentsExpected),
              });
              const contentsFound = global.jestReadFileSync(path);
              const contentsFoundJSON = JSON.parse(contentsFound);

              expect(hasWrittenFound).toBe(hasWrittenExpected);
              expect(contentsFoundJSON).toEqual(contentsExpected);
            });
          });
        });
      });
    });
  });
});
