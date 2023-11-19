
import React, { lazy, Suspense } from 'react';

const LazySearchSection = lazy(() => import('./components/SearchSection'));
const LazyCrudSection = lazy(() => import('./components/CrudSection'));
const LazySortSection = lazy(() => import("./components/SortSection"))

function LazyLoadedComponents() {
  return (
    <div className='flex'>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyCrudSection />
      <LazySortSection />
      <LazySearchSection />
    </Suspense>
    </div>
  );
}

export default LazyLoadedComponents;
