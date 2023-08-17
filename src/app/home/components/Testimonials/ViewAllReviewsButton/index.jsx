import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { ViewAllReviewsWrapper } from "./styles";

const ViewAllReviewsButton = () => (
    <ViewAllReviewsWrapper>
        <Button variant="outlined">
            <Link
                className="nunito"
                href="https://www.google.com/search?q=Nawaz+Mirweiss+DDS&sca_esv=556867888&sxsrf=AB5stBh17De87ZOl6TMJFMALXlgQfnyvNQ%3A1692042763456&ei=C4baZNeyG9Kh5NoPj8GbqAk&ved=0ahUKEwiX5PC-9tyAAxXSEFkFHY_gBpUQ4dUDCBA&uact=5&oq=Nawaz+Mirweiss+DDS&gs_lp=Egxnd3Mtd2l6LXNlcnAiEk5hd2F6IE1pcndlaXNzIEREUzICECZIxQhQnARYnARwA3gAkAEAmAGGAaABhgGqAQMwLjG4AQPIAQD4AQL4AQHCAgkQABgHGB4YsAPCAgkQABgIGB4YsAPiAwQYASBBiAYBkAYC&sclient=gws-wiz-serp#lrd=0x89b63994a7c0b58d:0xa93e21972b785510,1,,,,"
                target="_blank"
            >
                View All 20+ 5-Star Reviews!
            </Link>
        </Button>
    </ViewAllReviewsWrapper>
)

export default ViewAllReviewsButton