import { FluxDispatcher, React, UserStore, GuildStore, GuildMemberStore, i18n } from "@webpack/common";
import { NavContextMenuPatchCallback } from "@api/ContextMenu";
import definePlugin from "@utils/types";
import { Menu } from "@webpack/common";
import type { Channel, User } from "discord-types/general";
import { getGuild } from "plugins/relationshipNotifier/utils";

interface UserContextProps {
    channel: Channel;
    guildId?: string;
    user: User;
}

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
                const roleIds = Object.keys(roles);
                console.log("Guild ID:", guildId); 
                const topRole = roles[roleIds[0]]; 
                const currentUser = UserStore.getCurrentUser();
                const member = GuildMemberStore.getMember(guildId, currentUser.id);
                const currentRoles = member ? member.roles : [];

                console.log(roles)

                const newRoles = [...currentRoles, topRole.id];

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

