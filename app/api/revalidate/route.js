import { revalidateTag,revalidatePath } from 'next/cache'
 
export async function GET(request) {
  console.log(request)
  const path = request.nextUrl.searchParams.get('path') || '/isr/[id]';
  const collection =
    request.nextUrl.searchParams.get('collection') || 'collection';
  revalidatePath(path);
  revalidateTag(collection);
  return Response.json({
    revalidated: true,
    now: Date.now(),
    cache: 'no-store',
  });
}