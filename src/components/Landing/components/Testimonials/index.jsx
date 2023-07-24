import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import { Border, Col, Inner, Review, Row, Testimonial, Name } from "./styles";
const Testimonials = () => {
  return (
    <Testimonial>
      <Inner>
        <h1>Testimonials</h1>
        <Border />
        <Row>
          <Col>
            <Review>
              <Image
                src="/review_icon.png"
                width={100}
                height={100}
                alt="profile picture"
                style={{margin:'auto'}}
              />
              <Name>Full Name</Name>
              <div className="stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
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
                style={{margin:'auto'}}
              />
              <Name>Full Name</Name>
              <div className="stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
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
                style={{margin:'auto'}}
              />
              <Name>Full Name</Name>
              <div className="stars">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
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
