import BrandLogo from "./BrandLogo";
import DropdownNavLink from "./DropdownNavLink";

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
  ];
  return (
    <div className="bg-white px-14 flex items-center">
      <BrandLogo />
      <div className="flex-1 flex justify-center">
        {links.map((item) => (
          <DropdownNavLink {...item} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
