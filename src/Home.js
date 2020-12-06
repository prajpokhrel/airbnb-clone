import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"/>
                <Card
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"/>
                <Card
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"/>
            </div>
            <div className="home__section">
                <Card
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"/>

                <Card
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"/>
                <Card
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"/>
            </div>
        </div>
    )
}

export default Home;