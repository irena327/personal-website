import React from "react";
import { Button } from "antd";
import "./NotFound.css";

function NotFound() {
    return (
        <div>
            Still in progress :)
            <p>
               <Button type="primary"
                size="medium"
                className="Home" 
                style={{ padding: 5 }}
                href={"/home"}>
                    Go Home
                </Button>
            </p>
        </div>
    );
}

export default NotFound;
