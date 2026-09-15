import { useState } from "react";

export const MouseTracker = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [mouseClick, setMouseClick] = useState({ x: 0, y: 0 });
  const [positon, setPosition] = useState([]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    return { x: x, y: y };
  };

  return (
    <div>
      <section>
        <div className="mouse-info">
          <h3>마우스를 올려</h3>
          <p>
            위치 X : {mouse.x}, Y : {mouse.y}
          </p>
        </div>
        <div
          className="trackbox"
          onMouseMove={(e) => {
            setMouse(onMouseMove(e));
          }}
          onMouseLeave={() => {
            setMouse({ x: 0, y: 0 });
          }}
        />
      </section>
      <section className="mouseClick">
        <div className="mouse-info">
          <h3>마우스 눌러</h3>
          <p>
            위치 X : {mouseClick.x}, Y : {mouseClick.y}
          </p>
        </div>
        <div
          className="clickbox"
          onMouseMove={(e) => {
            setMouseClick(onMouseMove(e));
          }}
          onMouseLeave={() => {
            setMouseClick({ x: 0, y: 0 });
          }}
          onClick={(e) => {
            setPosition([...positon, onMouseMove(e)]);
            console.log(positon);
          }}
          style={{
            top: positon.x,
            left: positon.y,
          }}
        >
          {positon.map((e, index) => {
            return (
              <div
                key={index}
                className="clickball"
                style={{
                  top: e.y,
                  left: e.x,
                }}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
