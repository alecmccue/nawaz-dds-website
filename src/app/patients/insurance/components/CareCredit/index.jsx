import React from "react";
import { ApplyNowText, CareCreditButtonWrapper, CareCreditSignUpWrapper } from "../../styles";
import { CareCreditWrapper } from "../../styles";
import { Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import Link from "next/link";

const CareCredit = () => (
    <CareCreditWrapper>
        <Typography className="nunito" style={{ fontSize: "1.4rem", maxWidth: "40rem" }}>
            We are partnered with CareCredit, a specialized healthcare credit
            provider. This partnership allows you to conveniently manage out-of-pocket
            costs that may not be covered by your dental insurance. Unlike regular
            credit cards, CareCredit offers exclusive financing alternatives,
            providing you with access to unique financial options that might not be
            attainable through other cards. If you're interested, you can learn more
            about CareCredit and its benefits by visiting their official website.
        </Typography>

        <CareCreditSignUpWrapper>
            <Image
                alt="care credit"
                height={300}
                src="/carecredit.png"
                width={300}
            />
            <Link href="https://carecredit.com/go/287FTT" target="_blank">
                <CareCreditButtonWrapper>
                    <CheckCircleOutlineIcon />
                    <ApplyNowText>
                        Apply Now
                    </ApplyNowText>
                </CareCreditButtonWrapper>
            </Link>
        </CareCreditSignUpWrapper>
    </CareCreditWrapper>
)

export default CareCredit;
