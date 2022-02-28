import { useEffect, useState } from 'react';

export const useMediaQuery = <GenericValue>(
  queries: string[],
  values: GenericValue[],
  defaultValue: GenericValue,
) => {
  const mediaQueryList = queries.map((query) => window.matchMedia(query));

  const getValue = () => {
    const index = mediaQueryList.findIndex((mediaQuery) => mediaQuery.matches);

    return values[index] || defaultValue;
  };

  const [value, setValue] = useState<GenericValue>(getValue);

  useEffect(() => {
    const handleChange = () => setValue(getValue);

    mediaQueryList.forEach((mediaQuery) =>
      mediaQuery.addEventListener('change', handleChange),
    );

    return () =>
      mediaQueryList.forEach((mediaQuery) =>
        mediaQuery.removeEventListener('change', handleChange),
      );
  });

  return value;
};
