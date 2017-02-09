import React, { PropTypes as p } from "react";
import GridFluidThreeMax from "./BuildBlocks/GridFluidThreeMax";
import CardFigure from "./CardFigure";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { filter, propType } from "graphql-anywhere";
import Button from "./BuildBlocks/Button";

const FIGURES_PER_PAGE = 9;

const FeaturedFigures = (
  {
    actionLoadMore,
    data: { loading, allFeaturedFigures, _allFeaturedFiguresMeta }
  }
) => {
  if (loading) {
    return <div>Loading</div>;
  }

  const areThereMore = _allFeaturedFiguresMeta.count >
    allFeaturedFigures.length;
  const list = allFeaturedFigures.map(user => (
    <CardFigure key={user.id} user={filter(CardFigure.fragments.user, user)} />
  ));
  return (
    <div className="mt4">
      <GridFluidThreeMax list={list} />
      {areThereMore &&
        <div className="w-100">
          <div className="w5 center">
            <Button
              name="Xem thêm"
              size="big"
              bold
              block
              onButtonClick={actionLoadMore}
            />
          </div>
        </div>}
    </div>
  );
};

const allFeaturedFiguresQuery = gql`
  query allFeaturedFigures($first: Int!, $skip: Int!) {
    allFeaturedFigures(first: $first, skip: $skip) {
      id
      ...FragmentCardFigureUser
    }
    _allFeaturedFiguresMeta {
      count
    }
  }
  ${CardFigure.fragments.user}
`;

FeaturedFigures.propTypes = {
  data: propType(allFeaturedFiguresQuery).isRequired,
  actionLoadMore: p.func.isRequired
};

export default graphql(allFeaturedFiguresQuery, {
  options: {
    variables: {
      skip: 0,
      first: FIGURES_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    actionLoadMore: () => {
      return data.fetchMore({
        variables: {
          skip: data.allFeaturedFigures.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult.data) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            // Append the new users results to the old one
            allFeaturedFigures: [
              ...previousResult.allFeaturedFigures,
              ...fetchMoreResult.data.allFeaturedFigures
            ]
          });
        }
      });
    }
  })
})(FeaturedFigures);
