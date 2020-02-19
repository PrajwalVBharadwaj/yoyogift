import React from "react";
import * as SortFunction from "./CompareForSort";

describe("Testing sorting function:", () => {
  const largerArg = {
    cardPoints: 500,
    cardCount: 7,
    cardExpiryDate: 9
  };
  const smallerArg = {
    cardPoints: 200,
    cardCount: 3,
    cardExpiryDate: 5
  };
  describe("compareCountAsc", () => {
    it("Arguments passed in ascending order", () => {
      const result = SortFunction.compareCountAsc(smallerArg, largerArg);
      expect(result).toBe(-1);
    });
    it("Arguments passed in descending order", () => {
      const result = SortFunction.compareCountAsc(largerArg, smallerArg);
      expect(result).toBe(1);
    });
    it("Equal arguments passed", () => {
      const result = SortFunction.compareCountAsc(smallerArg, smallerArg);
      expect(result).toBe(-1);
    });
  });
  describe("compareCountDesc", () => {
    it("Arguments passed in ascending order", () => {
      const result = SortFunction.compareCountDesc(smallerArg, largerArg);
      expect(result).toBe(1);
    });
    it("Arguments passed in descending order", () => {
      const result = SortFunction.compareCountDesc(largerArg, smallerArg);
      expect(result).toBe(-1);
    });
    it("Equal arguments passed", () => {
      const result = SortFunction.compareCountDesc(smallerArg, smallerArg);
      expect(result).toBe(-1);
    });
  });

  describe("comparePointsAsc", () => {
    it("Arguments passed in ascending order", () => {
      const result = SortFunction.comparePointsAsc(smallerArg, largerArg);
      expect(result).toBe(-1);
    });
    it("Arguments passed in descending order", () => {
      const result = SortFunction.comparePointsAsc(largerArg, smallerArg);
      expect(result).toBe(1);
    });
    it("Equal arguments passed", () => {
      const result = SortFunction.comparePointsAsc(smallerArg, smallerArg);
      expect(result).toBe(-1);
    });
  });
  describe("comparePointsDesc", () => {
    it("Arguments passed in ascending order", () => {
      const result = SortFunction.comparePointsDesc(smallerArg, largerArg);
      expect(result).toBe(1);
    });
    it("Arguments passed in descending order", () => {
      const result = SortFunction.comparePointsDesc(largerArg, smallerArg);
      expect(result).toBe(-1);
    });
    it("Equal arguments passed", () => {
      const result = SortFunction.comparePointsDesc(smallerArg, smallerArg);
      expect(result).toBe(-1);
    });
  });

  describe("compareValidityAsc", () => {
    it("Arguments passed in ascending order", () => {
      const result = SortFunction.compareValidityAsc(smallerArg, largerArg);
      expect(result).toBe(-1);
    });
    it("Arguments passed in descending order", () => {
      const result = SortFunction.compareValidityAsc(largerArg, smallerArg);
      expect(result).toBe(1);
    });
    it("Equal arguments passed", () => {
      const result = SortFunction.compareValidityAsc(smallerArg, smallerArg);
      expect(result).toBe(-1);
    });
  });
  describe("compareValidityDesc", () => {
    it("Arguments passed in ascending order", () => {
      const result = SortFunction.compareValidityDesc(smallerArg, largerArg);
      expect(result).toBe(1);
    });
    it("Arguments passed in descending order", () => {
      const result = SortFunction.compareValidityDesc(largerArg, smallerArg);
      expect(result).toBe(-1);
    });
    it("Equal arguments passed", () => {
      const result = SortFunction.compareValidityDesc(smallerArg, smallerArg);
      expect(result).toBe(-1);
    });
  });
});
