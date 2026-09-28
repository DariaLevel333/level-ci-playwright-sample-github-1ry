import type { Config } from "@level-ci/cli";

export default {
 organization: 
 project: 
 token: process.env.LEVEL_CI_TOKEN,
 server: "https://api.dev.userway.dev",
 reportPaths: ['./level-ci-reports']
} satisfies Config;