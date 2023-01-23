import React from 'react';
import { act, render } from '@testing-library/react';

import Index from '../pages/index';

(global as any).fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: '__MESSAGE__' }),
  })
);

describe('Index', () => {
  it('should render successfully', async () => {
    let baseElement;

    await act(async () => ({ baseElement } = render(<Index />)));
    expect(baseElement).toBeTruthy();
  });
});
