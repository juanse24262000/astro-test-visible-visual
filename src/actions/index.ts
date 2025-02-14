import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    getGreeting: defineAction({
        input: z.object({
            name: z.string(),
        }),
        handler: async (input) => {
            console.log('Hello, ', input.name)
            return `Hello, ${input.name}!`
        }
    })
}
