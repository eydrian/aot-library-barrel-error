# AotBarrelIssue

- build library one: `ng build --project one --prod`
- run application: `npm start`
- remove extra `/index` in `projects/one/src/public-api.ts`
- rebuild library: `ng build --project one --prod`
- check output in e.g. `dist/one/lib/a-module/a.module.d.ts` all decorators will be gone
