import { InjectionToken } from "@angular/core";

export interface PageConfig {
    title: string;
}

const str  = "page.config";
export const PAGE_CONFIG = new InjectionToken<PageConfig>(str);
