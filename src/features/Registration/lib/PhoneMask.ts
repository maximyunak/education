export const formatPhoneNumber = (value: string): string => {
  const numbersOnly = value.replace(/\D/g, '');

  // Если длина больше 11, игнорируем ввод
  if (numbersOnly.length > 11) {
    return value.slice(0, -1);
  }

  if (numbersOnly.length <= 11) {
    let formattedPhone = '';

    if (numbersOnly.length > 0) {
      formattedPhone = '+7 ';

      if (numbersOnly.length > 1) {
        formattedPhone += `(${numbersOnly.slice(1, 4)}`;
      }

      if (numbersOnly.length > 4) {
        formattedPhone += `) ${numbersOnly.slice(4, 7)}`;
      }

      if (numbersOnly.length > 7) {
        formattedPhone += `-${numbersOnly.slice(7, 9)}`;
      }

      if (numbersOnly.length > 9) {
        formattedPhone += `-${numbersOnly.slice(9, 11)}`;
      }
    }

    return formattedPhone;
  }

  return value;
};
