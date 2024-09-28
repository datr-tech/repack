import { createFile } from '@app/core/services/fs/helpers';

const path = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}.txt`;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('createFile', () => {
        describe('positive: should create the file', () => {
          afterAll(() => {
            global.jestRemoveFileSync(path);
          });
          test("when 'path' is valid", () => {
            // Arrange
            const hasBeenCreatedExpected = true;

            // Act
            const hasBeenCreatedFound = createFile({ path });

            // Assert
            expect(hasBeenCreatedFound).toBe(hasBeenCreatedExpected);
          });
        });
      });
    });
  });
});
