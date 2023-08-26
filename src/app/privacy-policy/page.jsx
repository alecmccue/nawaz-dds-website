"use client"

import "../fonts.css";
import {
    Body,
    Head,
    PrivacyPolicyInnerWrapper,
    PrivacyPolicyOuterWrapper
} from "./styles";

const PrivacyPolicy = () => (
    <PrivacyPolicyOuterWrapper>
        <PrivacyPolicyInnerWrapper className="nunito">
            <div>
                <Head>Privacy Policy</Head>
                <Body>
                    This Privacy Policy outlines how nawazdds.com maintains and respects the
                    privacy of visitors to our website. We are committed to safeguarding the personal information of our
                    users while providing a secure and informative online experience. Please read this Privacy Policy
                    carefully to understand our practices regarding your data and how we operate.
                </Body>
            </div>

            <div>
                <Head>Collection and Use of Information</Head>
                <Body>
                    No User Data Collection: nawazdds.com may collect personally identifiable information (PII) such as
                    names and phone numbers from visitors who request appointments with our office. This information is
                    solely used for the purpose of scheduling appointments and communicating with the visitors about
                    their appointments.
                    <br />
                    <br />
                    No Cookies: We do not use any cookies or similar tracking technologies to gather information about
                    your browsing behavior or preferences.
                </Body>
            </div>

            <div>
                <Head>Third-Party Links</Head>
                <Body>
                    Our website may contain links to third-party websites or services that have their own privacy
                    policies. We do not have control over the content or practices of these third-party websites and are
                    not responsible for their privacy practices. We recommend reviewing the privacy policies of any
                    third-party websites before providing any personal information.
                </Body>
            </div>

            <div>
                <Head>Children's Privacy</Head>
                <Body>
                    Protecting the privacy of children is important to us. Our website is not directed at individuals
                    under the age of 13, and we do not knowingly collect any personal information from individuals under
                    the age of 13.
                </Body>
            </div>

            <div>
                <Head>Data Security</Head>
                <Body>
                    We implement reasonable security measures to protect any data that might be collected inadvertently
                    or through technical means. However, as no data transmission over the internet is completely secure,
                    we cannot guarantee the absolute security of any information transmitted to or from our website.
                </Body>
            </div>

            <div>
                <Head>Changes to this Privacy Policy</Head>
                <Body>
                    We reserve the right to update or modify this Privacy Policy at any time, without prior notice.
                    Changes will be effective immediately upon posting to the website. We encourage you to review this
                    Privacy Policy periodically to stay informed about how we are protecting your information.
                </Body>
            </div>

            <div>
                <Head>Contact Us</Head>
                <Body>
                    If you have any questions, concerns, or feedback regarding this Privacy Policy or our practices,
                    please contact us at mirweissnawazdds@gmail.com.
                    <br />
                    <br />
                    By using nawazdds.com, you acknowledge that you have read and understood this Privacy Policy
                    and agree to its terms. If you do not agree with the terms of this Privacy Policy, please do not use
                    our website.
                    <br />
                    <br />
                    This Privacy Policy was last updated on 8/20/2023.
                </Body>
            </div>
        </PrivacyPolicyInnerWrapper>
    </PrivacyPolicyOuterWrapper>
)

export default PrivacyPolicy