import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white h-[80vh] text-md pl-[20%] pt-20 ">
      <p className=" mb-8">Questions? Call 000-800-919-1694</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: 20,
        }}
      >
        <ul>
          <li>FAQ</li>
          <li>Media Center</li>
          <li>Ways to Watch</li>
          <li>Cookie Prefrences</li>
          <li>Speed Test</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Investor Relations</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
          <li>Legal Notices</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>Job</li>
          <li>Privacy</li>
          <li>Contact Us</li>
          <li>Only On Netflix</li>
        </ul>
      </div>

      <div className="optionBtn1">
        <select className="btn">
          <option value="English">🌐English</option>
          <option value="Hindi">🌐Hindi</option>
        </select>
      </div>
      <div className="copytright">
        <h5 className=" mt-5">Netflix India</h5>
      </div>
    </div>
  );
}

export default Footer;
