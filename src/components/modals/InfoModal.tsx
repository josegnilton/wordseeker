import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivinhe a palavra em até 7 tentativas. Após cada tentativa, a cor da letra irá mudar para mostrar o quão perto você está de adivinhar a palavra. 
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="A" />
        <Cell value="B"
          isRevealing={true}
          isCompleted={true}
          status="correct" />
        <Cell value="E" />
        <Cell value="L" />
        <Cell value="H" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra B, indicada com a cor verde, está presente na palavra e na posição correta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="R" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="I"
          status="present"
        />
        <Cell value="N" />
        <Cell value="C" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      A letra I, indicada com a cor amarela, está presente na palavra, porém na posição incorreta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="R" />
        <Cell value="I" />
        <Cell value="N" />
        <Cell isRevealing={true} isCompleted={true} value="D" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      A letra D não está presente na palavra.
      </p>
      <br />
      <hr className='pb-1' />
      
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Os acentos são preenchidos de maneira automática e não são considerados nas dicas.
      </p>
      <br />

      <p className="text-sm text-gray-500 dark:text-gray-300">
      As palavras podem possuir letras repetidas.
      </p>
      <br />

      <p className="text-sm text-gray-500 dark:text-gray-300">
      Todo dia uma nova palavra :)
      </p>

     

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Essa é uma versão open-source do jogo de caça-palavras que tanto amamos
         -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          Confira o código aqui.
        </a>{' '}
      </p>
    </BaseModal>
  )
}
