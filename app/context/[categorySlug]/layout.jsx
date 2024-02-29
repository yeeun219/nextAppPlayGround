import { getCategories, getCategory } from '@/app/api/categories/getCategories';
import { Boundary } from '@/ui/boundary';
import { TabGroup } from '@/ui/tab-group';
import { Counter } from '../context-click-counter';

export default async function Layout({
  children,
  params,
}) {
  const category = await getCategory(params.categorySlug );
  const categories = await getCategories(params.categorySlug);

  return (
    <Boundary labels={['Layout [Server Component]']} animateRerendering={false}>
      <div className="space-y-9">
        <TabGroup
          path={`/context/${category.slug}`}
          items={[
            {
              text: 'All',
            },
            ...categories.map((x) => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />
        <Counter />
        <div>{children}</div>
      </div>
    </Boundary>
  );
}
