import {describe, expect, it} from 'vitest';
import { parOImpar } from '../src/css/code';

test('La función devuelve "par" para números pares', () => {
    expect(parOImpar(4)).toBe('par');
    expect(parOImpar(0)).toBe('par');
});

test('La función devuelve "impar" para números impares', () => {
    expect(parOImpar(7)).toBe('impar');
    expect(parOImpar(-3)).toBe('impar');
});

