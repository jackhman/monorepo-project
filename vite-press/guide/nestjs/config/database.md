# 链接数据库

首先安装`@nestjs/typeorm`数据库链接工具

```bash
pnpm add @nestjs/typeorm typeorm -S
```

在`/src/app.module.ts`中导入使用

```ts
import { TypeOrmModule } from "@nestjs/typeorm"
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql", // 链接的数据库类型 MySQL
      host: "127.0.0.1",
      port: 3306,
      username: "root", // 数据库用户名
      password: "123456", // 数据库密码
      database: "server-mysql", // 数据库名
      autoLoadEntities: true, // 自动加载Entities实例
      synchronize: true, // 是否序列化
      namingStrategy: new CustomNamingStrategy() // 启用驼峰命名
    }),
  ],
  providers: []
})
export class AppModule {}
```

:::tip

`new CustomNamingStrategy()`  启用驼峰命名是为了自动加载实例的时候，数据库中的字段名使用驼峰法，

- 比如`user.entiry.ts`中定义的字段名是`roleName`，通过调用该方法，数据库的字段名就会变成`role-name`；

- `@Entity("User")`定义数据库的表名，那么存入数据库的表名就是`user`

:::

:::tip 代码地址

`/src/utils/index.ts`

:::

```ts
import { DefaultNamingStrategy } from "typeorm"

/** 自定义数据库字段 */
export class CustomNamingStrategy extends DefaultNamingStrategy {
  // 用来修改表名，将大写变成小写
  tableName(targetName: string, userSpecifiedName: string): string {
    let getTableName = targetName
    getTableName = getTableName.replace(/\w{1}/, getTableName[0].toLowerCase())
    getTableName = getTableName.replace(/([A-Z])/g, "_$1").toLowerCase()
    return getTableName
  }
  // 用来修改字段名
  columnName(propertyName: string): string {
    return propertyName.replace(/([A-Z])/g, "_$1").toLowerCase()
  }
}
```
