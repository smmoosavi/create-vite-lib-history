import { describe, expect, it } from 'vitest';
import { theLib } from './the-lib';

describe('theLib', () => {
  it('return the-lib', () => {
    expect(theLib()).toBe('the-lib');
  });
});
