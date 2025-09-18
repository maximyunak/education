import { TestType } from 'entities/Tests';

export const validatePassingScore = (score: number, maxScore: number) => {
  if (score > maxScore) {
    return false;
  } else {
    return true;
  }
};
