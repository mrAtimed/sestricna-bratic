import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});
const footer = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});

const services = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
	}),
});

const slider = defineCollection(
{
	schema: z.object({
		sub: z.string(),
		title: z.string(),
		desc: z.string(),
		btn: z.string().optional(),
		link: z.string().optional(),
	})
}

)
export const collections = { blog , footer, services, slider};
