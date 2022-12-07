import { screen, render } from "@testing-library/react";
import Cards from "../components/Cards";
import Home from "../components/Home";
import LeftBlock from "../components/LeftBlock";
import NewsFeedBlock from "../components/NewsFeedBlock";
import RightBlock from "../components/RightBlock";

describe("Home Component", () => {
  it("should render Home component", () => {
    render(<Home />);
  });

  it("should render LeftBlock component", () => {
    render(<LeftBlock />);
  });

  it("should render RightBlock component", () => {
    render(<RightBlock />);
  });

  it("should render NewsFeed component", () => {
    render(<NewsFeedBlock />);
  });

  it("should render Cards component with props", () => {
    render(<Cards userName="Ranganath" image="image.jpg" />);
    expect(screen.getByTestId("userName")).toHaveTextContent("Ranganath");
  });
});
