import assert from 'node:assert/strict';
import type { BirthFormState } from '../../components/BirthForm';
import { generateHemingCharts } from '../../lib/ziwei/heming';

// 起盘必须始终使用双方当前表单，不能复用上次的命盘。
const form: BirthFormState = {
  year: '1990', month: '1', day: '1', clockHour: '8', clockMinute: '0',
  gender: 'male', unknownTime: false, name: 'A', province: '', city: '', longitude: 120,
};
const formB = { ...form, name: 'B', gender: 'female' as const };
const first = generateHemingCharts(form, formB);
const second = generateHemingCharts({ ...form, year: '1991' }, formB);
assert.equal(first.length, 2);
assert.equal(first[0].birthInfo.year, 1990);
assert.equal(second[0].birthInfo.year, 1991, '再次起盘必须使用修改后的日期');
assert.equal(second[1].birthInfo.name, 'B');
assert.equal(second[1].palaces.length, 12);
assert.throws(() => generateHemingCharts(null, formB), /甲方/);
assert.throws(() => generateHemingCharts(form, { ...formB, month: '2', day: '30' }), /乙方/);
console.log('Heming edited-form regression passed');
