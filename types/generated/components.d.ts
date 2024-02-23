import type { Schema, Attribute } from '@strapi/strapi';

export interface CodeCommitCard extends Schema.Component {
  collectionName: 'components_code_commit_cards';
  info: {
    displayName: 'CommitCard';
  };
  attributes: {
    heading: Attribute.String &
      Attribute.DefaultTo<'Unlocking Innovation, One Commit at a Time: Your Code, Your Future.'>;
    info: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Aenean bibendum interdum faucibus viverra pellentesque integer. Consectetur nunc cursus id facilisis fermentum tempor faucibus senectus. Laoreet gravida nisl posuere nec bibendum. Nunc consequat euismod quisque urna condimentum dolor scelerisque.'>;
    viewMore: Attribute.String & Attribute.DefaultTo<'View more'>;
  };
}

export interface Section2Section2 extends Schema.Component {
  collectionName: 'components_section2_section2s';
  info: {
    displayName: 'section2';
  };
  attributes: {
    heading: Attribute.String & Attribute.DefaultTo<'Our Projects'>;
    p: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Aenean bibendum interdum faucibus viverra pellentesque integer. Consectetur nunc cursus id facilisis fermentum tempor faucibus senectus. Laoreet gravida nisl posuere nec bibendum. Nunc consequat euismod quisque urna condimentum dolor scelerisque.'>;
    nftRecyleInfo: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Aenean bibendum interdum faucibus viverra pellentesque integer. Consectetur nunc cursus id facilisis fermentum tempor faucibus senectus. Laoreet gravida nisl posuere nec bibendum. Nunc consequat euismod quisque urna condimentum dolor scelerisque.'>;
    windInfo: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Aenean bibendum interdum faucibus viverra pellentesque integer. Consectetur nunc cursus id facilisis fermentum tempor faucibus senectus. Laoreet gravida nisl posuere nec bibendum. Nunc consequat euismod quisque urna condimentum dolor scelerisque.'>;
    enigmaVenturesInfo: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Aenean bibendum interdum faucibus viverra pellentesque integer. Consectetur nunc cursus id facilisis fermentum tempor faucibus senectus. Laoreet gravida nisl posuere nec bibendum. Nunc consequat euismod quisque urna condimentum dolor scelerisque.'>;
    nebulaInfo: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Aenean bibendum interdum faucibus viverra pellentesque integer. Consectetur nunc cursus id facilisis fermentum tempor faucibus senectus. Laoreet gravida nisl posuere nec bibendum. Nunc consequat euismod quisque urna condimentum dolor scelerisque.'>;
    czLabsInfo: Attribute.String &
      Attribute.DefaultTo<'Lorem ipsum dolor sit amet consectetur. Aenean bibendum interdum faucibus viverra pellentesque integer. Consectetur nunc cursus id facilisis fermentum tempor faucibus senectus. Laoreet gravida nisl posuere nec bibendum. Nunc consequat euismod quisque urna condimentum dolor scelerisque.'>;
    readMore: Attribute.String & Attribute.DefaultTo<'Read more'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'code.commit-card': CodeCommitCard;
      'section2.section2': Section2Section2;
    }
  }
}
