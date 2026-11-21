/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 * images 支持相对 src 的本地路径；videos 支持 bilibili（填 bvid）与 mp4 直链。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "初识航模",
		date: "2019",
		category: "journey",
		description: "第一次接触航空模型，从此对天空念念不忘。",
		images: [
			"assets/images/timeline/img1.jpg",
			"assets/images/timeline/img2.jpg",
			"assets/images/timeline/img3.jpg",
		],
		icon: "material-symbols:flight-rounded",
	},
	{
		title: "迈入 FPV：第一台穿越机",
		date: "2020",
		category: "journey",
		description: "入手 LDARC Tiny R7，正式踏入 FPV 穿越机的世界。",
		images: ["assets/images/timeline/tiny-r7.jpg"],
		icon: "material-symbols:toys-rounded",
	},
	{
		title: "第一条 FPV 视频发布",
		date: "2020.09.26",
		category: "journey",
		description: "第一次把 FPV 飞行视频发到了朋友圈。",
		videos: [{ type: "mp4", src: "/assets/videos/fpv-first-video.mp4" }],
		icon: "material-symbols:videocam-rounded",
	},
	{
		title: "首次获奖",
		date: "2021.07.24",
		category: "competition",
		description: "第一次在比赛中拿到奖金——400 元，信心倍增。",
		images: [
			"assets/images/timeline/img4.jpg",
			"assets/images/timeline/img5.jpg",
			"assets/images/timeline/img6.jpg",
		],
		icon: "material-symbols:trophy-rounded",
	},
	{
		title: "国家队选拔赛 11th",
		date: "2023.04",
		category: "competition",
		description: "选拔赛排名第 11，差一步进国家队。",
		images: ["assets/images/timeline/img7.jpg"],
		videos: [{ type: "bilibili", src: "BV1Ys4y1P73g" }],
		icon: "material-symbols:sports-score-rounded",
	},
	{
		title: "国青赛团体第二",
		date: "2023.08.03",
		category: "honor",
		description: "拿下团体第二名，并获得国家二级运动员证书。",
		icon: "material-symbols:military-tech-rounded",
	},
	{
		title: "入选国家队",
		date: "2024.05",
		category: "honor",
		description: "选拔赛第 6 名，成功进入国家队，同时获得国家一级运动员证书。",
		images: ["assets/images/timeline/img8.jpg"],
		videos: [{ type: "bilibili", src: "BV1Sx4y1E7zd" }],
		featured: true,
	},
	{
		title: "FAI WDRC 世界赛 24th",
		date: "2024.11",
		category: "honor",
		description: "首次站上 FAI 世界无人机竞速锦标赛（WDRC）的舞台，个人第 24 名，收获第一个“世界排名”。",
		images: [
			"assets/images/timeline/img9.jpg",
			"assets/images/timeline/img10.jpg",
			"assets/images/timeline/img11.jpg",
		],
		videos: [{ type: "bilibili", src: "BV1TxDqYEE4z" }],
		featured: true,
	},
	{
		title: "暂别 FPV",
		date: "2025.07 – 至今",
		category: "pause",
		description: "高中学业渐忙，飞行的脚步暂时放慢——天空会一直都在。",
		icon: "material-symbols:pause-circle-outline-rounded",
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
