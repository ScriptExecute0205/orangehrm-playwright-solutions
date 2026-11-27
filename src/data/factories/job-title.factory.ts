import { jobTitle } from '@app-types/jobTitle.types';
import{faker} from '@faker-js/faker';

export const createJobTitle = (overrides: Partial<jobTitle> = {}) : jobTitle => ({
title: `${faker.person.jobTitle()} ${faker.string.alphanumeric(5)}`,
description: faker.lorem.sentence(),
...overrides,
});