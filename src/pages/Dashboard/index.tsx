import React from "react";
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <Title>Explore repositórios no GitHub</Title>
            <Form>
                <input placeholder = "Digite o nome do Repositório"/>
                <button type = "submit">Pesquisar</button>
            </Form>
            <Repositories>
                <Link to="#">
                    <img src="https://pbs.twimg.com/media/Ehbm9LpWoAECUjx.jpg" alt="Araki"></img>
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>maos para o alto caraiokk</p>
                        <button type="submit">Pesquisar</button>
                    </div>
                    <FiChevronRight/>
                </Link>
            </Repositories>
            <Repositories>
                <Link to="#">
                    <img src="https://pbs.twimg.com/media/Ehbm9LpWoAECUjx.jpg" alt="Araki"></img>
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>maos para o alto caraiokk</p>
                        <button type="submit">Pesquisar</button>
                    </div>
                    <FiChevronRight/>
                </Link>
            </Repositories>
            <div>
                <Link to="#">
                    <img src="https://pbs.twimg.com/media/Ehbm9LpWoAECUjx.jpg" alt="Araki"></img>
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>maos para o alto caraiokk</p>
                        <button type="submit">Pesquisar</button>
                    </div>
                    <FiChevronRight/>
                </Link>
            </div>
        </>
    );
}

export default Dashboard;