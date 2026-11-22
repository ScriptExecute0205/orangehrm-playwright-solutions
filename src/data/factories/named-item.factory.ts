import { faker } from "@faker-js/faker";
import { NamedItem } from "@app-types/named-item.type";
export const createNamedItem = (prefix:string,overrides:Partial<NamedItem>={}):NamedItem=>({
    Name:`${prefix} ${faker.string.alphanumeric(6)}`,
    ...overrides,
})