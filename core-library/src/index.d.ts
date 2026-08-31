// 插件壳类型声明（最小）
import type { Context } from '@deepseek-ai/cordis'

export declare const name: 'project-alignment'
export declare function apply(ctx: Context): void
// 测试与复用导出（与 index.js 对齐）
export declare function syncPreset(sourceRoot: string, targetRoot: string, id: string): void
export declare function resolveDshHomeForTest(env?: Record<string, string | undefined>, home?: string): string
