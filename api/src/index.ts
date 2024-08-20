import Fastify from 'fastify';
import { Task, TaskStatusEnum } from './models/task';
import Dayjs from 'dayjs';

const fastify = Fastify({
	logger: true
});

fastify.get('/', async function handler(request, response) {
	let task: Task = {
		title: "Title Task!",
		status: TaskStatusEnum.TODO,
		dueDate: Dayjs(),
		isArchive: false,
	};
	return task;
});


async function initialize()
{
	try
	{
		await fastify.listen({ port: 3000 });
	} catch (err)
	{
		fastify.log.error(err);
		process.exit(1)
	}
}

initialize();
