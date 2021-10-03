import { getDegreesByDirection } from '../api/get-degrees-by-direction';

describe('Checks functions are available', () => {
  it('Should have a getDegreesByDirection function', () => {
    expect(typeof getDegreesByDirection).toBe('function');
  });
});
