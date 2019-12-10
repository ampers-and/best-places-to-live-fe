import React from "react";
import { addDislikedCity } from "../actions/addDislikedCity";
import { deleteDislikedCity } from "../actions/deleteDislikedCity";
import { deleteLikedCity } from "../actions/deleteLikedCity";
import { connect } from "react-redux";
import { FaTimes } from "react-icons/fa";
import styled, { css } from "styled-components";

function DislikeIcon({
  addDislikedCity,
  deleteDislikedCity,
  deleteLikedCity,
  city,
  handleClose,
  ...rest
}) {
  const handleClick = async () => {
    let response;
    if (rest.actionType === "closeModal") {
      handleClose();
    }
    if (rest.actionType === "deleteLike") {
      response = await deleteLikedCity({ city_id: city.city_id });
    } else if (rest.actionType === "deleteDislike") {
      response = await deleteDislikedCity({ city_id: city.city_id });
    } else {
      response = await addDislikedCity(city);
    }
  };

  const StyledFaTimes = styled(FaTimes)`
    color: ${() => (rest.iconColor ? "black" : "white")};

    font-size: 20px;

    transition: all 0.225s ease-in-out;

    &:hover {
      cursor: pointer;
      fill: #e81919;
      opacity: 0.75;
      transform: scale(1.5);
    }
  `;

  return <StyledFaTimes onClick={handleClick} />;
}

export default connect(null, {
  addDislikedCity,
  deleteDislikedCity,
  deleteLikedCity
})(DislikeIcon);
