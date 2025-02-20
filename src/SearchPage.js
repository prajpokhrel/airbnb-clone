import React from "react";
import "./SearchPage.css";
import Button from "@material-ui/core/Button";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays .  26 august to 30 august 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                location="Private room in center of london"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" />

            <SearchResult
                location="Private room in center of london"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" />

            <SearchResult
                location="Private room in center of london"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" />

            <SearchResult
                location="Private room in center of london"
                title="Stay at this spacious Edwardian House"
                description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . kitchen . free parking . washing machine"
                star={4.73}
                price="$30 / night"
                total="$117 total"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU" />

        </div>
    );
}

export default SearchPage;