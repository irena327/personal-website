import React from "react";
import { Button } from "antd";
import "./NotFound.css";

function NotFound() {
    return (
        <div>
            Still in progress :)
            <p>
               <Button type="primary"
                size="large"
                className="Home" 
                href={"/home"}>
                    Go Home
                </Button>
            </p>
        </div>
    );
}

export default NotFound;
