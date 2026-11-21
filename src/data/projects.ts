/**
 * 项目页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/projectsConfig.ts 控制。
 */
import type { ProjectItem } from "@/types/projectsConfig";

export const projectsData: ProjectItem[] = [
	{
		key: "shirone",
		title: "BrotherFPV-Blog",
		summary:
			"一个围绕 M3E 组件系统打造的 Astro 博客主题，注重内容表现力与流畅的客户端导航。",
		category: "theme",
		phase: "building",
		technologies: ["Astro", "Svelte", "TypeScript", "Tailwind CSS"],
		icon: "material-symbols:deployed-code-outline-rounded",
		cover: "/assets/projects/shirone.webp",
		coverAlt: "BrotherFPV 博客首页预览",
		featured: true,
		repository: "https://github.com/LyraVoid/Shirone",
		year: "2026",
	},
	{
		key: "teswear",
		title: "Teswear",
		summary:
			"一个运行在 WearOS 手表上的 Tesla 蓝牙钥匙。",
		category: "android",
		phase: "building",
		technologies: ["Tesla", "WearOS", "Android"],
		icon: "material-symbols:directions-car-rounded",
		featured: true,
		year: "2026",
	},
	{
		key: "notify-forwarder",
		title: "Notify Forwarder",
		summary:
			"运行在 WearOS 上的通知转发工具：将手机通知通过 Cloudflare Worker 推送至 WearOS 手表。",
		category: "android",
		phase: "shipped",
		technologies: ["WearOS", "Android", "Cloudflare Workers"],
		icon: "material-symbols:notifications-active-rounded",
		year: "2026",
	},
	{
		key: "wearksu",
		title: "WearKSU",
		summary:
			"利用 CVE-2026-43284 在 Xiaomi Watch 5 上提权至 root 的工具。",
		category: "android",
		phase: "building",
		technologies: ["WearOS", "Android", "Root"],
		icon: "material-symbols:terminal-rounded",
		year: "2026",
	},
	{
		key: "weardfroot",
		title: "WearDfRoot",
		summary:
			"利用 CVE-2026-43284 在 Xiaomi Watch 5 上提权至 root 的工具（DFRoot 方案）。",
		category: "android",
		phase: "building",
		technologies: ["WearOS", "Android", "Root", "DFRoot"],
		icon: "material-symbols:terminal-rounded",
		year: "2026",
	},
];

/** 获取所有项目数据列表 */
export function getProjectsList(): ProjectItem[] {
	return projectsData;
}
