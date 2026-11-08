import { Suspense } from 'react';
import SearchResults from './SearchResults';

export const metadata = {
  title: '搜索 · 古籍原典库',
  robots: { index: false },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="mx-auto max-w-3xl px-6 py-12">正在读取搜索关键词…</p>}>
      <SearchResults />
    </Suspense>
  );
}
