import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroEstudio() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [estudios, setEstudios] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {
        const { getAttribute, value } = infosDoEvento.target;
        setValue(
            getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Estúdio de Animação: {values.nome}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setEstudios([
                    ...estudios,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                <FormField
                    label='Nome do Estúdio:'
                    type='text'
                    name='nome'
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label='Descrição:'
                    type='??'
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label='Cor:'
                    type='color'
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                />

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {estudios.map((estudio, indice) => {
                    return (
                        <li key={`${estudio}${indice}`}>
                            {estudio.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroEstudio;