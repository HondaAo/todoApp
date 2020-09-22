import { __prod__ } from "./constance";
import { Post } from "./entities/Post";
import { MikroORM } from '@mikro-orm/core';
import path from 'path'
import { User } from "./entities/User";

export default {
    migrations:{
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post,User],
    dbName: 'firstDB',
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];