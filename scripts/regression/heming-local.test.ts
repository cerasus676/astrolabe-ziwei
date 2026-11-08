import assert from 'node:assert/strict';
import type { BirthFormState } from '../../components/BirthForm';
import { generateHemingCharts } from '../../lib/ziwei/heming';

const lunar: BirthFormState = {
  year: '2020', month: '4', day: '1', calendar: 'lunar', isLeapMonth: true,
  clockHour: '23', clockMinute: '30', gender: 'male', unknownTime: false,
  name: '', province: '', city: '', longitude: 120,
};
const solar: BirthFormState = { ...lunar, calendar: 'solar', month: '5', day: '23' };

const originalFetch = globalThis.fetch;
try {
  globalThis.fetch = () => { throw new Error('排盘不得发出网络请求'); };
  const [fromLunar, fromSolar] = generateHemingCharts(lunar, solar);
  // 先换算闰四月初一，再按晚子时规则顺延至公历 5 月 24 日。
  assert.deepEqual(fromLunar, fromSolar);
  assert.equal(fromLunar.birthInfo.day, 24);
  assert.throws(() => generateHemingCharts({ ...lunar, month: '5' }, solar), /甲方/);
} finally {
  globalThis.fetch = originalFetch;
}
console.log('Heming local lunar conversion and privacy regressions passed');
