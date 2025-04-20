import React from "react";
import CustomSlider from "../CustomSlider";
import style from "./index.module.scss";

const DriveRevenueCard = () => {
  const cardList = [
    {
      id: 1,
      title: "Healthcare",
      imgSrc: "/img/health.png",
    },
    {
      id: 2,
      title: "Real Estate",
      imgSrc: "/img/realstate.png",
    },
    {
      id: 3,
      title: "Automotive",
      imgSrc: "/img/automative.png",
    },
    {
      id: 4,
      title: "Healthcare",
      imgSrc: "/img/health.png",
    },
  ];

  const sliderSetting = {
    slidesToShow: 3,
    infinite: true
  }
  return (
    <div className={style.revenueMainWrap}>
      <h3>{"How We Drive Revenue"}</h3>
      <div className={style.innerWrap}>
        <CustomSlider customSettings={sliderSetting} className="revenueCardSlide">
          {cardList?.map((item, index) => {
            return (
              <div className={style.revenueCardWrap} key={item.title + index}>
                <div className={style.imgWrap}>
                  <img src={item.imgSrc} alt={item.title} />
                </div>
                <h4>{item.title}</h4>
              </div>
            );
          })}
        </CustomSlider>
      </div>
    </div>
  );
};

export default DriveRevenueCard;
