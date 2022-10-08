import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className = "ui container comments">
            <CommentDetail author = "Sam" date = "Today at 4:45 PM" comment = "Nice Blog!"/>
            <CommentDetail author = "Alex" date = "Today at 2:00 PM" comment = "Hate the food here!"/>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));