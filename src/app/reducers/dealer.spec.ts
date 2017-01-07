import reducer, * as fromDealer from './dealer';
import {DealerActions} from '../actions';

describe('Dealer Reducer', () => {
  let actions: DealerActions;
  let state: fromDealer.DealerState;

  beforeEach(() => {
    actions = new DealerActions();
    state = {
      id: 1,
      name: 'Test'
    };
  });

  it('uses an initial state when none is given', () => {
    let result = reducer(undefined, {type: 'SOME ACTION'});
    expect(result.code).toBe(0);
    expect(result.name).toBe('');
  });
});
