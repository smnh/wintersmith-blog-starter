import type { Model } from "@stackbit/types";
import { feed } from "./feed";
import { article } from "./article";
import { person } from "./person";
import { archive } from "./archive";

export const models: Model[] = [
    feed,
    article,
    person,
    archive
];
