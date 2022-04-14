import { createArrayOfNulls } from "../../utils/createArrayOfNulls"
import { Page } from "../Page"
import { createPageRangeFrom } from "../PageRange"

export { }

describe('PageRange', () => {

  describe('When "totalElements" (10) are equal to number of "results" (10)', () => {
    it('Should return "from" with value "1"', () => {
      const page: Page<string> = {
        totalElements: 10,
        currentPage: 1,
        existsNextPage: false,
        existsPrevPage: false,
        elements: createArrayOfNulls(10).map(() => '')
      }

      const { from: fromResult } = createPageRangeFrom(page);
      const fromExpected = 1;
      expect(fromResult).toBe(fromExpected)
    });

    it('Should return "to" with value "10"', () => {
      const page: Page<string> = {
        totalElements: 10,
        currentPage: 1,
        existsNextPage: false,
        existsPrevPage: false,
        elements: createArrayOfNulls(10).map(() => '')
      }

      const { to: toResult } = createPageRangeFrom(page);
      const toExpected = 10;
      expect(toResult).toBe(toExpected)
    })
  })

  describe('When "totalElements" (26) are strictly greather than number of "results" (10)', () => {
    describe('And "currentPage" has value "1"', () => {
      it('Should return "from" with value "1"', () => {
        const page: Page<string> = {
          totalElements: 10,
          currentPage: 1,
          existsNextPage: false,
          existsPrevPage: false,
          elements: createArrayOfNulls(10).map(() => '')
        }

        const { from: fromResult } = createPageRangeFrom(page);
        const fromExpected = 1;
        expect(fromResult).toBe(fromExpected)
      });

      it('Should return "to" with value "10"', () => {
        const page: Page<string> = {
          totalElements: 10,
          currentPage: 1,
          existsNextPage: false,
          existsPrevPage: false,
          elements: createArrayOfNulls(10).map(() => '')
        }

        const { to: toResult } = createPageRangeFrom(page);
        const toExpected = 10;
        expect(toResult).toBe(toExpected)
      })
    })

    describe('And "currentPage" has value "2"', () => {
      it('Should return "from" with value "11"', () => {
        const page: Page<string> = {
          totalElements: 26,
          currentPage: 2,
          existsNextPage: true,
          existsPrevPage: true,
          elements: createArrayOfNulls(10).map(() => '')
        }

        const { from: fromResult } = createPageRangeFrom(page);
        const fromExpected = 11;
        expect(fromResult).toBe(fromExpected)
      });

      it('Should return "to" with value "20"', () => {
        const page: Page<string> = {
          totalElements: 26,
          currentPage: 2,
          existsNextPage: true,
          existsPrevPage: true,
          elements: createArrayOfNulls(10).map(() => '')
        }

        const { to: toResult } = createPageRangeFrom(page);
        const toExpected = 20;
        expect(toResult).toBe(toExpected)
      })
    })

    describe('And "currentPage" has value "3"', () => {
      it('Should return "from" with value "21"', () => {
        const page: Page<string> = {
          totalElements: 26,
          currentPage: 3,
          existsNextPage: false,
          existsPrevPage: true,
          elements: createArrayOfNulls(6).map(() => '')
        }

        const { from: fromResult } = createPageRangeFrom(page);
        const fromExpected = 21;
        expect(fromResult).toBe(fromExpected)
      });

      it('Should return "to" with value "26"', () => {
        const page: Page<string> = {
          totalElements: 26,
          currentPage: 3,
          existsNextPage: false,
          existsPrevPage: true,
          elements: createArrayOfNulls(6).map(() => '')
        }

        const { to: toResult } = createPageRangeFrom(page);
        const toExpected = 26;
        expect(toResult).toBe(toExpected)
      })
    })
  })

})