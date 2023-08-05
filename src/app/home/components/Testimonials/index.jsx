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
import '../../../fonts.css'
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
        <div className="poppins">
          <TestimonialTitle>Reviews</TestimonialTitle>
        </div>
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
              <div className="poppins">
                <Name>Full Name</Name>
              </div>
              <Stars>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Stars>
              <div className="nunito">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  repudiandae, pariatur porro a nulla dolorem animi distinctio
                  vitae sapiente nob
                </p>
              </div>
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
              <div className="poppins">
                <Name>Full Name</Name>
              </div>
              <Stars>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Stars>
              <div className="nunito">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  repudiandae, pariatur porro a nulla dolorem animi distinctio
                  vitae sapiente nob
                </p>
              </div>
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
              <div className="poppins">
                <Name>Full Name</Name>
              </div>
              <Stars>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarHalf />
              </Stars>
              <div className="nunito">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  repudiandae, pariatur porro a nulla dolorem animi distinctio
                  vitae sapiente nob
                </p>
              </div>
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
                <div className="poppins">
                  <Name>Full Name</Name>
                </div>
                <Stars>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Stars>
                <div className="nunito">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia repudiandae, pariatur porro a nulla dolorem animi
                    distinctio vitae sapiente nob
                  </p>
                </div>
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
                <div className="poppins">
                  <Name>Full Name</Name>
                </div>
                <Stars>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </Stars>
                <div className="nunito">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia repudiandae, pariatur porro a nulla dolorem animi
                    distinctio vitae sapiente nob
                  </p>
                </div>
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
                <div className="poppins">
                  <Name>Full Name</Name>
                </div>
                <Stars>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalf />
                </Stars>
                <div className="nunito">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia repudiandae, pariatur porro a nulla dolorem animi
                    distinctio vitae sapiente nob
                  </p>
                </div>
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
