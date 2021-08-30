import PropTypes from "prop-types";
import AddTaskBtn from "./AddTaskBtn";
const Header = ({ userName }) => {
  return (
    <div className="flex justify-center my-2">
      <div className="w-7/12 flex flex-col shadow-md bg-white rounded-md px-5 py-3">
        <div className="flex justify-center">
          <div>{userName}'s Todo List</div>
        </div>

        <AddTaskBtn />
      </div>
    </div>
  );
};

Header.defaultProps = {
  userName: "defaultUserName",
};

Header.prototypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
