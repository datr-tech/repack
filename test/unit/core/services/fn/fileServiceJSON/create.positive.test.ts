import { fileServiceJSON } from '@app/core/services/fs';
import { IFileServiceOutput } from '@app/interfaces/core/services/fs';

const pathExpected = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}.json`;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('createFileJSON', () => {
        describe('positive: should create the file', () => {
          afterAll(() => {
            global.jestRemoveFileSync(pathExpected);
          });
          test("when 'path' represents a valid .json file", () => {
            // Arrange
            const hasBeenCreatedExpected = true;

            // Act
            const serviceFound = fileServiceJSON({
              path: pathExpected,
            }) as IFileServiceOutput;
            const pathFound = serviceFound.getPath();
            const hasBeenCreatedFound = serviceFound.create();

            // Assert
            expect(pathFound).toBe(pathExpected);
            expect(hasBeenCreatedFound).toBe(hasBeenCreatedExpected);
          });
        });
      });
    });
  });
});
