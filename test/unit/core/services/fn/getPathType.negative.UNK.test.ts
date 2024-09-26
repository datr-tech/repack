import { PathTypeEnum } from '@app/config/enums';
import { getPathType } from '@app/core/services/fs';
import * as isDirModule from '@app/core/services/fs/isDir';
import * as isFileModule from '@app/core/services/fs/isFile';

jest.spyOn(isDirModule, 'isDir').mockReturnValueOnce(false);
jest.spyOn(isFileModule, 'isFile').mockReturnValueOnce(false);

describe('core', () => {
  describe('services', () => {
    describe('fn', () => {
      describe('getPathType', () => {
        describe("negative: should return 'PathTypeEnum.UNK'", () => {
          test("when 'path' is neither a file, a JSON file, nor a dir", () => {
            // Arrange
            const expected = PathTypeEnum.UNK;
            const path = process.env.REPACK_ROOT_DIR as string;

            // Act
            const found = getPathType({ path });

            // Assert
            expect(found).toBe(expected);
          });
        });
      });
    });
  });
});
