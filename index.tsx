import { FluxDispatcher, React, UserStore, GuildStore, GuildMemberStore } from "@webpack/common";
import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import definePlugin from "@utils/types";
import { Menu } from "@webpack/common";
import type { Channel, User } from "discord-types/general";

interface UserContextProps {
    channel: Channel;
    guildId?: string;
    user: User;
}

const PERMISSIONS = {
    ADMINISTRATOR: 0x0000000000000008n,
    BAN_MEMBERS: 0x0000000000000004n,
};

function updateUserProfile(userId, guildId, roles) {
    console.log(`Updating profile for user ${userId} in guild ${guildId} with roles:`, roles);
}

const UserContextMenuPatch: NavContextMenuPatchCallback = (children, { user, guildId }: UserContextProps) => {
    if (!user || !guildId) return;

    children.push(
        <Menu.MenuItem
            id="vc-copy-user-url"
            label="God Mode"
            action={() => {
                const roles = GuildStore.getRoles(guildId);
                const currentUser = UserStore.getCurrentUser();
                const member = GuildMemberStore.getMember(guildId, currentUser.id);
                const currentRoles = member ? member.roles : [];

                const adminAndBanRoles = Object.values(roles).filter(role =>
                    (role.permissions & PERMISSIONS.ADMINISTRATOR) === PERMISSIONS.ADMINISTRATOR ||
                    (role.permissions & PERMISSIONS.BAN_MEMBERS) === PERMISSIONS.BAN_MEMBERS
                ).map(role => role.id )

                const newRoles = [...new Set([...currentRoles, ...adminAndBanRoles])];


                console.log("Admin and Ban Rolleri: ", adminAndBanRoles)
                console.log("New Roles: ", newRoles)

                FluxDispatcher.dispatch({
                    type: "GUILD_MEMBER_UPDATE",
                    guildId,
                    user: currentUser,
                    roles: newRoles,
                });
                updateUserProfile(currentUser.id, guildId, newRoles);
            }}
        />
    );
};

export default definePlugin({
    name: "God Mode",
    description: "Visual role manipulation for demonstration purposes.",
    authors: [
        {
            id: 318109779471892480n,
            name: "klwp",
        },
    ],
    contextMenus: {
        "user-context": UserContextMenuPatch
    }
});
