/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "redmi-k80-pro",
		name: "REDMI K80 Pro",
		brand: "Redmi",
		category: "mobile",
		status: "active",
		specs: "雪岩白 / 骁龙8 Elite / 16+512",
		description: "除了烫手都是宝，下一代钉子户",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2024",
	},
	{
		id: "mechrevo-jiaolong-16-pro-2025",
		name: "MECHREVO Jiaolong 16 Pro 2025",
		brand: "机械革命",
		category: "desk",
		status: "active",
		specs: "R9-7845HX / RTX 5070 / 32+1T",
		description: "U拉了",
		icon: "material-symbols:laptop-mac-rounded",
		featured: true,
		year: "2025",
	},
	{
		id: "xiaomi-pad-8-pro",
		name: "Xiaomi Pad 8 Pro",
		brand: "Xiaomi",
		category: "mobile",
		status: "active",
		specs: "柔光屏 / 柔雾蓝 / 骁龙8 Elite / 12+256",
		description: "下一代耐刷王",
		icon: "material-symbols:tablet-mac-rounded",
		featured: true,
		year: "2025",
	},
	{
		id: "xiaomi-watch-5",
		name: "Xiaomi Watch 5",
		brand: "Xiaomi",
		category: "mobile",
		status: "active",
		specs: "骁龙 W5 / Android 14（WearOS 5）/ 绿",
		description: "摸鱼必备神器",
		icon: "material-symbols:watch-rounded",
		featured: true,
		year: "2025",
	},
	{
		id: "redmi-buds-8-pro",
		name: "REDMI Buds 8 Pro",
		brand: "Redmi",
		category: "audio",
		status: "active",
		specs: "蓝",
		description: "一代神机",
		icon: "material-symbols:headphones-rounded",
		year: "2026",
	},
];
