import { AiOutlineHome } from "react-icons/ai";
import { BsPatchQuestion, BsEyeglasses } from "react-icons/bs";
import { IoBusinessOutline } from "react-icons/io5";
import { GiGreenhouse, GiBlackBook } from "react-icons/gi";
import { MdOutlinePayments } from "react-icons/md";
import { FaIoxhost, FaRegUser } from "react-icons/fa";
import { FiSettings, FiUsers } from "react-icons/fi";
import { GrUserExpert } from "react-icons/gr";
const articles = [
  {
    id: 1,
    display_name: "Dashboard",
    route: "/dashboard",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    display_name: "Hosts",
    route: "/hosts",
    icon: <FaIoxhost />,
  },
  {
    id: 3,
    display_name: "Hosts Requests",
    route: "/hostsrequest",
    icon: <IoBusinessOutline />,
  },
  {
    id: 4,
    display_name: "Properties",
    route: "/properties",
    icon: <GiGreenhouse />,
  },

  {
    id: 5,
    display_name: "Payment",
    route: "/payments",
    icon: <MdOutlinePayments />,
  },
  {
    id: 6,
    display_name: "Bookings",
    route: "/bookings",
    icon: <GiBlackBook />,
  },
  {
    id: 7,
    display_name: "Enquiries",
    route: "/enquiries",
    icon: <BsPatchQuestion />,
  },
  {
    id: 8,
    display_name: "Staff",
    route: "/staff",
    icon: <FaRegUser />,
  },
  {
    id: 9,
    display_name: "Customers",
    route: "/customers",
    icon: <FiUsers />,
  },
  {
    id: 10,
    display_name: "Reviews",
    route: "/reviews",
    icon: <BsEyeglasses />,
  },
  {
    id: 11,
    display_name: "Settings",
    route: "/settings",
    icon: <FiSettings />,
  },
];
export default articles;
