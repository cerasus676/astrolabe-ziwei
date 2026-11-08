import type { ComponentProps } from 'react';

export default function LibrarySearch({ defaultValue }: Pick<ComponentProps<'input'>, 'defaultValue'>) {
  return (
    <form action="/library/search" method="get" role="search" className="card-flat flex gap-2 p-2">
      <input
        type="search"
        name="q"
        aria-label="搜索古籍原文"
        defaultValue={defaultValue}
        required
        placeholder="搜索古籍原文，如：化忌、命宫"
        className="input-base min-w-0 flex-1"
      />
      <button type="submit" className="btn-accent shrink-0">搜索</button>
    </form>
  );
}
