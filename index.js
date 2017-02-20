/**
 * 扩展ctx统一返回值的中级件
 *
 * @export
 * @param {any} ctx
 * @param {any} next
 * @returns
 */
export function spResponse(ctx, next) {
    if (!ctx.spResponse) {
        ctx.spResponse = (code = RES_SUCCESS, data = {}, msg = '') => {
            ctx.body = { code, data, msg }
        }
    }
    return next()
}

export const RES_SUCCESS = 200 // 成功
export const RES_FAIL_UNKONW = 222 // 失败 未知原因
export const RES_FAIL_NON_EXIST = 201 // 失败 不存在
export const RES_FAIL_PARAM = 202 // 失败 参数错误
export const RES_FAIL_STORAGE = 203 // 失败 存储错误
export const RES_FAIL_EXIST = 204 // 失败 已存在
export const RES_FAIL_FORBIDDEN = 205 // 失败 无权限