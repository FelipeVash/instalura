import { renderHook, act } from '@testing-library/react-hooks';
import useForm from './index';

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Mario',
        },
      }));

      const initialvalues = { nome: 'Mario' };
      expect(result.current.values).toEqual(initialvalues);

      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Ju',
        },
      };
      act(() => {
        result.current.handleChange(event);
      });

      expect(result.current.values).toEqual({ nome: 'Ju' });
    });
  });
});
