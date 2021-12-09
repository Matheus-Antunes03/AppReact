import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Repository from "../Repository";

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storageRepository = localStorage.getItem(
            '@GitHubExplorer:repositories',
        );

        if(storageRepository) {
            return JSON.parse(storageRepository);
        }
        return[];
    });

    const handleAddRepository = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!newRepo) {
            setInputError("Digite um usuário/repositório para pesquisar.")
            return;
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`);
            const repository = response.data;

            setRepositories([...repositories, repository])
            setNewRepo('');
            setInputError('');

        } catch(err) {
            setInputError("Repositório não encontrado ou inexistente.");
        }
    }
    useEffect(() => {
        localStorage.setItem(
            '@GitHubExplorer:repositories',
            JSON.stringify(repositories)
        )
    }, [repositories]);

    return (
        <>
            <Title>Explore repositórios no GitHub</Title>
            <Form onSubmit={handleAddRepository}>
                <input
                    value = {newRepo}
                    onChange = {e => setNewRepo(e.target.value)}
                    placeholder = "Digite o nome do Repositório"
                />
                <button type = "submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}
            <Repositories>
                {repositories.map(repository => (
                    <Link to="#">
                        <img src={repository.owner.avatar_url} alt={repository.owner.login}></img>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20}/>
                    </Link>
                ))}
            </Repositories>
        </>
    );
}

export default Dashboard;