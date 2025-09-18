import { TestType } from 'entities/Tests';

interface FormErrors {
  errors: {
    maxAttemptsError: string;
    durationError: string;
    passingScoreError: string;
    titleError: string;
  };
  isValid: boolean;
}

export const validateForm = (data: TestType, maxScore: number): FormErrors => {
  const errors = {
    maxAttemptsError: '',
    durationError: '',
    passingScoreError: '',
    titleError: '',
  };

  let isValid = true;

  if (!data.max_attempts || +data.max_attempts <= 0) {
    errors.maxAttemptsError = 'Количество попыток должно быть больше 0';
    isValid = false;
  }

  if (!data.duration || +data.duration <= 0) {
    errors.durationError = 'Время выполнения должно быть больше 0';
    isValid = false;
  }

  if (
    data.passing_score === undefined ||
    data.passing_score === null
    // data.passing_score === ''
  ) {
    errors.passingScoreError = 'Проходной балл обязателен';
    isValid = false;
  } else if (data.passing_score > maxScore) {
    errors.passingScoreError = `Проходной балл не должен превышать ${maxScore}`;
    isValid = false;
  }

  if (!data.title) {
    errors.titleError = 'Название теста обязательно';
  } else if (data.title.length < 10) {
    errors.titleError = 'Название теста должно быть больше 10 символов';
    isValid = false;
  }

  return { errors, isValid };
};
