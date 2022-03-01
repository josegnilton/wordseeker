export const GAME_TITLE = 'Word Seeker'

export const WIN_MESSAGES = ['Parabéns!', 'Perfeito!', 'Você Conseguiu!']
export const GAME_COPIED_MESSAGE = 'Jogo copiado'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras Insuficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não Encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'O modo difícil só pode ser ativado no começo!'
export const HARD_MODE_DESCRIPTION =
  'Todas as dicas reveladas precisam estar na próxima tentativa'
export const HIGH_CONTRAST_MODE_DESCRIPTION =
  'Para auxiliar no contraste de cores'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `A palavra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Você precisa usar ${guess} na ${position} correta`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Sua tentativa precisa conter ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de Tentativas'
export const NEW_WORD_TEXT = 'Nova palavra em'
export const SHARE_TEXT = 'Compartilhar'
export const TOTAL_TRIES_TEXT = 'Total de Tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de Sucesso'
export const CURRENT_STREAK_TEXT = 'Acertos em Sequência'
export const BEST_STREAK_TEXT = 'Melhor Sequência'
