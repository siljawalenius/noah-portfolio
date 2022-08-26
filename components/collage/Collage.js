import React, { memo, useState, useEffect, useRef } from "react";
import styles from "./Collage.module.css";
import image1 from "../../content/collageImg/img1.png";
import image2 from "../../content/collageImg/img2.png";
import image3 from "../../content/collageImg/img3.png";
import image4 from "../../content/collageImg/img4.png";
import image5 from "../../content/collageImg/img5.png";
import image6 from "../../content/collageImg/img6.png";
import image7 from "../../content/collageImg/img7.png";
import image8 from "../../content/collageImg/img8.png";

function Collage({needsClear, setNeedsClear}) {
  const canvasRef = useRef(null);
  const aimX = useRef(null); //store position of mouse
  const aimY = useRef(null);
  const curX = useRef(null);
  const curY = useRef(null);
  const i = useRef(0);
  const images = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2; //let the canvas still work properly after resizing

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    const ctx = canvas.getContext("2d");
    ctx.scale(2, 2); //retina friendly

    if (needsClear == true) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setNeedsClear(false)
    }

    images.current = [
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
    ].map((img) => {
      const image = new Image();
      image.src = img.src;
      return image;
    });

    const handleClick = () => {
      i.current++;
      i.current >= images.current.length ? (i.current = 0) : null;
      console.log(i.current);

      const curImg = images.current[i.current];

      let imgWidth = curImg.width / 4;
      let imgHeight = curImg.height / 4;

      if (curImg.complete) {
        ctx.drawImage(
          curImg,
          aimX.current - imgWidth / 2,
          aimY.current - imgHeight / 2,
          imgWidth,
          imgHeight
        );
      }
    };

    const handleMouseMove = (event) => {
      aimX.current = event.pageX;
      aimY.current = event.pageY;

      if (curX.current === null) {
        curX.current = event.pageX;
        curY.current = event.pageY;
      }
    };

    canvas.addEventListener("click", handleClick);

    document.addEventListener("mousemove", (event) => {
      handleMouseMove(event);
    });

    document.addEventListener("mousedown", () => {
      isDragging.current = true;
    });

    document.addEventListener("mouseup", () => {
      isDragging.current = false;
    });

    const draw = () => {
      const curImg = images.current[i.current];

      let imgWidth = curImg.width / 4;
      let imgHeight = curImg.height / 4;

      console.log(isDragging.current);

      if (curX.current) {
        if (curImg.complete) {
          ctx.drawImage(
            curImg,
            aimX.current - imgWidth / 2,
            aimY.current - imgHeight / 2,
            imgWidth,
            imgHeight
          );
        }
        curX.current = curX.current + (aimX.current - curX.current) * 0.3;
        curY.current = curY.current + (aimY.current - curY.current) * 0.3;
      }

      requestAnimationFrame(draw);
    };

    return()=>{
        canvas.removeEventListener("click", handleClick);

        document.removeEventListener("mousemove", (event) => {
          handleMouseMove(event);
        });
    }

  }, [needsClear, setNeedsClear]);

  return (
    <div className={styles.collageContainer}>
      <canvas className={styles.canvas} ref={canvasRef}></canvas>
    </div>
  );
}

export default Collage;
