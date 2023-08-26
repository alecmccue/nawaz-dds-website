import React from "react";
import {
    ColumnWrapper,
    RightColumn,
    MarketingStatementWrapper,
    LeftColumn,
    MarketingImageTop,
    MarketingImageBottom,
    MapWrapper, ImageGridRow,
} from "./styles";
import { Typography } from "@mui/material";
import Address from "./components/Address";
import OfficeHours from "./components/OfficeHours";

const VisitUs = () => (
    <MarketingStatementWrapper>
        <ColumnWrapper>
            <LeftColumn>
                <ImageGridRow>
                    <div>
                        <MarketingImageTop src="outside_office.jpg" alt="office" />
                    </div>
                    <div>
                        <MarketingImageBottom src="office_inside.jpg" alt="office" />
                    </div>
                </ImageGridRow>
                <ImageGridRow>
                    <div>
                        <MarketingImageTop
                            src="dental_chair.jpg"
                            alt="office"
                            style={{ borderTopRightRadius: "2rem" }}
                        />
                    </div>
                    <div>
                        <MarketingImageBottom src="wall_picture.jpg" alt="office" />
                    </div>
                </ImageGridRow>
            </LeftColumn>

            <RightColumn>
                <Typography style={{ fontSize: "3rem" }} className="poppins">Visit Us</Typography>
                <Typography style={{ fontSize: "1.5rem" }} className="nunito">
                    We're conveniently located in the Potomac Falls area. Find us
                    straight ahead on the entry level floor of the building. Free parking
                    is available.
                </Typography>
                <Address />
                <OfficeHours />
            </RightColumn>
        </ColumnWrapper>
        <MapWrapper>
            <iframe
                height="250"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12396.55843676129!2d-77.40714683557985!3d39.03493618506008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63994a7c0b58d%3A0xa93e21972b785510!2sNawaz%20Mirweiss%20DDS!5e0!3m2!1sen!2sus!4v1688255478197!5m2!1sen!2sus"
                style={{ borderRadius: "1rem" }}
                width="100%"
            />
        </MapWrapper>
    </MarketingStatementWrapper>
);

export default VisitUs;
