import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelector';

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from './Collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
