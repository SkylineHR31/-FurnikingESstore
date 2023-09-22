import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export const buttonsGroupData = [
  {
    id: "1",
    badge: {
      isBadge: true,
      count: 2,
    },
    icon: ShoppingBagOutlinedIcon,
  },
  {
    id: "2",
    badge: {
      isBadge: true,
      count: 5,
    },
    icon: NotificationsNoneOutlinedIcon,
  },
  {
    id: "3",
    badge: {
      isBadge: false,
      count: 0,
    },
    icon: PersonOutlineOutlinedIcon,
  },
];
