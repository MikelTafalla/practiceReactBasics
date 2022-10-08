import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import { faker } from "@faker-js/faker";

const App = () => {
    return (
        <div className = "ui container comments">
            <CommentDetail 
                author = "Sam"
                date = "Today at 4:45 PM"
                comment = "Nice Blog!"
                image = {faker.image.image()}
            />
            <CommentDetail
                author = "Alex"
                date = "Today at 2:00 PM"
                comment = "Hate the food here!"
                image = {faker.image.image()}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));