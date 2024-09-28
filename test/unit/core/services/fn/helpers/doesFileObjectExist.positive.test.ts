import { doesFileObjectExist } from '@app/core/services/fs/helpers';

const pathBase = `${global.JEST_APP_MOCKS_DIR}/temp.${Date.now()}`;
const pathJSON = `${pathBase}.json`;
const pathTxt = `${pathBase}.txt`;

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('doesFileObjectExist', () => {
        describe("positive: should return 'true'", () => {
          beforeAll(() => {
            global.jestTouchFileSync(pathJSON);
            global.jestTouchFileSync(pathTxt);
          });
          afterAll(() => {
            global.jestRemoveFileSync(pathJSON);
            global.jestRemoveFileSync(pathTxt);
          });
          test("when 'path' represents an existing .json file", () => {
            // Arrange
            const expected = true;
            const path = pathJSON;

            // Act
            const found = doesFileObjectExist({ path });

            // Assert
            expect(found).toBe(expected);
          });
          test("when 'path' represents an existing .txt file", () => {
            // Arrange
            const expected = true;
            const path = pathTxt;

            // Act
            const found = doesFileObjectExist({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
