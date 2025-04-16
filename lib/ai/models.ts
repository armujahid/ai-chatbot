export const DEFAULT_CHAT_MODEL: string = 'chat-model';

interface ChatModel {
  id: string;
  name: string;
  description: string;
  provider?: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Chat model',
    description: 'Primary model for all-purpose chat',
    provider: 'xai'
  },
  {
    id: 'chat-model-reasoning',
    name: 'Reasoning model',
    description: 'Uses advanced reasoning',
    provider: 'xai'
  },
  {
    id: 'openai-gpt-4o',
    name: 'GPT-4o',
    description: 'OpenAI\'s GPT-4o model',
    provider: 'openai'
  },
  {
    id: 'openai-gpt-4o-mini',
    name: 'GPT-4o Mini',
    description: 'OpenAI\'s smaller GPT-4o model',
    provider: 'openai'
  },
  {
    id: 'anthropic-claude-3-7-sonnet',
    name: 'Claude 3.7 Sonnet',
    description: 'Anthropic\'s latest Claude model',
    provider: 'anthropic'
  }
];
