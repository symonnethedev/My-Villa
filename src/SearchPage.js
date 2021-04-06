import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 01 Feb to 28 Feb · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        location="Private rooms near the center of Greece"
        img="https://images.unsplash.com/photo-1570057633897-58005bd9788f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjI4fHxsdXh1cnklMjB2aWxsYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        title="Villa Mieke"
        description=" 6 guest · 4 bedroom · 6 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£448 / night"
        total="£3,136 total"
        url="/villaMieke"
      />

      <SearchResult
        img="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
        location="Private room near the center of Greece"
        title="Villa Alessandra"
        description="4 guest · 4 bedroom · 2 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="£548 / night"
        total="£3,836 total"
        url="/villaAlessandra"
      />

      <SearchResult
        img="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fHZpbGxhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        location="Private rooms in center of Greece"
        title="Cana Milene"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£355 / night"
        total="£2,485 total"
        url="/canaMilene"
        style=""
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODl8fHNwYW5pc2glMjB2aWxsYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        location="Private rooms in center of Greece"
        title="Villa Emilto"
        description="8 guest · 6 bedroom · 8 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£659 / night"
        total="£4,613 total"
        url="/villaEmilto"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1606668044248-80d4abb81ba6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzJ8fHZpbGxhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        location="Private villa in the heart of Greece"
        title="Serena Vista "
        description="4 guest · 4 bedroom · 4 bed · 4 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£376 / night"
        total="£2,632 total"
        url="/serenaVista"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1570544820979-6eb25385944d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAxfHxzcGFuaXNoJTIwdmlsbGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        location="Private location in Greece"
        title="Belle Villa"
        description="6 guest · 4 bedroom · 4 bed · 3 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£480 / 7 night"
        total="£3,360 total"
        url="/belleVilla"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHx8MHw%3D&auto=format&fit=crop&w=800&q=60"
        location="Private room in center of Greece"
        title="Villa Yama"
        description="10 guest · 7 bedroom · 6 bed · 2 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£554 / 7 night"
        total="£3,878 total"
        url="/villaYama"
      />
    </div>
  );
}

export default SearchPage;
