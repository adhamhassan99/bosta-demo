import BrandLogo from "./BrandLogo";
import DropdownNavLink from "./DropdownNavLink";
import OutlineBtn from "./OutlineBtn";
import TextBtn from "./TextBtn";

const NavBar = () => {
  const links = [
    {
      title: "Products",
      subItems: ["Solutions", "Dashboard", "Mobile App"],
    },
    {
      title: "Integrations",
      subItems: ["Shopify", "WooCommerce", "Custom APIs"],
    },
    {
      title: "Use Cases",
      subItems: ["Businesses", "SMEs"],
    },

    {
      title: "Pricing",
      onPress: () => console.log("first"),
    },

    {
      title: "Blog",
      onPress: () => console.log("first"),
    },
  ];
  return (
    <div className="bg-white px-14 flex items-center">
      <BrandLogo />
      <div className="flex-1 flex justify-center">
        {links.map((item) => (
          <DropdownNavLink {...item} />
        ))}
      </div>
      <div className="flex gap-10">
        <TextBtn title="Sign In" />
        <OutlineBtn
          aria-description="Sign up button"
          title="Sign Up"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default NavBar;
