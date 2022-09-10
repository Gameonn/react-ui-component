import Button from "./Button";
import { FlexboxGrid, Divider, Col } from "rsuite";
import { nanoid } from "nanoid";

let styleObj = {
  display: "block",
  height: "40px",
  marginTop: "10px",
};
const variantTypes = ["normal", "outline", "bold", "text"];
const colorTypes = ["default", "primary", "danger", "warning"];
const sizeTypes = ["xs", "sm", "md", "lg"];
const startIconTypes = ["home", "bookmarks", "bolt", "book"];
const endIconTypes = ["toys", "whatshot", "weekend", "vignette"];

const Main = () => {
  return (
    <div>
      <h4>Buttons</h4> <br />
      <div className="show-grid" style={{ textAlign: "center" }}>
        <b> Normal </b>
        <FlexboxGrid justify="space-around">
          {variantTypes.map((type) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}> {`<Button variant="${type}" />`} </small>
              <Button variant={type} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>

        <Divider />
        <b> Colors </b>
        <FlexboxGrid justify="space-around">
          {colorTypes.map((type) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}> {`<Button color="${type}" />`} </small>
              <Button color={type} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b> Size </b>
        <FlexboxGrid justify="space-around">
          {sizeTypes.map((type) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}> {`<Button size="${type}" />`} </small>
              <Button size={type} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Icons (Start Icon)</b>
        <FlexboxGrid justify="space-around">
          {startIconTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button startIcon="${type}" color="${colorTypes[i]}" />`}
              </small>
              <Button startIcon={type} color={colorTypes[i]} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Icons (End Icon)</b>
        <FlexboxGrid justify="space-around">
          {endIconTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button endIcon="${type}" color="${colorTypes[i]}" />`}
              </small>
              <Button endIcon={type} color={colorTypes[i]} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Outline colors</b>
        <FlexboxGrid justify="space-around">
          {colorTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button variant="outline" color="${type}" />`}
              </small>
              <Button color={type} variant="outline" />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Text colors</b>
        <FlexboxGrid justify="space-around">
          {colorTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button variant="text" color="${type}" />`}
              </small>
              <Button color={type} variant="text" />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Bold colors</b>
        <FlexboxGrid justify="space-around">
          {colorTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button variant="bold" color="${type}" />`}
              </small>
              <Button color={type} variant="bold" />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Disabled</b>
        <FlexboxGrid justify="space-around">
          {colorTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button disabled color="${type}" />`}
              </small>
              <Button color={type} disabled />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Text Disabled</b>
        <FlexboxGrid justify="space-around">
          {colorTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button disabled variant="text" color="${type}" />`}
              </small>
              <Button color={type} variant="text" disabled />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Disable Shadow</b>
        <FlexboxGrid justify="space-around">
          {colorTypes.map((type, i) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small style={styleObj}>
                {`<Button disableShadow color="${type}" />`}
              </small>
              <Button color={type} disableShadow />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
      </div>
    </div>
  );
};

export default Main;
