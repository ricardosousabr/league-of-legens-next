import renderer from "react-test-renderer";
import Button from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Button onClick={() => console.log("Hello")} type="button">Click</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
