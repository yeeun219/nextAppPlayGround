'use client';

import { Tab } from '@/ui/tab';
import clsx from 'clsx';
import React, { useEffect } from 'react';

const randomNumber = (min,max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export function RandomPostTab({ path }) {
  const [post, setPost] = React.useState({text:null, slug: null})

  useEffect(() => {
    const randomId = String(randomNumber(3, 100));
    setPost({ text: `Post ${randomId} (On Demand)`, slug: randomId });
  }, []);

  return (
    <div
      className={clsx('inline-flex transition', {
        'opacity-0': !post,
        'opacity-100': post,
      })}
    >
      {post ? (
        <Tab path={path} item={{ text: post.text, slug: post.slug }} />
      ) : null}
    </div>
  );
}
