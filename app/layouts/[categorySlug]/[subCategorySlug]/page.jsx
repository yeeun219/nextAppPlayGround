import { getCategory } from '@/app/api/categories/getCategories';
import { SkeletonCard } from '@/ui/skeleton-card';

export default async function Page({
  params,
}) {

  const category = await getCategory(params.subCategorySlug );
  console.log(category)
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">{category.name}</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {Array.from({ length: category.count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
