import React, { PropTypes as p } from "react";
import GridFluidThreeMax from "./BuildBlocks/GridFluidThreeMax";
import CardFigure from "./CardFigure";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { filter, propType } from "graphql-anywhere";
import Button from "./BuildBlocks/Button";
import Spinner from "./fragments/Spinner";

const FIGURES_PER_PAGE = 6;

const FeaturedFigures = (
  {
    actionLoadMore,
    data: { loading, allFeaturedFigures }
  }
) => {
  if (loading) {
    return <Spinner />;
  }
  const areThereMore = allFeaturedFigures.pagination.rowCount >
    allFeaturedFigures.edges.length;
  const list = allFeaturedFigures.edges.map(user => (
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
  query allFeaturedFigures($offset: Int!, $limit: Int!) {
    allFeaturedFigures(offset: $offset, limit: $limit) {
      edges {
        id
        ...FragmentCardFigureUser
      }
      pagination {
        rowCount
      }
    }
  }
  ${CardFigure.fragments.user}
`;

FeaturedFigures.propTypes = {
  // TODO: Fix propType
  // data: propType(allFeaturedFiguresQuery).isRequired,
  actionLoadMore: p.func.isRequired
};

export default graphql(allFeaturedFiguresQuery, {
  options: {
    variables: {
      offset: 0,
      limit: FIGURES_PER_PAGE
    }
  },
  props: ({ data }) => ({
    data,
    actionLoadMore: () => {
      return data.fetchMore({
        variables: {
          offset: data.allFeaturedFigures.edges.length
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult.data) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            // Append the new users results to the old one
            allFeaturedFigures: {
              edges: [
                ...previousResult.allFeaturedFigures.edges,
                ...fetchMoreResult.data.allFeaturedFigures.edges
              ],
              pagination: fetchMoreResult.data.allFeaturedFigures.pagination
            }
          });
        }
      });
    }
  })
})(FeaturedFigures);
