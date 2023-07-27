import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
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
import { ArrowDropDown, ArrowDropUp, StarHalf } from "@mui/icons-material";
import { IconButton } from "@mui/material";
const Testimonials = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(false);

  const handleDropdownOpen = () => {
    setVisibleTestimonials(true);
  };
  const handleDropdownClose = () => {
    setVisibleTestimonials(false);
  };
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
      {!visibleTestimonials && (
        <IconButton
          onClick={handleDropdownOpen}
          className="expand-down"
          size="large"
          aria-label="open"
        >
          <ArrowDropDown />
        </IconButton>
      )}
      {visibleTestimonials && (
        <Inner>
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
      )}
      {visibleTestimonials && (
        <IconButton
          onClick={handleDropdownClose}
          className="expand-up"
          size="large"
          aria-label="close"
        >
          <ArrowDropUp />
        </IconButton>
      )}
    </Testimonial>
  );
};
export default Testimonials;
