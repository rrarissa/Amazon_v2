import React from "react";
import Carousel from "react-grid-carousel";

function RecentItems() {
  return (
    <div className="font-bold relative bg-white mb-20 h-20 p-10">
      <h1 className="mb-5">Related to items that you've viewed</h1>
      <Carousel cols={7} rows={1} gap={0.2} loop="true" autoplay={2000}>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/81yGlGg3IyL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="90%"
            src="https://m.media-amazon.com/images/I/81Ka9yZgfgL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="70%"
            src="https://m.media-amazon.com/images/I/41JTJrSqyBL._AC_SY328_.jpg"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            width="70%"
            src="https://m.media-amazon.com/images/I/51YtPWlF1AL._AC_SY328_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="80%"
            src="https://m.media-amazon.com/images/I/910VaXZleuL._AC_SY400_.jpg"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default RecentItems;
