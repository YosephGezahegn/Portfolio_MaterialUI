import React from "react";

const AboutMe = () => {
  return (
    <div style={{ display: "block", textAlign: "start" }}>
      <p>
        {" "}
        I am currently a BIT graduate with a deep passion for understanding
        computers and learning different skills to provide me with the necessary
        skill.
      </p>

      <ul>
        <li>Providing innovative new ideas and solutions to problems.</li>
        <li>
          Able toLearning new technologies, Adaptable and able to pick up new
          skills.
        </li>
        <li>Having creative imagination.</li>
        <li> juggle priorities and multiple projects.</li>
      </ul>
      <div style={{ textAlign: "center" }}>
        <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
        <h5>Address</h5>
        <p>Helsinki</p>
        <h5>Phone</h5>
        <p>0449626797</p>
        <h5>Email</h5>
        <p>jofinhel@gmail.com</p>
      </div>

      <hr style={{ borderTop: "3px solid #833fb2", width: "100%" }} />
    </div>
  );
};

export default AboutMe;
