import '@testing-library/jest-dom';
import 'mutationobserver-shim';
import '@testing-library/react';
import '@testing-library/react-hooks';

jest.mock('i18next', () => ({
  t: (key: string, params: Record<string, string>) => (params ? `${key} ${JSON.stringify(params)}` : key)
}));
