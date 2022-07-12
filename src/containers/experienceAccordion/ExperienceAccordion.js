import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { Fade } from "react-reveal";
import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <Fade bottom duration={2000} distance="40px">
        <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
          <Accordion>
            {props.sections.map((section) => {
              return (
                <Panel
                  expanded="true"
                  className="accord-panel"
                  title={section["title"]}
                  key={section["title"]}
                >
                  {section["experiences"].map((experience) => {
                    return (
                      <ExperienceCard experience={experience} theme={theme} />
                    );
                  })}
                </Panel>
              );
            })}
          </Accordion>
        </ThemeProvider>
      </Fade>
    </div>
  );
}

export default ExperienceAccordion;
