import React from 'react';

import CollectionItem from '../collection-item/CollectionItem';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './PreviewCollection.styles';

const PreviewCollection = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default PreviewCollection;
