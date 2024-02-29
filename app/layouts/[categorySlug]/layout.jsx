import { getCategories, getCategory } from '@/app/api/categories/getCategories';
import { ClickCounter } from '@/ui/click-counter';
import { TabGroup } from '@/ui/tab-group';

export default async function Layout({
  children,
  params,
}) {
  const category = await getCategory(params.categorySlug );
  const categories = await getCategories( params.categorySlug);
  console.log(category.slug)
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path={`/layouts/${params.categorySlug}`}
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

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
