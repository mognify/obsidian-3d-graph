import { ButtonComponent } from "obsidian";
import { getMySwitcher } from "@/views/settings/categories/getMySwitcher";
import { Graph3dView } from "@/views/graph/Graph3dView";

export const UtilitySettingsView = async (containerEl: HTMLElement, view: Graph3dView) => {
  const plugin = view.plugin;

  const div = containerEl.createDiv();

  // set the containerEl to have flex col space 4px between items
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.gap = "4px";

  new ButtonComponent(div).setButtonText("Search").onClick(() => {
    const MySwitcher = getMySwitcher(view);

    if (MySwitcher === undefined) return;
    const modal = new MySwitcher(plugin.app, plugin);
    modal.open();
  });

  new ButtonComponent(div).setButtonText("Look at center").onClick(() => {
    // TODO: change all event to enum
    view.getForceGraph()?.interactionManager.cameraLookAtCenter();
  });

  new ButtonComponent(div).setButtonText("Remove selection").onClick(() => {
    view.getForceGraph()?.interactionManager.removeSelection();
  });
};
