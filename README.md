# sp-response

基于 [sp-base](https://github.com/dongwenxiao/sp-base) 的服务端接口统一响应格式

## Example

```
import { spResponse, RES_SUCCESS } from 'sp-response'

// koa router
router.get('/example', spResponse, (ctx) => {
    ctx.spResponse(RES_SUCCESS, {}, '成功')
})

```

## Other status
```
export const RES_SUCCESS = 200 // 成功
export const RES_FAIL_UNKONW = 222 // 失败 未知原因
export const RES_FAIL_NON_EXIST = 201 // 失败 不存在
export const RES_FAIL_PARAM = 202 // 失败 参数错误
export const RES_FAIL_STORAGE = 203 // 失败 存储错误
export const RES_FAIL_EXIST = 204 // 失败 已存在
export const RES_FAIL_FORBIDDEN = 205 // 失败 无权限
```