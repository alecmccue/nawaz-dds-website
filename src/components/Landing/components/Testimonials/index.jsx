import React from "react";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import { Border, Col, Inner, Row, Testimonial } from "./styles";
const Testimonials = () => {
  return (
    <Testimonial>

      <Inner>
        <h1>Testimonials</h1>
        <Border/>
        <Row>
        <Col>
          <div className="testimonial">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              width={100}
              />
            <div className="name">Full Name</div>
            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            repudiandae, pariatur porro a nulla dolorem animi distinctio vitae
            sapiente nobis aperiam praesentium assumenda doloremque consequatur?
            Cupiditate voluptatum perspiciatis deleniti veritatis?
          </p>
        </Col>
        <Col>
          <div className="testimonial">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              width={100}
              />
            <div className="name">Full Name</div>
            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            repudiandae, pariatur porro a nulla dolorem animi distinctio vitae
            sapiente nobis aperiam praesentium assumenda doloremque consequatur?
            Cupiditate voluptatum perspiciatis deleniti veritatis?
          </p>
        </Col>
        <Col>
          <div className="testimonial">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
              width={100}
              />
            <div className="name">Full Name</div>
            <div className="stars">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            repudiandae, pariatur porro a nulla dolorem animi distinctio vitae
            sapiente nobis aperiam praesentium assumenda doloremque consequatur?
            Cupiditate voluptatum perspiciatis deleniti veritatis?
          </p>
        </Col>
        </Row>
      </Inner>
    </Testimonial>
  );
};
export default Testimonials;
