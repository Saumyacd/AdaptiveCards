// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { HostContainer } from "../host-container";
import * as Adaptive from "adaptivecards";

export class DefaultContainer extends HostContainer {
    public renderTo(hostElement: HTMLElement) {
        hostElement.classList.add("card-frame");
        hostElement.appendChild(this.cardHost);
    }
    public initialize() {
        super.initialize();
        Adaptive.AdaptiveCard.actionTypeRegistry.unregisterType("Action.ToggleVisibility");
        Adaptive.AdaptiveCard.elementTypeRegistry.unregisterType("Media");
    }
}
