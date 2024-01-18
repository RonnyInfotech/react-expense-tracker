import React from 'react'
import { useState } from 'react';
import { ProSidebar, Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const LeftNav = () => {
    const [selected, setSelected] = useState("Dashboard");
    const [isCollapsed, setIsCollapsed] = useState(false);

    const Item = ({ title, to, icon, selected, setSelected }) => {
        return (
            <MenuItem
                active={selected === title}
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <p>{title}</p>
                {/* <Link to={to} /> */}
            </MenuItem>
        );
    };

    return (
        <Sidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
                {/* LOGO AND MENU ICON */}
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? "Home" : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                    }}
                >
                    {!isCollapsed && (
                        <div
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <p>
                                ADMINIS
                            </p>
                            <p onClick={() => setIsCollapsed(!isCollapsed)}>
                                <i class="fa fa-home" aria-hidden="true"></i>
                            </p>
                        </div>
                    )}
                </MenuItem>

                {!isCollapsed && (
                    <div mb="25px">
                        <div display="flex" justifyContent="center" alignItems="center">
                            <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={`../../assets/user.png`}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                        </div>
                        <div textAlign="center">
                            <p>
                                Ed Roh
                            </p>
                            <p>
                                VP Fancy Admin
                            </p>
                        </div>
                    </div>
                )}

                <div paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item
                        title="Dashboard"
                        to="/"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <p>
                        Data
                    </p>
                    <Item
                        title="Manage Team"
                        to="/team"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Contacts Information"
                        to="/contacts"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Invoices Balances"
                        to="/invoices"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <p>
                        Pages
                    </p>
                    <Item
                        title="Profile Form"
                        to="/form"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Calendar"
                        to="/calendar"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="FAQ Page"
                        to="/faq"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />

                    <p>
                        Charts
                    </p>
                    <Item
                        title="Bar Chart"
                        to="/bar"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Pie Chart"
                        to="/pie"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Line Chart"
                        to="/line"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Item
                        title="Geography Chart"
                        to="/geography"
                        icon={null}
                        selected={selected}
                        setSelected={setSelected}
                    />
                </div>
            </Menu>
        </Sidebar>
    )
}

export default LeftNav;