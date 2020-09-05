import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { fetchCollectionStartAsync } from '../../redux/shop/shopActions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/shop/shopSelector';

import WithSpinner from '../../components/with-spinner/WithSpinner';

import CollectionOverview from '../../components/collections-overview/CollectionOverview';
import Collection from '../collection/Collection';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

//If we directly go to the route /shop/:collectionId, it was showing an error because our componentDidMount never ran, isFetchingStartAsync never ran, isFetching was always false, therefore it was directly rendering the component. Therefore, our collections: null.  And our CollectionItem can not use map or destructure the null object.

// We created a selector which will convert a null object into a falsy value using !! operator. Now passed the selector in this component. And gave it to isLoading of collection page using props. And used it !isCollectionLoaded because, if object is null, it will be false and to use spinner we need a true. And as soon as object is filled with keys it will become true and !isCollectionLoaded will become false. And component will be shown instead of spinner.
