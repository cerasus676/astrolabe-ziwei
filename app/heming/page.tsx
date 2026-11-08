'use client';
import Link from 'next/link';
import { useRef, useState } from 'react';
import BirthForm, { type BirthFormState } from '@/components/BirthForm';
import ChartBoard from '@/components/ChartBoard';
import { generateHemingCharts } from '@/lib/ziwei/heming';

export default function HemingPage() {
  const [formA, setFormA] = useState<BirthFormState | null>(null);
  const [formB, setFormB] = useState<BirthFormState | null>(null);
  const [charts, setCharts] = useState<ReturnType<typeof generateHemingCharts> | null>(null);
  const [error, setError] = useState('');
  const resultsRef = useRef<HTMLElement>(null);

  function handleGenerate() {
    setError('');
    try {
      setCharts(generateHemingCharts(formA, formB));
      requestAnimationFrame(() => resultsRef.current?.focus());
    } catch (cause) {
      setCharts(null);
      setError(cause instanceof RangeError ? cause.message : '无法生成命盘，请检查双方的出生资料。');
    }
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <nav className="mb-6 flex flex-wrap items-center gap-4 text-sm text-[var(--ac)]" aria-label="排盘导航">
        <Link className="hover:underline" href="/">← 首页</Link>
        <Link className="hover:underline" href="/chart">单人排盘</Link>
      </nav>
      <h1 className="mb-3 text-2xl font-semibold text-[var(--tx-0)]">双人合盘</h1>
      <p className="mb-5 text-sm leading-relaxed text-[var(--tx-2)]">填写双方的出生资料，在当前浏览器内生成两张命盘并对照查看。</p>
      <div className="grid gap-4 md:grid-cols-2">
        <BirthForm hideSubmit title="甲方出生资料" onFormSave={setFormA} />
        <BirthForm hideSubmit title="乙方出生资料" onFormSave={setFormB} />
      </div>
      <button type="button" className="btn-accent mt-5 w-full sm:w-auto" onClick={handleGenerate}>生成双方命盘</button>
      {error && <p className="mt-3 text-sm text-red-400" role="alert">{error}</p>}
      {charts && (
        <section ref={resultsRef} tabIndex={-1} className="mt-8 scroll-mt-4" aria-labelledby="heming-results">
          <h2 id="heming-results" className="mb-2 text-xl font-semibold text-[var(--tx-0)]">双方命盘</h2>
          <p className="mb-4 text-sm text-[var(--tx-3)] sm:hidden">可横向滑动查看完整命盘。</p>
          <div className="grid gap-6 xl:grid-cols-2">
            {charts.map((chart, index) => {
              const label = index === 0 ? '甲方命盘' : '乙方命盘';
              return (
                <div key={label} className="min-w-0">
                  <h3 className="mb-3 text-[var(--ac)]">{label}</h3>
                  <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={label}>
                    <div className="min-w-[36rem]"><ChartBoard chart={chart} /></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
