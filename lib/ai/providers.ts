import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { xai } from '@ai-sdk/xai';
import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
      languageModels: {
        'chat-model': chatModel,
        'chat-model-reasoning': reasoningModel,
        'title-model': titleModel,
        'artifact-model': artifactModel,
      },
    })
  : customProvider({
      languageModels: {
        // XAI models
        'chat-model': xai('grok-2-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: xai('grok-3-mini-beta'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }),
        'title-model': xai('grok-2-1212'),
        'artifact-model': xai('grok-2-1212'),
        
        // OpenAI models
        'openai-gpt-4o': openai('gpt-4o'),
        'openai-gpt-4o-mini': openai('gpt-4o-mini'),
        
        // Anthropic model
        'anthropic-claude-3-7-sonnet': anthropic('claude-3-7-sonnet-20250219'),
      },
      imageModels: {
        'small-model': xai.image('grok-2-image'),
        'openai-dall-e-3': openai.image('dall-e-3'),
      },
    });
