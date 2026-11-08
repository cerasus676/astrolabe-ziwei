'use client';
import Link from 'next/link';
import { useState } from 'react';
import BirthForm, { type BirthFormState } from '@/components/BirthForm';
import ChartBoard from '@/components/ChartBoard';
import ChartSummary from '@/components/ChartSummary';
import StarDetailPanel from '@/components/StarDetailPanel';
import { generateChart } from '@/lib/ziwei/algorithm';
import type { BirthInfo, ZiweiChart, Star, Palace } from '@/lib/ziwei/types';

export default function ChartPage() {
  const [form, setForm] = useState<BirthFormState>();
  const [chart, setChart] = useState<ZiweiChart | null>(null);
  const [error, setError] = useState('');
  const [selectedStar, setSelectedStar] = useState<{ star: Star; palace: Palace } | null>(null);

  function handleSubmit(info: BirthInfo) {
    try {
      setChart(generateChart(info));
      setError('');
    } catch {
      setError('无法生成命盘，请检查出生日期和时间。');
    }
  }

  return (
    <main className={`mx-auto px-4 py-8 sm:px-6 ${chart ? 'max-w-7xl' : 'max-w-xl'}`}>
      <nav className="mb-6 flex flex-wrap items-center gap-4 text-sm text-[var(--ac)]" aria-label="排盘导航">
        <Link className="hover:underline" href="/">← 首页</Link>
        <Link className="hover:underline" href="/heming">双人合盘</Link>
      </nav>
      <h1 className="mb-3 text-2xl font-semibold text-[var(--tx-0)]">单人排盘</h1>

      {chart ? (
        <>
          <button type="button" className="btn-ghost mb-4" onClick={() => { setChart(null); setSelectedStar(null); }}>
            修改出生资料
          </button>
          <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
            <div className="min-w-0">
              <p className="mb-2 text-sm text-[var(--tx-3)] sm:hidden">可横向滑动查看完整命盘。</p>
              <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="命盘">
                <div className="min-w-[36rem]">
                  <ChartBoard chart={chart} onStarSelect={(star, palace) => setSelectedStar({ star, palace })} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <ChartSummary chart={chart} />
              <StarDetailPanel star={selectedStar?.star ?? null} palaceName={selectedStar?.palace.name ?? ''} onClose={() => setSelectedStar(null)} />
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="mb-5 text-sm leading-relaxed text-[var(--tx-2)]">填写出生日期和时间，命盘将在当前浏览器内生成。</p>
          <BirthForm initialData={form} onFormSave={setForm} onSubmit={handleSubmit} />
          {error && <p className="mt-4 text-sm text-red-400" role="alert">{error}</p>}
        </>
      )}
    </main>
  );
}
