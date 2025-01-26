import React from "react";
import skill from "../SkillInfo.json";

function Skills() {
  console.log(skill);
  return (
    <div id="skill" className="bg-black p-5">
      <div className="container">
        <h1 className="sub-title">My Skills</h1>
        <div className="skills-list">
          {skill.map((info) => {
            const { image_url, name, website_link } = info;
            return (
              <li>
                <a href={website_link}>
                  <img src={image_url} alt="" />
                  <h3>{name}</h3>
                </a>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
