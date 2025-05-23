/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { resolvePackagePath } from '@backstage/backend-plugin-api';
import { Knex } from 'knex';
import { DB_MIGRATIONS_TABLE } from './tables';

export const migrationsDir = resolvePackagePath(
  '@backstage/backend-defaults',
  'migrations/scheduler',
);

export async function migrateBackendTasks(knex: Knex): Promise<void> {
  await knex.migrate.latest({
    directory: migrationsDir,
    tableName: DB_MIGRATIONS_TABLE,
  });
}
