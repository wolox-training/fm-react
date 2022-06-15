import Signup from 'components/signup';
import { render } from '@testing-library/react';

describe('Test Component', () => {
    test('Mount app', () => {
      render(<Signup />);
    });
  });