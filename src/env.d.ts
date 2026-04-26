/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly GEMINI_API_KEY?: string;
    readonly QUESTION_MODEL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

