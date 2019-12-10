import React from "react";
import { factors } from "../utils/factors";
import Icon from "./Icon";
import theme from "../theme";
import { Text, Flex, Grid } from "../styles/index";
import { fetchLocationsByFactors } from "../actions/locationsByFactors";
import { connect } from "react-redux";
//More Button

const Categories = ({ fetchLocationsByFactors, isFetching, ...rest }) => {
  const sendToSearchPage = async category => {
    // event.preventDefault();
    const response = await fetchLocationsByFactors([category.factor]);

    if (response === "Successful") {
      rest.history.push("/search");
    } else {
    }
  };

  return (
    <Grid fourColumns>
      {factors.map((category, index) => (
        <Flex
          onClick={() => sendToSearchPage(category)}
          flexWrap="wrap"
          alignItems="center"
          flexDirection="column"
          key={index}
        >
          <Icon
            icon={category.iconPath}
            size={50}
            color={theme.colors.baliHai}
          />
          <Text
            textAlign="center"
            as="h4"
            fontWeight="normal"
            m={"0.6rem 0 0.95rem"}
            fontSize={theme.fontSizes[1]}
            color={theme.colors.portGore}
          >
            {category.displayName}
          </Text>
        </Flex>
      ))}
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, {
  fetchLocationsByFactors
})(Categories);