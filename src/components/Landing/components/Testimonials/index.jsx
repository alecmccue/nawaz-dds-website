import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import {
  Border,
  Col,
  Inner,
  Review,
  Row,
  Testimonial,
  Name,
  Stars,
  TestimonialTitle,
} from "./styles";
import { StarHalf } from "@mui/icons-material";
const Testimonials = () => {
  return (
    <Testimonial>
      <Inner>
        <TestimonialTitle>Reviews</TestimonialTitle>
        <Border />
        <Row>
          <Col>
            <Review>
              <Image
                src="/review_icon.png"
                width={100}
                height={100}
                alt="profile picture"
                style={{ margin: "auto" }}
              />
              <Name>Full Name</Name>
              <Stars>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Stars>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                repudiandae, pariatur porro a nulla dolorem animi distinctio
                vitae sapiente nob
              </p>
            </Review>
          </Col>
          <Col>
            <Review>
              <Image
                src="/review_icon.png"
                width={100}
                height={100}
                alt="profile picture"
                style={{ margin: "auto" }}
              />
              <Name>Full Name</Name>
              <Stars>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Stars>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                repudiandae, pariatur porro a nulla dolorem animi distinctio
                vitae sapiente nobis aperiam praesentium assumenda doloremque
                consequatur? Cupiditate voluptatum perspiciatis deleniti
                veritatis?
              </p>
            </Review>
          </Col>
          <Col>
            <Review>
              <Image
                src="/review_icon.png"
                width={100}
                height={100}
                alt="profile picture"
                style={{ margin: "auto" }}
              />
              <Name>Full Name</Name>
              <Stars>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalf />
              </Stars>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                repudiandae, pariatur porro a nulla dolorem animi distinctio
                vitae sapiente nobis aperia
              </p>
            </Review>
          </Col>
        </Row>
      </Inner>
    </Testimonial>
  );
};
export default Testimonials;
