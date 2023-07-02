import AboutIcon from "@/icons/AbountIcon";
import HomeIcon from "@/icons/HomeIcon";
import ListIcon from "@/icons/ListIcon";
import MicroIcon from "@/icons/MicroIcon";

const Sidebar = () => {
  return (
    <div className="lg:block">
      <ul>
        <li className="p-3 rounded-lg hover:bg-indigo-100 hover:underline hover:cursor-pointer">
          <div className="flex item-center gap-3">
            <HomeIcon />
            <span>Home</span>
          </div>
        </li>

        <li className="p-3 rounded-lg hover:bg-indigo-100 hover:underline hover:cursor-pointer">
          <div className="flex item-center gap-3">
            <ListIcon />
            <span>Reading List</span>
          </div>
        </li>
        <li className="p-3 rounded-lg hover:bg-indigo-100 hover:underline hover:cursor-pointer">
          <div className="flex item-center gap-3">
            <MicroIcon />
            <span>Guides</span>
          </div>
        </li>
        <li className="p-3 rounded-lg hover:bg-indigo-100 hover:underline hover:cursor-pointer">
          <div className="flex item-center gap-3">
            <AboutIcon />
            <span>About</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
