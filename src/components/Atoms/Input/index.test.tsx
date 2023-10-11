import renderer from "react-test-renderer";
import Input from "./index";

test("Link renders correctly", () => {
  const tree = renderer.create(<Input type="submit" placeholder="Click aqui" value="Click" disabled={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
