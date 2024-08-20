import { Dayjs } from 'dayjs';

export enum TaskStatusEnum {
	TODO = 0,
	IN_PROGRESS = 1,
	DONE = 2,
	FAILED = 3
};

export type Task = {
	title: string;
	description?: string;
	status: TaskStatusEnum;
	isArchive: boolean;
	dueDate: Dayjs;
	duration?: number;
	complexity?: number;
	tags?: string[];
};

