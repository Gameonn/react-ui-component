import Input from "./Input";
import { FlexboxGrid, Divider, Col } from "rsuite";
import { nanoid } from "nanoid";

const sizeTypes = ["xs", "sm", "md", "lg"];
const startIconTypes = ["home", "bookmarks", "bolt", "book"];
const endIconTypes = ["toys", "whatshot", "weekend", "vignette"];

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
        <b>Icons (Start Icon)</b>
        <FlexboxGrid justify="space-around">
          {startIconTypes.map((type) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small> {`<Input startIcon="${type}" />`} </small>
              <Input startIcon={type} />
            </FlexboxGrid.Item>
          ))}
        </FlexboxGrid>
        <Divider />
        <b>Icons (End Icon)</b>
        <FlexboxGrid justify="space-around">
          {endIconTypes.map((type) => (
            <FlexboxGrid.Item
              as={Col}
              colspan={24}
              md={6}
              xs={12}
              key={nanoid()}
            >
              <small> {`<Input endIcon="${type}" />`} </small>
              <Input endIcon={type} />
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
            <Input helperText="Sample Error Text" error />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12}>
            <small> {`<Input helperText="some other Text" />`} </small>
            <Input helperText="some other Text" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
        <b> Full Width </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item as={Col} colspan={18}>
            <small> {`<Input fullWidth />`} </small>
            <Input fullWidth />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
        <b> Multiline </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item as={Col} colspan={12} md={6} xs={12}>
            <small> {`<Input multiline rows="5" />`} </small>
            <Input multiline rows="5" />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={12} md={6} xs={12}>
            <small> {`<Input multiline rows="3" />`} </small>
            <Input multiline rows="3" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
        <b> Disabled </b>
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12}>
            <small> {`<Input disabled />`} </small>
            <Input disabled />
          </FlexboxGrid.Item>
          <FlexboxGrid.Item as={Col} colspan={24} md={6} xs={12}>
            <small> {`<Input disableShadow />`} </small>
            <Input disableShadow />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Divider />
      </div>
    </div>
  );
};

export default Inputs;
