import { module } from 'angular';

import { CollapsibleSectionStateCache } from 'core/cache';

export class InsightFilterStateModel {
  public filtersExpanded: boolean;

  public constructor() {
    'ngInject';
    this.filtersExpanded =
      !CollapsibleSectionStateCache.isSet('insightFilters') ||
      CollapsibleSectionStateCache.isExpanded('insightFilters');
  }

  public pinFilters(shouldPin: boolean): void {
    this.filtersExpanded = shouldPin;
    CollapsibleSectionStateCache.setExpanded('insightFilters', shouldPin);
  }
}

export const INSIGHT_FILTER_STATE_MODEL = 'spinnaker.core.insight.insightFilterState.model';
module(INSIGHT_FILTER_STATE_MODEL, []).service('insightFilterStateModel', InsightFilterStateModel);
