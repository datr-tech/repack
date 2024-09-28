import { createFile } from '@app/core/services/fs/helpers';

const path = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}.txt`;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('createFile', () => {
        describe('negative: should return false', () => {
          beforeAll(() => {
            global.jestTouchFileSync(path);
          });
          afterAll(() => {
            global.jestRemoveFileSync(path);
          });
          test("when 'path' represents an existing file", () => {
            // Arrange
            const hasBeenCreatedExpected = false;

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
