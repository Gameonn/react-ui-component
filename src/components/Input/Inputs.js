import Input from "./Input";
import { FlexboxGrid, Divider, Col } from "rsuite";
import { nanoid } from "nanoid";

const sizeTypes = ["xs", "sm", "md", "lg"];
// const startIconTypes = ["home", "bookmarks", "bolt", "book"];
// const endIconTypes = ["toys", "whatshot", "weekend", "vignette"];

const Inputs = () => {
  return (
    <div>
      <h4 className="heading">INPUTS</h4> <br />
      <div className="show-grid">
        <b> Normal </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12} key={nanoid()}>
            <small> {`<Input />`} </small>
            <Input />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12} key={nanoid()}>
            <small> {`<Input focus />`} </small>
            <Input focus />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12} key={nanoid()}>
            <small> {`<Input error />`} </small>
            <Input error />
          </FlexboxGrid.Item>
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
              <small> {`<Input size="${type}" />`} </small>
              <Input size={type} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b> Helper Text </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12}>
            <small> {`<Input helperText="Sample Text" />`} </small>
            <Input helperText="Sample Text" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12}>
            <small> {`<Input helperText="Sample Text" />`} </small>
            <Input helperText="Sample Text" error />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
      </div>
    </div>
  );
};

export default Inputs;
