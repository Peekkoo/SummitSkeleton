import type { APIRoute } from 'astro';
import { genkit, z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

type GeneratedQuestion = {
    prompt: string;
    detail: string;
    correctAnswer: string;
    distractors: string[];
    explanation: string;
};

const fallbackQuestion = (topic: string): GeneratedQuestion => ({
    prompt: `Which study habit best helps you learn ${topic}?`,
    detail: 'Use active recall instead of only rereading notes.',
    correctAnswer: 'Answering questions from memory, then checking your work',
    distractors: [
        'Only rereading the same paragraph several times',
        'Skipping feedback after a mistake',
        'Studying with every notification turned on',
    ],
    explanation: 'Active recall strengthens memory because it asks your brain to retrieve the idea before you review it.',
});

const GeneratedQuestionSchema = z.object({
    prompt: z.string().min(12).describe('The multiple-choice question prompt.'),
    detail: z.string().min(10).describe('A short hint or context sentence shown below the prompt.'),
    correctAnswer: z.string().min(1).describe('The one correct answer.'),
    distractors: z.array(z.string().min(1))
        .length(3)
        .describe('Exactly three plausible but incorrect answer choices.'),
    explanation: z.string().min(10).describe('A concise explanation of why the correct answer is right.'),
});

const ai = genkit({
    plugins: [googleAI()],
});

export const POST: APIRoute = async ({ request }) => {
    const { topic = 'general knowledge' } = await request.json().catch(() => ({}));
    const cleanTopic = String(topic).slice(0, 80) || 'general knowledge';
    console.log('GEMINI_API_KEY:', import.meta.env.GEMINI_API_KEY);
    console.log('GOOGLE_API_KEY:', import.meta.env.GOOGLE_API_KEY);
    const apiKey = import.meta.env.GEMINI_API_KEY;
    const model = import.meta.env.QUESTION_MODEL ?? 'gemma-3-27b-it';

    if (!apiKey) {
        return Response.json({ ok: true, source: 'fallback', question: fallbackQuestion(cleanTopic) });
    }

    const prompt = [
        'Create one multiple-choice study question.',
        `Topic: ${cleanTopic}`,
        'The question should be useful for a middle or high school learner.',
        'Make the distractors plausible but clearly incorrect.',
    ].join('\n');

    try {
        const response = await ai.generate({
            model: googleAI.model(model),
            system: 'You write accurate, age-friendly quiz questions. Return valid JSON only.',
            prompt,
            output: {
                schema: GeneratedQuestionSchema,
            },
            config: {
                apiKey,
                temperature: 0.7,
            },
        });

        const question = response.output;
        return Response.json({
            ok: true,
            source: question ? 'api' : 'fallback',
            question: question ?? fallbackQuestion(cleanTopic),
        });
    } catch (err) {
        console.error('AI question generation failed:', err);
        return Response.json({ ok: true, source: 'fallback', question: fallbackQuestion(cleanTopic) });
    }
};
