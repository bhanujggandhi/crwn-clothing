import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shopActions';

import Spinner from '../../components/spinner/Spinner';
import { ShopPageContainer } from './Shop.styles';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collections-overview/CollectionOverview.containers')
);
const CollectionContainer = lazy(() =>
  import('../collection/Collection.container')
);

const Shop = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
