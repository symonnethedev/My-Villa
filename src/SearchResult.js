import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import { AirlineSeatReclineNormalRounded } from "@material-ui/icons";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  url,
}) {
  return (
    <div className="searchResult">
      <Link to={url} style={{ textDecoration: "none" }}>
        <img src={img} alt="" />
      </Link>
      <FavoriteBorderIcon className="searchResult__heart" />

      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
