import React, { memo, useState, useEffect, useRef } from "react";
import styles from "./Collage.module.css";

function Collage() {
  const canvasRef = useRef(null);
  const aimX = useRef(null); //store position of mouse
  const aimY = useRef(null);
  const curX = useRef(null); //store position of image for delay
  const curY = useRef(null);
  const i = useRef(0);
  const images = useRef(null)

images.current = [
    "../../content/collageImg/Frame1.jpg",
    "../../content/collageImg/Frame3.jpg",
    "../../content/collageImg/Frame4.jpg",
    "../../content/collageImg/Frame5.jpg",
  ].map((src) => {
    return React.createElement("img", { src : src}, null);
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;

    const ctx = canvas.getContext("2d");
    ctx.scale(2, 2);

    console.log(images.current)

    canvas.addEventListener("click", () => {
      i.current++;
      i.current >= images.current.length ? (i.current = 0) : null;
      console.log(i.current);

        ctx.drawImage(images.current[i.current], 300, 300, 400, 400)
      
    });


    canvas.addEventListener("mousemove", (event)=>{
        aimX.current = event.pageX
        aimY.current = event.pageY

        if (curX.current === null){
            curX.current = event.pageX
            curY.current = event.pageY
        }
    })

  }, []);

  const draw = () => {
    let imgWidth = images[i.current].width;
    let imgHeight = images[i.current].height;

    // if (curX.current){
    //             context.drawImage(images[i], curX - (imgWidth/2), curY - imgHeight/2, imgWidth, imgHeight);
    //     curX = curX + (aimX - curX) * 0.03
    //     curY = curY + (aimY - curY) * 0.03

    // }


    // requestAnimationFrame(draw)
  };

  return (
    <div className={styles.collageContainer}>
      <canvas className={styles.canvas} ref={canvasRef}></canvas>
    </div>
  );
}

export default Collage;
