import { notFound } from 'next/navigation';

// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

export const Review = {
  id: "",
  name: "",
  rating: 0,
  text: "",
};

export async function getReviews() {
  const res = await fetch(`https://app-router-api.vercel.app/api/reviews`);

  if (!res.ok) {
    // Render the closest `error.js` Error Boundary
    throw new Error('Something went wrong!');
  }

  const reviews = (await res.json());

  if (reviews.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return reviews;
}
