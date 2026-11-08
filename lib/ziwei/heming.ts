import type { BirthFormState } from '@/components/BirthForm';
import { generateChart } from './algorithm';
import { formToBirthInfo, getBirthSolarDate } from './share';

export function generateHemingCharts(formA: BirthFormState | null, formB: BirthFormState | null) {
  const births = ([['甲方', formA], ['乙方', formB]] as const).map(([label, form]) => {
    if (!form || !form.year || !form.month || !form.day) {
      throw new RangeError(`请填写${label}的出生日期。`);
    }
    if (!getBirthSolarDate(form)) {
      throw new RangeError(`请检查${label}的出生日期，该日期在所选历法中不存在。`);
    }
    return formToBirthInfo(form);
  });

  return births.map(info => generateChart(info));
}
