import React from "react";
import { useContext } from "react";
import { getTrackBackground, Range } from "react-range";
import { ProductsContext } from "../../contexts/ProductsProvider";

const STEP = 0.1;
const MIN = 1;
const MAX = 2500;

const PriceRange = () => {
  const { newPrice, setNewPrice } = useContext(ProductsContext);
  return (
    <div className="mt-5">
      <div className="mb-7">
        <h1 className="text-lg font-medium text-gray-600 dark:text-gray-50 roboto-font">
          Price
        </h1>
        <p className="h-[2px] w-7 bg-red-500"></p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          draggableTrack
          values={newPrice}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            setNewPrice(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: newPrice,
                    colors: ["#ccc", "#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA",
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC",
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "20px" }} id="output">
          Price: ${Math.ceil(newPrice[0])} - ${Math.ceil(newPrice[1])}
        </output>
      </div>
    </div>
  );
};

export default PriceRange;
