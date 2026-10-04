import { describe, expect, it } from 'vitest';
import { VERSION } from '../src/index.js';

describe('project setup', () => {
  it('exposes a semver version', () => {
    expect(VERSION).toMatch(/^\d+\.\d+\.\d+$/);
  });
});
