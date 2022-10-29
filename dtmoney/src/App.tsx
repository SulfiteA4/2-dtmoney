import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root');

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){ //abre o modal
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){ // fecha o modal
        setIsNewTransactionModalOpen(false);
    }
		
	return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
			<Dashboard />
			<Modal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			>
				<h2>Cadastrar transação</h2>
			</Modal>
			<GlobalStyle />
		</>
	);
}

