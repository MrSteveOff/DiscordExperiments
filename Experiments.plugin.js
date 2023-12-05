/**
 * @name DiscordExperiments
 * @author MrSteve
 * @authorId 1146353576688492675
 * @version 1.0.0
 * @description Enables Discord Experiments
 * @source 
 * @updateUrl 
 */

module.exports = class DiscordExperiments {
    load() {}

    start = () => {
      let cache; webpackChunkdiscord_app.push([["wp_isdev_patch"], {}, r => cache=r.c]);
      var UserStore = Object.values(cache).find(m => m?.exports?.default?.getUsers).exports.default;
      var actions = Object.values(UserStore._dispatcher._actionHandlers._dependencyGraph.nodes);
      var user = UserStore.getCurrentUser();
      actions.find(n => n.name === "ExperimentStore").actionHandler.CONNECTION_OPEN({
	type: "CONNECTION_OPEN", user: {flags: user.flags |= 1}, experiments: [],});

      actions.find(n => n.name === "DeveloperExperimentStore").actionHandler.CONNECTION_OPEN();
      webpackChunkdiscord_app.pop(); user.flags &= ~1; "done";
    }

    stop = () => {}
}