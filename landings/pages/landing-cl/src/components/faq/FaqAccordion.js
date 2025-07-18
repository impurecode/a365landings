import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import faqs from "./faqs"; // Importing FAQ content from the separate file

const FaqAccordion = () => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            backgroundColor: "rgba(130, 174, 255, 0.40)",
            marginBottom: "14px",
            borderRadius: "8px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ height: "93px" }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.87)",
                fontFamily: "Titillium Web",
                fontSize: {
                  xs: "17px",
                  sm: "24px",
                },
                fontWeight: 600,
                padding: "16px 0",
                lineHeight: "1.1",
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ backgroundColor: "white", padding: "24px 14px 14px 14px" }}
          >
            <Typography sx={{ fontSize: "16px", fontFamily: "Inter" }}>
              <h2>{faq.answer}</h2>
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default FaqAccordion;

