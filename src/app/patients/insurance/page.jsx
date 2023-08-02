"use client";

import {
  CareCreditButtonWrapper,
  CareCreditWrapper,
  InsuranceItem,
  InsuranceWrapper,
} from "./styles";
import { Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Image from "next/image";
import Link from "next/link";

const Insurance = () => (
  <InsuranceWrapper>
    <InsuranceItem>
      <Typography style={{ fontSize: "1.4rem" }} className="nunito">
        At Family & Cosmetic dental, our dedication lies in ensuring your time
        with us is enjoyable, starting from the primary assessment to the
        financial procedures. We are pleased to be in-network with all PPO
        insurance plans, ensuring that you can fully utilize your insurance
        benefits.
      </Typography>
    </InsuranceItem>

    <InsuranceItem>
      <Typography style={{ fontSize: "1.4rem" }} className="nunito">
        We are partnered with CareCredit, a specialized healthcare credit
        provider. This partnership allows you to conveniently manage
        out-of-pocket costs that may not be covered by your medical insurance.
        Unlike regular credit cards, CareCredit offers exclusive financing
        alternatives, providing you with access to unique financial options that
        might not be attainable through other cards. If you're interested, you
        can learn more about CareCredit and its benefits by visiting their
        official website:
      </Typography>
    </InsuranceItem>

    <CareCreditWrapper>
      <Image src="/carecredit.png" width={300} height={300} alt="care credit" />
      <Link href="https://carecredit.com/go/287FTT" target="_blank">
        <CareCreditButtonWrapper>
          <CheckCircleOutlineIcon />
          <Typography style={{ fontSize: "1.2rem" }}>Apply Now</Typography>
        </CareCreditButtonWrapper>
      </Link>
    </CareCreditWrapper>
  </InsuranceWrapper>
);

export default Insurance;