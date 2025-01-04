import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu as HeadlessMenu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { LuGlobe, LuLayoutDashboard, LuTheater, LuUsers } from "react-icons/lu";
import { MdOutlineEvent } from "react-icons/md";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { BiCameraMovie } from "react-icons/bi"

const { Sider, Content, Header } = Layout;

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const items = [
  getItem("Overview", "/dashboard", <LuLayoutDashboard className="w-4"/>),
    getItem("Users Mgt", "/user-mgt",<LuUsers className="w-4"/>),
    getItem("Theatre Mgt", "/theatre-mgt",<LuTheater className='w-4'/>),
    getItem("Event Mgt", "/event-management", <MdOutlineEvent className="w-4"/>),
  getItem("Movie Mgt", "/movie-management",<BiCameraMovie className='w-4'/>),
  getItem("Theatre Admin Mgt", "/theatre-admin",<LuTheater className='w-4'/>),
];
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e) => navigate(e.key);

  const handleResize = () => {
    setCollapsed(window.innerWidth < 1020);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [adminUsername, setAdminUsername] = useState("");

  useEffect(() => {
   const adminData = JSON.parse(localStorage.getItem("admin"));

    if (adminData && adminData.adminemail) {
      setAdminUsername(adminData.adminemail);
    }else{
      window.location.href ="/sign-in"
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/";
  };
  return (
    <>
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="bg-[#40176c] fixed left-0 top-0 bottom-0"
        width={250}
        style={{ zIndex: 1000 }}
      >
        <div className="p-4 flex items-center text-xl font-bold">
          <span className="text-white text-2xl">CINCO</span>
        </div>
        <Menu
          theme="dark"
          className="bg-[#40176c]"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? 80 : 250 }}>
        <Header
          className="bg-white fixed top-0 left-0 right-0 flex items-center w-full"
          style={{ zIndex: 900, paddingLeft: collapsed ? 80 : 250 }}
        >
          <div className="flex justify-end items-center w-full">
            <div></div>
            <div className="flex gap-3">
              <div className="icon-container">
                <LuGlobe/>
              </div>
              <div className="icon-container">
                <IoNotificationsCircleOutline/>
              </div>
            </div>
            <HeadlessMenu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 ml-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <div>
                  {adminUsername ? (
                    <h3>Welcome, {adminUsername}!</h3>
                  ) : (
                    <h3>Welcome, Admin!</h3>
                  )}
                </div>
                {/* <h1>Welcome</h1> */}
                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </MenuButton>
              <MenuItems
                className="absolute z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                <div>
                  <MenuItem>
                    {({ active }) => (
                      <button
                        type="button"
                        className={`block px-4 py-2 text-left text-sm ${active ? "bg-gray-100 text-gray-900" : "text-gray-700"}`}
                      onClick={handleLogout}>
                        Sign out
                      </button>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </HeadlessMenu>
          </div>
        </Header>
        <Content className="p-3" style={{ marginTop: 64 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    </>
  )
}

export default DashboardLayout