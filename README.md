# God Mode 1.0 

![](https://cdn.discordapp.com/attachments/1159900363659432081/1242897691034386452/image-removebg-preview.png?ex=664f822d&is=664e30ad&hm=0ab9af79f9195a08ad924e7dcfd7a8753cea10bd497bdee0173adf97f99e91ec&)



### God Mode is a Vencord plugin that allows users to visually manipulate their role and authority on Discord servers. This is specifically designed for testing and demonstration use.

----

### Features
- The updateUserProfile function updates the user profile for a specific user and guild with new roles. This function logs the updated roles to the console.

- The UserContextMenuPatch function adds a new item to the right-click context menu. This item, labeled "God Mode", when selected, updates the users roles by adding a new role and logs the current guild ID and roles to the console.

- FluxDispatcher is used to dispatch actions that trigger state changes, such as updating user roles. This helps manage the application state centrally and ensures the user interface updates accordingly.

- The code utilizes GuildStore, UserStore, and GuildMemberStore to access current guild and user information. These stores provide and maintain up-to-date user and guild data.

- The menu item is created using React and Menu.MenuItem. This provides additional options in the right-click menu for user interaction.

- The definePlugin function is used to define the plugin. This function includes the plugins name, description, authors, and context menu patch. This structure allows for easy definition and management of the plugin.

- The plugin displays the users current roles and adds a new role. This can be used for testing or demonstration purposes by updating the user's permissions in the guild.


----
### Important Settings

**if you click on your own name after activating God Mode, God Mode will be deactivated. If you want to prevent it from deactivating, go in and out of user settings once.**

**To remove the green thing next to your name, go to settings, click on Edit QuickCSS in the themes section and type this code.**

```html
.guestSuffix_e55f97 {
    display: none !important;
}
```

----


### How to Install
Watch this: https://youtu.be/8wexjSo8fNw
https://github.com/Vendicated/Vencord

----









### Legal Implications

##### Depending on the jurisdiction and the specific use case, unauthorized access and manipulation of digital systems, including Discord servers, could potentially have legal ramifications. This is particularly relevant if the actions taken result in significant harm or data breaches.
----




