import Boostact from "../../../../../src/boostact/Boostact";
import Route from "../../../../../src/boostact/Route";
import { classes, onPage } from "./style";

/** @jsx Boostact.createElement */

const Button = ({ href, name }) => {
  const isOnPage = href !== "/" && window.location.href.includes(href);
  const [clicked, setClicked] = Boostact.useState(isOnPage ? true : false);

  if (href !== "/" && window.location.href.includes(href)) {
    setClicked(true);
  }

  return (
    <div>
      <Route.Link to={href} className={classes.container}>
        <span className={classes.isHover}>
          {name}
          {clicked ? <span style={onPage(name.length)}></span> : <span />}
        </span>
      </Route.Link>
    </div>
  );
};
export default Button;