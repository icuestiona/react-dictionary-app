import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn((url) =>
    Promise.resolve({
      json: () =>
        Promise.resolve(
          url.includes('dictionaryapi')
            ? [{ word: 'shine', phonetics: [], meanings: [] }]
            : { photos: [] }
        ),
    })
  );
});

test('renders the dictionary app', async () => {
  render(<App />);
  expect(screen.getByText(/what word do you want to look up/i)).toBeInTheDocument();
  await waitFor(() => expect(screen.getByRole('heading', { name: 'shine' })).toBeInTheDocument());
});
