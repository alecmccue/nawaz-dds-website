import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import {
  AccordionDetailsHeader,
  AccordionSummaryContentWrapper,
  AccordionSummaryTextWrapper,
  ServiceAccordion,
  ServiceImage,
  ServiceWrapper,
} from "../../styles";

const CosmeticDentistry = () => (
  <ServiceWrapper id="cosmetic_dentistry">
    <ServiceAccordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <AccordionSummaryContentWrapper>
          <ServiceImage
            alt="Cosmetic Dentistry"
            src="/cosmetic_dentistry.jpg"
          />
          <AccordionSummaryTextWrapper>
            <Typography style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Cosmetic Dentistry
            </Typography>
            <Typography style={{ fontSize: "1.3rem" }}>
              Cosmetic dentistry offers a diverse array of procedures aimed at
              improving the aesthetics of a person's smile. It goes beyond
              addressing functional concerns and focuses on enhancing the
              appearance of teeth, gums, and overall oral structures. With the
              goal of creating a beautiful and confident smile, cosmetic
              dentistry services aim to improve the appearance of teeth, gums,
              and overall oral structures. These procedures go beyond addressing
              functional concerns and focus on enhancing the aesthetics of a
              person's smile.
            </Typography>
          </AccordionSummaryTextWrapper>
        </AccordionSummaryContentWrapper>
      </AccordionSummary>
      <AccordionDetails>
        <AccordionDetailsHeader>Teeth Whitening:</AccordionDetailsHeader>
        <Typography style={{ fontSize: "1.1rem" }}>
          Teeth whitening is a popular cosmetic dentistry procedure designed to
          brighten and lighten the color of teeth that have become stained or
          discolored over time. It is a non-invasive treatment that can
          dramatically improve the appearance of a person's smile. There are two
          main types of teeth whitening: in-office whitening and at-home
          whitening kits.
          <br />
          <br />
          In-office whitening is performed by a dental professional in the
          dental clinic. A high-concentration bleaching gel is applied to the
          teeth, and a special light or laser may be used to enhance the
          whitening effect. The procedure usually takes about an hour and can
          result in immediate and significant improvements in tooth color.
        </Typography>
        <AccordionDetailsHeader>Composite Bonding:</AccordionDetailsHeader>
        <Typography style={{ fontSize: "1.1rem" }}>
          Composite bonding is a technique used to repair chipped, cracked, or
          discolored teeth, as well as to close gaps between teeth. It involves
          the application of a tooth-colored composite resin material directly
          to the affected tooth. The dentist sculpts and shapes the resin to
          match the natural contours of the tooth, and then it is hardened using
          a special light. The result is a seamless and aesthetically pleasing
          restoration that blends in with the surrounding teeth.
          <br />
          <br />
          Composite bonding is a conservative approach to improve the appearance
          of teeth and is often preferred for minor cosmetic issues, as it
          requires little to no enamel removal compared to other treatments like
          veneers.
        </Typography>
        <AccordionDetailsHeader>Veneers:</AccordionDetailsHeader>
        <Typography style={{ fontSize: "1.1rem" }}>
          Dental veneers are thin, custom-made shells typically made of
          porcelain or composite resin that are bonded to the front surface of
          the teeth. Veneers are used to correct a variety of cosmetic
          imperfections, such as severely stained or discolored teeth, chipped
          or worn teeth, misaligned teeth, and gaps between teeth.
          <br />
          <br />
          The procedure involves a small amount of enamel removal from the front
          of the teeth to create space for the veneers. Once the teeth are
          prepared, impressions are taken, and the veneers are fabricated in a
          dental laboratory. During a subsequent appointment, the veneers are
          bonded to the teeth using a strong adhesive, resulting in a
          transformed and attractive smile.
        </Typography>
        <AccordionDetailsHeader>Dental Crowns:</AccordionDetailsHeader>
        <Typography style={{ fontSize: "1.1rem" }}>
          Dental crowns, also known as caps, are restorations that encase the
          entire visible portion of a damaged or severely decayed tooth above
          the gum line. While they serve a functional purpose to strengthen and
          protect weakened teeth, they also have cosmetic benefits, improving
          the tooth's appearance.
          <br />
          <br />
          Crowns can be made from various materials, including porcelain,
          ceramic, metal, or a combination of materials. Porcelain crowns are
          popular for their ability to closely resemble the natural color and
          translucency of teeth, making them an excellent choice for restoring
          front teeth. Dental crowns are often recommended when a tooth is
          extensively damaged or has undergone root canal treatment. They not
          only restore the tooth's strength and functionality but also enhance
          its aesthetic appearance, helping to create a more harmonious smile.
        </Typography>
      </AccordionDetails>
    </ServiceAccordion>
  </ServiceWrapper>
);

export default CosmeticDentistry;
