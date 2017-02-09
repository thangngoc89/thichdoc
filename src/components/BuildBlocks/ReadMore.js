import React, { PureComponent, PropTypes } from "react";
import prune from "../../helpers/prune";

class ReadMore extends PureComponent {
  constructor(...args) {
    super(...args);

    this.state = {
      expanded: false
    };

    this.toggleLines = this.toggleLines.bind(this);
  }

  toggleLines(event) {
    event.preventDefault();

    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const {
      text,
      more,
      less,
      length
    } = this.props;

    const {
      expanded
    } = this.state;

    const truncatedText = prune(text, length);
    if (text.length <= length) {
      return <span>{text}</span>;
    } else if (expanded) {
      return (
        <span>
          {text}
          {" "}
          <a
            href="#"
            className="b black link fs-normal"
            onClick={this.toggleLines}
          >
            {less}
          </a>
        </span>
      );
    }
    return (
      <span>
        {truncatedText}
        {" "}
        <a
          href="#"
          className="b black link fs-normal"
          onClick={this.toggleLines}
        >
          {more}
        </a>
      </span>
    );
  }
}

ReadMore.defaultProps = {
  length: 300,
  more: "Xem thêm",
  less: "Xem ít hơn"
};

ReadMore.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number
};

export default ReadMore;
