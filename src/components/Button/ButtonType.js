import Button from "./Button";
import { FlexboxGrid, Divider } from "rsuite";
import { nanoid } from "nanoid";

let styleObj = {
  display: "block",
  height: "40px"
};

const ButtonType = ({ title, types, set }) => {
  console.log(types[set], "types");
  let item = {};
  // let item = {`${set}`:"someString", "dynamicKey2":"someString"};
  return (
    <div>
      <b> {title} </b>
      <FlexboxGrid justify="space-around">
        {types[set].map(type => {
          item[set] = type;
          return (
            <FlexboxGrid.Item colspan={6} key={nanoid()}>
              <small style={styleObj}> {`<Button  />`} </small>
              <Button {...item} />
            </FlexboxGrid.Item>
          );
        })}
      </FlexboxGrid>

      <Divider />
    </div>
  );
};

export default ButtonType;
