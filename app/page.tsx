import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-5 sm:px-8">
      <nav aria-label="站点导航" className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--bdr)] py-5 text-sm">
        <span className="font-semibold text-[var(--ac)]">Astrolabe 星盘仪</span>
        <div className="flex gap-5">
          <Link className="hover:underline" href="/library">古籍库</Link>
          <Link className="hover:underline" href="/knowledge">星曜百科</Link>
        </div>
      </nav>

      <section className="flex flex-1 flex-col justify-center py-14 sm:py-20">
        <p className="mb-3 text-sm tracking-widest text-[var(--ac)]">Astrolabe 星盘仪</p>
        <h1 className="text-4xl font-semibold text-[var(--tx-0)] sm:text-5xl">紫微斗数排盘</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-[var(--tx-2)]">
          支持公历与农历出生日期。查看十二宫、主星、四化及大限流年，也可以同时起出两张命盘，对照查看。
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link href="/chart" className="card-flat block p-5 hover:border-[var(--ac)]">
            <span className="block text-lg font-semibold text-[var(--ac)]">单人排盘</span>
            <span className="mt-2 block text-sm text-[var(--tx-2)]">生成一张命盘，查看本命、大限与流年。</span>
          </Link>
          <Link href="/heming" className="card-flat block p-5 hover:border-[var(--ac)]">
            <span className="block text-lg font-semibold text-[var(--ac)]">双人合盘</span>
            <span className="mt-2 block text-sm text-[var(--tx-2)]">填写双方的出生资料，在同一页对照命盘。</span>
          </Link>
        </div>
        <p className="mt-5 text-sm text-[var(--tx-3)]">出生资料仅在当前浏览器页面内用于排盘。</p>
      </section>

      <footer className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--bdr)] py-5 text-sm text-[var(--tx-3)]">
        <a className="underline" href="https://github.com/Renhuai123/ziwei-doushu">原项目 紫微研究（MIT）</a>
        <Link className="underline" href="/privacy">隐私说明</Link>
      </footer>
    </main>
  );
}
