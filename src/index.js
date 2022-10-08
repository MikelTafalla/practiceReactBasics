import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import { faker } from "@faker-js/faker";

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam"
                    date = "Today at 4:45 PM"
                    comment = "Nice Blog!"
                    image = {faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Alex"
                    date = "Today at 2:00 PM"
                    comment = "Hate the food here!"
                    image = {faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));