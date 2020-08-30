import React from 'react';
import PreviewCollection from '../../components/preview-collection/PreviewCollection';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shopSelector';
import { createStructuredSelector } from 'reselect';

const Shop = ({ collections }) => {
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Shop);
