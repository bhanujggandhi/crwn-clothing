import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../with-spinner/WithSpinner';
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// const CollectionOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionOverview)
// );

//Compose makes it easier to curry the components. Both the code is same but compose one is more readable and understandable

export default CollectionOverviewContainer;
