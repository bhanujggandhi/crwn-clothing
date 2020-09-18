import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionsLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

// const CollectionContainer = connect(mapStateToProps)(
//   WithSpinner(Collection)
// );

//Compose makes it easier to curry the components. Both the code is same but compose one is more readable and understandable

export default CollectionContainer;

//If we directly go to the route /shop/:collectionId, it was showing an error because our componentDidMount never ran, isFetchingStartAsync never ran, isFetching was always false, therefore it was directly rendering the component. Therefore, our collections: null.  And our CollectionItem can not use map or destructure the null object.

// We created a selector which will convert a null object into a falsy value using !! operator. Now passed the selector in this component. And gave it to isLoading of collection page using props. And used it !isCollectionLoaded because, if object is null, it will be false and to use spinner we need a true. And as soon as object is filled with keys it will become true and !isCollectionLoaded will become false. And component will be shown instead of spinner.
