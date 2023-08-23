import React, { useState } from "react";
import "../../../fonts.css";
import Image from "next/image";
import { ArrowDropDown, ArrowDropUp, StarSharp } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import {
    Divider,
    Col,
    Inner,
    Name,
    Review,
    Row,
    Stars,
    Testimonial,
    TestimonialTitle,
} from "./styles";
import { IconButton } from "@mui/material";
import ViewAllReviewsButton from "@/app/home/components/Testimonials/ViewAllReviewsButton";

const Testimonials = () => {
    const [visibleTestimonials, setVisibleTestimonials] = useState(false);

    const handleDropdownOpen = () => setVisibleTestimonials(true);
    const handleDropdownClose = () => setVisibleTestimonials(false);

    return (
        <Testimonial>
            <Inner>
                <div className="poppins">
                    <TestimonialTitle>Reviews</TestimonialTitle>
                </div>
                <Divider />
                <ViewAllReviewsButton />
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
                                <Name>Khatera Harrif</Name>
                            </div>
                            <Stars>
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                            </Stars>
                            <div className="nunito">
                                <p>
                                    Dr. Nawaz is amazing! He really cares about his patients and
                                    is always available for questions. He will also not recommend
                                    crazy procedures just to empty your pocket. I have been going
                                    to him for years now and really trust him. He is professional,
                                    courteous and Kind. You cannot find a better dentist in
                                    Ashurn, Sterling, Reston area!
                                </p>
                            </div>
                        </Review>
                    </Col>
                    <Col>
                        <Review>
                            <Image
                                src="/mastora.png"
                                width={100}
                                height={100}
                                alt="profile picture"
                                style={{ margin: "auto" }}
                            />
                            <div className="poppins">
                                <Name>Mastora Ibrahimkhil</Name>
                            </div>
                            <Stars>
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                            </Stars>
                            <div className="nunito">
                                <p>
                                    This office is amazing. He is very honest and very detail
                                    oriented. He is a true health care provider and doesnt focus
                                    on the business aspect of dentistry. I recommend him 100%.
                                </p>
                            </div>
                        </Review>
                    </Col>
                    <Col>
                        <Review>
                            <Image
                                src="/airbendersllc.png"
                                width={100}
                                height={100}
                                alt="profile picture"
                                style={{ margin: "auto" }}
                            />
                            <div className="poppins">
                                <Name>AirBenders LLC</Name>
                            </div>
                            <Stars>
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                                <StarSharp />
                            </Stars>
                            <div className="nunito">
                                <p>
                                    Caring professional honest. He has been taking care of me for
                                    past 10 years. Most of my coworkers and all of my family won’t
                                    go to anyone but dr Nawaz Thanks for all your hard work
                                </p>
                            </div>
                        </Review>
                    </Col>
                </Row>
            </Inner>
            {!visibleTestimonials && (
                <IconButton
                    onClick={
                        visibleTestimonials ? handleDropdownClose : handleDropdownOpen
                    }
                    className={`expand-${visibleTestimonials ? "up" : "down"}`}
                    size="large"
                    aria-label={visibleTestimonials ? "close" : "open"}
                >
                    <ArrowDropDown />
                </IconButton>
            )}
            <AnimatePresence>
                {visibleTestimonials && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Inner>
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
                                            <Name>Huong C</Name>
                                        </div>
                                        <Stars>
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                        </Stars>
                                        <div className="nunito">
                                            <p>
                                                Was recommended to go here by a friend and he was very
                                                kind, understanding and helpful after I had told him
                                                about my wisdom tooth situation. He even help
                                                recommended me to another oral surgeon who may take
                                                medicaid. He himself no longer takes medicaid and I came
                                                in for a consultant and was ready to pay after he had
                                                made recommendation and to my surprise he said it was
                                                free of charge! I know it wasn't much since I only came
                                                in for a consultation and he did take a look at my teeth
                                                but there are some places who charge you even for small
                                                session so I am very grateful to him for his kindness.
                                            </p>
                                        </div>
                                    </Review>
                                </Col>
                                <Col>
                                    <Review>
                                        <Image
                                            src="/khaled.png"
                                            width={100}
                                            height={100}
                                            alt="profile picture"
                                            style={{ margin: "auto" }}
                                        />
                                        <div className="poppins">
                                            <Name>Khaled</Name>
                                        </div>
                                        <Stars>
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                        </Stars>
                                        <div className="nunito">
                                            <p>
                                                Dr. Nawaz is a very kind, respectful and honest dentist.
                                                He is the best dentist I have ever encountered,
                                                extremely thorough with his work and has a careful
                                                attention to detail. I always feel comfortable and well
                                                cared for when going to Dr. Nawaz for my dental work.
                                                His facilities are top-notch and he is very honest, only
                                                recommending the services that are actually needed. Dr.
                                                Nawaz passion for his clients' well-being and their best
                                                interest is evidenced by his work.
                                            </p>
                                        </div>
                                    </Review>
                                </Col>
                                <Col>
                                    <Review>
                                        <Image
                                            src="/aprils.png"
                                            width={100}
                                            height={100}
                                            alt="profile picture"
                                            style={{ margin: "auto" }}
                                        />
                                        <div className="poppins">
                                            <Name>April S.</Name>
                                        </div>
                                        <Stars>
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                            <StarSharp />
                                        </Stars>
                                        <div className="nunito">
                                            <p>
                                                I've been going to Dr. Mirweiss office for over 5 years
                                                with my family. It is a clean, friendly Dentistry.
                                            </p>
                                        </div>
                                    </Review>
                                </Col>
                            </Row>
                        </Inner>
                    </motion.div>
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
            </AnimatePresence>
        </Testimonial>
    );
};
export default Testimonials;
