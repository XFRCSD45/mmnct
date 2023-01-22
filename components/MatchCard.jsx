import Link from "next/link";
import { useEffect, useState } from "react";
import { ImCircleRight } from "react-icons/im";

function imageUrlProducer(url) {
  if (url?.length !== 0) {
    return url;
  } else {
    return "https://mir-s3-cdn-cf.behance.net/projects/404/168243107813919.Y3JvcCwzMDAwLDIzNDYsMCw0MjM.jpg";
  }
}

const MatchCard = ({ type, team, genderColor }) => {
  const teamStyle = "flex items-center justify-center";
  const teamName = "font-extrabold text-lg";
  const shortformstyle = "h-[55px] md:h-[75px] rounded-full";

  if (type === "short") {
    return (
      <div className="flex flex-col md:flex-row gap-y-2 justify-center md:justify-evenly items-center my-2 bg-white w-full lg:w-full  h-[129px] lg:h-[90px] xl:h-[150px] rounded-[8px] mx-auto px-2 py-2 shadow-lg ">
        <img
          alt="team-logo"
          className={shortformstyle}
          src={`${imageUrlProducer(team?.teamLogo)} `}
          style={{ backgroundColor: team.themeColor }}
        />
        <div className="flex flex-col justify-center items-center gap-1">
          {" "}
          <p className="text-[15px] xl:text-[21px] lg:text-[18px] font-[600] leading-3 lg:leading-5">
            {team?.teamName}
          </p>
          <p className="text-[12px] lg:text-[15px] flex text-gray-600 font-[600] leading-3 lg:leading-5">
            {team?.teamType}
          </p>
          <Link
            href={`/team-details/${team.id}`}
            className={`mt-2 text-lg bg-[${genderColor}] hidden xl:flex text-white justify-center items-center gap-2 font-semibold py-2 px-4 rounded-lg hover:shadow-lg`}
          >
            Full squad <ImCircleRight />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex bg-white md:justify-evenly md:w-4/5 md:mx-auto my-4 text-sm items-center justify-center shadow-lg py-4 mx-4 rounded-lg">
        {/* team 1 */}
        <div className={teamStyle}>
          <p className={teamName}>Team 1</p>
          <img
            alt="team-logo"
            className="team-logo"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/168243107813919.Y3JvcCwzMDAwLDIzNDYsMCw0MjM.jpg"
          />
        </div>

        {/* timing and date */}
        <div>
          <p className="text-orange-500 font-bold">6:30 pm</p>
          <p className="text-gray-400">
            27<sup>th</sup> JAN
          </p>
        </div>

        {/* Team 2 */}
        <div className={teamStyle}>
          <img
            alt="team-logo"
            className="team-logo"
            src="https://mir-s3-cdn-cf.behance.net/projects/404/168243107813919.Y3JvcCwzMDAwLDIzNDYsMCw0MjM.jpg"
          />
          <p className={teamName}>Team 2</p>
        </div>
      </div>
    );
  }
};

export default MatchCard;
