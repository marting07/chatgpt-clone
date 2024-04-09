import React from "react";
import NewChatButton from "./NewChatButton";
import ListItem from "./ListItem";
import DeleteConversationsButton from "./DeleteConversationsButton";

const Sidebar = () => {
    return <div className="sidebar_container">
        <NewChatButton />
        <ListItem title='History 1' />
        <ListItem title='History 2' />
        <ListItem title='History 3' />
        <DeleteConversationsButton />
    </div>;
}

export default Sidebar;
